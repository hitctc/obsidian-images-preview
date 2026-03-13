import { Menu, Notice, type App, type Plugin, type WorkspaceWindow } from "obsidian";
import { t } from "../i18n";
import { InputAdapter } from "../input/input-adapter";
import { ImageTransformEngine } from "../core/image-transform-engine";
import { PreviewStateMachine } from "../core/preview-state-machine";
import { ClipboardService } from "../services/clipboard-service";
import { GalleryService } from "../services/gallery-service";
import { OverlayHost } from "../ui/overlay-host";
import {
  HotkeyModifier,
  PreviewMode,
  type ImageItem,
  type MountedPreview,
  type PluginSettings,
  type ToolbarAction,
  type TransformState
} from "../types";

/**
 * 每个预览实例的运行时信息。
 */
interface PreviewRuntime {
  id: string;
  doc: Document;
  sourceImage: HTMLImageElement;
  allItems: ImageItem[];
  activeIndex: number;
  stateMachine: PreviewStateMachine;
  detachInput: () => void;
  lastPointer: { x: number; y: number };
  openedAt: number;
  restoreBorder?: () => void;
}

/**
 * 预览控制器。
 */
export class PreviewController {
  // 普通模式下为“名称 + 固定工具栏”预留底部空间，避免高长图遮挡。
  private static readonly NORMAL_BOTTOM_RESERVE = 128;
  // 有画廊时额外预留一段高度，确保名称区域在工具栏与缩略图之上可见。
  private static readonly NORMAL_BOTTOM_RESERVE_WITH_GALLERY = 200;

  private readonly app: App;
  private readonly plugin: Plugin;
  private readonly getSettings: () => PluginSettings;

  private readonly clipboardService: ClipboardService;
  private readonly galleryService: GalleryService;

  private readonly hosts = new Map<Document, OverlayHost>();
  private readonly runtimes = new Map<string, PreviewRuntime>();
  private readonly pinQueue = new Map<Document, string[]>();
  private readonly boundDocs = new Set<Document>();

  private selector = "";

  /**
   * 构造控制器。
   */
  constructor(app: App, plugin: Plugin, getSettings: () => PluginSettings) {
    this.app = app;
    this.plugin = plugin;
    this.getSettings = getSettings;
    this.clipboardService = new ClipboardService(app);
    this.galleryService = new GalleryService(app);
    this.selector = this.galleryService.buildSelector(
      this.getSettings().triggerScope,
      this.getSettings().includeLinkedImages
    );
  }

  /**
   * 初始化文档监听。
   */
  public initialize(): void {
    this.attachToDocument(document);

    // 新窗口打开后补充监听，保证 popout 场景可用。
    this.plugin.registerEvent(
      this.app.workspace.on("window-open", (_win: WorkspaceWindow, win: Window) => {
        this.attachToDocument(win.document);
      })
    );

    // 布局变化后重新扫描，处理延迟挂载视图。
    this.plugin.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.attachToDocument(document);
        this.cleanupDisconnectedHosts();
      })
    );
  }

  /**
   * 模式切换时同步容器状态。
   */
  public syncMode(): void {
    this.closeAll();
  }

  /**
   * 刷新选择器规则。
   */
  public refreshSelectors(): void {
    const settings = this.getSettings();
    this.selector = this.galleryService.buildSelector(
      settings.triggerScope,
      settings.includeLinkedImages
    );
  }

  /**
   * 命令：在当前视图打开预览。
   */
  public async openPreviewAtActiveImage(): Promise<void> {
    const activeLeaf = this.app.workspace.activeLeaf;
    const container = activeLeaf?.view?.containerEl;
    if (!container) {
      new Notice(t("notice.noImage", this.app));
      return;
    }

    const candidate = container.querySelector<HTMLImageElement>(this.selector);
    if (!candidate) {
      new Notice(t("notice.noImage", this.app));
      return;
    }

    await this.openFromImage(candidate.ownerDocument, candidate);
  }

  /**
   * 命令：关闭当前预览。
   */
  public closeActivePreview(): void {
    const host = this.hosts.get(document);
    const active = host?.getActivePreview();
    if (!host || !active) {
      return;
    }
    this.closePreview(active.id);
  }

  /**
   * 命令：切换下一张。
   */
  public switchToNextImage(): void {
    const active = this.hosts.get(document)?.getActivePreview();
    if (!active) {
      return;
    }
    this.handleToolbarAction(active.id, "next");
  }

  /**
   * 命令：切换上一张。
   */
  public switchToPreviousImage(): void {
    const active = this.hosts.get(document)?.getActivePreview();
    if (!active) {
      return;
    }
    this.handleToolbarAction(active.id, "prev");
  }

  /**
   * 命令：切换模式。
   */
  public toggleMode(): PreviewMode {
    const settings = this.getSettings();
    settings.mode = settings.mode === PreviewMode.Normal ? PreviewMode.Pin : PreviewMode.Normal;
    this.syncMode();
    return settings.mode;
  }

  /**
   * 插件卸载前清理。
   */
  public destroy(): void {
    this.closeAll();
    this.hosts.forEach((host) => host.destroy());
    this.hosts.clear();
    this.pinQueue.clear();
    this.boundDocs.clear();
  }

  /**
   * 绑定 document 级事件。
   */
  private attachToDocument(doc: Document): void {
    if (this.boundDocs.has(doc)) {
      return;
    }

    this.boundDocs.add(doc);

    this.plugin.registerDomEvent(
      doc,
      "click",
      async (event: MouseEvent) => {
        const image = this.resolveImageFromMouseEvent(doc, event);
        if (!image) {
          return;
        }
        if (!this.isTargetImage(image)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        await this.openFromImage(doc, image);
      },
      true
    );

    this.plugin.registerDomEvent(doc, "mouseover", (event: MouseEvent) => {
      const image = (event.target as HTMLElement | null)?.closest("img") as HTMLImageElement | null;
      if (!image || !this.isTargetImage(image)) {
        return;
      }
      image.style.cursor = "zoom-in";
    });

    this.plugin.registerDomEvent(doc, "keydown", (event: KeyboardEvent) => {
      this.handleKeyDown(doc, event);
    });
  }

  /**
   * 从图片节点打开预览。
   */
  private async openFromImage(doc: Document, sourceImage: HTMLImageElement): Promise<void> {
    const settings = this.getSettings();
    const host = this.getOrCreateHost(doc);

    const collected = await this.galleryService.collectWithFallback(doc, sourceImage, settings);
    const allItems = collected.items.length
      ? collected.items
      : [
          {
            src: sourceImage.currentSrc || sourceImage.src,
            alt: sourceImage.alt || "",
            title: sourceImage.title || sourceImage.alt || "",
            index: 0,
            total: 1
          }
        ];

    const activeIndex = collected.activeIndex >= 0 ? collected.activeIndex : 0;
    const item = allItems[activeIndex] ?? allItems[0];

    if (settings.mode === PreviewMode.Pin) {
      const canOpen = this.enforcePinLimit(doc, host, settings);
      if (!canOpen) {
        return;
      }
    }

    const preview = host.openPreview({
      item,
      settings,
      mode: settings.mode,
      activeIndex,
      allItems,
      onToolbarAction: (previewId, action) => this.handleToolbarAction(previewId, action),
      onGallerySelect: (index) => this.handleGallerySelect(doc, index),
      onMaskClick: () => {
        if (this.getSettings().mode === PreviewMode.Normal) {
          this.closeAllInDoc(doc);
        }
      }
    });

    await this.initializePreviewRuntime(doc, preview, sourceImage, allItems, activeIndex);
  }

  /**
   * 初始化预览运行时（状态机 + 输入 + 初始布局）。
   */
  private async initializePreviewRuntime(
    doc: Document,
    preview: MountedPreview,
    sourceImage: HTMLImageElement,
    allItems: ImageItem[],
    activeIndex: number
  ): Promise<void> {
    const stateMachine = new PreviewStateMachine();
    stateMachine.open();

    const imageLoaded = await this.waitForImageLoad(preview.imageEl);
    if (!imageLoaded) {
      preview.imageEl.src = sourceImage.currentSrc || sourceImage.src;
    }

    const layout = this.getLayoutViewport(preview, doc, allItems.length);
    const initialState = ImageTransformEngine.createInitialState(
      preview.imageEl.naturalWidth || sourceImage.naturalWidth || 1,
      preview.imageEl.naturalHeight || sourceImage.naturalHeight || 1,
      layout.width,
      layout.height,
      layout.reservedBottom
    );

    this.getOrCreateHost(doc).applyState(preview.id, initialState);

    const input = new InputAdapter(doc, {
      onFocus: () => this.activatePreview(preview.id),
      onDragStart: (x, y) => this.onDragStart(preview.id, x, y),
      onDragMove: (x, y) => this.onDragMove(preview.id, x, y),
      onDragEnd: () => this.onDragEnd(preview.id),
      onWheelZoom: (delta, anchorX, anchorY) => this.onZoom(preview.id, delta, anchorX, anchorY),
      onPinchZoom: (ratio, anchorX, anchorY) => this.onZoom(preview.id, ratio, anchorX, anchorY),
      onDoubleTap: () => this.onDoubleTap(preview.id),
      onLongPressMenu: (x, y) => this.showContextMenu(preview.id, x, y)
    });

    const detachInput = input.bind(preview.imageEl);

    const runtime: PreviewRuntime = {
      id: preview.id,
      doc,
      sourceImage,
      allItems,
      activeIndex,
      stateMachine,
      detachInput,
      lastPointer: { x: 0, y: 0 },
      openedAt: Date.now(),
      restoreBorder: this.applySourceImageBorder(sourceImage)
    };

    this.runtimes.set(preview.id, runtime);

    if (this.getSettings().mode === PreviewMode.Pin) {
      this.pushPinQueue(doc, preview.id);
    }
  }

  /**
   * 处理工具栏动作。
   */
  private handleToolbarAction(previewId: string, action: ToolbarAction): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }

    const host = this.hosts.get(runtime.doc);
    const preview = host?.getPreview(previewId);
    if (!host || !preview) {
      return;
    }

    this.activatePreview(previewId);
    const state = preview.state;
    const layout = this.getLayoutViewport(preview, runtime.doc, runtime.allItems.length);

    const apply = (nextState: TransformState): void => {
      host.applyState(previewId, nextState);
    };

    switch (action) {
      case "zoom-in":
        apply(ImageTransformEngine.zoomAt(state, 1.1, this.getCenterAnchor(state)));
        break;
      case "zoom-out":
        apply(ImageTransformEngine.zoomAt(state, 0.9, this.getCenterAnchor(state)));
        break;
      case "zoom-100":
        apply(
          ImageTransformEngine.zoomToActual(
            state,
            layout.width,
            layout.height,
            layout.reservedBottom
          )
        );
        break;
      case "fit":
        apply(
          ImageTransformEngine.fitToViewport(
            state,
            layout.width,
            layout.height,
            layout.reservedBottom
          )
        );
        break;
      case "copy":
        void this.clipboardService.copyImageOrUrl(preview.imageEl);
        break;
      case "copy-name":
        void this.copyImageName(preview.captionEl.textContent ?? "");
        break;
      case "close":
        this.closePreview(previewId);
        break;
      case "next":
        this.switchImage(previewId, true);
        break;
      case "prev":
        this.switchImage(previewId, false);
        break;
      default:
        break;
    }
  }

  /**
   * 画廊点击切图。
   */
  private handleGallerySelect(doc: Document, index: number): void {
    const host = this.hosts.get(doc);
    const active = host?.getActivePreview();
    if (!host || !active) {
      return;
    }
    this.switchImageToIndex(active.id, index);
  }

  /**
   * 切换到指定索引。
   */
  private switchImageToIndex(previewId: string, index: number): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    if (runtime.allItems.length === 0) {
      return;
    }

    const host = this.hosts.get(runtime.doc);
    const preview = host?.getPreview(previewId);
    if (!host || !preview) {
      return;
    }

    const safeIndex = ((index % runtime.allItems.length) + runtime.allItems.length) % runtime.allItems.length;
    runtime.activeIndex = safeIndex;

    const nextItem = runtime.allItems[safeIndex];
    preview.item = nextItem;
    preview.imageEl.src = nextItem.src;
    preview.imageEl.alt = nextItem.alt;
    host.renderGallery(this.getSettings(), runtime.allItems, safeIndex, (nextIdx) => {
      this.handleGallerySelect(runtime.doc, nextIdx);
    });

    void this.waitForImageLoad(preview.imageEl).then(() => {
      const layout = this.getLayoutViewport(preview, runtime.doc, runtime.allItems.length);
      const nextState = ImageTransformEngine.createInitialState(
        preview.imageEl.naturalWidth || 1,
        preview.imageEl.naturalHeight || 1,
        layout.width,
        layout.height,
        layout.reservedBottom
      );
      host.applyState(previewId, nextState);
    });
  }

  /**
   * 按顺序切换图片。
   */
  private switchImage(previewId: string, next: boolean): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime || runtime.allItems.length === 0) {
      return;
    }

    const delta = next ? 1 : -1;
    this.switchImageToIndex(previewId, runtime.activeIndex + delta);
  }

  /**
   * 开始拖拽。
   */
  private onDragStart(previewId: string, clientX: number, clientY: number): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }

    this.activatePreview(previewId);
    runtime.lastPointer = { x: clientX, y: clientY };
    try {
      runtime.stateMachine.startDrag();
    } catch {
      // 已在拖拽态时忽略重复 start。
    }
  }

  /**
   * 拖拽中。
   */
  private onDragMove(previewId: string, clientX: number, clientY: number): void {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }

    const offsetX = clientX - runtime.lastPointer.x;
    const offsetY = clientY - runtime.lastPointer.y;
    runtime.lastPointer = { x: clientX, y: clientY };

    host.applyState(previewId, ImageTransformEngine.moveBy(preview.state, { x: offsetX, y: offsetY }));
  }

  /**
   * 结束拖拽。
   */
  private onDragEnd(previewId: string): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }

    try {
      runtime.stateMachine.endDrag();
    } catch {
      // 非拖拽态结束时无需处理。
    }
  }

  /**
   * 处理缩放输入。
   */
  private onZoom(previewId: string, ratio: number, anchorX: number, anchorY: number): void {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }

    host.applyState(
      previewId,
      ImageTransformEngine.zoomAt(preview.state, ratio, {
        x: anchorX,
        y: anchorY
      })
    );
  }

  /**
   * 双击切换 fit/1:1。
   */
  private onDoubleTap(previewId: string): void {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }

    const layout = this.getLayoutViewport(preview, runtime.doc, runtime.allItems.length);
    if (Math.abs(preview.state.zoomRatio - 1) < 0.05) {
      host.applyState(
        previewId,
        ImageTransformEngine.fitToViewport(
          preview.state,
          layout.width,
          layout.height,
          layout.reservedBottom
        )
      );
      return;
    }

    host.applyState(
      previewId,
      ImageTransformEngine.zoomToActual(
        preview.state,
        layout.width,
        layout.height,
        layout.reservedBottom
      )
    );
  }

  /**
   * 右键/长按打开菜单。
   */
  private showContextMenu(previewId: string, clientX: number, clientY: number): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }

    const menu = new Menu();

    const addItem = (title: string, action: ToolbarAction): void => {
      menu.addItem((item) => {
        item.setTitle(title).onClick(() => this.handleToolbarAction(previewId, action));
      });
    };

    addItem("Zoom In", "zoom-in");
    addItem("Zoom Out", "zoom-out");
    addItem("Actual Size", "zoom-100");
    addItem("Fit", "fit");
    menu.addSeparator();
    addItem("Copy", "copy");
    addItem("Close", "close");

    menu.showAtPosition({ x: clientX, y: clientY });
  }

  /**
   * 键盘快捷键处理。
   */
  private handleKeyDown(doc: Document, event: KeyboardEvent): void {
    const host = this.hosts.get(doc);
    const active = host?.getActivePreview();
    if (!host || !active) {
      return;
    }

    const runtime = this.runtimes.get(active.id);
    if (!runtime) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      this.closePreview(active.id);
      return;
    }

    // 方向键：根据不同修饰键控制移动或切图。
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      if (this.matchModifier(event, this.getSettings().switchHotkey)) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.switchImage(active.id, false);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.switchImage(active.id, true);
        }
        return;
      }

      if (this.matchModifier(event, this.getSettings().moveHotkey)) {
        event.preventDefault();
        this.moveByArrow(active.id, event.key);
      }
    }
  }

  /**
   * 箭头键移动图片。
   */
  private moveByArrow(previewId: string, key: string): void {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }

    const speed = this.getSettings().moveSpeed;
    const offset = { x: 0, y: 0 };
    if (key === "ArrowLeft") {
      offset.x = -speed;
    } else if (key === "ArrowRight") {
      offset.x = speed;
    } else if (key === "ArrowUp") {
      offset.y = -speed;
    } else if (key === "ArrowDown") {
      offset.y = speed;
    }

    host.applyState(previewId, ImageTransformEngine.moveBy(preview.state, offset));
  }

  /**
   * 关闭指定预览。
   */
  private closePreview(previewId: string): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }

    runtime.detachInput();
    runtime.restoreBorder?.();
    runtime.stateMachine.close();

    this.hosts.get(runtime.doc)?.closePreview(previewId);
    this.runtimes.delete(previewId);

    const queue = this.pinQueue.get(runtime.doc);
    if (queue) {
      this.pinQueue.set(
        runtime.doc,
        queue.filter((id) => id !== previewId)
      );
    }
  }

  /**
   * 关闭当前文档所有预览。
   */
  private closeAllInDoc(doc: Document): void {
    const ids = Array.from(this.runtimes.values())
      .filter((runtime) => runtime.doc === doc)
      .map((runtime) => runtime.id);

    ids.forEach((id) => this.closePreview(id));
    this.hosts.get(doc)?.closeAll();
  }

  /**
   * 关闭所有文档的预览。
   */
  private closeAll(): void {
    Array.from(this.runtimes.keys()).forEach((id) => this.closePreview(id));
    this.hosts.forEach((host) => host.closeAll());
  }

  /**
   * 激活某个预览。
   */
  private activatePreview(previewId: string): void {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    const host = this.hosts.get(runtime.doc);
    host?.setActive(previewId);
  }

  /**
   * Pin 模式下限制最大数量。
   */
  private enforcePinLimit(doc: Document, host: OverlayHost, settings: PluginSettings): boolean {
    if (host.size() < settings.pinMaximum) {
      return true;
    }

    if (!settings.pinCoverMode) {
      new Notice(`Pin maximum is ${settings.pinMaximum}.`);
      return false;
    }

    const queue = this.pinQueue.get(doc) ?? [];
    const oldest = queue.shift();
    if (!oldest) {
      return true;
    }
    this.pinQueue.set(doc, queue);
    this.closePreview(oldest);
    return true;
  }

  /**
   * 记录 Pin 模式打开顺序。
   */
  private pushPinQueue(doc: Document, previewId: string): void {
    const queue = this.pinQueue.get(doc) ?? [];
    queue.push(previewId);
    this.pinQueue.set(doc, queue);
  }

  /**
   * 创建或获取宿主。
   */
  private getOrCreateHost(doc: Document): OverlayHost {
    let host = this.hosts.get(doc);
    if (!host) {
      host = new OverlayHost(this.app, doc);
      this.hosts.set(doc, host);
    }
    return host;
  }

  /**
   * 清理无效文档宿主。
   */
  private cleanupDisconnectedHosts(): void {
    const disconnected: Document[] = [];
    this.hosts.forEach((_host, doc) => {
      if (!doc.defaultView || doc.defaultView.closed) {
        disconnected.push(doc);
      }
    });

    disconnected.forEach((doc) => {
      this.closeAllInDoc(doc);
      this.hosts.get(doc)?.destroy();
      this.hosts.delete(doc);
      this.pinQueue.delete(doc);
      this.boundDocs.delete(doc);
    });
  }

  /**
   * 判断节点是否满足触发规则。
   */
  private isTargetImage(image: HTMLImageElement): boolean {
    if (image.closest(".oip-overlay-root")) {
      return false;
    }
    let scopeMatches = false;
    try {
      scopeMatches = image.matches(this.selector);
    } catch (error) {
      console.error("[Images Preview] Invalid selector:", this.selector, error);
      scopeMatches = image.matches("img");
    }
    if (!scopeMatches) {
      return false;
    }

    const src = image.currentSrc || image.src;
    return Boolean(src);
  }

  /**
   * 从鼠标事件中解析目标图片。
   * 优先走 target/composedPath，最后回退到 elementFromPoint。
   */
  private resolveImageFromMouseEvent(doc: Document, event: MouseEvent): HTMLImageElement | null {
    const target = event.target;
    if (target instanceof HTMLImageElement) {
      return target;
    }
    if (target instanceof Element) {
      const closest = target.closest("img");
      if (closest instanceof HTMLImageElement) {
        return closest;
      }
    }

    if (typeof event.composedPath === "function") {
      const path = event.composedPath();
      for (const node of path) {
        if (node instanceof HTMLImageElement) {
          return node;
        }
      }
    }

    const hit = doc.elementFromPoint(event.clientX, event.clientY);
    if (hit instanceof HTMLImageElement) {
      return hit;
    }
    if (hit instanceof Element) {
      const closest = hit.closest("img");
      if (closest instanceof HTMLImageElement) {
        return closest;
      }
    }

    return null;
  }

  /**
   * 判断事件是否满足修饰键条件。
   */
  private matchModifier(event: MouseEvent | KeyboardEvent, modifier: HotkeyModifier): boolean {
    const ctrl = event.ctrlKey || (event as KeyboardEvent).metaKey;
    const alt = event.altKey;
    const shift = event.shiftKey;

    switch (modifier) {
      case HotkeyModifier.None:
        return !ctrl && !alt && !shift;
      case HotkeyModifier.Ctrl:
        return ctrl && !alt && !shift;
      case HotkeyModifier.Alt:
        return !ctrl && alt && !shift;
      case HotkeyModifier.Shift:
        return !ctrl && !alt && shift;
      case HotkeyModifier.CtrlAlt:
        return ctrl && alt && !shift;
      case HotkeyModifier.CtrlShift:
        return ctrl && !alt && shift;
      case HotkeyModifier.ShiftAlt:
        return !ctrl && alt && shift;
      case HotkeyModifier.CtrlShiftAlt:
        return ctrl && alt && shift;
      default:
        return false;
    }
  }

  /**
   * 为缩放按钮返回中心锚点。
   */
  private getCenterAnchor(state: TransformState): { x: number; y: number } {
    return {
      x: state.left + state.width / 2,
      y: state.top + state.height / 2
    };
  }

  /**
   * 读取当前视口尺寸并保证最小值，避免异常窗口尺寸导致计算错误。
   */
  private getViewportSize(doc: Document): { width: number; height: number } {
    const width = doc.documentElement.clientWidth || doc.body.clientWidth || window.innerWidth || 1;
    const height = doc.documentElement.clientHeight || doc.body.clientHeight || window.innerHeight || 1;
    return {
      width: Math.max(1, width),
      height: Math.max(1, height)
    };
  }

  /**
   * 计算当前预览需要预留的底部高度。
   */
  private getBottomReservedHeight(preview: MountedPreview, allItemCount: number): number {
    if (preview.shellEl.classList.contains("oip-pin-shell")) {
      return 0;
    }

    const hasGallery = this.getSettings().gallery.enabled && allItemCount > 1;
    return hasGallery
      ? PreviewController.NORMAL_BOTTOM_RESERVE_WITH_GALLERY
      : PreviewController.NORMAL_BOTTOM_RESERVE;
  }

  /**
   * 汇总布局计算需要的视口信息，供初始适配与 fit/1:1 共用。
   */
  private getLayoutViewport(
    preview: MountedPreview,
    doc: Document,
    allItemCount: number
  ): { width: number; height: number; reservedBottom: number } {
    const viewport = this.getViewportSize(doc);
    const reservedBottom = this.getBottomReservedHeight(preview, allItemCount);
    return {
      width: viewport.width,
      height: viewport.height,
      reservedBottom
    };
  }

  /**
   * 复制图片名称。
   */
  private async copyImageName(rawName: string): Promise<void> {
    const imageName = rawName.trim();
    if (!imageName) {
      new Notice(t("notice.copyNameFailed", this.app));
      return;
    }

    const copied = await this.clipboardService.copyPlainText(imageName);
    new Notice(t(copied ? "notice.copyNameSuccess" : "notice.copyNameFailed", this.app));
  }

  /**
   * 等待图片加载完成。
   */
  private async waitForImageLoad(image: HTMLImageElement): Promise<boolean> {
    if (image.complete && image.naturalWidth > 0) {
      return true;
    }

    return await new Promise<boolean>((resolve) => {
      let finished = false;
      const done = (result: boolean): void => {
        if (finished) {
          return;
        }
        finished = true;
        image.removeEventListener("load", onLoad);
        image.removeEventListener("error", onError);
        resolve(result);
      };

      const onLoad = (): void => done(true);
      const onError = (): void => done(false);

      image.addEventListener("load", onLoad);
      image.addEventListener("error", onError);

      window.setTimeout(() => done(false), 5000);
    });
  }

  /**
   * 给原图加边框高亮，并返回恢复函数。
   */
  private applySourceImageBorder(sourceImage: HTMLImageElement): (() => void) | undefined {
    const settings = this.getSettings();
    if (!settings.imageBorderEnabled) {
      return undefined;
    }

    const style = sourceImage.style;
    const prev = {
      width: style.borderWidth,
      style: style.borderStyle,
      color: style.borderColor
    };

    style.borderWidth = settings.imageBorderWidth;
    style.borderStyle = settings.imageBorderStyle;
    style.borderColor = settings.imageBorderColor;

    return () => {
      style.borderWidth = prev.width;
      style.borderStyle = prev.style;
      style.borderColor = prev.color;
    };
  }
}

import type { App } from "obsidian";
import { t } from "../i18n";
import type {
  ImageItem,
  MountedPreview,
  PluginSettings,
  PreviewMode,
  ToolbarAction,
  TransformState
} from "../types";
import { PreviewMode as Mode } from "../types";

/**
 * 打开预览需要的参数。
 */
export interface OpenPreviewOptions {
  item: ImageItem;
  settings: PluginSettings;
  mode: PreviewMode;
  activeIndex: number;
  allItems: ImageItem[];
  onToolbarAction: (previewId: string, action: ToolbarAction) => void;
  onGallerySelect: (index: number) => void;
  onMaskClick: () => void;
}

/**
 * 视图层宿主：负责渲染/销毁 DOM，不负责业务逻辑。
 */
export class OverlayHost {
  private readonly app: App;
  private readonly doc: Document;

  private rootEl: HTMLDivElement | null = null;
  private maskEl: HTMLDivElement | null = null;
  private galleryEl: HTMLDivElement | null = null;
  private previews = new Map<string, MountedPreview>();
  private detachMaskClick: (() => void) | null = null;
  private activePreviewId: string | null = null;

  /**
   * 构造宿主。
   */
  constructor(app: App, doc: Document) {
    this.app = app;
    this.doc = doc;
  }

  /**
   * 创建并挂载一个新预览。
   */
  public openPreview(options: OpenPreviewOptions): MountedPreview {
    this.ensureRoot();
    this.updateMask(options.mode, options.onMaskClick);

    if (options.mode === Mode.Normal) {
      this.closeAll();
      this.updateMask(options.mode, options.onMaskClick);
    }

    const previewId = this.createPreviewId();
    const shellEl = this.createShell(options.mode);
    const imageEl = this.createImage();
    const captionBlockEl = this.createCaptionBlock(previewId, options.item, options.onToolbarAction);
    const captionEl = captionBlockEl.querySelector<HTMLDivElement>(".oip-image-caption");
    const toolbarEl = this.createToolbar(previewId, options.onToolbarAction);

    imageEl.src = options.item.src;
    imageEl.alt = options.item.alt || "";

    shellEl.appendChild(imageEl);
    shellEl.appendChild(captionBlockEl);
    shellEl.appendChild(toolbarEl);
    this.rootEl?.appendChild(shellEl);

    const preview: MountedPreview = {
      id: previewId,
      shellEl,
      imageEl,
      captionEl: captionEl ?? this.createFallbackCaption(captionBlockEl),
      toolbarEl,
      item: options.item,
      state: {
        naturalWidth: 1,
        naturalHeight: 1,
        width: 1,
        height: 1,
        left: 0,
        top: 0,
        zoomRatio: 1
      }
    };

    this.previews.set(previewId, preview);
    this.setActive(previewId);
    this.updateGallery(options.settings, options.allItems, options.activeIndex, options.onGallerySelect);
    return preview;
  }

  /**
   * 对外刷新画廊，用于切图后更新激活态。
   */
  public renderGallery(
    settings: PluginSettings,
    allItems: ImageItem[],
    activeIndex: number,
    onSelect: (index: number) => void
  ): void {
    this.updateGallery(settings, allItems, activeIndex, onSelect);
  }

  /**
   * 更新预览渲染状态。
   */
  public applyState(previewId: string, state: TransformState): void {
    const preview = this.previews.get(previewId);
    if (!preview) {
      return;
    }

    preview.state = state;

    preview.shellEl.setCssProps({
      "--oip-left": `${state.left}px`,
      "--oip-top": `${state.top}px`
    });

    preview.imageEl.style.width = `${state.width}px`;
    preview.imageEl.style.height = `${state.height}px`;
    preview.imageEl.setCssProps({ "--oip-image-transform": "none" });
    preview.captionEl.setText(this.resolveImageFileName(preview.item));
  }

  /**
   * 读取已挂载预览。
   */
  public getPreview(previewId: string): MountedPreview | undefined {
    return this.previews.get(previewId);
  }

  /**
   * 获取当前激活预览。
   */
  public getActivePreview(): MountedPreview | null {
    if (!this.activePreviewId) {
      return null;
    }
    return this.previews.get(this.activePreviewId) ?? null;
  }

  /**
   * 设定激活预览。
   */
  public setActive(previewId: string): void {
    this.activePreviewId = previewId;
    this.previews.forEach((preview, id) => {
      preview.shellEl.toggleClass("is-active", id === previewId);
      if (id === previewId) {
        preview.shellEl.style.zIndex = `${2000 + this.previews.size}`;
      }
    });
  }

  /**
   * 关闭指定预览。
   */
  public closePreview(previewId: string): void {
    const preview = this.previews.get(previewId);
    if (!preview) {
      return;
    }

    preview.shellEl.remove();
    this.previews.delete(previewId);

    if (this.activePreviewId === previewId) {
      const fallback = Array.from(this.previews.keys()).pop() ?? null;
      this.activePreviewId = fallback;
      if (fallback) {
        this.setActive(fallback);
      }
    }

    if (this.previews.size === 0) {
      this.hideMask();
      this.removeGallery();
    }
  }

  /**
   * 关闭当前激活预览。
   */
  public closeActive(): void {
    if (!this.activePreviewId) {
      return;
    }
    this.closePreview(this.activePreviewId);
  }

  /**
   * 关闭全部预览。
   */
  public closeAll(): void {
    this.previews.forEach((preview) => preview.shellEl.remove());
    this.previews.clear();
    this.activePreviewId = null;
    this.hideMask();
    this.removeGallery();
  }

  /**
   * 读取当前预览数量。
   */
  public size(): number {
    return this.previews.size;
  }

  /**
   * 销毁宿主。
   */
  public destroy(): void {
    this.closeAll();
    if (this.detachMaskClick) {
      this.detachMaskClick();
      this.detachMaskClick = null;
    }
    this.maskEl?.remove();
    this.rootEl?.remove();
    this.maskEl = null;
    this.rootEl = null;
  }

  /**
   * 创建根节点。
   */
  private ensureRoot(): void {
    if (this.rootEl) {
      return;
    }

    this.rootEl = this.doc.createElement("div");
    this.rootEl.addClass("oip-overlay-root");

    this.maskEl = this.doc.createElement("div");
    this.maskEl.addClass("oip-overlay-mask");

    this.doc.body.appendChild(this.rootEl);
    this.rootEl.appendChild(this.maskEl);
  }

  /**
   * 根据模式更新遮罩。
   */
  private updateMask(mode: PreviewMode, onMaskClick: () => void): void {
    if (!this.maskEl) {
      return;
    }

    if (this.detachMaskClick) {
      this.detachMaskClick();
      this.detachMaskClick = null;
    }

    if (mode === Mode.Normal) {
      this.maskEl.toggleClass("is-visible", true);
      const handler = (): void => onMaskClick();
      this.maskEl.addEventListener("click", handler);
      this.detachMaskClick = () => this.maskEl?.removeEventListener("click", handler);
      return;
    }

    this.hideMask();
  }

  /**
   * 隐藏遮罩。
   */
  private hideMask(): void {
    if (!this.maskEl) {
      return;
    }
    if (this.detachMaskClick) {
      this.detachMaskClick();
      this.detachMaskClick = null;
    }
    this.maskEl.toggleClass("is-visible", false);
  }

  /**
   * 创建单个预览外壳。
   */
  private createShell(mode: PreviewMode): HTMLDivElement {
    const shell = this.doc.createElement("div");
    shell.addClass("oip-preview-shell");
    if (mode === Mode.Pin) {
      shell.addClass("oip-pin-shell");
    }
    return shell;
  }

  /**
   * 创建图片元素。
   */
  private createImage(): HTMLImageElement {
    const image = this.doc.createElement("img");
    image.addClass("oip-preview-image");
    image.draggable = false;
    return image;
  }

  /**
   * 创建图片文件名区域（点击即复制名称）。
   */
  private createCaptionBlock(
    previewId: string,
    item: ImageItem,
    onAction: (previewId: string, action: ToolbarAction) => void
  ): HTMLDivElement {
    const block = this.doc.createElement("div");
    block.addClass("oip-image-caption-block");

    const caption = this.doc.createElement("div");
    caption.addClass("oip-image-caption");
    caption.setText(this.resolveImageFileName(item));
    caption.dataset.action = "copy-name";
    caption.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      onAction(previewId, "copy-name");
    });
    block.appendChild(caption);

    return block;
  }

  /**
   * caption 兜底创建。
   */
  private createFallbackCaption(block: HTMLDivElement): HTMLDivElement {
    const caption = this.doc.createElement("div");
    caption.addClass("oip-image-caption");
    block.prepend(caption);
    return caption;
  }

  /**
   * 创建工具栏。
   */
  private createToolbar(previewId: string, onAction: (previewId: string, action: ToolbarAction) => void): HTMLDivElement {
    const toolbar = this.doc.createElement("div");
    toolbar.addClass("oip-toolbar");

    const actions: Array<{ action: ToolbarAction; label: string }> = [
      { action: "zoom-out", label: "-" },
      { action: "zoom-in", label: "+" },
      { action: "zoom-100", label: "1:1" },
      { action: "fit", label: t("toolbar.fit", this.app) },
      { action: "copy", label: t("toolbar.copy", this.app) },
      { action: "prev", label: "◀" },
      { action: "next", label: "▶" },
      { action: "close", label: t("toolbar.close", this.app) }
    ];

    actions.forEach(({ action, label }) => {
      const button = this.doc.createElement("button");
      button.type = "button";
      button.addClass("oip-toolbar-btn");
      button.dataset.action = action;
      button.setText(label);
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        onAction(previewId, action);
      });
      toolbar.appendChild(button);
    });

    return toolbar;
  }

  /**
   * 从图片项解析用于展示的文件名。
   */
  private resolveImageFileName(item: ImageItem): string {
    const fileNameBySrc = this.extractFileNameFromSrc(item.src);
    if (fileNameBySrc) {
      return fileNameBySrc;
    }
    if (item.title) {
      return item.title;
    }
    if (item.alt) {
      return item.alt;
    }
    return item.src;
  }

  /**
   * 从 URL/path 中提取文件名，自动去掉 query/hash。
   */
  private extractFileNameFromSrc(src: string): string {
    if (!src) {
      return "";
    }

    const decodeSafe = (value: string): string => {
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    };

    try {
      const url = new URL(src);
      const parts = url.pathname.split("/").filter(Boolean);
      return decodeSafe(parts[parts.length - 1] ?? "");
    } catch {
      const sanitized = src.split("#")[0]?.split("?")[0] ?? "";
      const parts = sanitized.split("/").filter(Boolean);
      return decodeSafe(parts[parts.length - 1] ?? "");
    }
  }

  /**
   * 更新画廊显示。
   */
  private updateGallery(
    settings: PluginSettings,
    allItems: ImageItem[],
    activeIndex: number,
    onSelect: (index: number) => void
  ): void {
    this.removeGallery();

    if (!settings.gallery.enabled || allItems.length <= 1 || !this.rootEl) {
      return;
    }

    this.galleryEl = this.doc.createElement("div");
    this.galleryEl.addClass("oip-gallery");
    this.galleryEl.setCssProps({
      "--oip-gallery-bg": settings.gallery.backgroundColor,
      "--oip-gallery-hover": settings.gallery.hoverColor,
      "--oip-gallery-active-border": settings.gallery.activeBorderColor
    });
    this.rootEl.addClass("oip-has-gallery");

    allItems.forEach((item, index) => {
      const wrapper = this.doc.createElement("div");
      wrapper.addClass("oip-gallery-item");
      if (index === activeIndex) {
        wrapper.addClass("is-active");
      }
      wrapper.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        onSelect(index);
      });

      const image = this.doc.createElement("img");
      image.addClass("oip-gallery-image");
      image.src = item.src;
      image.alt = item.alt;

      wrapper.appendChild(image);
      this.galleryEl?.appendChild(wrapper);
    });

    this.rootEl.appendChild(this.galleryEl);
  }

  /**
   * 移除画廊节点。
   */
  private removeGallery(): void {
    this.galleryEl?.remove();
    this.galleryEl = null;
    this.rootEl?.removeClass("oip-has-gallery");
  }

  /**
   * 生成预览 id。
   */
  private createPreviewId(): string {
    return `preview-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  }
}

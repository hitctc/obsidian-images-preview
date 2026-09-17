import { describe, expect, it, vi } from "vitest";
import { DEFAULT_SETTINGS } from "../src/settings";
import { PreviewController } from "../src/controllers/preview-controller";
import type { MountedPreview, PluginSettings, ToolbarAction } from "../src/types";

/**
 * 创建可复用设置对象，避免测试间共享引用。
 */
function createSettings(): PluginSettings {
  return {
    ...DEFAULT_SETTINGS,
    gallery: { ...DEFAULT_SETTINGS.gallery },
    interaction: { ...DEFAULT_SETTINGS.interaction }
  };
}

/**
 * 创建控制器与测试所需 mock。
 */
function createController(
  pluginOverrides?: Partial<{
    registerDomEvent: (...args: unknown[]) => void;
    registerEvent: (...args: unknown[]) => void;
  }>,
  appMock: unknown = {
    workspace: {
      getActiveViewOfType: () => null
    }
  }
): PreviewController {
  const settings = createSettings();
  const pluginMock = {
    registerDomEvent: () => undefined,
    registerEvent: () => undefined,
    ...pluginOverrides
  };
  return new PreviewController(appMock as never, pluginMock as never, () => settings);
}

/**
 * 暴露测试需要的私有成员最小类型，避免使用无约束的 any。
 */
type PreviewControllerTestSurface = {
  attachToDocument: (doc: Document) => void;
  resolveImageFromMouseEvent: (event: MouseEvent) => HTMLImageElement | null;
  isTargetImage: (image: HTMLImageElement) => boolean;
  openFromImage: (doc: Document, image: HTMLImageElement) => Promise<void>;
  selector: string;
  hosts: Map<Document, { getActivePreview: () => { id: string } | null }>;
  runtimes: Map<string, { id: string }>;
  handleToolbarAction: (previewId: string, action: ToolbarAction) => void;
  handleKeyDown: (doc: Document, event: KeyboardEvent) => void;
  getBottomReservedHeight: (preview: MountedPreview, allItemCount: number) => number;
  clipboardService: {
    copyPlainText: (value: string) => Promise<boolean>;
  };
  copyImageName: (rawName: string) => Promise<void>;
};

/**
 * 获取控制器的测试视图，仅用于访问当前测试覆盖的私有实现。
 */
function getTestSurface(controller: PreviewController): PreviewControllerTestSurface {
  return controller as unknown as PreviewControllerTestSurface;
}

describe("PreviewController", () => {
  it("registers click listener in capture phase", () => {
    const registerDomEvent = vi.fn();
    const controller = createController({ registerDomEvent });
    const surface = getTestSurface(controller);

    surface.attachToDocument(document);

    const clickCall = registerDomEvent.mock.calls.find((call) => call[1] === "click");
    expect(clickCall).toBeTruthy();
    expect(clickCall?.[3]).toBe(true);
  });

  it("opens preview on image click without requiring modifier keys", async () => {
    const registerDomEvent = vi.fn();
    const controller = createController({ registerDomEvent });
    const surface = getTestSurface(controller);
    const image = document.createElement("img");
    image.src = "https://img.example/a.png";
    const openSpy = vi.fn().mockResolvedValue(undefined);

    surface.resolveImageFromMouseEvent = vi.fn().mockReturnValue(image);
    surface.isTargetImage = vi.fn().mockReturnValue(true);
    surface.openFromImage = openSpy;

    surface.attachToDocument(document);
    const clickCall = registerDomEvent.mock.calls.find((call) => call[1] === "click");
    const clickHandler = clickCall?.[2] as ((event: MouseEvent) => Promise<void>) | undefined;

    expect(clickHandler).toBeTruthy();

    const event = {
      ctrlKey: true,
      metaKey: false,
      altKey: false,
      shiftKey: false,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as MouseEvent;

    await clickHandler?.(event);

    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(event.stopPropagation).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledWith(document, image);
  });

  it("resolves image from composedPath fallback", () => {
    const controller = createController();
    const surface = getTestSurface(controller);
    const image = document.createElement("img");
    image.src = "https://img.example/a.png";
    const wrapper = document.createElement("span");
    wrapper.appendChild(image);

    const event = {
      target: wrapper,
      clientX: 0,
      clientY: 0,
      composedPath: () => [wrapper, image]
    } as unknown as MouseEvent;

    const resolved = surface.resolveImageFromMouseEvent(event);
    expect(resolved).toBe(image);
  });

  it("does not resolve a resize wrapper as an image", () => {
    const controller = createController();
    const surface = getTestSurface(controller);
    const image = document.createElement("img");
    const wrapper = document.createElement("span");
    wrapper.appendChild(image);

    const event = {
      target: wrapper,
      clientX: 0,
      clientY: 0,
      composedPath: () => [wrapper]
    } as unknown as MouseEvent;

    const resolved = surface.resolveImageFromMouseEvent(event);

    expect(resolved).toBeNull();
  });

  it("opens active image from active view container", async () => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = "https://img.example/active.png";
    container.appendChild(image);

    const getActiveViewOfType = vi.fn().mockReturnValue({
      containerEl: container
    });
    const controller = createController(undefined, {
      workspace: { getActiveViewOfType }
    });
    const surface = getTestSurface(controller);
    const openSpy = vi.fn().mockResolvedValue(undefined);

    surface.selector = "img";
    surface.openFromImage = openSpy;

    await controller.openPreviewAtActiveImage();

    expect(getActiveViewOfType).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledWith(document, image);
  });

  it("keeps image matching safe when selector is invalid", () => {
    const controller = createController();
    const surface = getTestSurface(controller);
    const image = document.createElement("img");
    image.src = "https://img.example/a.png";

    surface.selector = "img:not(";
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const matched = surface.isTargetImage(image);

    consoleSpy.mockRestore();
    expect(matched).toBe(true);
  });

  it("copies the active preview image with Ctrl+C or Cmd+C", () => {
    const controller = createController();
    const surface = getTestSurface(controller);
    const handleToolbarAction = vi.fn();
    const activePreview = { id: "preview-1" };

    surface.hosts.set(document, {
      getActivePreview: () => activePreview
    });
    surface.runtimes.set(activePreview.id, { id: activePreview.id });
    surface.handleToolbarAction = handleToolbarAction;

    for (const modifier of ["ctrlKey", "metaKey"] as const) {
      const event = {
        key: "c",
        ctrlKey: modifier === "ctrlKey",
        metaKey: modifier === "metaKey",
        preventDefault: vi.fn()
      } as unknown as KeyboardEvent;

      surface.handleKeyDown(document, event);

      expect(event.preventDefault).toHaveBeenCalledOnce();
    }

    expect(handleToolbarAction).toHaveBeenCalledTimes(2);
    expect(handleToolbarAction).toHaveBeenNthCalledWith(1, activePreview.id, "copy");
    expect(handleToolbarAction).toHaveBeenNthCalledWith(2, activePreview.id, "copy");
  });

  it("uses larger bottom reserve in normal mode when gallery is visible", () => {
    const controller = createController();
    const surface = getTestSurface(controller);

    const normalShell = document.createElement("div");
    normalShell.className = "oip-preview-shell";
    const normalPreview = { shellEl: normalShell } as MountedPreview;

    const baseReserve = surface.getBottomReservedHeight(normalPreview, 1);
    const galleryReserve = surface.getBottomReservedHeight(normalPreview, 3);

    const pinShell = document.createElement("div");
    pinShell.className = "oip-preview-shell oip-pin-shell";
    const pinPreview = { shellEl: pinShell } as MountedPreview;
    const pinReserve = surface.getBottomReservedHeight(pinPreview, 3);

    expect(galleryReserve).toBeGreaterThan(baseReserve);
    expect(pinReserve).toBe(0);
  });

  it("copies image name with trimmed content", async () => {
    const controller = createController();
    const surface = getTestSurface(controller);
    const clipboardService = surface.clipboardService;
    const copySpy = vi.spyOn(clipboardService, "copyPlainText").mockResolvedValue(true);

    await surface.copyImageName("  demo.png  ");

    expect(copySpy).toHaveBeenCalledWith("demo.png");
    copySpy.mockRestore();
  });

  it("does not copy when image name is empty", async () => {
    const controller = createController();
    const surface = getTestSurface(controller);
    const clipboardService = surface.clipboardService;
    const copySpy = vi.spyOn(clipboardService, "copyPlainText").mockResolvedValue(true);

    await surface.copyImageName("   ");

    expect(copySpy).not.toHaveBeenCalled();
    copySpy.mockRestore();
  });
});

import { describe, expect, it, vi } from "vitest";
import { DEFAULT_SETTINGS } from "../src/settings";
import { PreviewController } from "../src/controllers/preview-controller";
import type { MountedPreview, PluginSettings } from "../src/types";

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

describe("PreviewController", () => {
  it("registers click listener in capture phase", () => {
    const registerDomEvent = vi.fn();
    const controller = createController({ registerDomEvent });

    (controller as any).attachToDocument(document);

    const clickCall = registerDomEvent.mock.calls.find((call) => call[1] === "click");
    expect(clickCall).toBeTruthy();
    expect(clickCall?.[3]).toBe(true);
  });

  it("opens preview on image click without requiring modifier keys", async () => {
    const registerDomEvent = vi.fn();
    const controller = createController({ registerDomEvent });
    const image = document.createElement("img");
    image.src = "https://img.example/a.png";
    const openSpy = vi.fn().mockResolvedValue(undefined);

    (controller as any).resolveImageFromMouseEvent = vi.fn().mockReturnValue(image);
    (controller as any).isTargetImage = vi.fn().mockReturnValue(true);
    (controller as any).openFromImage = openSpy;

    (controller as any).attachToDocument(document);
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

    const resolved = (controller as any).resolveImageFromMouseEvent(document, event);
    expect(resolved).toBe(image);
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
    const openSpy = vi.fn().mockResolvedValue(undefined);

    (controller as any).selector = "img";
    (controller as any).openFromImage = openSpy;

    await controller.openPreviewAtActiveImage();

    expect(getActiveViewOfType).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledWith(document, image);
  });

  it("keeps image matching safe when selector is invalid", () => {
    const controller = createController();
    const image = document.createElement("img");
    image.src = "https://img.example/a.png";

    (controller as any).selector = "img:not(";
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const matched = (controller as any).isTargetImage(image);

    consoleSpy.mockRestore();
    expect(matched).toBe(true);
  });

  it("uses larger bottom reserve in normal mode when gallery is visible", () => {
    const controller = createController();

    const normalShell = document.createElement("div");
    normalShell.className = "oip-preview-shell";
    const normalPreview = { shellEl: normalShell } as MountedPreview;

    const baseReserve = (controller as any).getBottomReservedHeight(normalPreview, 1);
    const galleryReserve = (controller as any).getBottomReservedHeight(normalPreview, 3);

    const pinShell = document.createElement("div");
    pinShell.className = "oip-preview-shell oip-pin-shell";
    const pinPreview = { shellEl: pinShell } as MountedPreview;
    const pinReserve = (controller as any).getBottomReservedHeight(pinPreview, 3);

    expect(galleryReserve).toBeGreaterThan(baseReserve);
    expect(pinReserve).toBe(0);
  });

  it("copies image name with trimmed content", async () => {
    const controller = createController();
    const clipboardService = (controller as any).clipboardService;
    const copySpy = vi.spyOn(clipboardService, "copyPlainText").mockResolvedValue(true);

    await (controller as any).copyImageName("  demo.png  ");

    expect(copySpy).toHaveBeenCalledWith("demo.png");
    copySpy.mockRestore();
  });

  it("does not copy when image name is empty", async () => {
    const controller = createController();
    const clipboardService = (controller as any).clipboardService;
    const copySpy = vi.spyOn(clipboardService, "copyPlainText").mockResolvedValue(true);

    await (controller as any).copyImageName("   ");

    expect(copySpy).not.toHaveBeenCalled();
    copySpy.mockRestore();
  });
});

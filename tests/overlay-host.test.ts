import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { OverlayHost } from "../src/ui/overlay-host";
import { DEFAULT_SETTINGS } from "../src/settings";
import { PreviewMode, type ImageItem, type PluginSettings, type ToolbarAction } from "../src/types";

/**
 * 为单测补齐 Obsidian 在运行时扩展的 DOM 辅助方法。
 */
function installObsidianDomHelpers(): void {
  const elementProto = HTMLElement.prototype as HTMLElement & {
    addClass?: (...classNames: string[]) => void;
    removeClass?: (...classNames: string[]) => void;
    toggleClass?: (className: string, force?: boolean) => void;
    setText?: (text: string) => void;
  };

  if (!elementProto.addClass) {
    elementProto.addClass = function (...classNames: string[]): void {
      this.classList.add(...classNames);
    };
  }

  if (!elementProto.removeClass) {
    elementProto.removeClass = function (...classNames: string[]): void {
      this.classList.remove(...classNames);
    };
  }

  if (!elementProto.toggleClass) {
    elementProto.toggleClass = function (className: string, force?: boolean): void {
      if (typeof force === "boolean") {
        this.classList.toggle(className, force);
        return;
      }
      this.classList.toggle(className);
    };
  }

  if (!elementProto.setText) {
    elementProto.setText = function (text: string): void {
      this.textContent = text;
    };
  }
}

/**
 * 生成隔离设置对象，避免测试间共享引用。
 */
function createSettings(): PluginSettings {
  return {
    ...DEFAULT_SETTINGS,
    gallery: { ...DEFAULT_SETTINGS.gallery },
    interaction: { ...DEFAULT_SETTINGS.interaction }
  };
}

/**
 * 创建测试图片列表。
 */
function createItems(): ImageItem[] {
  return [
    {
      src: "https://img.example/1.png",
      alt: "first",
      title: "first",
      index: 0,
      total: 2
    },
    {
      src: "https://img.example/2.png",
      alt: "second",
      title: "second",
      index: 1,
      total: 2
    }
  ];
}

beforeAll(() => {
  installObsidianDomHelpers();
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("OverlayHost", () => {
  it("adds root gallery class when gallery is rendered", () => {
    const host = new OverlayHost({} as never, document);
    const settings = createSettings();
    const items = createItems();

    host.openPreview({
      item: items[0],
      settings,
      mode: PreviewMode.Normal,
      activeIndex: 0,
      allItems: items,
      onToolbarAction: () => undefined,
      onGallerySelect: () => undefined,
      onMaskClick: () => undefined
    });

    const root = document.querySelector(".oip-overlay-root");
    expect(root?.classList.contains("oip-has-gallery")).toBe(true);

    host.destroy();
  });

  it("removes root gallery class when gallery is hidden", () => {
    const host = new OverlayHost({} as never, document);
    const settings = createSettings();
    const items = createItems();

    host.openPreview({
      item: items[0],
      settings,
      mode: PreviewMode.Normal,
      activeIndex: 0,
      allItems: items,
      onToolbarAction: () => undefined,
      onGallerySelect: () => undefined,
      onMaskClick: () => undefined
    });

    host.renderGallery(settings, [items[0]], 0, () => undefined);

    const root = document.querySelector(".oip-overlay-root");
    expect(root?.classList.contains("oip-has-gallery")).toBe(false);

    host.destroy();
  });

  it("shows file name and allows click-to-copy on caption", () => {
    const host = new OverlayHost({} as never, document);
    const settings = createSettings();
    const actions: ToolbarAction[] = [];
    const item: ImageItem = {
      src: "https://img.example/path/demo-photo.png?token=1#view",
      alt: "alt-text",
      title: "custom-title",
      index: 0,
      total: 1
    };

    host.openPreview({
      item,
      settings,
      mode: PreviewMode.Normal,
      activeIndex: 0,
      allItems: [item],
      onToolbarAction: (_previewId, action) => actions.push(action),
      onGallerySelect: () => undefined,
      onMaskClick: () => undefined
    });

    const shell = document.querySelector(".oip-preview-shell") as HTMLDivElement;
    const image = shell.querySelector(".oip-preview-image");
    const captionBlock = shell.querySelector(".oip-image-caption-block");
    const caption = shell.querySelector(".oip-image-caption") as HTMLDivElement;
    const toolbar = shell.querySelector(".oip-toolbar");

    expect(image).toBeTruthy();
    expect(captionBlock).toBeTruthy();
    expect(caption?.textContent).toBe("demo-photo.png");
    expect(shell.querySelector(".oip-caption-copy-btn")).toBeNull();
    expect(toolbar).toBeTruthy();
    expect(toolbar?.querySelector(".oip-toolbar-title")).toBeNull();
    expect(toolbar?.querySelector("[data-action='rotate-left']")).toBeNull();
    expect(toolbar?.querySelector("[data-action='rotate-right']")).toBeNull();
    expect(toolbar?.querySelector("[data-action='flip-x']")).toBeNull();
    expect(toolbar?.querySelector("[data-action='flip-y']")).toBeNull();
    expect(toolbar?.querySelector("[data-action='invert']")).toBeNull();
    expect(toolbar?.querySelector("[data-action='fullscreen']")).toBeNull();
    expect(shell.children[0]).toBe(image);
    expect(shell.children[1]).toBe(captionBlock);
    expect(shell.children[2]).toBe(toolbar);

    caption.click();
    expect(actions).toContain("copy-name");

    host.destroy();
  });
});

import { Notice } from "obsidian";
import { t } from "../i18n";
import type { App } from "obsidian";

/**
 * 复制服务，统一处理成功/失败提示与降级策略。
 */
export class ClipboardService {
  private readonly app: App;

  /**
   * 构造复制服务。
   */
  constructor(app: App) {
    this.app = app;
  }

  /**
   * 复制图片；失败时降级复制 URL。
   */
  public async copyImageOrUrl(imgEl: HTMLImageElement): Promise<boolean> {
    const copiedImage = await this.copyImage(imgEl);
    if (copiedImage) {
      new Notice(t("notice.copySuccess", this.app));
      return true;
    }

    const copiedUrl = await this.copyPlainText(imgEl.src);
    if (copiedUrl) {
      new Notice(`${t("notice.copyFailed", this.app)} URL copied instead.`);
      return true;
    }

    new Notice(t("notice.copyFailed", this.app));
    return false;
  }

  /**
   * 优先尝试复制二进制图片。
   */
  private async copyImage(imgEl: HTMLImageElement): Promise<boolean> {
    if (typeof ClipboardItem === "undefined" || !navigator.clipboard?.write) {
      return false;
    }

    try {
      const blob = await this.renderImageToBlob(imgEl);
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 复制纯文本。
   */
  public async copyPlainText(value: string): Promise<boolean> {
    if (!value || !navigator.clipboard?.writeText) {
      return false;
    }
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 把图片画到 canvas 后导出 PNG。
   */
  private async renderImageToBlob(imgEl: HTMLImageElement): Promise<Blob> {
    const image = await this.loadImage(imgEl.src);
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas context unavailable");
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas blob generation failed"));
          return;
        }
        resolve(blob);
      }, "image/png");
    });
  }

  /**
   * 异步加载图片。
   */
  private async loadImage(src: string): Promise<HTMLImageElement> {
    return await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Image load failed"));
      image.src = src;
    });
  }
}

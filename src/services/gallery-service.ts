import { MarkdownView, type App, type TFile } from "obsidian";
import {
  type GalleryResult,
  type ImageItem,
  type PluginSettings,
  TriggerScope
} from "../types";

/**
 * 画廊服务：收集当前上下文可切换图片。
 */
export class GalleryService {
  private readonly app: App;

  /**
   * 构造画廊服务。
   */
  constructor(app: App) {
    this.app = app;
  }

  /**
   * 对外主入口：先 DOM，再 Markdown 文本回退。
   */
  public async collectWithFallback(
    doc: Document,
    sourceImage: HTMLImageElement,
    settings: PluginSettings
  ): Promise<GalleryResult> {
    const selector = this.buildSelector(settings.triggerScope, settings.includeLinkedImages);
    const byDom = this.collectFromDocument(doc, sourceImage, selector);
    if (byDom.items.length > 0) {
      return byDom;
    }

    return await this.collectFromActiveMarkdown(sourceImage);
  }

  /**
   * 组装触发选择器。
   */
  public buildSelector(scope: TriggerScope, includeLinkedImages: boolean): string {
    const noLinkSuffix = includeLinkedImages ? "" : ":not(a img)";
    if (scope === TriggerScope.Global) {
      return `img${noLinkSuffix}`;
    }

    const markdownSelectors = [
      `.workspace-leaf-content[data-type='markdown'] img${noLinkSuffix}`,
      `.workspace-leaf-content[data-type='image'] img${noLinkSuffix}`,
      `.markdown-preview-view img${noLinkSuffix}`,
      `.markdown-source-view.mod-cm6 img${noLinkSuffix}`
    ];

    if (scope === TriggerScope.MarkdownOnly) {
      return markdownSelectors.join(",");
    }

    const commonSelectors = [
      `.modal-content img${noLinkSuffix}`,
      `.community-modal-details img${noLinkSuffix}`,
      `.canvas-node-content img${noLinkSuffix}`
    ];

    return [...markdownSelectors, ...commonSelectors].join(",");
  }

  /**
   * 从当前 document 抽取图片。
   */
  public collectFromDocument(
    doc: Document,
    sourceImage: HTMLImageElement,
    selector: string
  ): GalleryResult {
    const nodes = Array.from(doc.querySelectorAll<HTMLImageElement>(selector));
    const items: ImageItem[] = [];

    nodes.forEach((img, idx) => {
      const src = img.currentSrc || img.src;
      if (!src) {
        return;
      }
      items.push({
        src,
        alt: img.alt || "",
        title: img.title || img.alt || "",
        index: idx,
        total: 0
      });
    });

    items.forEach((item, idx) => {
      item.index = idx;
      item.total = items.length;
    });

    const activeIndex = this.resolveActiveIndex(items, sourceImage);
    return { items, activeIndex };
  }

  /**
   * 回退方案：从当前 Markdown 文件文本解析图片。
   */
  public async collectFromActiveMarkdown(sourceImage: HTMLImageElement): Promise<GalleryResult> {
    const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
    const file = activeView?.file;

    if (!activeView || !file) {
      return { items: [], activeIndex: -1 };
    }

    const rawText = await this.app.vault.cachedRead(file);
    const parsed = this.parseMarkdownImages(rawText, file);
    parsed.forEach((item, idx) => {
      item.index = idx;
      item.total = parsed.length;
      item.file = file;
    });

    return {
      items: parsed,
      activeIndex: this.resolveActiveIndex(parsed, sourceImage)
    };
  }

  /**
   * 解析 Markdown/WikiLink/HTML 图片。
   */
  public parseMarkdownImages(content: string, file: TFile): ImageItem[] {
    const items: ImageItem[] = [];

    const markdownRegex = /!\[(.*?)\]\((.*?)\)/g;
    const wikiRegex = /!\[\[(.*?)\]\]/g;
    const htmlRegex = /<img[^>]*src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?[^>]*>|<img[^>]*alt=["']?([^"'>]*)["']?[^>]*src=["']([^"']+)["'][^>]*>/gi;

    let match: RegExpExecArray | null = null;

    // 解析标准 Markdown 图片语法。
    while ((match = markdownRegex.exec(content)) !== null) {
      const altRaw = match[1] || "";
      const srcRaw = match[2] || "";
      const alt = altRaw.split("|")[0] || altRaw;
      const src = this.resolveImagePath(srcRaw, file);
      if (!src) {
        continue;
      }
      items.push({ src, alt, title: alt, index: 0, total: 0, file });
    }

    // 解析 Obsidian WikiLink 图片语法。
    while ((match = wikiRegex.exec(content)) !== null) {
      const payload = (match[1] || "").trim();
      if (!payload) {
        continue;
      }

      const parts = payload.split("|").map((part) => part.trim());
      const srcRaw = parts[0] || "";
      const alt = parts.length > 1 ? parts.slice(1).join("|") : srcRaw;
      const src = this.resolveImagePath(srcRaw, file);
      if (!src) {
        continue;
      }
      items.push({ src, alt, title: alt, index: 0, total: 0, file });
    }

    // 解析 HTML img 标签。
    while ((match = htmlRegex.exec(content)) !== null) {
      const srcRaw = match[1] || match[4] || "";
      const alt = match[2] || match[3] || "";
      const src = this.resolveImagePath(srcRaw, file);
      if (!src) {
        continue;
      }
      items.push({ src, alt, title: alt, index: 0, total: 0, file });
    }

    return items;
  }

  /**
   * 解析资源路径为可预览 URL。
   */
  private resolveImagePath(rawPath: string, file: TFile): string {
    if (!rawPath) {
      return "";
    }

    const trimmed = rawPath.trim();

    // 直接支持 URL 与 data URI。
    if (/^(https?:|app:\/\/|data:image\/|file:\/\/)/i.test(trimmed)) {
      return trimmed.replace(/^file:\/\/+/, "app://local/");
    }

    // wikiLink 或 markdown 相对路径走 metadataCache 解析。
    const cleanPath = decodeURIComponent(trimmed.split("#")[0]);
    const resolved = this.app.metadataCache.getFirstLinkpathDest(cleanPath, file.path);
    if (!resolved) {
      return "";
    }
    return this.app.vault.getResourcePath(resolved);
  }

  /**
   * 定位当前点击图片在画廊中的索引。
   */
  private resolveActiveIndex(items: ImageItem[], sourceImage: HTMLImageElement): number {
    if (items.length === 0) {
      return -1;
    }

    const sourceSrc = sourceImage.currentSrc || sourceImage.src;
    const sourceAlt = sourceImage.alt || "";

    const exactIndex = items.findIndex((item) => item.src === sourceSrc && item.alt === sourceAlt);
    if (exactIndex >= 0) {
      return exactIndex;
    }

    const bySrcIndex = items.findIndex((item) => item.src === sourceSrc);
    return bySrcIndex >= 0 ? bySrcIndex : 0;
  }
}

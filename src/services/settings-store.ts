import type { Plugin } from "obsidian";
import { DEFAULT_SETTINGS, SETTINGS_SCHEMA_VERSION } from "../settings";
import {
  HotkeyModifier,
  PluginSettings,
  PreviewMode,
  TriggerScope,
  UILanguage,
  type GalleryTheme,
  type InteractionProfile
} from "../types";

/**
 * 设置存储服务。
 */
export class SettingsStore {
  private readonly plugin: Plugin;

  /**
   * 构造设置服务。
   */
  constructor(plugin: Plugin) {
    this.plugin = plugin;
  }

  /**
   * 读取配置并做迁移和兜底。
   */
  public async load(): Promise<PluginSettings> {
    const raw = (await this.plugin.loadData()) as Partial<PluginSettings> | null;
    return this.normalize(raw);
  }

  /**
   * 持久化配置。
   */
  public async save(settings: PluginSettings): Promise<void> {
    await this.plugin.saveData(this.normalize(settings));
  }

  /**
   * 合并默认值并修复非法字段。
   */
  public normalize(input: Partial<PluginSettings> | null | undefined): PluginSettings {
    const merged: PluginSettings = {
      ...DEFAULT_SETTINGS,
      ...input,
      schemaVersion: SETTINGS_SCHEMA_VERSION,
      gallery: this.normalizeGallery(input?.gallery),
      interaction: this.normalizeInteraction(input?.interaction)
    };

    merged.mode = this.ensureEnum(merged.mode, Object.values(PreviewMode), DEFAULT_SETTINGS.mode);
    merged.triggerScope = this.ensureEnum(
      merged.triggerScope,
      Object.values(TriggerScope),
      DEFAULT_SETTINGS.triggerScope
    );
    merged.moveHotkey = this.ensureEnum(
      merged.moveHotkey,
      Object.values(HotkeyModifier),
      DEFAULT_SETTINGS.moveHotkey
    );
    merged.switchHotkey = this.ensureEnum(
      merged.switchHotkey,
      Object.values(HotkeyModifier),
      DEFAULT_SETTINGS.switchHotkey
    );
    merged.uiLanguage = this.ensureEnum(
      merged.uiLanguage,
      Object.values(UILanguage),
      DEFAULT_SETTINGS.uiLanguage
    );

    merged.includeLinkedImages = Boolean(merged.includeLinkedImages);
    merged.pinCoverMode = Boolean(merged.pinCoverMode);
    merged.showImageTooltip = Boolean(merged.showImageTooltip);
    merged.imageBorderEnabled = Boolean(merged.imageBorderEnabled);

    merged.moveSpeed = this.clamp(this.safeNumber(merged.moveSpeed, DEFAULT_SETTINGS.moveSpeed), 1, 30);
    merged.pinMaximum = this.clamp(this.safeNumber(merged.pinMaximum, DEFAULT_SETTINGS.pinMaximum), 1, 6);

    merged.imageBorderWidth = this.safeString(merged.imageBorderWidth, DEFAULT_SETTINGS.imageBorderWidth);
    merged.imageBorderStyle = this.safeString(merged.imageBorderStyle, DEFAULT_SETTINGS.imageBorderStyle);
    merged.imageBorderColor = this.safeString(merged.imageBorderColor, DEFAULT_SETTINGS.imageBorderColor);

    return merged;
  }

  /**
   * 兜底画廊配置。
   */
  private normalizeGallery(input: Partial<GalleryTheme> | null | undefined): GalleryTheme {
    return {
      ...DEFAULT_SETTINGS.gallery,
      ...input,
      enabled: Boolean(input?.enabled ?? DEFAULT_SETTINGS.gallery.enabled),
      highlightActiveBorder: Boolean(
        input?.highlightActiveBorder ?? DEFAULT_SETTINGS.gallery.highlightActiveBorder
      ),
      backgroundColor: this.safeString(
        input?.backgroundColor,
        DEFAULT_SETTINGS.gallery.backgroundColor
      ),
      hoverColor: this.safeString(input?.hoverColor, DEFAULT_SETTINGS.gallery.hoverColor),
      activeBorderColor: this.safeString(
        input?.activeBorderColor,
        DEFAULT_SETTINGS.gallery.activeBorderColor
      )
    };
  }

  /**
   * 兜底交互配置。
   */
  private normalizeInteraction(
    input: Partial<InteractionProfile> | null | undefined
  ): InteractionProfile {
    return {
      ...DEFAULT_SETTINGS.interaction,
      ...input,
      enableMobileGestures: Boolean(
        input?.enableMobileGestures ?? DEFAULT_SETTINGS.interaction.enableMobileGestures
      ),
      enableDoubleTapZoom: Boolean(
        input?.enableDoubleTapZoom ?? DEFAULT_SETTINGS.interaction.enableDoubleTapZoom
      ),
      longPressMenuMs: this.clamp(
        this.safeNumber(input?.longPressMenuMs, DEFAULT_SETTINGS.interaction.longPressMenuMs),
        250,
        1200
      )
    };
  }

  /**
   * 校验枚举值。
   */
  private ensureEnum<T extends string>(
    value: unknown,
    validValues: readonly T[],
    fallback: T
  ): T {
    if (typeof value !== "string") {
      return fallback;
    }
    return (validValues as readonly string[]).includes(value) ? (value as T) : fallback;
  }

  /**
   * 安全读取字符串。
   */
  private safeString(value: unknown, fallback: string): string {
    return typeof value === "string" && value.length > 0 ? value : fallback;
  }

  /**
   * 安全读取数字。
   */
  private safeNumber(value: unknown, fallback: number): number {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    return fallback;
  }

  /**
   * 数值裁剪。
   */
  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}

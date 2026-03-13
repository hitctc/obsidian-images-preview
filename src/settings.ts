import { App, PluginSettingTab, Setting } from "obsidian";
import type ImagesPreviewPlugin from "./main";
import { t } from "./i18n";
import {
  HotkeyModifier,
  PluginSettings,
  PreviewMode,
  TriggerScope,
  UILanguage
} from "./types";

/**
 * 插件设置版本号。
 */
export const SETTINGS_SCHEMA_VERSION = 1;

/**
 * 默认配置。
 */
export const DEFAULT_SETTINGS: PluginSettings = {
  schemaVersion: SETTINGS_SCHEMA_VERSION,
  mode: PreviewMode.Normal,
  triggerScope: TriggerScope.MarkdownOnly,
  includeLinkedImages: true,
  moveHotkey: HotkeyModifier.None,
  switchHotkey: HotkeyModifier.Ctrl,
  moveSpeed: 10,
  pinMaximum: 3,
  pinCoverMode: true,
  showImageTooltip: true,
  uiLanguage: UILanguage.Auto,
  imageBorderEnabled: false,
  imageBorderWidth: "medium",
  imageBorderStyle: "solid",
  imageBorderColor: "var(--interactive-accent)",
  gallery: {
    enabled: true,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    hoverColor: "rgba(0, 0, 0, 0.6)",
    activeBorderColor: "var(--interactive-accent)",
    highlightActiveBorder: true
  },
  interaction: {
    enableMobileGestures: true,
    enableDoubleTapZoom: true,
    longPressMenuMs: 450
  }
};

/**
 * 热键下拉配置。
 */
const HOTKEY_OPTIONS: Record<HotkeyModifier, string> = {
  [HotkeyModifier.None]: "None",
  [HotkeyModifier.Ctrl]: "Ctrl",
  [HotkeyModifier.Alt]: "Alt",
  [HotkeyModifier.Shift]: "Shift",
  [HotkeyModifier.CtrlAlt]: "Ctrl + Alt",
  [HotkeyModifier.CtrlShift]: "Ctrl + Shift",
  [HotkeyModifier.ShiftAlt]: "Shift + Alt",
  [HotkeyModifier.CtrlShiftAlt]: "Ctrl + Shift + Alt"
};

/**
 * 设置页实现。
 */
export class ImagesPreviewSettingTab extends PluginSettingTab {
  private readonly plugin: ImagesPreviewPlugin;

  /**
   * 构造设置页。
   */
  constructor(app: App, plugin: ImagesPreviewPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  /**
   * 每次打开设置页时刷新内容。
   */
  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName(t("settings.title", this.app))
      .setHeading();

    this.renderLanguageSetting(containerEl);
    this.renderModeSetting(containerEl);
    this.renderTriggerSetting(containerEl);
    this.renderPinSetting(containerEl);
    this.renderViewSetting(containerEl);
    this.renderHotkeySetting(containerEl);
    this.renderMobileSetting(containerEl);
  }

  /**
   * 渲染界面语言配置。
   */
  private renderLanguageSetting(containerEl: HTMLElement): void {
    new Setting(containerEl)
      .setName(t("settings.uiLanguage", this.app))
      .addDropdown((dropdown) => {
        dropdown
          .addOption(UILanguage.Auto, t("language.auto", this.app))
          .addOption(UILanguage.Zh, t("language.zh", this.app))
          .addOption(UILanguage.En, t("language.en", this.app))
          .setValue(this.plugin.settings.uiLanguage)
          .onChange(async (value) => {
            this.plugin.settings.uiLanguage = value as UILanguage;
            await this.plugin.saveSettings();
            this.display();
          });
      });
  }

  /**
   * 渲染模式配置。
   */
  private renderModeSetting(containerEl: HTMLElement): void {
    new Setting(containerEl)
      .setName(t("settings.mode", this.app))
      .addDropdown((dropdown) => {
        dropdown
          .addOption(PreviewMode.Normal, t("mode.normal", this.app))
          .addOption(PreviewMode.Pin, t("mode.pin", this.app))
          .setValue(this.plugin.settings.mode)
          .onChange(async (value) => {
            this.plugin.settings.mode = value as PreviewMode;
            await this.plugin.saveSettings();
            this.plugin.controller.syncMode();
          });
      });
  }

  /**
   * 渲染触发范围与链接图片配置。
   */
  private renderTriggerSetting(containerEl: HTMLElement): void {
    const triggerScopeSetting = new Setting(containerEl)
      .setName(t("settings.triggerScope", this.app))
      .setDesc(t("settings.triggerScopeHint", this.app));

    triggerScopeSetting.addDropdown((dropdown) => {
      dropdown
        .addOption(TriggerScope.MarkdownOnly, t("scope.markdown", this.app))
        .addOption(TriggerScope.MarkdownAndCommon, t("scope.common", this.app))
        .addOption(TriggerScope.Global, t("scope.global", this.app))
        .setValue(this.plugin.settings.triggerScope)
        .onChange(async (value) => {
          this.plugin.settings.triggerScope = value as TriggerScope;
          await this.plugin.saveSettings();
          this.plugin.controller.refreshSelectors();
        });
    });

    new Setting(containerEl)
      .setName(t("settings.includeLinked", this.app))
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.includeLinkedImages)
          .onChange(async (value) => {
            this.plugin.settings.includeLinkedImages = value;
            await this.plugin.saveSettings();
            this.plugin.controller.refreshSelectors();
          });
      });
  }

  /**
   * 渲染 Pin 模式参数。
   */
  private renderPinSetting(containerEl: HTMLElement): void {
    const pinMaximumSetting = new Setting(containerEl).setName(t("settings.pinMaximum", this.app));
    const updatePinMaximumHint = (value: number): void => {
      pinMaximumSetting.setDesc(
        t("settings.pinMaximumHint", this.app).replace("{count}", String(value))
      );
    };
    updatePinMaximumHint(this.plugin.settings.pinMaximum);

    pinMaximumSetting.addSlider((slider) => {
      slider
        .setLimits(1, 6, 1)
        .setValue(this.plugin.settings.pinMaximum)
        .setDynamicTooltip()
        .onChange(async (value) => {
          this.plugin.settings.pinMaximum = value;
          updatePinMaximumHint(value);
          await this.plugin.saveSettings();
        });
    });

    new Setting(containerEl)
      .setName(t("settings.pinCoverMode", this.app))
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.pinCoverMode)
          .onChange(async (value) => {
            this.plugin.settings.pinCoverMode = value;
            await this.plugin.saveSettings();
          });
      });
  }

  /**
   * 渲染视觉与画廊配置。
   */
  private renderViewSetting(containerEl: HTMLElement): void {
    new Setting(containerEl)
      .setName(t("settings.gallery", this.app))
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.gallery.enabled)
          .onChange(async (value) => {
            this.plugin.settings.gallery.enabled = value;
            await this.plugin.saveSettings();
          });
      });

    const moveSpeedSetting = new Setting(containerEl).setName(t("settings.moveSpeed", this.app));
    const updateMoveSpeedHint = (value: number): void => {
      moveSpeedSetting.setDesc(
        t("settings.moveSpeedHint", this.app).replace("{speed}", String(value))
      );
    };
    updateMoveSpeedHint(this.plugin.settings.moveSpeed);

    moveSpeedSetting.addSlider((slider) => {
      slider
        .setLimits(1, 30, 1)
        .setValue(this.plugin.settings.moveSpeed)
        .setDynamicTooltip()
        .onChange(async (value) => {
          this.plugin.settings.moveSpeed = value;
          updateMoveSpeedHint(value);
          await this.plugin.saveSettings();
        });
    });
  }

  /**
   * 渲染热键配置。
   */
  private renderHotkeySetting(containerEl: HTMLElement): void {
    new Setting(containerEl)
      .setName(t("settings.moveHotkey", this.app))
      .setDesc(t("settings.moveHotkeyHint", this.app))
      .addDropdown((dropdown) => {
        this.fillHotkeyOptions(dropdown, this.plugin.settings.moveHotkey, async (value) => {
          this.plugin.settings.moveHotkey = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName(t("settings.switchHotkey", this.app))
      .setDesc(t("settings.switchHotkeyHint", this.app))
      .addDropdown((dropdown) => {
        this.fillHotkeyOptions(dropdown, this.plugin.settings.switchHotkey, async (value) => {
          this.plugin.settings.switchHotkey = value;
          await this.plugin.saveSettings();
        });
      });
  }

  /**
   * 渲染移动端交互配置。
   */
  private renderMobileSetting(containerEl: HTMLElement): void {
    new Setting(containerEl)
      .setName(t("settings.mobileGesture", this.app))
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.interaction.enableMobileGestures)
          .onChange(async (value) => {
            this.plugin.settings.interaction.enableMobileGestures = value;
            await this.plugin.saveSettings();
          });
      });
  }

  /**
   * 统一填充热键下拉。
   */
  private fillHotkeyOptions(
    dropdown: import("obsidian").DropdownComponent,
    value: HotkeyModifier,
    onChange: (value: HotkeyModifier) => Promise<void>
  ): void {
    Object.values(HotkeyModifier).forEach((hotkey) => {
      dropdown.addOption(hotkey, HOTKEY_OPTIONS[hotkey]);
    });

    dropdown.setValue(value).onChange(async (selected) => {
      await onChange(selected as HotkeyModifier);
    });
  }
}

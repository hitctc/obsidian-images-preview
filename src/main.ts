import { Notice, Plugin } from "obsidian";
import { setLocalePreference, t } from "./i18n";
import { PreviewController } from "./controllers/preview-controller";
import { ImagesPreviewSettingTab } from "./settings";
import { SettingsStore } from "./services/settings-store";
import { PreviewMode, type PluginSettings } from "./types";

/**
 * 插件主入口。
 */
export default class ImagesPreviewPlugin extends Plugin {
  public settings!: PluginSettings;
  public controller!: PreviewController;

  private settingsStore!: SettingsStore;

  /**
   * 插件加载生命周期。
   */
  public async onload(): Promise<void> {
    this.settingsStore = new SettingsStore(this);
    this.settings = await this.settingsStore.load();
    setLocalePreference(this.settings.uiLanguage);

    this.controller = new PreviewController(this.app, this, () => this.settings);
    this.controller.initialize();

    this.addSettingTab(new ImagesPreviewSettingTab(this.app, this));
    this.registerCommands();
  }

  /**
   * 插件卸载生命周期。
   */
  public onunload(): void {
    this.controller?.destroy();
  }

  /**
   * 持久化设置。
   */
  public async saveSettings(): Promise<void> {
    this.settings = this.settingsStore.normalize(this.settings);
    setLocalePreference(this.settings.uiLanguage);
    await this.settingsStore.save(this.settings);
  }

  /**
   * 注册命令。
   */
  private registerCommands(): void {
    this.addCommand({
      id: "open-preview-at-active-image",
      name: t("command.open", this.app),
      callback: () => {
        void this.controller.openPreviewAtActiveImage();
      }
    });

    this.addCommand({
      id: "toggle-preview-mode",
      name: t("command.toggle", this.app),
      callback: async () => {
        const mode = this.controller.toggleMode();
        await this.saveSettings();
        new Notice(mode === PreviewMode.Normal ? t("mode.normal", this.app) : t("mode.pin", this.app));
      }
    });

    this.addCommand({
      id: "close-active-preview",
      name: t("command.close", this.app),
      callback: () => {
        this.controller.closeActivePreview();
      }
    });

    this.addCommand({
      id: "next-image",
      name: t("command.next", this.app),
      callback: () => {
        this.controller.switchToNextImage();
      }
    });

    this.addCommand({
      id: "prev-image",
      name: t("command.prev", this.app),
      callback: () => {
        this.controller.switchToPreviousImage();
      }
    });
  }
}

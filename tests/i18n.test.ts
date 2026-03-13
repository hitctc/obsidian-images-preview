import { afterEach, describe, expect, it } from "vitest";
import { setLocalePreference, t } from "../src/i18n";

/**
 * 每个用例后恢复为跟随系统，避免全局状态污染。
 */
afterEach(() => {
  setLocalePreference("auto");
});

describe("i18n", () => {
  it("returns Chinese labels when locale preference is zh", () => {
    setLocalePreference("zh");
    expect(t("toolbar.copy")).toBe("复制");
    expect(t("toolbar.copyName")).toBe("复制图片名称");
    expect(t("notice.copyNameSuccess")).toBe("图片名称已复制。");
    expect(t("settings.uiLanguage")).toBe("界面语言");
    expect(t("settings.triggerScopeHint")).toBe(
      "仅 Markdown：只在笔记正文/源码或图片视图触发；Markdown + 常见面板：额外支持弹窗与 Canvas；全局图片选择器：当前窗口任意图片都可触发。"
    );
    expect(t("settings.pinMaximumHint")).toBe("当前设置：{count} 张图片");
    expect(t("settings.moveSpeedHint")).toBe("当前速度：{speed}");
    expect(t("settings.moveHotkeyHint")).toBe("修饰键 + 方向键");
    expect(t("settings.switchHotkeyHint")).toBe("修饰键 + 左/右方向键");
  });

  it("returns English labels when locale preference is en", () => {
    setLocalePreference("en");
    expect(t("toolbar.copy")).toBe("Copy");
    expect(t("toolbar.copyName")).toBe("Copy Name");
    expect(t("notice.copyNameSuccess")).toBe("Image name copied.");
    expect(t("settings.uiLanguage")).toBe("Interface language");
    expect(t("settings.triggerScopeHint")).toBe(
      "Markdown only: triggers in note/image views only; Markdown + common panels: also covers modal and Canvas; Global image selector: triggers on any image in current window."
    );
    expect(t("settings.pinMaximumHint")).toBe("Current value: {count} images");
    expect(t("settings.moveSpeedHint")).toBe("Current speed: {speed}");
    expect(t("settings.moveHotkeyHint")).toBe("Modifier + Arrow keys");
    expect(t("settings.switchHotkeyHint")).toBe("Modifier + Arrow Left / Arrow Right");
  });
});

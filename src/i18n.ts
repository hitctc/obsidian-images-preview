import type { App } from "obsidian";

/**
 * 支持的语言代码。
 */
export type LocaleKey = "en" | "zh";

/**
 * 语言偏好（auto = 跟随系统）。
 */
export type LocalePreference = "auto" | LocaleKey;

/**
 * 文案键。
 */
export type I18nKey =
  | "settings.title"
  | "settings.mode"
  | "settings.uiLanguage"
  | "settings.triggerScope"
  | "settings.triggerScopeHint"
  | "settings.includeLinked"
  | "settings.pinMaximum"
  | "settings.pinMaximumHint"
  | "settings.pinCoverMode"
  | "settings.gallery"
  | "settings.mobileGesture"
  | "settings.moveSpeed"
  | "settings.moveSpeedHint"
  | "settings.moveHotkey"
  | "settings.switchHotkey"
  | "settings.moveHotkeyHint"
  | "settings.switchHotkeyHint"
  | "mode.normal"
  | "mode.pin"
  | "scope.markdown"
  | "scope.common"
  | "scope.global"
  | "language.auto"
  | "language.zh"
  | "language.en"
  | "toolbar.fit"
  | "toolbar.copy"
  | "toolbar.copyName"
  | "toolbar.close"
  | "notice.copySuccess"
  | "notice.copyFailed"
  | "notice.copyNameSuccess"
  | "notice.copyNameFailed"
  | "notice.noImage"
  | "command.open"
  | "command.toggle"
  | "command.close"
  | "command.next"
  | "command.prev";

/**
 * 语言字典。
 */
const LOCALES: Record<LocaleKey, Record<I18nKey, string>> = {
  en: {
    "settings.title": "Images Preview Settings",
    "settings.mode": "Preview mode",
    "settings.uiLanguage": "Interface language",
    "settings.triggerScope": "Trigger scope",
    "settings.triggerScopeHint":
      "Markdown only: triggers in note/image views only; Markdown + common panels: also covers modal and Canvas; Global image selector: triggers on any image in current window.",
    "settings.includeLinked": "Enable linked images",
    "settings.pinMaximum": "Pin mode max images",
    "settings.pinMaximumHint": "Current value: {count} images",
    "settings.pinCoverMode": "Replace oldest image when full",
    "settings.gallery": "Enable gallery navbar",
    "settings.mobileGesture": "Enable mobile gestures",
    "settings.moveSpeed": "Keyboard move speed",
    "settings.moveSpeedHint": "Current speed: {speed}",
    "settings.moveHotkey": "Move image modifier",
    "settings.switchHotkey": "Switch image modifier",
    "settings.moveHotkeyHint": "Modifier + Arrow keys",
    "settings.switchHotkeyHint": "Modifier + Arrow Left / Arrow Right",
    "mode.normal": "Normal",
    "mode.pin": "Pin",
    "scope.markdown": "Markdown only",
    "scope.common": "Markdown + common panels",
    "scope.global": "Global image selector",
    "language.auto": "System default",
    "language.zh": "Chinese",
    "language.en": "English",
    "toolbar.fit": "Fit",
    "toolbar.copy": "Copy",
    "toolbar.copyName": "Copy Name",
    "toolbar.close": "Close",
    "notice.copySuccess": "Image copied.",
    "notice.copyFailed": "Image copy failed.",
    "notice.copyNameSuccess": "Image name copied.",
    "notice.copyNameFailed": "Image name copy failed.",
    "notice.noImage": "No image found in current view.",
    "command.open": "Open preview at active image",
    "command.toggle": "Toggle preview mode",
    "command.close": "Close active preview",
    "command.next": "Next image",
    "command.prev": "Previous image"
  },
  zh: {
    "settings.title": "图片浮窗预览设置",
    "settings.mode": "预览模式",
    "settings.uiLanguage": "界面语言",
    "settings.triggerScope": "触发范围",
    "settings.triggerScopeHint":
      "仅 Markdown：只在笔记正文/源码或图片视图触发；Markdown + 常见面板：额外支持弹窗与 Canvas；全局图片选择器：当前窗口任意图片都可触发。",
    "settings.includeLinked": "支持带链接图片",
    "settings.pinMaximum": "Pin 模式最大图片数",
    "settings.pinMaximumHint": "当前设置：{count} 张图片",
    "settings.pinCoverMode": "达到上限时替换最旧图片",
    "settings.gallery": "启用画廊导航栏",
    "settings.mobileGesture": "启用移动端手势",
    "settings.moveSpeed": "键盘移动速度",
    "settings.moveSpeedHint": "当前速度：{speed}",
    "settings.moveHotkey": "移动图片修饰键",
    "settings.switchHotkey": "切换图片修饰键",
    "settings.moveHotkeyHint": "修饰键 + 方向键",
    "settings.switchHotkeyHint": "修饰键 + 左/右方向键",
    "mode.normal": "普通模式",
    "mode.pin": "Pin 模式",
    "scope.markdown": "仅 Markdown",
    "scope.common": "Markdown + 常见面板",
    "scope.global": "全局图片选择器",
    "language.auto": "跟随系统",
    "language.zh": "中文",
    "language.en": "英文",
    "toolbar.fit": "适配",
    "toolbar.copy": "复制",
    "toolbar.copyName": "复制图片名称",
    "toolbar.close": "关闭",
    "notice.copySuccess": "图片已复制。",
    "notice.copyFailed": "图片复制失败。",
    "notice.copyNameSuccess": "图片名称已复制。",
    "notice.copyNameFailed": "图片名称复制失败。",
    "notice.noImage": "当前视图未找到图片。",
    "command.open": "在当前图片打开预览",
    "command.toggle": "切换预览模式",
    "command.close": "关闭当前预览",
    "command.next": "下一张图片",
    "command.prev": "上一张图片"
  }
};

let localeOverride: LocaleKey | null = null;

/**
 * 设置语言偏好。
 */
export function setLocalePreference(preference: LocalePreference): void {
  localeOverride = preference === "auto" ? null : preference;
}

/**
 * 根据当前环境推断语言。
 */
function resolveLocale(_app?: App): LocaleKey {
  if (localeOverride) {
    return localeOverride;
  }
  const language = (typeof navigator !== "undefined" && navigator.language) || "en";
  return language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

/**
 * 获取本地化文本。
 */
export function t(key: I18nKey, app?: App): string {
  const locale = resolveLocale(app);
  return LOCALES[locale][key] ?? LOCALES.en[key] ?? key;
}

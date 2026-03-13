"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ImagesPreviewPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// src/i18n.ts
var LOCALES = {
  en: {
    "settings.title": "Images Preview Settings",
    "settings.mode": "Preview mode",
    "settings.uiLanguage": "Interface language",
    "settings.triggerScope": "Trigger scope",
    "settings.triggerScopeHint": "Markdown only: triggers in note/image views only; Markdown + common panels: also covers modal and Canvas; Global image selector: triggers on any image in current window.",
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
    "settings.title": "\u56FE\u7247\u6D6E\u7A97\u9884\u89C8\u8BBE\u7F6E",
    "settings.mode": "\u9884\u89C8\u6A21\u5F0F",
    "settings.uiLanguage": "\u754C\u9762\u8BED\u8A00",
    "settings.triggerScope": "\u89E6\u53D1\u8303\u56F4",
    "settings.triggerScopeHint": "\u4EC5 Markdown\uFF1A\u53EA\u5728\u7B14\u8BB0\u6B63\u6587/\u6E90\u7801\u6216\u56FE\u7247\u89C6\u56FE\u89E6\u53D1\uFF1BMarkdown + \u5E38\u89C1\u9762\u677F\uFF1A\u989D\u5916\u652F\u6301\u5F39\u7A97\u4E0E Canvas\uFF1B\u5168\u5C40\u56FE\u7247\u9009\u62E9\u5668\uFF1A\u5F53\u524D\u7A97\u53E3\u4EFB\u610F\u56FE\u7247\u90FD\u53EF\u89E6\u53D1\u3002",
    "settings.includeLinked": "\u652F\u6301\u5E26\u94FE\u63A5\u56FE\u7247",
    "settings.pinMaximum": "Pin \u6A21\u5F0F\u6700\u5927\u56FE\u7247\u6570",
    "settings.pinMaximumHint": "\u5F53\u524D\u8BBE\u7F6E\uFF1A{count} \u5F20\u56FE\u7247",
    "settings.pinCoverMode": "\u8FBE\u5230\u4E0A\u9650\u65F6\u66FF\u6362\u6700\u65E7\u56FE\u7247",
    "settings.gallery": "\u542F\u7528\u753B\u5ECA\u5BFC\u822A\u680F",
    "settings.mobileGesture": "\u542F\u7528\u79FB\u52A8\u7AEF\u624B\u52BF",
    "settings.moveSpeed": "\u952E\u76D8\u79FB\u52A8\u901F\u5EA6",
    "settings.moveSpeedHint": "\u5F53\u524D\u901F\u5EA6\uFF1A{speed}",
    "settings.moveHotkey": "\u79FB\u52A8\u56FE\u7247\u4FEE\u9970\u952E",
    "settings.switchHotkey": "\u5207\u6362\u56FE\u7247\u4FEE\u9970\u952E",
    "settings.moveHotkeyHint": "\u4FEE\u9970\u952E + \u65B9\u5411\u952E",
    "settings.switchHotkeyHint": "\u4FEE\u9970\u952E + \u5DE6/\u53F3\u65B9\u5411\u952E",
    "mode.normal": "\u666E\u901A\u6A21\u5F0F",
    "mode.pin": "Pin \u6A21\u5F0F",
    "scope.markdown": "\u4EC5 Markdown",
    "scope.common": "Markdown + \u5E38\u89C1\u9762\u677F",
    "scope.global": "\u5168\u5C40\u56FE\u7247\u9009\u62E9\u5668",
    "language.auto": "\u8DDF\u968F\u7CFB\u7EDF",
    "language.zh": "\u4E2D\u6587",
    "language.en": "\u82F1\u6587",
    "toolbar.fit": "\u9002\u914D",
    "toolbar.copy": "\u590D\u5236",
    "toolbar.copyName": "\u590D\u5236\u56FE\u7247\u540D\u79F0",
    "toolbar.close": "\u5173\u95ED",
    "notice.copySuccess": "\u56FE\u7247\u5DF2\u590D\u5236\u3002",
    "notice.copyFailed": "\u56FE\u7247\u590D\u5236\u5931\u8D25\u3002",
    "notice.copyNameSuccess": "\u56FE\u7247\u540D\u79F0\u5DF2\u590D\u5236\u3002",
    "notice.copyNameFailed": "\u56FE\u7247\u540D\u79F0\u590D\u5236\u5931\u8D25\u3002",
    "notice.noImage": "\u5F53\u524D\u89C6\u56FE\u672A\u627E\u5230\u56FE\u7247\u3002",
    "command.open": "\u5728\u5F53\u524D\u56FE\u7247\u6253\u5F00\u9884\u89C8",
    "command.toggle": "\u5207\u6362\u9884\u89C8\u6A21\u5F0F",
    "command.close": "\u5173\u95ED\u5F53\u524D\u9884\u89C8",
    "command.next": "\u4E0B\u4E00\u5F20\u56FE\u7247",
    "command.prev": "\u4E0A\u4E00\u5F20\u56FE\u7247"
  }
};
var localeOverride = null;
function setLocalePreference(preference) {
  localeOverride = preference === "auto" ? null : preference;
}
function resolveLocale(_app) {
  if (localeOverride) {
    return localeOverride;
  }
  const language = typeof navigator !== "undefined" && navigator.language || "en";
  return language.toLowerCase().startsWith("zh") ? "zh" : "en";
}
function t(key, app) {
  const locale = resolveLocale(app);
  return LOCALES[locale][key] ?? LOCALES.en[key] ?? key;
}

// src/controllers/preview-controller.ts
var import_obsidian3 = require("obsidian");

// src/input/input-adapter.ts
var _InputAdapter = class _InputAdapter {
  /**
   * 构造输入适配层。
   */
  constructor(doc, callbacks) {
    this.dragging = false;
    this.pinchDistance = 0;
    this.lastTapAt = 0;
    this.longPressTimer = null;
    this.doc = doc;
    this.callbacks = callbacks;
  }
  /**
   * 绑定到图片元素。
   */
  bind(imageEl) {
    const onMouseDown = (event) => {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      this.callbacks.onFocus();
      this.dragging = true;
      this.callbacks.onDragStart(event.clientX, event.clientY);
    };
    const onMouseMove = (event) => {
      if (!this.dragging) {
        return;
      }
      event.preventDefault();
      this.callbacks.onDragMove(event.clientX, event.clientY);
    };
    const onMouseUp = () => {
      if (!this.dragging) {
        return;
      }
      this.dragging = false;
      this.callbacks.onDragEnd();
    };
    const onWheel = (event) => {
      event.preventDefault();
      this.callbacks.onFocus();
      const factor = this.computeWheelZoomFactor(event);
      if (Math.abs(factor - 1) < 1e-3) {
        return;
      }
      this.callbacks.onWheelZoom(factor, event.clientX, event.clientY);
    };
    const onDoubleClick = () => {
      this.callbacks.onDoubleTap();
    };
    const onContextMenu = (event) => {
      event.preventDefault();
      this.callbacks.onLongPressMenu(event.clientX, event.clientY);
    };
    const onTouchStart = (event) => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        this.callbacks.onFocus();
        this.dragging = true;
        this.callbacks.onDragStart(touch.clientX, touch.clientY);
        this.prepareLongPress(touch.clientX, touch.clientY);
        this.detectDoubleTap();
      }
      if (event.touches.length === 2) {
        this.clearLongPress();
        this.dragging = false;
        this.pinchDistance = this.measureTouchDistance(event.touches[0], event.touches[1]);
      }
    };
    const onTouchMove = (event) => {
      if (event.touches.length === 2) {
        event.preventDefault();
        const [first, second] = [event.touches[0], event.touches[1]];
        const distance = this.measureTouchDistance(first, second);
        if (this.pinchDistance > 0) {
          const ratio = distance / this.pinchDistance;
          const anchorX = (first.clientX + second.clientX) / 2;
          const anchorY = (first.clientY + second.clientY) / 2;
          this.callbacks.onPinchZoom(ratio, anchorX, anchorY);
        }
        this.pinchDistance = distance;
        return;
      }
      if (event.touches.length === 1 && this.dragging) {
        event.preventDefault();
        this.clearLongPress();
        const touch = event.touches[0];
        this.callbacks.onDragMove(touch.clientX, touch.clientY);
      }
    };
    const onTouchEnd = () => {
      this.clearLongPress();
      this.pinchDistance = 0;
      if (this.dragging) {
        this.dragging = false;
        this.callbacks.onDragEnd();
      }
    };
    imageEl.addEventListener("mousedown", onMouseDown);
    imageEl.addEventListener("wheel", onWheel, { passive: false });
    imageEl.addEventListener("dblclick", onDoubleClick);
    imageEl.addEventListener("contextmenu", onContextMenu);
    imageEl.addEventListener("touchstart", onTouchStart, { passive: true });
    imageEl.addEventListener("touchmove", onTouchMove, { passive: false });
    imageEl.addEventListener("touchend", onTouchEnd, { passive: true });
    imageEl.addEventListener("touchcancel", onTouchEnd, { passive: true });
    this.doc.addEventListener("mousemove", onMouseMove);
    this.doc.addEventListener("mouseup", onMouseUp);
    return () => {
      this.clearLongPress();
      imageEl.removeEventListener("mousedown", onMouseDown);
      imageEl.removeEventListener("wheel", onWheel);
      imageEl.removeEventListener("dblclick", onDoubleClick);
      imageEl.removeEventListener("contextmenu", onContextMenu);
      imageEl.removeEventListener("touchstart", onTouchStart);
      imageEl.removeEventListener("touchmove", onTouchMove);
      imageEl.removeEventListener("touchend", onTouchEnd);
      imageEl.removeEventListener("touchcancel", onTouchEnd);
      this.doc.removeEventListener("mousemove", onMouseMove);
      this.doc.removeEventListener("mouseup", onMouseUp);
    };
  }
  /**
   * 识别双击/双击触控。
   */
  detectDoubleTap() {
    const now = Date.now();
    if (now - this.lastTapAt <= 260) {
      this.callbacks.onDoubleTap();
    }
    this.lastTapAt = now;
  }
  /**
   * 准备长按菜单。
   */
  prepareLongPress(clientX, clientY) {
    this.clearLongPress();
    this.longPressTimer = window.setTimeout(() => {
      this.callbacks.onLongPressMenu(clientX, clientY);
    }, 450);
  }
  /**
   * 清理长按计时器。
   */
  clearLongPress() {
    if (this.longPressTimer === null) {
      return;
    }
    window.clearTimeout(this.longPressTimer);
    this.longPressTimer = null;
  }
  /**
   * 计算双指距离。
   */
  measureTouchDistance(first, second) {
    const dx = first.clientX - second.clientX;
    const dy = first.clientY - second.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  /**
   * 计算滚轮缩放倍率。
   * 说明：先把 delta 统一成像素，再限制单次输入幅度，最后映射为平滑倍率。
   */
  computeWheelZoomFactor(event) {
    const pixelDeltaY = this.normalizeWheelDeltaY(event);
    if (!Number.isFinite(pixelDeltaY) || pixelDeltaY === 0) {
      return 1;
    }
    const normalizedStep = this.clamp(
      pixelDeltaY / _InputAdapter.WHEEL_STEP_PIXELS,
      -_InputAdapter.WHEEL_MAX_STEP,
      _InputAdapter.WHEEL_MAX_STEP
    );
    return Math.pow(_InputAdapter.WHEEL_BASE_FACTOR, -normalizedStep);
  }
  /**
   * 把不同 deltaMode 统一换算成像素。
   */
  normalizeWheelDeltaY(event) {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
      return event.deltaY * _InputAdapter.WHEEL_LINE_HEIGHT_PIXELS;
    }
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      const pageHeight = this.doc.documentElement.clientHeight || this.doc.body?.clientHeight || window.innerHeight || 800;
      return event.deltaY * pageHeight;
    }
    return event.deltaY;
  }
  /**
   * 数值限幅，避免单次缩放跳变过大。
   */
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
};
// 120px 近似一次传统滚轮刻度；用于把不同设备输入统一到同一尺度。
_InputAdapter.WHEEL_STEP_PIXELS = 120;
// 轻微提高单步上限，防止触控板或惯性滚动出现突兀跳变。
_InputAdapter.WHEEL_MAX_STEP = 1.25;
// 传统滚轮一步对应约 12% 缩放，保留鼠标滚轮手感。
_InputAdapter.WHEEL_BASE_FACTOR = 1.12;
// 行模式转像素的经验值，便于兼容不同浏览器的 deltaMode。
_InputAdapter.WHEEL_LINE_HEIGHT_PIXELS = 16;
var InputAdapter = _InputAdapter;

// src/core/image-transform-engine.ts
var ImageTransformEngine = class {
  /**
   * 创建初始状态并按视口做自适应。
   */
  static createInitialState(naturalWidth, naturalHeight, viewportWidth, viewportHeight, reservedBottom = 0) {
    const safeNaturalWidth = Math.max(1, naturalWidth);
    const safeNaturalHeight = Math.max(1, naturalHeight);
    const safeViewportWidth = Math.max(1, viewportWidth);
    const safeViewportHeight = Math.max(1, viewportHeight);
    const safeReservedBottom = Math.max(0, Math.min(reservedBottom, safeViewportHeight - 1));
    const availableHeight = Math.max(1, safeViewportHeight - safeReservedBottom);
    const maxWidth = safeViewportWidth * 0.8;
    const maxHeight = availableHeight * 0.8;
    const ratio = Math.min(maxWidth / safeNaturalWidth, maxHeight / safeNaturalHeight, 1);
    const width = safeNaturalWidth * ratio;
    const height = safeNaturalHeight * ratio;
    return {
      naturalWidth: safeNaturalWidth,
      naturalHeight: safeNaturalHeight,
      width,
      height,
      left: (safeViewportWidth - width) / 2,
      top: (availableHeight - height) / 2,
      zoomRatio: width / safeNaturalWidth
    };
  }
  /**
   * 按视口重新计算 fit。
   */
  static fitToViewport(current, viewportWidth, viewportHeight, reservedBottom = 0) {
    const fitted = this.createInitialState(
      current.naturalWidth,
      current.naturalHeight,
      viewportWidth,
      viewportHeight,
      reservedBottom
    );
    return {
      ...current,
      width: fitted.width,
      height: fitted.height,
      left: fitted.left,
      top: fitted.top,
      zoomRatio: fitted.zoomRatio
    };
  }
  /**
   * 缩放到 100%。
   */
  static zoomToActual(current, viewportWidth, viewportHeight, reservedBottom = 0) {
    const safeViewportHeight = Math.max(1, viewportHeight);
    const safeReservedBottom = Math.max(0, Math.min(reservedBottom, safeViewportHeight - 1));
    const availableHeight = Math.max(1, safeViewportHeight - safeReservedBottom);
    const width = current.naturalWidth;
    const height = current.naturalHeight;
    return {
      ...current,
      width,
      height,
      left: (viewportWidth - width) / 2,
      top: (availableHeight - height) / 2,
      zoomRatio: 1
    };
  }
  /**
   * 按锚点缩放，保证锚点视觉位置稳定。
   */
  static zoomAt(current, scaleFactor, anchor) {
    if (!Number.isFinite(scaleFactor) || scaleFactor <= 0) {
      return current;
    }
    const nextWidth = this.clampSize(current.width * scaleFactor, current.naturalWidth);
    const nextHeight = nextWidth / current.naturalWidth * current.naturalHeight;
    const ratioX = (anchor.x - current.left) / current.width;
    const ratioY = (anchor.y - current.top) / current.height;
    const left = anchor.x - ratioX * nextWidth;
    const top = anchor.y - ratioY * nextHeight;
    return {
      ...current,
      width: nextWidth,
      height: nextHeight,
      left,
      top,
      zoomRatio: nextWidth / current.naturalWidth
    };
  }
  /**
   * 根据偏移量移动图片。
   */
  static moveBy(current, offset) {
    return {
      ...current,
      left: current.left + offset.x,
      top: current.top + offset.y
    };
  }
  /**
   * 限制最小尺寸与最大倍率。
   */
  static clampSize(next, naturalWidth) {
    const minWidth = this.MIN_SIZE;
    const maxWidth = naturalWidth * this.MAX_RATIO;
    return Math.max(minWidth, Math.min(maxWidth, next));
  }
};
ImageTransformEngine.MIN_SIZE = 30;
ImageTransformEngine.MAX_RATIO = 20;

// src/types.ts
var PreviewMode = /* @__PURE__ */ ((PreviewMode2) => {
  PreviewMode2["Normal"] = "normal";
  PreviewMode2["Pin"] = "pin";
  return PreviewMode2;
})(PreviewMode || {});
var TriggerScope = /* @__PURE__ */ ((TriggerScope2) => {
  TriggerScope2["MarkdownOnly"] = "markdown-only";
  TriggerScope2["MarkdownAndCommon"] = "markdown-and-common";
  TriggerScope2["Global"] = "global";
  return TriggerScope2;
})(TriggerScope || {});
var HotkeyModifier = /* @__PURE__ */ ((HotkeyModifier2) => {
  HotkeyModifier2["None"] = "none";
  HotkeyModifier2["Ctrl"] = "ctrl";
  HotkeyModifier2["Alt"] = "alt";
  HotkeyModifier2["Shift"] = "shift";
  HotkeyModifier2["CtrlAlt"] = "ctrl-alt";
  HotkeyModifier2["CtrlShift"] = "ctrl-shift";
  HotkeyModifier2["ShiftAlt"] = "shift-alt";
  HotkeyModifier2["CtrlShiftAlt"] = "ctrl-shift-alt";
  return HotkeyModifier2;
})(HotkeyModifier || {});
var UILanguage = /* @__PURE__ */ ((UILanguage2) => {
  UILanguage2["Auto"] = "auto";
  UILanguage2["Zh"] = "zh";
  UILanguage2["En"] = "en";
  return UILanguage2;
})(UILanguage || {});

// src/core/preview-state-machine.ts
var PreviewStateMachine = class {
  constructor() {
    this.state = "idle" /* Idle */;
  }
  /**
   * 读取当前状态。
   */
  getState() {
    return this.state;
  }
  /**
   * 尝试打开预览。
   */
  open() {
    this.transition(["idle" /* Idle */], "open" /* Open */);
  }
  /**
   * 开始拖拽。
   */
  startDrag() {
    this.transition(["open" /* Open */, "menu" /* Menu */], "dragging" /* Dragging */);
  }
  /**
   * 结束拖拽。
   */
  endDrag() {
    this.transition(["dragging" /* Dragging */], "open" /* Open */);
  }
  /**
   * 打开菜单。
   */
  openMenu() {
    this.transition(["open" /* Open */], "menu" /* Menu */);
  }
  /**
   * 关闭菜单。
   */
  closeMenu() {
    this.transition(["menu" /* Menu */], "open" /* Open */);
  }
  /**
   * 关闭浮窗。
   */
  close() {
    this.state = "idle" /* Idle */;
  }
  /**
   * 判断是否处于可交互状态。
   */
  isInteractive() {
    return this.state !== "idle" /* Idle */;
  }
  /**
   * 内部通用转换函数。
   */
  transition(from, to) {
    if (!from.includes(this.state)) {
      throw new Error(`Invalid preview state transition: ${this.state} -> ${to}`);
    }
    this.state = to;
  }
};

// src/services/clipboard-service.ts
var import_obsidian = require("obsidian");
var ClipboardService = class {
  /**
   * 构造复制服务。
   */
  constructor(app) {
    this.app = app;
  }
  /**
   * 复制图片；失败时降级复制 URL。
   */
  async copyImageOrUrl(imgEl) {
    const copiedImage = await this.copyImage(imgEl);
    if (copiedImage) {
      new import_obsidian.Notice(t("notice.copySuccess", this.app));
      return true;
    }
    const copiedUrl = await this.copyPlainText(imgEl.src);
    if (copiedUrl) {
      new import_obsidian.Notice(`${t("notice.copyFailed", this.app)} URL copied instead.`);
      return true;
    }
    new import_obsidian.Notice(t("notice.copyFailed", this.app));
    return false;
  }
  /**
   * 优先尝试复制二进制图片。
   */
  async copyImage(imgEl) {
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
  async copyPlainText(value) {
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
  async renderImageToBlob(imgEl) {
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
    return await new Promise((resolve, reject) => {
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
  async loadImage(src) {
    return await new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Image load failed"));
      image.src = src;
    });
  }
};

// src/services/gallery-service.ts
var import_obsidian2 = require("obsidian");
var GalleryService = class {
  /**
   * 构造画廊服务。
   */
  constructor(app) {
    this.app = app;
  }
  /**
   * 对外主入口：先 DOM，再 Markdown 文本回退。
   */
  async collectWithFallback(doc, sourceImage, settings) {
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
  buildSelector(scope, includeLinkedImages) {
    const noLinkSuffix = includeLinkedImages ? "" : ":not(a img)";
    if (scope === "global" /* Global */) {
      return `img${noLinkSuffix}`;
    }
    const markdownSelectors = [
      `.workspace-leaf-content[data-type='markdown'] img${noLinkSuffix}`,
      `.workspace-leaf-content[data-type='image'] img${noLinkSuffix}`,
      `.markdown-preview-view img${noLinkSuffix}`,
      `.markdown-source-view.mod-cm6 img${noLinkSuffix}`
    ];
    if (scope === "markdown-only" /* MarkdownOnly */) {
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
  collectFromDocument(doc, sourceImage, selector) {
    const nodes = Array.from(doc.querySelectorAll(selector));
    const items = [];
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
  async collectFromActiveMarkdown(sourceImage) {
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
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
  parseMarkdownImages(content, file) {
    const items = [];
    const markdownRegex = /!\[(.*?)\]\((.*?)\)/g;
    const wikiRegex = /!\[\[(.*?)\]\]/g;
    const htmlRegex = /<img[^>]*src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?[^>]*>|<img[^>]*alt=["']?([^"'>]*)["']?[^>]*src=["']([^"']+)["'][^>]*>/gi;
    let match = null;
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
  resolveImagePath(rawPath, file) {
    if (!rawPath) {
      return "";
    }
    const trimmed = rawPath.trim();
    if (/^(https?:|app:\/\/|data:image\/|file:\/\/)/i.test(trimmed)) {
      return trimmed.replace(/^file:\/\/+/, "app://local/");
    }
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
  resolveActiveIndex(items, sourceImage) {
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
};

// src/ui/overlay-host.ts
var OverlayHost = class {
  /**
   * 构造宿主。
   */
  constructor(app, doc) {
    this.rootEl = null;
    this.maskEl = null;
    this.galleryEl = null;
    this.previews = /* @__PURE__ */ new Map();
    this.detachMaskClick = null;
    this.activePreviewId = null;
    this.app = app;
    this.doc = doc;
  }
  /**
   * 创建并挂载一个新预览。
   */
  openPreview(options) {
    this.ensureRoot();
    this.updateMask(options.mode, options.onMaskClick);
    if (options.mode === "normal" /* Normal */) {
      this.closeAll();
      this.updateMask(options.mode, options.onMaskClick);
    }
    const previewId = this.createPreviewId();
    const shellEl = this.createShell(options.mode);
    const imageEl = this.createImage();
    const captionBlockEl = this.createCaptionBlock(previewId, options.item, options.onToolbarAction);
    const captionEl = captionBlockEl.querySelector(".oip-image-caption");
    const toolbarEl = this.createToolbar(previewId, options.onToolbarAction);
    imageEl.src = options.item.src;
    imageEl.alt = options.item.alt || "";
    shellEl.appendChild(imageEl);
    shellEl.appendChild(captionBlockEl);
    shellEl.appendChild(toolbarEl);
    this.rootEl?.appendChild(shellEl);
    const preview = {
      id: previewId,
      shellEl,
      imageEl,
      captionEl: captionEl ?? this.createFallbackCaption(captionBlockEl),
      toolbarEl,
      item: options.item,
      state: {
        naturalWidth: 1,
        naturalHeight: 1,
        width: 1,
        height: 1,
        left: 0,
        top: 0,
        zoomRatio: 1
      }
    };
    this.previews.set(previewId, preview);
    this.setActive(previewId);
    this.updateGallery(options.settings, options.allItems, options.activeIndex, options.onGallerySelect);
    return preview;
  }
  /**
   * 对外刷新画廊，用于切图后更新激活态。
   */
  renderGallery(settings, allItems, activeIndex, onSelect) {
    this.updateGallery(settings, allItems, activeIndex, onSelect);
  }
  /**
   * 更新预览渲染状态。
   */
  applyState(previewId, state) {
    const preview = this.previews.get(previewId);
    if (!preview) {
      return;
    }
    preview.state = state;
    preview.shellEl.style.left = `${state.left}px`;
    preview.shellEl.style.top = `${state.top}px`;
    preview.imageEl.style.width = `${state.width}px`;
    preview.imageEl.style.height = `${state.height}px`;
    preview.imageEl.style.transform = "none";
    preview.captionEl.setText(this.resolveImageFileName(preview.item));
  }
  /**
   * 读取已挂载预览。
   */
  getPreview(previewId) {
    return this.previews.get(previewId);
  }
  /**
   * 获取当前激活预览。
   */
  getActivePreview() {
    if (!this.activePreviewId) {
      return null;
    }
    return this.previews.get(this.activePreviewId) ?? null;
  }
  /**
   * 设定激活预览。
   */
  setActive(previewId) {
    this.activePreviewId = previewId;
    this.previews.forEach((preview, id) => {
      preview.shellEl.toggleClass("is-active", id === previewId);
      if (id === previewId) {
        preview.shellEl.style.zIndex = `${2e3 + this.previews.size}`;
      }
    });
  }
  /**
   * 关闭指定预览。
   */
  closePreview(previewId) {
    const preview = this.previews.get(previewId);
    if (!preview) {
      return;
    }
    preview.shellEl.remove();
    this.previews.delete(previewId);
    if (this.activePreviewId === previewId) {
      const fallback = Array.from(this.previews.keys()).pop() ?? null;
      this.activePreviewId = fallback;
      if (fallback) {
        this.setActive(fallback);
      }
    }
    if (this.previews.size === 0) {
      this.hideMask();
      this.removeGallery();
    }
  }
  /**
   * 关闭当前激活预览。
   */
  closeActive() {
    if (!this.activePreviewId) {
      return;
    }
    this.closePreview(this.activePreviewId);
  }
  /**
   * 关闭全部预览。
   */
  closeAll() {
    this.previews.forEach((preview) => preview.shellEl.remove());
    this.previews.clear();
    this.activePreviewId = null;
    this.hideMask();
    this.removeGallery();
  }
  /**
   * 读取当前预览数量。
   */
  size() {
    return this.previews.size;
  }
  /**
   * 销毁宿主。
   */
  destroy() {
    this.closeAll();
    if (this.detachMaskClick) {
      this.detachMaskClick();
      this.detachMaskClick = null;
    }
    this.maskEl?.remove();
    this.rootEl?.remove();
    this.maskEl = null;
    this.rootEl = null;
  }
  /**
   * 创建根节点。
   */
  ensureRoot() {
    if (this.rootEl) {
      return;
    }
    this.rootEl = this.doc.createElement("div");
    this.rootEl.addClass("oip-overlay-root");
    this.maskEl = this.doc.createElement("div");
    this.maskEl.addClass("oip-overlay-mask");
    this.maskEl.style.display = "none";
    this.doc.body.appendChild(this.rootEl);
    this.rootEl.appendChild(this.maskEl);
  }
  /**
   * 根据模式更新遮罩。
   */
  updateMask(mode, onMaskClick) {
    if (!this.maskEl) {
      return;
    }
    if (this.detachMaskClick) {
      this.detachMaskClick();
      this.detachMaskClick = null;
    }
    if (mode === "normal" /* Normal */) {
      this.maskEl.style.display = "block";
      const handler = () => onMaskClick();
      this.maskEl.addEventListener("click", handler);
      this.detachMaskClick = () => this.maskEl?.removeEventListener("click", handler);
      return;
    }
    this.hideMask();
  }
  /**
   * 隐藏遮罩。
   */
  hideMask() {
    if (!this.maskEl) {
      return;
    }
    if (this.detachMaskClick) {
      this.detachMaskClick();
      this.detachMaskClick = null;
    }
    this.maskEl.style.display = "none";
  }
  /**
   * 创建单个预览外壳。
   */
  createShell(mode) {
    const shell = this.doc.createElement("div");
    shell.addClass("oip-preview-shell");
    if (mode === "pin" /* Pin */) {
      shell.addClass("oip-pin-shell");
    }
    shell.style.left = "0px";
    shell.style.top = "0px";
    return shell;
  }
  /**
   * 创建图片元素。
   */
  createImage() {
    const image = this.doc.createElement("img");
    image.addClass("oip-preview-image");
    image.draggable = false;
    return image;
  }
  /**
   * 创建图片文件名区域（点击即复制名称）。
   */
  createCaptionBlock(previewId, item, onAction) {
    const block = this.doc.createElement("div");
    block.addClass("oip-image-caption-block");
    const caption = this.doc.createElement("div");
    caption.addClass("oip-image-caption");
    caption.setText(this.resolveImageFileName(item));
    caption.dataset.action = "copy-name";
    caption.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      onAction(previewId, "copy-name");
    });
    block.appendChild(caption);
    return block;
  }
  /**
   * caption 兜底创建。
   */
  createFallbackCaption(block) {
    const caption = this.doc.createElement("div");
    caption.addClass("oip-image-caption");
    block.prepend(caption);
    return caption;
  }
  /**
   * 创建工具栏。
   */
  createToolbar(previewId, onAction) {
    const toolbar = this.doc.createElement("div");
    toolbar.addClass("oip-toolbar");
    const actions = [
      { action: "zoom-out", label: "-" },
      { action: "zoom-in", label: "+" },
      { action: "zoom-100", label: "1:1" },
      { action: "fit", label: t("toolbar.fit", this.app) },
      { action: "copy", label: t("toolbar.copy", this.app) },
      { action: "prev", label: "\u25C0" },
      { action: "next", label: "\u25B6" },
      { action: "close", label: t("toolbar.close", this.app) }
    ];
    actions.forEach(({ action, label }) => {
      const button = this.doc.createElement("button");
      button.type = "button";
      button.addClass("oip-toolbar-btn");
      button.dataset.action = action;
      button.setText(label);
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        onAction(previewId, action);
      });
      toolbar.appendChild(button);
    });
    return toolbar;
  }
  /**
   * 从图片项解析用于展示的文件名。
   */
  resolveImageFileName(item) {
    const fileNameBySrc = this.extractFileNameFromSrc(item.src);
    if (fileNameBySrc) {
      return fileNameBySrc;
    }
    if (item.title) {
      return item.title;
    }
    if (item.alt) {
      return item.alt;
    }
    return item.src;
  }
  /**
   * 从 URL/path 中提取文件名，自动去掉 query/hash。
   */
  extractFileNameFromSrc(src) {
    if (!src) {
      return "";
    }
    const decodeSafe = (value) => {
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    };
    try {
      const url = new URL(src);
      const parts = url.pathname.split("/").filter(Boolean);
      return decodeSafe(parts[parts.length - 1] ?? "");
    } catch {
      const sanitized = src.split("#")[0]?.split("?")[0] ?? "";
      const parts = sanitized.split("/").filter(Boolean);
      return decodeSafe(parts[parts.length - 1] ?? "");
    }
  }
  /**
   * 更新画廊显示。
   */
  updateGallery(settings, allItems, activeIndex, onSelect) {
    this.removeGallery();
    if (!settings.gallery.enabled || allItems.length <= 1 || !this.rootEl) {
      return;
    }
    this.galleryEl = this.doc.createElement("div");
    this.galleryEl.addClass("oip-gallery");
    this.galleryEl.style.backgroundColor = settings.gallery.backgroundColor;
    this.rootEl.addClass("oip-has-gallery");
    allItems.forEach((item, index) => {
      const wrapper = this.doc.createElement("div");
      wrapper.addClass("oip-gallery-item");
      if (index === activeIndex) {
        wrapper.addClass("is-active");
        wrapper.style.borderColor = settings.gallery.activeBorderColor;
      }
      wrapper.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        onSelect(index);
      });
      const image = this.doc.createElement("img");
      image.addClass("oip-gallery-image");
      image.src = item.src;
      image.alt = item.alt;
      wrapper.appendChild(image);
      this.galleryEl?.appendChild(wrapper);
    });
    this.rootEl.appendChild(this.galleryEl);
  }
  /**
   * 移除画廊节点。
   */
  removeGallery() {
    this.galleryEl?.remove();
    this.galleryEl = null;
    this.rootEl?.removeClass("oip-has-gallery");
  }
  /**
   * 生成预览 id。
   */
  createPreviewId() {
    return `preview-${Date.now()}-${Math.floor(Math.random() * 1e5)}`;
  }
};

// src/controllers/preview-controller.ts
var _PreviewController = class _PreviewController {
  /**
   * 构造控制器。
   */
  constructor(app, plugin, getSettings) {
    this.hosts = /* @__PURE__ */ new Map();
    this.runtimes = /* @__PURE__ */ new Map();
    this.pinQueue = /* @__PURE__ */ new Map();
    this.boundDocs = /* @__PURE__ */ new Set();
    this.selector = "";
    this.app = app;
    this.plugin = plugin;
    this.getSettings = getSettings;
    this.clipboardService = new ClipboardService(app);
    this.galleryService = new GalleryService(app);
    this.selector = this.galleryService.buildSelector(
      this.getSettings().triggerScope,
      this.getSettings().includeLinkedImages
    );
  }
  /**
   * 初始化文档监听。
   */
  initialize() {
    this.attachToDocument(document);
    this.plugin.registerEvent(
      this.app.workspace.on("window-open", (_win, win) => {
        this.attachToDocument(win.document);
      })
    );
    this.plugin.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.attachToDocument(document);
        this.cleanupDisconnectedHosts();
      })
    );
  }
  /**
   * 模式切换时同步容器状态。
   */
  syncMode() {
    this.closeAll();
  }
  /**
   * 刷新选择器规则。
   */
  refreshSelectors() {
    const settings = this.getSettings();
    this.selector = this.galleryService.buildSelector(
      settings.triggerScope,
      settings.includeLinkedImages
    );
  }
  /**
   * 命令：在当前视图打开预览。
   */
  async openPreviewAtActiveImage() {
    const activeLeaf = this.app.workspace.activeLeaf;
    const container = activeLeaf?.view?.containerEl;
    if (!container) {
      new import_obsidian3.Notice(t("notice.noImage", this.app));
      return;
    }
    const candidate = container.querySelector(this.selector);
    if (!candidate) {
      new import_obsidian3.Notice(t("notice.noImage", this.app));
      return;
    }
    await this.openFromImage(candidate.ownerDocument, candidate);
  }
  /**
   * 命令：关闭当前预览。
   */
  closeActivePreview() {
    const host = this.hosts.get(document);
    const active = host?.getActivePreview();
    if (!host || !active) {
      return;
    }
    this.closePreview(active.id);
  }
  /**
   * 命令：切换下一张。
   */
  switchToNextImage() {
    const active = this.hosts.get(document)?.getActivePreview();
    if (!active) {
      return;
    }
    this.handleToolbarAction(active.id, "next");
  }
  /**
   * 命令：切换上一张。
   */
  switchToPreviousImage() {
    const active = this.hosts.get(document)?.getActivePreview();
    if (!active) {
      return;
    }
    this.handleToolbarAction(active.id, "prev");
  }
  /**
   * 命令：切换模式。
   */
  toggleMode() {
    const settings = this.getSettings();
    settings.mode = settings.mode === "normal" /* Normal */ ? "pin" /* Pin */ : "normal" /* Normal */;
    this.syncMode();
    return settings.mode;
  }
  /**
   * 插件卸载前清理。
   */
  destroy() {
    this.closeAll();
    this.hosts.forEach((host) => host.destroy());
    this.hosts.clear();
    this.pinQueue.clear();
    this.boundDocs.clear();
  }
  /**
   * 绑定 document 级事件。
   */
  attachToDocument(doc) {
    if (this.boundDocs.has(doc)) {
      return;
    }
    this.boundDocs.add(doc);
    this.plugin.registerDomEvent(
      doc,
      "click",
      async (event) => {
        const image = this.resolveImageFromMouseEvent(doc, event);
        if (!image) {
          return;
        }
        if (!this.isTargetImage(image)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        await this.openFromImage(doc, image);
      },
      true
    );
    this.plugin.registerDomEvent(doc, "mouseover", (event) => {
      const image = event.target?.closest("img");
      if (!image || !this.isTargetImage(image)) {
        return;
      }
      image.style.cursor = "zoom-in";
    });
    this.plugin.registerDomEvent(doc, "keydown", (event) => {
      this.handleKeyDown(doc, event);
    });
  }
  /**
   * 从图片节点打开预览。
   */
  async openFromImage(doc, sourceImage) {
    const settings = this.getSettings();
    const host = this.getOrCreateHost(doc);
    const collected = await this.galleryService.collectWithFallback(doc, sourceImage, settings);
    const allItems = collected.items.length ? collected.items : [
      {
        src: sourceImage.currentSrc || sourceImage.src,
        alt: sourceImage.alt || "",
        title: sourceImage.title || sourceImage.alt || "",
        index: 0,
        total: 1
      }
    ];
    const activeIndex = collected.activeIndex >= 0 ? collected.activeIndex : 0;
    const item = allItems[activeIndex] ?? allItems[0];
    if (settings.mode === "pin" /* Pin */) {
      const canOpen = this.enforcePinLimit(doc, host, settings);
      if (!canOpen) {
        return;
      }
    }
    const preview = host.openPreview({
      item,
      settings,
      mode: settings.mode,
      activeIndex,
      allItems,
      onToolbarAction: (previewId, action) => this.handleToolbarAction(previewId, action),
      onGallerySelect: (index) => this.handleGallerySelect(doc, index),
      onMaskClick: () => {
        if (this.getSettings().mode === "normal" /* Normal */) {
          this.closeAllInDoc(doc);
        }
      }
    });
    await this.initializePreviewRuntime(doc, preview, sourceImage, allItems, activeIndex);
  }
  /**
   * 初始化预览运行时（状态机 + 输入 + 初始布局）。
   */
  async initializePreviewRuntime(doc, preview, sourceImage, allItems, activeIndex) {
    const stateMachine = new PreviewStateMachine();
    stateMachine.open();
    const imageLoaded = await this.waitForImageLoad(preview.imageEl);
    if (!imageLoaded) {
      preview.imageEl.src = sourceImage.currentSrc || sourceImage.src;
    }
    const layout = this.getLayoutViewport(preview, doc, allItems.length);
    const initialState = ImageTransformEngine.createInitialState(
      preview.imageEl.naturalWidth || sourceImage.naturalWidth || 1,
      preview.imageEl.naturalHeight || sourceImage.naturalHeight || 1,
      layout.width,
      layout.height,
      layout.reservedBottom
    );
    this.getOrCreateHost(doc).applyState(preview.id, initialState);
    const input = new InputAdapter(doc, {
      onFocus: () => this.activatePreview(preview.id),
      onDragStart: (x, y) => this.onDragStart(preview.id, x, y),
      onDragMove: (x, y) => this.onDragMove(preview.id, x, y),
      onDragEnd: () => this.onDragEnd(preview.id),
      onWheelZoom: (delta, anchorX, anchorY) => this.onZoom(preview.id, delta, anchorX, anchorY),
      onPinchZoom: (ratio, anchorX, anchorY) => this.onZoom(preview.id, ratio, anchorX, anchorY),
      onDoubleTap: () => this.onDoubleTap(preview.id),
      onLongPressMenu: (x, y) => this.showContextMenu(preview.id, x, y)
    });
    const detachInput = input.bind(preview.imageEl);
    const runtime = {
      id: preview.id,
      doc,
      sourceImage,
      allItems,
      activeIndex,
      stateMachine,
      detachInput,
      lastPointer: { x: 0, y: 0 },
      openedAt: Date.now(),
      restoreBorder: this.applySourceImageBorder(sourceImage)
    };
    this.runtimes.set(preview.id, runtime);
    if (this.getSettings().mode === "pin" /* Pin */) {
      this.pushPinQueue(doc, preview.id);
    }
  }
  /**
   * 处理工具栏动作。
   */
  handleToolbarAction(previewId, action) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    const host = this.hosts.get(runtime.doc);
    const preview = host?.getPreview(previewId);
    if (!host || !preview) {
      return;
    }
    this.activatePreview(previewId);
    const state = preview.state;
    const layout = this.getLayoutViewport(preview, runtime.doc, runtime.allItems.length);
    const apply = (nextState) => {
      host.applyState(previewId, nextState);
    };
    switch (action) {
      case "zoom-in":
        apply(ImageTransformEngine.zoomAt(state, 1.1, this.getCenterAnchor(state)));
        break;
      case "zoom-out":
        apply(ImageTransformEngine.zoomAt(state, 0.9, this.getCenterAnchor(state)));
        break;
      case "zoom-100":
        apply(
          ImageTransformEngine.zoomToActual(
            state,
            layout.width,
            layout.height,
            layout.reservedBottom
          )
        );
        break;
      case "fit":
        apply(
          ImageTransformEngine.fitToViewport(
            state,
            layout.width,
            layout.height,
            layout.reservedBottom
          )
        );
        break;
      case "copy":
        void this.clipboardService.copyImageOrUrl(preview.imageEl);
        break;
      case "copy-name":
        void this.copyImageName(preview.captionEl.textContent ?? "");
        break;
      case "close":
        this.closePreview(previewId);
        break;
      case "next":
        this.switchImage(previewId, true);
        break;
      case "prev":
        this.switchImage(previewId, false);
        break;
      default:
        break;
    }
  }
  /**
   * 画廊点击切图。
   */
  handleGallerySelect(doc, index) {
    const host = this.hosts.get(doc);
    const active = host?.getActivePreview();
    if (!host || !active) {
      return;
    }
    this.switchImageToIndex(active.id, index);
  }
  /**
   * 切换到指定索引。
   */
  switchImageToIndex(previewId, index) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    if (runtime.allItems.length === 0) {
      return;
    }
    const host = this.hosts.get(runtime.doc);
    const preview = host?.getPreview(previewId);
    if (!host || !preview) {
      return;
    }
    const safeIndex = (index % runtime.allItems.length + runtime.allItems.length) % runtime.allItems.length;
    runtime.activeIndex = safeIndex;
    const nextItem = runtime.allItems[safeIndex];
    preview.item = nextItem;
    preview.imageEl.src = nextItem.src;
    preview.imageEl.alt = nextItem.alt;
    host.renderGallery(this.getSettings(), runtime.allItems, safeIndex, (nextIdx) => {
      this.handleGallerySelect(runtime.doc, nextIdx);
    });
    void this.waitForImageLoad(preview.imageEl).then(() => {
      const layout = this.getLayoutViewport(preview, runtime.doc, runtime.allItems.length);
      const nextState = ImageTransformEngine.createInitialState(
        preview.imageEl.naturalWidth || 1,
        preview.imageEl.naturalHeight || 1,
        layout.width,
        layout.height,
        layout.reservedBottom
      );
      host.applyState(previewId, nextState);
    });
  }
  /**
   * 按顺序切换图片。
   */
  switchImage(previewId, next) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime || runtime.allItems.length === 0) {
      return;
    }
    const delta = next ? 1 : -1;
    this.switchImageToIndex(previewId, runtime.activeIndex + delta);
  }
  /**
   * 开始拖拽。
   */
  onDragStart(previewId, clientX, clientY) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    this.activatePreview(previewId);
    runtime.lastPointer = { x: clientX, y: clientY };
    try {
      runtime.stateMachine.startDrag();
    } catch {
    }
  }
  /**
   * 拖拽中。
   */
  onDragMove(previewId, clientX, clientY) {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }
    const offsetX = clientX - runtime.lastPointer.x;
    const offsetY = clientY - runtime.lastPointer.y;
    runtime.lastPointer = { x: clientX, y: clientY };
    host.applyState(previewId, ImageTransformEngine.moveBy(preview.state, { x: offsetX, y: offsetY }));
  }
  /**
   * 结束拖拽。
   */
  onDragEnd(previewId) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    try {
      runtime.stateMachine.endDrag();
    } catch {
    }
  }
  /**
   * 处理缩放输入。
   */
  onZoom(previewId, ratio, anchorX, anchorY) {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }
    host.applyState(
      previewId,
      ImageTransformEngine.zoomAt(preview.state, ratio, {
        x: anchorX,
        y: anchorY
      })
    );
  }
  /**
   * 双击切换 fit/1:1。
   */
  onDoubleTap(previewId) {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }
    const layout = this.getLayoutViewport(preview, runtime.doc, runtime.allItems.length);
    if (Math.abs(preview.state.zoomRatio - 1) < 0.05) {
      host.applyState(
        previewId,
        ImageTransformEngine.fitToViewport(
          preview.state,
          layout.width,
          layout.height,
          layout.reservedBottom
        )
      );
      return;
    }
    host.applyState(
      previewId,
      ImageTransformEngine.zoomToActual(
        preview.state,
        layout.width,
        layout.height,
        layout.reservedBottom
      )
    );
  }
  /**
   * 右键/长按打开菜单。
   */
  showContextMenu(previewId, clientX, clientY) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    const menu = new import_obsidian3.Menu();
    const addItem = (title, action) => {
      menu.addItem((item) => {
        item.setTitle(title).onClick(() => this.handleToolbarAction(previewId, action));
      });
    };
    addItem("Zoom In", "zoom-in");
    addItem("Zoom Out", "zoom-out");
    addItem("Actual Size", "zoom-100");
    addItem("Fit", "fit");
    menu.addSeparator();
    addItem("Copy", "copy");
    addItem("Close", "close");
    menu.showAtPosition({ x: clientX, y: clientY });
  }
  /**
   * 键盘快捷键处理。
   */
  handleKeyDown(doc, event) {
    const host = this.hosts.get(doc);
    const active = host?.getActivePreview();
    if (!host || !active) {
      return;
    }
    const runtime = this.runtimes.get(active.id);
    if (!runtime) {
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      this.closePreview(active.id);
      return;
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      if (this.matchModifier(event, this.getSettings().switchHotkey)) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.switchImage(active.id, false);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.switchImage(active.id, true);
        }
        return;
      }
      if (this.matchModifier(event, this.getSettings().moveHotkey)) {
        event.preventDefault();
        this.moveByArrow(active.id, event.key);
      }
    }
  }
  /**
   * 箭头键移动图片。
   */
  moveByArrow(previewId, key) {
    const runtime = this.runtimes.get(previewId);
    const host = runtime ? this.hosts.get(runtime.doc) : null;
    const preview = host?.getPreview(previewId);
    if (!runtime || !host || !preview) {
      return;
    }
    const speed = this.getSettings().moveSpeed;
    const offset = { x: 0, y: 0 };
    if (key === "ArrowLeft") {
      offset.x = -speed;
    } else if (key === "ArrowRight") {
      offset.x = speed;
    } else if (key === "ArrowUp") {
      offset.y = -speed;
    } else if (key === "ArrowDown") {
      offset.y = speed;
    }
    host.applyState(previewId, ImageTransformEngine.moveBy(preview.state, offset));
  }
  /**
   * 关闭指定预览。
   */
  closePreview(previewId) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    runtime.detachInput();
    runtime.restoreBorder?.();
    runtime.stateMachine.close();
    this.hosts.get(runtime.doc)?.closePreview(previewId);
    this.runtimes.delete(previewId);
    const queue = this.pinQueue.get(runtime.doc);
    if (queue) {
      this.pinQueue.set(
        runtime.doc,
        queue.filter((id) => id !== previewId)
      );
    }
  }
  /**
   * 关闭当前文档所有预览。
   */
  closeAllInDoc(doc) {
    const ids = Array.from(this.runtimes.values()).filter((runtime) => runtime.doc === doc).map((runtime) => runtime.id);
    ids.forEach((id) => this.closePreview(id));
    this.hosts.get(doc)?.closeAll();
  }
  /**
   * 关闭所有文档的预览。
   */
  closeAll() {
    Array.from(this.runtimes.keys()).forEach((id) => this.closePreview(id));
    this.hosts.forEach((host) => host.closeAll());
  }
  /**
   * 激活某个预览。
   */
  activatePreview(previewId) {
    const runtime = this.runtimes.get(previewId);
    if (!runtime) {
      return;
    }
    const host = this.hosts.get(runtime.doc);
    host?.setActive(previewId);
  }
  /**
   * Pin 模式下限制最大数量。
   */
  enforcePinLimit(doc, host, settings) {
    if (host.size() < settings.pinMaximum) {
      return true;
    }
    if (!settings.pinCoverMode) {
      new import_obsidian3.Notice(`Pin maximum is ${settings.pinMaximum}.`);
      return false;
    }
    const queue = this.pinQueue.get(doc) ?? [];
    const oldest = queue.shift();
    if (!oldest) {
      return true;
    }
    this.pinQueue.set(doc, queue);
    this.closePreview(oldest);
    return true;
  }
  /**
   * 记录 Pin 模式打开顺序。
   */
  pushPinQueue(doc, previewId) {
    const queue = this.pinQueue.get(doc) ?? [];
    queue.push(previewId);
    this.pinQueue.set(doc, queue);
  }
  /**
   * 创建或获取宿主。
   */
  getOrCreateHost(doc) {
    let host = this.hosts.get(doc);
    if (!host) {
      host = new OverlayHost(this.app, doc);
      this.hosts.set(doc, host);
    }
    return host;
  }
  /**
   * 清理无效文档宿主。
   */
  cleanupDisconnectedHosts() {
    const disconnected = [];
    this.hosts.forEach((_host, doc) => {
      if (!doc.defaultView || doc.defaultView.closed) {
        disconnected.push(doc);
      }
    });
    disconnected.forEach((doc) => {
      this.closeAllInDoc(doc);
      this.hosts.get(doc)?.destroy();
      this.hosts.delete(doc);
      this.pinQueue.delete(doc);
      this.boundDocs.delete(doc);
    });
  }
  /**
   * 判断节点是否满足触发规则。
   */
  isTargetImage(image) {
    if (image.closest(".oip-overlay-root")) {
      return false;
    }
    let scopeMatches = false;
    try {
      scopeMatches = image.matches(this.selector);
    } catch (error) {
      console.error("[Images Preview] Invalid selector:", this.selector, error);
      scopeMatches = image.matches("img");
    }
    if (!scopeMatches) {
      return false;
    }
    const src = image.currentSrc || image.src;
    return Boolean(src);
  }
  /**
   * 从鼠标事件中解析目标图片。
   * 优先走 target/composedPath，最后回退到 elementFromPoint。
   */
  resolveImageFromMouseEvent(doc, event) {
    const target = event.target;
    if (target instanceof HTMLImageElement) {
      return target;
    }
    if (target instanceof Element) {
      const closest = target.closest("img");
      if (closest instanceof HTMLImageElement) {
        return closest;
      }
    }
    if (typeof event.composedPath === "function") {
      const path = event.composedPath();
      for (const node of path) {
        if (node instanceof HTMLImageElement) {
          return node;
        }
      }
    }
    const hit = doc.elementFromPoint(event.clientX, event.clientY);
    if (hit instanceof HTMLImageElement) {
      return hit;
    }
    if (hit instanceof Element) {
      const closest = hit.closest("img");
      if (closest instanceof HTMLImageElement) {
        return closest;
      }
    }
    return null;
  }
  /**
   * 判断事件是否满足修饰键条件。
   */
  matchModifier(event, modifier) {
    const ctrl = event.ctrlKey || event.metaKey;
    const alt = event.altKey;
    const shift = event.shiftKey;
    switch (modifier) {
      case "none" /* None */:
        return !ctrl && !alt && !shift;
      case "ctrl" /* Ctrl */:
        return ctrl && !alt && !shift;
      case "alt" /* Alt */:
        return !ctrl && alt && !shift;
      case "shift" /* Shift */:
        return !ctrl && !alt && shift;
      case "ctrl-alt" /* CtrlAlt */:
        return ctrl && alt && !shift;
      case "ctrl-shift" /* CtrlShift */:
        return ctrl && !alt && shift;
      case "shift-alt" /* ShiftAlt */:
        return !ctrl && alt && shift;
      case "ctrl-shift-alt" /* CtrlShiftAlt */:
        return ctrl && alt && shift;
      default:
        return false;
    }
  }
  /**
   * 为缩放按钮返回中心锚点。
   */
  getCenterAnchor(state) {
    return {
      x: state.left + state.width / 2,
      y: state.top + state.height / 2
    };
  }
  /**
   * 读取当前视口尺寸并保证最小值，避免异常窗口尺寸导致计算错误。
   */
  getViewportSize(doc) {
    const width = doc.documentElement.clientWidth || doc.body.clientWidth || window.innerWidth || 1;
    const height = doc.documentElement.clientHeight || doc.body.clientHeight || window.innerHeight || 1;
    return {
      width: Math.max(1, width),
      height: Math.max(1, height)
    };
  }
  /**
   * 计算当前预览需要预留的底部高度。
   */
  getBottomReservedHeight(preview, allItemCount) {
    if (preview.shellEl.classList.contains("oip-pin-shell")) {
      return 0;
    }
    const hasGallery = this.getSettings().gallery.enabled && allItemCount > 1;
    return hasGallery ? _PreviewController.NORMAL_BOTTOM_RESERVE_WITH_GALLERY : _PreviewController.NORMAL_BOTTOM_RESERVE;
  }
  /**
   * 汇总布局计算需要的视口信息，供初始适配与 fit/1:1 共用。
   */
  getLayoutViewport(preview, doc, allItemCount) {
    const viewport = this.getViewportSize(doc);
    const reservedBottom = this.getBottomReservedHeight(preview, allItemCount);
    return {
      width: viewport.width,
      height: viewport.height,
      reservedBottom
    };
  }
  /**
   * 复制图片名称。
   */
  async copyImageName(rawName) {
    const imageName = rawName.trim();
    if (!imageName) {
      new import_obsidian3.Notice(t("notice.copyNameFailed", this.app));
      return;
    }
    const copied = await this.clipboardService.copyPlainText(imageName);
    new import_obsidian3.Notice(t(copied ? "notice.copyNameSuccess" : "notice.copyNameFailed", this.app));
  }
  /**
   * 等待图片加载完成。
   */
  async waitForImageLoad(image) {
    if (image.complete && image.naturalWidth > 0) {
      return true;
    }
    return await new Promise((resolve) => {
      let finished = false;
      const done = (result) => {
        if (finished) {
          return;
        }
        finished = true;
        image.removeEventListener("load", onLoad);
        image.removeEventListener("error", onError);
        resolve(result);
      };
      const onLoad = () => done(true);
      const onError = () => done(false);
      image.addEventListener("load", onLoad);
      image.addEventListener("error", onError);
      window.setTimeout(() => done(false), 5e3);
    });
  }
  /**
   * 给原图加边框高亮，并返回恢复函数。
   */
  applySourceImageBorder(sourceImage) {
    const settings = this.getSettings();
    if (!settings.imageBorderEnabled) {
      return void 0;
    }
    const style = sourceImage.style;
    const prev = {
      width: style.borderWidth,
      style: style.borderStyle,
      color: style.borderColor
    };
    style.borderWidth = settings.imageBorderWidth;
    style.borderStyle = settings.imageBorderStyle;
    style.borderColor = settings.imageBorderColor;
    return () => {
      style.borderWidth = prev.width;
      style.borderStyle = prev.style;
      style.borderColor = prev.color;
    };
  }
};
// 普通模式下为“名称 + 固定工具栏”预留底部空间，避免高长图遮挡。
_PreviewController.NORMAL_BOTTOM_RESERVE = 128;
// 有画廊时额外预留一段高度，确保名称区域在工具栏与缩略图之上可见。
_PreviewController.NORMAL_BOTTOM_RESERVE_WITH_GALLERY = 200;
var PreviewController = _PreviewController;

// src/settings.ts
var import_obsidian4 = require("obsidian");
var SETTINGS_SCHEMA_VERSION = 1;
var DEFAULT_SETTINGS = {
  schemaVersion: SETTINGS_SCHEMA_VERSION,
  mode: "normal" /* Normal */,
  triggerScope: "markdown-only" /* MarkdownOnly */,
  includeLinkedImages: true,
  moveHotkey: "none" /* None */,
  switchHotkey: "ctrl" /* Ctrl */,
  moveSpeed: 10,
  pinMaximum: 3,
  pinCoverMode: true,
  showImageTooltip: true,
  uiLanguage: "auto" /* Auto */,
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
var HOTKEY_OPTIONS = {
  ["none" /* None */]: "None",
  ["ctrl" /* Ctrl */]: "Ctrl",
  ["alt" /* Alt */]: "Alt",
  ["shift" /* Shift */]: "Shift",
  ["ctrl-alt" /* CtrlAlt */]: "Ctrl + Alt",
  ["ctrl-shift" /* CtrlShift */]: "Ctrl + Shift",
  ["shift-alt" /* ShiftAlt */]: "Shift + Alt",
  ["ctrl-shift-alt" /* CtrlShiftAlt */]: "Ctrl + Shift + Alt"
};
var ImagesPreviewSettingTab = class extends import_obsidian4.PluginSettingTab {
  /**
   * 构造设置页。
   */
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  /**
   * 每次打开设置页时刷新内容。
   */
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian4.Setting(containerEl).setName(t("settings.title", this.app)).setHeading();
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
  renderLanguageSetting(containerEl) {
    new import_obsidian4.Setting(containerEl).setName(t("settings.uiLanguage", this.app)).addDropdown((dropdown) => {
      dropdown.addOption("auto" /* Auto */, t("language.auto", this.app)).addOption("zh" /* Zh */, t("language.zh", this.app)).addOption("en" /* En */, t("language.en", this.app)).setValue(this.plugin.settings.uiLanguage).onChange(async (value) => {
        this.plugin.settings.uiLanguage = value;
        await this.plugin.saveSettings();
        this.display();
      });
    });
  }
  /**
   * 渲染模式配置。
   */
  renderModeSetting(containerEl) {
    new import_obsidian4.Setting(containerEl).setName(t("settings.mode", this.app)).addDropdown((dropdown) => {
      dropdown.addOption("normal" /* Normal */, t("mode.normal", this.app)).addOption("pin" /* Pin */, t("mode.pin", this.app)).setValue(this.plugin.settings.mode).onChange(async (value) => {
        this.plugin.settings.mode = value;
        await this.plugin.saveSettings();
        this.plugin.controller.syncMode();
      });
    });
  }
  /**
   * 渲染触发范围与链接图片配置。
   */
  renderTriggerSetting(containerEl) {
    const triggerScopeSetting = new import_obsidian4.Setting(containerEl).setName(t("settings.triggerScope", this.app)).setDesc(t("settings.triggerScopeHint", this.app));
    triggerScopeSetting.addDropdown((dropdown) => {
      dropdown.addOption("markdown-only" /* MarkdownOnly */, t("scope.markdown", this.app)).addOption("markdown-and-common" /* MarkdownAndCommon */, t("scope.common", this.app)).addOption("global" /* Global */, t("scope.global", this.app)).setValue(this.plugin.settings.triggerScope).onChange(async (value) => {
        this.plugin.settings.triggerScope = value;
        await this.plugin.saveSettings();
        this.plugin.controller.refreshSelectors();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("settings.includeLinked", this.app)).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.includeLinkedImages).onChange(async (value) => {
        this.plugin.settings.includeLinkedImages = value;
        await this.plugin.saveSettings();
        this.plugin.controller.refreshSelectors();
      });
    });
  }
  /**
   * 渲染 Pin 模式参数。
   */
  renderPinSetting(containerEl) {
    const pinMaximumSetting = new import_obsidian4.Setting(containerEl).setName(t("settings.pinMaximum", this.app));
    const updatePinMaximumHint = (value) => {
      pinMaximumSetting.setDesc(
        t("settings.pinMaximumHint", this.app).replace("{count}", String(value))
      );
    };
    updatePinMaximumHint(this.plugin.settings.pinMaximum);
    pinMaximumSetting.addSlider((slider) => {
      slider.setLimits(1, 6, 1).setValue(this.plugin.settings.pinMaximum).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.pinMaximum = value;
        updatePinMaximumHint(value);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("settings.pinCoverMode", this.app)).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.pinCoverMode).onChange(async (value) => {
        this.plugin.settings.pinCoverMode = value;
        await this.plugin.saveSettings();
      });
    });
  }
  /**
   * 渲染视觉与画廊配置。
   */
  renderViewSetting(containerEl) {
    new import_obsidian4.Setting(containerEl).setName(t("settings.gallery", this.app)).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.gallery.enabled).onChange(async (value) => {
        this.plugin.settings.gallery.enabled = value;
        await this.plugin.saveSettings();
      });
    });
    const moveSpeedSetting = new import_obsidian4.Setting(containerEl).setName(t("settings.moveSpeed", this.app));
    const updateMoveSpeedHint = (value) => {
      moveSpeedSetting.setDesc(
        t("settings.moveSpeedHint", this.app).replace("{speed}", String(value))
      );
    };
    updateMoveSpeedHint(this.plugin.settings.moveSpeed);
    moveSpeedSetting.addSlider((slider) => {
      slider.setLimits(1, 30, 1).setValue(this.plugin.settings.moveSpeed).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.moveSpeed = value;
        updateMoveSpeedHint(value);
        await this.plugin.saveSettings();
      });
    });
  }
  /**
   * 渲染热键配置。
   */
  renderHotkeySetting(containerEl) {
    new import_obsidian4.Setting(containerEl).setName(t("settings.moveHotkey", this.app)).setDesc(t("settings.moveHotkeyHint", this.app)).addDropdown((dropdown) => {
      this.fillHotkeyOptions(dropdown, this.plugin.settings.moveHotkey, async (value) => {
        this.plugin.settings.moveHotkey = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian4.Setting(containerEl).setName(t("settings.switchHotkey", this.app)).setDesc(t("settings.switchHotkeyHint", this.app)).addDropdown((dropdown) => {
      this.fillHotkeyOptions(dropdown, this.plugin.settings.switchHotkey, async (value) => {
        this.plugin.settings.switchHotkey = value;
        await this.plugin.saveSettings();
      });
    });
  }
  /**
   * 渲染移动端交互配置。
   */
  renderMobileSetting(containerEl) {
    new import_obsidian4.Setting(containerEl).setName(t("settings.mobileGesture", this.app)).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.interaction.enableMobileGestures).onChange(async (value) => {
        this.plugin.settings.interaction.enableMobileGestures = value;
        await this.plugin.saveSettings();
      });
    });
  }
  /**
   * 统一填充热键下拉。
   */
  fillHotkeyOptions(dropdown, value, onChange) {
    Object.values(HotkeyModifier).forEach((hotkey) => {
      dropdown.addOption(hotkey, HOTKEY_OPTIONS[hotkey]);
    });
    dropdown.setValue(value).onChange(async (selected) => {
      await onChange(selected);
    });
  }
};

// src/services/settings-store.ts
var SettingsStore = class {
  /**
   * 构造设置服务。
   */
  constructor(plugin) {
    this.plugin = plugin;
  }
  /**
   * 读取配置并做迁移和兜底。
   */
  async load() {
    const raw = await this.plugin.loadData();
    return this.normalize(raw);
  }
  /**
   * 持久化配置。
   */
  async save(settings) {
    await this.plugin.saveData(this.normalize(settings));
  }
  /**
   * 合并默认值并修复非法字段。
   */
  normalize(input) {
    const merged = {
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
  normalizeGallery(input) {
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
  normalizeInteraction(input) {
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
  ensureEnum(value, validValues, fallback) {
    if (typeof value !== "string") {
      return fallback;
    }
    return validValues.includes(value) ? value : fallback;
  }
  /**
   * 安全读取字符串。
   */
  safeString(value, fallback) {
    return typeof value === "string" && value.length > 0 ? value : fallback;
  }
  /**
   * 安全读取数字。
   */
  safeNumber(value, fallback) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    return fallback;
  }
  /**
   * 数值裁剪。
   */
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
};

// src/main.ts
var ImagesPreviewPlugin = class extends import_obsidian5.Plugin {
  /**
   * 插件加载生命周期。
   */
  async onload() {
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
  onunload() {
    this.controller?.destroy();
  }
  /**
   * 持久化设置。
   */
  async saveSettings() {
    this.settings = this.settingsStore.normalize(this.settings);
    setLocalePreference(this.settings.uiLanguage);
    await this.settingsStore.save(this.settings);
  }
  /**
   * 注册命令。
   */
  registerCommands() {
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
        new import_obsidian5.Notice(mode === "normal" /* Normal */ ? t("mode.normal", this.app) : t("mode.pin", this.app));
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
};

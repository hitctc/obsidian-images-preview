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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2kxOG4udHMiLCAic3JjL2NvbnRyb2xsZXJzL3ByZXZpZXctY29udHJvbGxlci50cyIsICJzcmMvaW5wdXQvaW5wdXQtYWRhcHRlci50cyIsICJzcmMvY29yZS9pbWFnZS10cmFuc2Zvcm0tZW5naW5lLnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvY29yZS9wcmV2aWV3LXN0YXRlLW1hY2hpbmUudHMiLCAic3JjL3NlcnZpY2VzL2NsaXBib2FyZC1zZXJ2aWNlLnRzIiwgInNyYy9zZXJ2aWNlcy9nYWxsZXJ5LXNlcnZpY2UudHMiLCAic3JjL3VpL292ZXJsYXktaG9zdC50cyIsICJzcmMvc2V0dGluZ3MudHMiLCAic3JjL3NlcnZpY2VzL3NldHRpbmdzLXN0b3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBOb3RpY2UsIFBsdWdpbiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgc2V0TG9jYWxlUHJlZmVyZW5jZSwgdCB9IGZyb20gXCIuL2kxOG5cIjtcbmltcG9ydCB7IFByZXZpZXdDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvcHJldmlldy1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBJbWFnZXNQcmV2aWV3U2V0dGluZ1RhYiB9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBTZXR0aW5nc1N0b3JlIH0gZnJvbSBcIi4vc2VydmljZXMvc2V0dGluZ3Mtc3RvcmVcIjtcbmltcG9ydCB7IFByZXZpZXdNb2RlLCB0eXBlIFBsdWdpblNldHRpbmdzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdTYzRDJcdTRFRjZcdTRFM0JcdTUxNjVcdTUzRTNcdTMwMDJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VzUHJldmlld1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHB1YmxpYyBzZXR0aW5ncyE6IFBsdWdpblNldHRpbmdzO1xuICBwdWJsaWMgY29udHJvbGxlciE6IFByZXZpZXdDb250cm9sbGVyO1xuXG4gIHByaXZhdGUgc2V0dGluZ3NTdG9yZSE6IFNldHRpbmdzU3RvcmU7XG5cbiAgLyoqXG4gICAqIFx1NjNEMlx1NEVGNlx1NTJBMFx1OEY3RFx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRlx1MzAwMlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNldHRpbmdzU3RvcmUgPSBuZXcgU2V0dGluZ3NTdG9yZSh0aGlzKTtcbiAgICB0aGlzLnNldHRpbmdzID0gYXdhaXQgdGhpcy5zZXR0aW5nc1N0b3JlLmxvYWQoKTtcbiAgICBzZXRMb2NhbGVQcmVmZXJlbmNlKHRoaXMuc2V0dGluZ3MudWlMYW5ndWFnZSk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgUHJldmlld0NvbnRyb2xsZXIodGhpcy5hcHAsIHRoaXMsICgpID0+IHRoaXMuc2V0dGluZ3MpO1xuICAgIHRoaXMuY29udHJvbGxlci5pbml0aWFsaXplKCk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IEltYWdlc1ByZXZpZXdTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG4gICAgdGhpcy5yZWdpc3RlckNvbW1hbmRzKCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2M0QyXHU0RUY2XHU1Mzc4XHU4RjdEXHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgb251bmxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sbGVyPy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2MzAxXHU0RTQ1XHU1MzE2XHU4QkJFXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2F2ZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzU3RvcmUubm9ybWFsaXplKHRoaXMuc2V0dGluZ3MpO1xuICAgIHNldExvY2FsZVByZWZlcmVuY2UodGhpcy5zZXR0aW5ncy51aUxhbmd1YWdlKTtcbiAgICBhd2FpdCB0aGlzLnNldHRpbmdzU3RvcmUuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZDRThcdTUxOENcdTU0N0RcdTRFRTRcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVnaXN0ZXJDb21tYW5kcygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwib3Blbi1wcmV2aWV3LWF0LWFjdGl2ZS1pbWFnZVwiLFxuICAgICAgbmFtZTogdChcImNvbW1hbmQub3BlblwiLCB0aGlzLmFwcCksXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB2b2lkIHRoaXMuY29udHJvbGxlci5vcGVuUHJldmlld0F0QWN0aXZlSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0b2dnbGUtcHJldmlldy1tb2RlXCIsXG4gICAgICBuYW1lOiB0KFwiY29tbWFuZC50b2dnbGVcIiwgdGhpcy5hcHApLFxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHRoaXMuY29udHJvbGxlci50b2dnbGVNb2RlKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIG5ldyBOb3RpY2UobW9kZSA9PT0gUHJldmlld01vZGUuTm9ybWFsID8gdChcIm1vZGUubm9ybWFsXCIsIHRoaXMuYXBwKSA6IHQoXCJtb2RlLnBpblwiLCB0aGlzLmFwcCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImNsb3NlLWFjdGl2ZS1wcmV2aWV3XCIsXG4gICAgICBuYW1lOiB0KFwiY29tbWFuZC5jbG9zZVwiLCB0aGlzLmFwcCksXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2xvc2VBY3RpdmVQcmV2aWV3KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwibmV4dC1pbWFnZVwiLFxuICAgICAgbmFtZTogdChcImNvbW1hbmQubmV4dFwiLCB0aGlzLmFwcCksXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3dpdGNoVG9OZXh0SW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJwcmV2LWltYWdlXCIsXG4gICAgICBuYW1lOiB0KFwiY29tbWFuZC5wcmV2XCIsIHRoaXMuYXBwKSxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zd2l0Y2hUb1ByZXZpb3VzSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbi8qKlxuICogXHU2NTJGXHU2MzAxXHU3Njg0XHU4QkVEXHU4QTAwXHU0RUUzXHU3ODAxXHUzMDAyXG4gKi9cbmV4cG9ydCB0eXBlIExvY2FsZUtleSA9IFwiZW5cIiB8IFwiemhcIjtcblxuLyoqXG4gKiBcdThCRURcdThBMDBcdTUwNEZcdTU5N0RcdUZGMDhhdXRvID0gXHU4RERGXHU5NjhGXHU3Q0ZCXHU3RURGXHVGRjA5XHUzMDAyXG4gKi9cbmV4cG9ydCB0eXBlIExvY2FsZVByZWZlcmVuY2UgPSBcImF1dG9cIiB8IExvY2FsZUtleTtcblxuLyoqXG4gKiBcdTY1ODdcdTY4NDhcdTk1MkVcdTMwMDJcbiAqL1xuZXhwb3J0IHR5cGUgSTE4bktleSA9XG4gIHwgXCJzZXR0aW5ncy50aXRsZVwiXG4gIHwgXCJzZXR0aW5ncy5tb2RlXCJcbiAgfCBcInNldHRpbmdzLnVpTGFuZ3VhZ2VcIlxuICB8IFwic2V0dGluZ3MudHJpZ2dlclNjb3BlXCJcbiAgfCBcInNldHRpbmdzLnRyaWdnZXJTY29wZUhpbnRcIlxuICB8IFwic2V0dGluZ3MuaW5jbHVkZUxpbmtlZFwiXG4gIHwgXCJzZXR0aW5ncy5waW5NYXhpbXVtXCJcbiAgfCBcInNldHRpbmdzLnBpbk1heGltdW1IaW50XCJcbiAgfCBcInNldHRpbmdzLnBpbkNvdmVyTW9kZVwiXG4gIHwgXCJzZXR0aW5ncy5nYWxsZXJ5XCJcbiAgfCBcInNldHRpbmdzLm1vYmlsZUdlc3R1cmVcIlxuICB8IFwic2V0dGluZ3MubW92ZVNwZWVkXCJcbiAgfCBcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIlxuICB8IFwic2V0dGluZ3MubW92ZUhvdGtleVwiXG4gIHwgXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlcIlxuICB8IFwic2V0dGluZ3MubW92ZUhvdGtleUhpbnRcIlxuICB8IFwic2V0dGluZ3Muc3dpdGNoSG90a2V5SGludFwiXG4gIHwgXCJtb2RlLm5vcm1hbFwiXG4gIHwgXCJtb2RlLnBpblwiXG4gIHwgXCJzY29wZS5tYXJrZG93blwiXG4gIHwgXCJzY29wZS5jb21tb25cIlxuICB8IFwic2NvcGUuZ2xvYmFsXCJcbiAgfCBcImxhbmd1YWdlLmF1dG9cIlxuICB8IFwibGFuZ3VhZ2UuemhcIlxuICB8IFwibGFuZ3VhZ2UuZW5cIlxuICB8IFwidG9vbGJhci5maXRcIlxuICB8IFwidG9vbGJhci5jb3B5XCJcbiAgfCBcInRvb2xiYXIuY29weU5hbWVcIlxuICB8IFwidG9vbGJhci5jbG9zZVwiXG4gIHwgXCJub3RpY2UuY29weVN1Y2Nlc3NcIlxuICB8IFwibm90aWNlLmNvcHlGYWlsZWRcIlxuICB8IFwibm90aWNlLmNvcHlOYW1lU3VjY2Vzc1wiXG4gIHwgXCJub3RpY2UuY29weU5hbWVGYWlsZWRcIlxuICB8IFwibm90aWNlLm5vSW1hZ2VcIlxuICB8IFwiY29tbWFuZC5vcGVuXCJcbiAgfCBcImNvbW1hbmQudG9nZ2xlXCJcbiAgfCBcImNvbW1hbmQuY2xvc2VcIlxuICB8IFwiY29tbWFuZC5uZXh0XCJcbiAgfCBcImNvbW1hbmQucHJldlwiO1xuXG4vKipcbiAqIFx1OEJFRFx1OEEwMFx1NUI1N1x1NTE3OFx1MzAwMlxuICovXG5jb25zdCBMT0NBTEVTOiBSZWNvcmQ8TG9jYWxlS2V5LCBSZWNvcmQ8STE4bktleSwgc3RyaW5nPj4gPSB7XG4gIGVuOiB7XG4gICAgXCJzZXR0aW5ncy50aXRsZVwiOiBcIkltYWdlcyBQcmV2aWV3IFNldHRpbmdzXCIsXG4gICAgXCJzZXR0aW5ncy5tb2RlXCI6IFwiUHJldmlldyBtb2RlXCIsXG4gICAgXCJzZXR0aW5ncy51aUxhbmd1YWdlXCI6IFwiSW50ZXJmYWNlIGxhbmd1YWdlXCIsXG4gICAgXCJzZXR0aW5ncy50cmlnZ2VyU2NvcGVcIjogXCJUcmlnZ2VyIHNjb3BlXCIsXG4gICAgXCJzZXR0aW5ncy50cmlnZ2VyU2NvcGVIaW50XCI6XG4gICAgICBcIk1hcmtkb3duIG9ubHk6IHRyaWdnZXJzIGluIG5vdGUvaW1hZ2Ugdmlld3Mgb25seTsgTWFya2Rvd24gKyBjb21tb24gcGFuZWxzOiBhbHNvIGNvdmVycyBtb2RhbCBhbmQgQ2FudmFzOyBHbG9iYWwgaW1hZ2Ugc2VsZWN0b3I6IHRyaWdnZXJzIG9uIGFueSBpbWFnZSBpbiBjdXJyZW50IHdpbmRvdy5cIixcbiAgICBcInNldHRpbmdzLmluY2x1ZGVMaW5rZWRcIjogXCJFbmFibGUgbGlua2VkIGltYWdlc1wiLFxuICAgIFwic2V0dGluZ3MucGluTWF4aW11bVwiOiBcIlBpbiBtb2RlIG1heCBpbWFnZXNcIixcbiAgICBcInNldHRpbmdzLnBpbk1heGltdW1IaW50XCI6IFwiQ3VycmVudCB2YWx1ZToge2NvdW50fSBpbWFnZXNcIixcbiAgICBcInNldHRpbmdzLnBpbkNvdmVyTW9kZVwiOiBcIlJlcGxhY2Ugb2xkZXN0IGltYWdlIHdoZW4gZnVsbFwiLFxuICAgIFwic2V0dGluZ3MuZ2FsbGVyeVwiOiBcIkVuYWJsZSBnYWxsZXJ5IG5hdmJhclwiLFxuICAgIFwic2V0dGluZ3MubW9iaWxlR2VzdHVyZVwiOiBcIkVuYWJsZSBtb2JpbGUgZ2VzdHVyZXNcIixcbiAgICBcInNldHRpbmdzLm1vdmVTcGVlZFwiOiBcIktleWJvYXJkIG1vdmUgc3BlZWRcIixcbiAgICBcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIjogXCJDdXJyZW50IHNwZWVkOiB7c3BlZWR9XCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlSG90a2V5XCI6IFwiTW92ZSBpbWFnZSBtb2RpZmllclwiLFxuICAgIFwic2V0dGluZ3Muc3dpdGNoSG90a2V5XCI6IFwiU3dpdGNoIGltYWdlIG1vZGlmaWVyXCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlSG90a2V5SGludFwiOiBcIk1vZGlmaWVyICsgQXJyb3cga2V5c1wiLFxuICAgIFwic2V0dGluZ3Muc3dpdGNoSG90a2V5SGludFwiOiBcIk1vZGlmaWVyICsgQXJyb3cgTGVmdCAvIEFycm93IFJpZ2h0XCIsXG4gICAgXCJtb2RlLm5vcm1hbFwiOiBcIk5vcm1hbFwiLFxuICAgIFwibW9kZS5waW5cIjogXCJQaW5cIixcbiAgICBcInNjb3BlLm1hcmtkb3duXCI6IFwiTWFya2Rvd24gb25seVwiLFxuICAgIFwic2NvcGUuY29tbW9uXCI6IFwiTWFya2Rvd24gKyBjb21tb24gcGFuZWxzXCIsXG4gICAgXCJzY29wZS5nbG9iYWxcIjogXCJHbG9iYWwgaW1hZ2Ugc2VsZWN0b3JcIixcbiAgICBcImxhbmd1YWdlLmF1dG9cIjogXCJTeXN0ZW0gZGVmYXVsdFwiLFxuICAgIFwibGFuZ3VhZ2UuemhcIjogXCJDaGluZXNlXCIsXG4gICAgXCJsYW5ndWFnZS5lblwiOiBcIkVuZ2xpc2hcIixcbiAgICBcInRvb2xiYXIuZml0XCI6IFwiRml0XCIsXG4gICAgXCJ0b29sYmFyLmNvcHlcIjogXCJDb3B5XCIsXG4gICAgXCJ0b29sYmFyLmNvcHlOYW1lXCI6IFwiQ29weSBOYW1lXCIsXG4gICAgXCJ0b29sYmFyLmNsb3NlXCI6IFwiQ2xvc2VcIixcbiAgICBcIm5vdGljZS5jb3B5U3VjY2Vzc1wiOiBcIkltYWdlIGNvcGllZC5cIixcbiAgICBcIm5vdGljZS5jb3B5RmFpbGVkXCI6IFwiSW1hZ2UgY29weSBmYWlsZWQuXCIsXG4gICAgXCJub3RpY2UuY29weU5hbWVTdWNjZXNzXCI6IFwiSW1hZ2UgbmFtZSBjb3BpZWQuXCIsXG4gICAgXCJub3RpY2UuY29weU5hbWVGYWlsZWRcIjogXCJJbWFnZSBuYW1lIGNvcHkgZmFpbGVkLlwiLFxuICAgIFwibm90aWNlLm5vSW1hZ2VcIjogXCJObyBpbWFnZSBmb3VuZCBpbiBjdXJyZW50IHZpZXcuXCIsXG4gICAgXCJjb21tYW5kLm9wZW5cIjogXCJPcGVuIHByZXZpZXcgYXQgYWN0aXZlIGltYWdlXCIsXG4gICAgXCJjb21tYW5kLnRvZ2dsZVwiOiBcIlRvZ2dsZSBwcmV2aWV3IG1vZGVcIixcbiAgICBcImNvbW1hbmQuY2xvc2VcIjogXCJDbG9zZSBhY3RpdmUgcHJldmlld1wiLFxuICAgIFwiY29tbWFuZC5uZXh0XCI6IFwiTmV4dCBpbWFnZVwiLFxuICAgIFwiY29tbWFuZC5wcmV2XCI6IFwiUHJldmlvdXMgaW1hZ2VcIlxuICB9LFxuICB6aDoge1xuICAgIFwic2V0dGluZ3MudGl0bGVcIjogXCJcdTU2RkVcdTcyNDdcdTZENkVcdTdBOTdcdTk4ODRcdTg5QzhcdThCQkVcdTdGNkVcIixcbiAgICBcInNldHRpbmdzLm1vZGVcIjogXCJcdTk4ODRcdTg5QzhcdTZBMjFcdTVGMEZcIixcbiAgICBcInNldHRpbmdzLnVpTGFuZ3VhZ2VcIjogXCJcdTc1NENcdTk3NjJcdThCRURcdThBMDBcIixcbiAgICBcInNldHRpbmdzLnRyaWdnZXJTY29wZVwiOiBcIlx1ODlFNlx1NTNEMVx1ODMwM1x1NTZGNFwiLFxuICAgIFwic2V0dGluZ3MudHJpZ2dlclNjb3BlSGludFwiOlxuICAgICAgXCJcdTRFQzUgTWFya2Rvd25cdUZGMUFcdTUzRUFcdTU3MjhcdTdCMTRcdThCQjBcdTZCNjNcdTY1ODcvXHU2RTkwXHU3ODAxXHU2MjE2XHU1NkZFXHU3MjQ3XHU4OUM2XHU1NkZFXHU4OUU2XHU1M0QxXHVGRjFCTWFya2Rvd24gKyBcdTVFMzhcdTg5QzFcdTk3NjJcdTY3N0ZcdUZGMUFcdTk4OURcdTU5MTZcdTY1MkZcdTYzMDFcdTVGMzlcdTdBOTdcdTRFMEUgQ2FudmFzXHVGRjFCXHU1MTY4XHU1QzQwXHU1NkZFXHU3MjQ3XHU5MDA5XHU2MkU5XHU1NjY4XHVGRjFBXHU1RjUzXHU1MjREXHU3QTk3XHU1M0UzXHU0RUZCXHU2MTBGXHU1NkZFXHU3MjQ3XHU5MEZEXHU1M0VGXHU4OUU2XHU1M0QxXHUzMDAyXCIsXG4gICAgXCJzZXR0aW5ncy5pbmNsdWRlTGlua2VkXCI6IFwiXHU2NTJGXHU2MzAxXHU1RTI2XHU5NEZFXHU2M0E1XHU1NkZFXHU3MjQ3XCIsXG4gICAgXCJzZXR0aW5ncy5waW5NYXhpbXVtXCI6IFwiUGluIFx1NkEyMVx1NUYwRlx1NjcwMFx1NTkyN1x1NTZGRVx1NzI0N1x1NjU3MFwiLFxuICAgIFwic2V0dGluZ3MucGluTWF4aW11bUhpbnRcIjogXCJcdTVGNTNcdTUyNERcdThCQkVcdTdGNkVcdUZGMUF7Y291bnR9IFx1NUYyMFx1NTZGRVx1NzI0N1wiLFxuICAgIFwic2V0dGluZ3MucGluQ292ZXJNb2RlXCI6IFwiXHU4RkJFXHU1MjMwXHU0RTBBXHU5NjUwXHU2NUY2XHU2NkZGXHU2MzYyXHU2NzAwXHU2NUU3XHU1NkZFXHU3MjQ3XCIsXG4gICAgXCJzZXR0aW5ncy5nYWxsZXJ5XCI6IFwiXHU1NDJGXHU3NTI4XHU3NTNCXHU1RUNBXHU1QkZDXHU4MjJBXHU2ODBGXCIsXG4gICAgXCJzZXR0aW5ncy5tb2JpbGVHZXN0dXJlXCI6IFwiXHU1NDJGXHU3NTI4XHU3OUZCXHU1MkE4XHU3QUVGXHU2MjRCXHU1MkJGXCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlU3BlZWRcIjogXCJcdTk1MkVcdTc2RDhcdTc5RkJcdTUyQThcdTkwMUZcdTVFQTZcIixcbiAgICBcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIjogXCJcdTVGNTNcdTUyNERcdTkwMUZcdTVFQTZcdUZGMUF7c3BlZWR9XCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlSG90a2V5XCI6IFwiXHU3OUZCXHU1MkE4XHU1NkZFXHU3MjQ3XHU0RkVFXHU5OTcwXHU5NTJFXCIsXG4gICAgXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlcIjogXCJcdTUyMDdcdTYzNjJcdTU2RkVcdTcyNDdcdTRGRUVcdTk5NzBcdTk1MkVcIixcbiAgICBcInNldHRpbmdzLm1vdmVIb3RrZXlIaW50XCI6IFwiXHU0RkVFXHU5OTcwXHU5NTJFICsgXHU2NUI5XHU1NDExXHU5NTJFXCIsXG4gICAgXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlIaW50XCI6IFwiXHU0RkVFXHU5OTcwXHU5NTJFICsgXHU1REU2L1x1NTNGM1x1NjVCOVx1NTQxMVx1OTUyRVwiLFxuICAgIFwibW9kZS5ub3JtYWxcIjogXCJcdTY2NkVcdTkwMUFcdTZBMjFcdTVGMEZcIixcbiAgICBcIm1vZGUucGluXCI6IFwiUGluIFx1NkEyMVx1NUYwRlwiLFxuICAgIFwic2NvcGUubWFya2Rvd25cIjogXCJcdTRFQzUgTWFya2Rvd25cIixcbiAgICBcInNjb3BlLmNvbW1vblwiOiBcIk1hcmtkb3duICsgXHU1RTM4XHU4OUMxXHU5NzYyXHU2NzdGXCIsXG4gICAgXCJzY29wZS5nbG9iYWxcIjogXCJcdTUxNjhcdTVDNDBcdTU2RkVcdTcyNDdcdTkwMDlcdTYyRTlcdTU2NjhcIixcbiAgICBcImxhbmd1YWdlLmF1dG9cIjogXCJcdThEREZcdTk2OEZcdTdDRkJcdTdFREZcIixcbiAgICBcImxhbmd1YWdlLnpoXCI6IFwiXHU0RTJEXHU2NTg3XCIsXG4gICAgXCJsYW5ndWFnZS5lblwiOiBcIlx1ODJGMVx1NjU4N1wiLFxuICAgIFwidG9vbGJhci5maXRcIjogXCJcdTkwMDJcdTkxNERcIixcbiAgICBcInRvb2xiYXIuY29weVwiOiBcIlx1NTkwRFx1NTIzNlwiLFxuICAgIFwidG9vbGJhci5jb3B5TmFtZVwiOiBcIlx1NTkwRFx1NTIzNlx1NTZGRVx1NzI0N1x1NTQwRFx1NzlGMFwiLFxuICAgIFwidG9vbGJhci5jbG9zZVwiOiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgIFwibm90aWNlLmNvcHlTdWNjZXNzXCI6IFwiXHU1NkZFXHU3MjQ3XHU1REYyXHU1OTBEXHU1MjM2XHUzMDAyXCIsXG4gICAgXCJub3RpY2UuY29weUZhaWxlZFwiOiBcIlx1NTZGRVx1NzI0N1x1NTkwRFx1NTIzNlx1NTkzMVx1OEQyNVx1MzAwMlwiLFxuICAgIFwibm90aWNlLmNvcHlOYW1lU3VjY2Vzc1wiOiBcIlx1NTZGRVx1NzI0N1x1NTQwRFx1NzlGMFx1NURGMlx1NTkwRFx1NTIzNlx1MzAwMlwiLFxuICAgIFwibm90aWNlLmNvcHlOYW1lRmFpbGVkXCI6IFwiXHU1NkZFXHU3MjQ3XHU1NDBEXHU3OUYwXHU1OTBEXHU1MjM2XHU1OTMxXHU4RDI1XHUzMDAyXCIsXG4gICAgXCJub3RpY2Uubm9JbWFnZVwiOiBcIlx1NUY1M1x1NTI0RFx1ODlDNlx1NTZGRVx1NjcyQVx1NjI3RVx1NTIzMFx1NTZGRVx1NzI0N1x1MzAwMlwiLFxuICAgIFwiY29tbWFuZC5vcGVuXCI6IFwiXHU1NzI4XHU1RjUzXHU1MjREXHU1NkZFXHU3MjQ3XHU2MjUzXHU1RjAwXHU5ODg0XHU4OUM4XCIsXG4gICAgXCJjb21tYW5kLnRvZ2dsZVwiOiBcIlx1NTIwN1x1NjM2Mlx1OTg4NFx1ODlDOFx1NkEyMVx1NUYwRlwiLFxuICAgIFwiY29tbWFuZC5jbG9zZVwiOiBcIlx1NTE3M1x1OTVFRFx1NUY1M1x1NTI0RFx1OTg4NFx1ODlDOFwiLFxuICAgIFwiY29tbWFuZC5uZXh0XCI6IFwiXHU0RTBCXHU0RTAwXHU1RjIwXHU1NkZFXHU3MjQ3XCIsXG4gICAgXCJjb21tYW5kLnByZXZcIjogXCJcdTRFMEFcdTRFMDBcdTVGMjBcdTU2RkVcdTcyNDdcIlxuICB9XG59O1xuXG5sZXQgbG9jYWxlT3ZlcnJpZGU6IExvY2FsZUtleSB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIFx1OEJCRVx1N0Y2RVx1OEJFRFx1OEEwMFx1NTA0Rlx1NTk3RFx1MzAwMlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlUHJlZmVyZW5jZShwcmVmZXJlbmNlOiBMb2NhbGVQcmVmZXJlbmNlKTogdm9pZCB7XG4gIGxvY2FsZU92ZXJyaWRlID0gcHJlZmVyZW5jZSA9PT0gXCJhdXRvXCIgPyBudWxsIDogcHJlZmVyZW5jZTtcbn1cblxuLyoqXG4gKiBcdTY4MzlcdTYzNkVcdTVGNTNcdTUyNERcdTczQUZcdTU4ODNcdTYzQThcdTY1QURcdThCRURcdThBMDBcdTMwMDJcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUxvY2FsZShfYXBwPzogQXBwKTogTG9jYWxlS2V5IHtcbiAgaWYgKGxvY2FsZU92ZXJyaWRlKSB7XG4gICAgcmV0dXJuIGxvY2FsZU92ZXJyaWRlO1xuICB9XG4gIGNvbnN0IGxhbmd1YWdlID0gKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLmxhbmd1YWdlKSB8fCBcImVuXCI7XG4gIHJldHVybiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJ6aFwiKSA/IFwiemhcIiA6IFwiZW5cIjtcbn1cblxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTUzMTZcdTY1ODdcdTY3MkNcdTMwMDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHQoa2V5OiBJMThuS2V5LCBhcHA/OiBBcHApOiBzdHJpbmcge1xuICBjb25zdCBsb2NhbGUgPSByZXNvbHZlTG9jYWxlKGFwcCk7XG4gIHJldHVybiBMT0NBTEVTW2xvY2FsZV1ba2V5XSA/PyBMT0NBTEVTLmVuW2tleV0gPz8ga2V5O1xufVxuIiwgImltcG9ydCB7IE1lbnUsIE5vdGljZSwgdHlwZSBBcHAsIHR5cGUgUGx1Z2luLCB0eXBlIFdvcmtzcGFjZVdpbmRvdyB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuLi9pMThuXCI7XG5pbXBvcnQgeyBJbnB1dEFkYXB0ZXIgfSBmcm9tIFwiLi4vaW5wdXQvaW5wdXQtYWRhcHRlclwiO1xuaW1wb3J0IHsgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUgfSBmcm9tIFwiLi4vY29yZS9pbWFnZS10cmFuc2Zvcm0tZW5naW5lXCI7XG5pbXBvcnQgeyBQcmV2aWV3U3RhdGVNYWNoaW5lIH0gZnJvbSBcIi4uL2NvcmUvcHJldmlldy1zdGF0ZS1tYWNoaW5lXCI7XG5pbXBvcnQgeyBDbGlwYm9hcmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NsaXBib2FyZC1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nYWxsZXJ5LXNlcnZpY2VcIjtcbmltcG9ydCB7IE92ZXJsYXlIb3N0IH0gZnJvbSBcIi4uL3VpL292ZXJsYXktaG9zdFwiO1xuaW1wb3J0IHtcbiAgSG90a2V5TW9kaWZpZXIsXG4gIFByZXZpZXdNb2RlLFxuICB0eXBlIEltYWdlSXRlbSxcbiAgdHlwZSBNb3VudGVkUHJldmlldyxcbiAgdHlwZSBQbHVnaW5TZXR0aW5ncyxcbiAgdHlwZSBUb29sYmFyQWN0aW9uLFxuICB0eXBlIFRyYW5zZm9ybVN0YXRlXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1NkJDRlx1NEUyQVx1OTg4NFx1ODlDOFx1NUI5RVx1NEY4Qlx1NzY4NFx1OEZEMFx1ODg0Q1x1NjVGNlx1NEZFMVx1NjA2Rlx1MzAwMlxuICovXG5pbnRlcmZhY2UgUHJldmlld1J1bnRpbWUge1xuICBpZDogc3RyaW5nO1xuICBkb2M6IERvY3VtZW50O1xuICBzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgYWxsSXRlbXM6IEltYWdlSXRlbVtdO1xuICBhY3RpdmVJbmRleDogbnVtYmVyO1xuICBzdGF0ZU1hY2hpbmU6IFByZXZpZXdTdGF0ZU1hY2hpbmU7XG4gIGRldGFjaElucHV0OiAoKSA9PiB2b2lkO1xuICBsYXN0UG9pbnRlcjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBvcGVuZWRBdDogbnVtYmVyO1xuICByZXN0b3JlQm9yZGVyPzogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBcdTk4ODRcdTg5QzhcdTYzQTdcdTUyMzZcdTU2NjhcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXZpZXdDb250cm9sbGVyIHtcbiAgLy8gXHU2NjZFXHU5MDFBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHUyMDFDXHU1NDBEXHU3OUYwICsgXHU1NkZBXHU1QjlBXHU1REU1XHU1MTc3XHU2ODBGXHUyMDFEXHU5ODg0XHU3NTU5XHU1RTk1XHU5MEU4XHU3QTdBXHU5NUY0XHVGRjBDXHU5MDdGXHU1MTREXHU5QUQ4XHU5NTdGXHU1NkZFXHU5MDZFXHU2MzIxXHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9CT1RUT01fUkVTRVJWRSA9IDEyODtcbiAgLy8gXHU2NzA5XHU3NTNCXHU1RUNBXHU2NUY2XHU5ODlEXHU1OTE2XHU5ODg0XHU3NTU5XHU0RTAwXHU2QkI1XHU5QUQ4XHU1RUE2XHVGRjBDXHU3ODZFXHU0RkREXHU1NDBEXHU3OUYwXHU1MzNBXHU1N0RGXHU1NzI4XHU1REU1XHU1MTc3XHU2ODBGXHU0RTBFXHU3RjI5XHU3NTY1XHU1NkZFXHU0RTRCXHU0RTBBXHU1M0VGXHU4OUMxXHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9CT1RUT01fUkVTRVJWRV9XSVRIX0dBTExFUlkgPSAyMDA7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IFBsdWdpbjtcbiAgcHJpdmF0ZSByZWFkb25seSBnZXRTZXR0aW5nczogKCkgPT4gUGx1Z2luU2V0dGluZ3M7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjbGlwYm9hcmRTZXJ2aWNlOiBDbGlwYm9hcmRTZXJ2aWNlO1xuICBwcml2YXRlIHJlYWRvbmx5IGdhbGxlcnlTZXJ2aWNlOiBHYWxsZXJ5U2VydmljZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGhvc3RzID0gbmV3IE1hcDxEb2N1bWVudCwgT3ZlcmxheUhvc3Q+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcnVudGltZXMgPSBuZXcgTWFwPHN0cmluZywgUHJldmlld1J1bnRpbWU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGluUXVldWUgPSBuZXcgTWFwPERvY3VtZW50LCBzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBib3VuZERvY3MgPSBuZXcgU2V0PERvY3VtZW50PigpO1xuXG4gIHByaXZhdGUgc2VsZWN0b3IgPSBcIlwiO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdTYzQTdcdTUyMzZcdTU2NjhcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFBsdWdpbiwgZ2V0U2V0dGluZ3M6ICgpID0+IFBsdWdpblNldHRpbmdzKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5nZXRTZXR0aW5ncyA9IGdldFNldHRpbmdzO1xuICAgIHRoaXMuY2xpcGJvYXJkU2VydmljZSA9IG5ldyBDbGlwYm9hcmRTZXJ2aWNlKGFwcCk7XG4gICAgdGhpcy5nYWxsZXJ5U2VydmljZSA9IG5ldyBHYWxsZXJ5U2VydmljZShhcHApO1xuICAgIHRoaXMuc2VsZWN0b3IgPSB0aGlzLmdhbGxlcnlTZXJ2aWNlLmJ1aWxkU2VsZWN0b3IoXG4gICAgICB0aGlzLmdldFNldHRpbmdzKCkudHJpZ2dlclNjb3BlLFxuICAgICAgdGhpcy5nZXRTZXR0aW5ncygpLmluY2x1ZGVMaW5rZWRJbWFnZXNcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU4N1x1Njg2M1x1NzZEMVx1NTQyQ1x1MzAwMlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hUb0RvY3VtZW50KGRvY3VtZW50KTtcblxuICAgIC8vIFx1NjVCMFx1N0E5N1x1NTNFM1x1NjI1M1x1NUYwMFx1NTQwRVx1ODg2NVx1NTE0NVx1NzZEMVx1NTQyQ1x1RkYwQ1x1NEZERFx1OEJDMSBwb3BvdXQgXHU1NzNBXHU2NjZGXHU1M0VGXHU3NTI4XHUzMDAyXG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcIndpbmRvdy1vcGVuXCIsIChfd2luOiBXb3Jrc3BhY2VXaW5kb3csIHdpbjogV2luZG93KSA9PiB7XG4gICAgICAgIHRoaXMuYXR0YWNoVG9Eb2N1bWVudCh3aW4uZG9jdW1lbnQpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gXHU1RTAzXHU1QzQwXHU1M0Q4XHU1MzE2XHU1NDBFXHU5MUNEXHU2NUIwXHU2MjZCXHU2M0NGXHVGRjBDXHU1OTA0XHU3NDA2XHU1RUY2XHU4RkRGXHU2MzAyXHU4RjdEXHU4OUM2XHU1NkZFXHUzMDAyXG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImxheW91dC1jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dGFjaFRvRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICB0aGlzLmNsZWFudXBEaXNjb25uZWN0ZWRIb3N0cygpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkEyMVx1NUYwRlx1NTIwN1x1NjM2Mlx1NjVGNlx1NTQwQ1x1NkI2NVx1NUJCOVx1NTY2OFx1NzJCNlx1NjAwMVx1MzAwMlxuICAgKi9cbiAgcHVibGljIHN5bmNNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMzdcdTY1QjBcdTkwMDlcdTYyRTlcdTU2NjhcdTg5QzRcdTUyMTlcdTMwMDJcbiAgICovXG4gIHB1YmxpYyByZWZyZXNoU2VsZWN0b3JzKCk6IHZvaWQge1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5nZXRTZXR0aW5ncygpO1xuICAgIHRoaXMuc2VsZWN0b3IgPSB0aGlzLmdhbGxlcnlTZXJ2aWNlLmJ1aWxkU2VsZWN0b3IoXG4gICAgICBzZXR0aW5ncy50cmlnZ2VyU2NvcGUsXG4gICAgICBzZXR0aW5ncy5pbmNsdWRlTGlua2VkSW1hZ2VzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU0N0RcdTRFRTRcdUZGMUFcdTU3MjhcdTVGNTNcdTUyNERcdTg5QzZcdTU2RkVcdTYyNTNcdTVGMDBcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBvcGVuUHJldmlld0F0QWN0aXZlSW1hZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZlTGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFjdGl2ZUxlYWY/LnZpZXc/LmNvbnRhaW5lckVsO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICBuZXcgTm90aWNlKHQoXCJub3RpY2Uubm9JbWFnZVwiLCB0aGlzLmFwcCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxJbWFnZUVsZW1lbnQ+KHRoaXMuc2VsZWN0b3IpO1xuICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICBuZXcgTm90aWNlKHQoXCJub3RpY2Uubm9JbWFnZVwiLCB0aGlzLmFwcCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMub3BlbkZyb21JbWFnZShjYW5kaWRhdGUub3duZXJEb2N1bWVudCwgY2FuZGlkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU0N0RcdTRFRTRcdUZGMUFcdTUxNzNcdTk1RURcdTVGNTNcdTUyNERcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBjbG9zZUFjdGl2ZVByZXZpZXcoKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdHMuZ2V0KGRvY3VtZW50KTtcbiAgICBjb25zdCBhY3RpdmUgPSBob3N0Py5nZXRBY3RpdmVQcmV2aWV3KCk7XG4gICAgaWYgKCFob3N0IHx8ICFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVByZXZpZXcoYWN0aXZlLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU0N0RcdTRFRTRcdUZGMUFcdTUyMDdcdTYzNjJcdTRFMEJcdTRFMDBcdTVGMjBcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzd2l0Y2hUb05leHRJbWFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmhvc3RzLmdldChkb2N1bWVudCk/LmdldEFjdGl2ZVByZXZpZXcoKTtcbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZVRvb2xiYXJBY3Rpb24oYWN0aXZlLmlkLCBcIm5leHRcIik7XG4gIH1cblxuICAvKipcbiAgICogXHU1NDdEXHU0RUU0XHVGRjFBXHU1MjA3XHU2MzYyXHU0RTBBXHU0RTAwXHU1RjIwXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc3dpdGNoVG9QcmV2aW91c0ltYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaG9zdHMuZ2V0KGRvY3VtZW50KT8uZ2V0QWN0aXZlUHJldmlldygpO1xuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVG9vbGJhckFjdGlvbihhY3RpdmUuaWQsIFwicHJldlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU0N0RcdTRFRTRcdUZGMUFcdTUyMDdcdTYzNjJcdTZBMjFcdTVGMEZcdTMwMDJcbiAgICovXG4gIHB1YmxpYyB0b2dnbGVNb2RlKCk6IFByZXZpZXdNb2RlIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICBzZXR0aW5ncy5tb2RlID0gc2V0dGluZ3MubW9kZSA9PT0gUHJldmlld01vZGUuTm9ybWFsID8gUHJldmlld01vZGUuUGluIDogUHJldmlld01vZGUuTm9ybWFsO1xuICAgIHRoaXMuc3luY01vZGUoKTtcbiAgICByZXR1cm4gc2V0dGluZ3MubW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYzRDJcdTRFRjZcdTUzNzhcdThGN0RcdTUyNERcdTZFMDVcdTc0MDZcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VBbGwoKTtcbiAgICB0aGlzLmhvc3RzLmZvckVhY2goKGhvc3QpID0+IGhvc3QuZGVzdHJveSgpKTtcbiAgICB0aGlzLmhvc3RzLmNsZWFyKCk7XG4gICAgdGhpcy5waW5RdWV1ZS5jbGVhcigpO1xuICAgIHRoaXMuYm91bmREb2NzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogXHU3RUQxXHU1QjlBIGRvY3VtZW50IFx1N0VBN1x1NEU4Qlx1NEVGNlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhdHRhY2hUb0RvY3VtZW50KGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ib3VuZERvY3MuaGFzKGRvYykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJvdW5kRG9jcy5hZGQoZG9jKTtcblxuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyRG9tRXZlbnQoXG4gICAgICBkb2MsXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBhc3luYyAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLnJlc29sdmVJbWFnZUZyb21Nb3VzZUV2ZW50KGRvYywgZXZlbnQpO1xuICAgICAgICBpZiAoIWltYWdlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1RhcmdldEltYWdlKGltYWdlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBhd2FpdCB0aGlzLm9wZW5Gcm9tSW1hZ2UoZG9jLCBpbWFnZSk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB0aGlzLnBsdWdpbi5yZWdpc3RlckRvbUV2ZW50KGRvYywgXCJtb3VzZW92ZXJcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsKT8uY2xvc2VzdChcImltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbDtcbiAgICAgIGlmICghaW1hZ2UgfHwgIXRoaXMuaXNUYXJnZXRJbWFnZShpbWFnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW1hZ2Uuc3R5bGUuY3Vyc29yID0gXCJ6b29tLWluXCI7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBsdWdpbi5yZWdpc3RlckRvbUV2ZW50KGRvYywgXCJrZXlkb3duXCIsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKGRvYywgZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NEVDRVx1NTZGRVx1NzI0N1x1ODI4Mlx1NzBCOVx1NjI1M1x1NUYwMFx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBvcGVuRnJvbUltYWdlKGRvYzogRG9jdW1lbnQsIHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuZ2V0T3JDcmVhdGVIb3N0KGRvYyk7XG5cbiAgICBjb25zdCBjb2xsZWN0ZWQgPSBhd2FpdCB0aGlzLmdhbGxlcnlTZXJ2aWNlLmNvbGxlY3RXaXRoRmFsbGJhY2soZG9jLCBzb3VyY2VJbWFnZSwgc2V0dGluZ3MpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gY29sbGVjdGVkLml0ZW1zLmxlbmd0aFxuICAgICAgPyBjb2xsZWN0ZWQuaXRlbXNcbiAgICAgIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogc291cmNlSW1hZ2UuY3VycmVudFNyYyB8fCBzb3VyY2VJbWFnZS5zcmMsXG4gICAgICAgICAgICBhbHQ6IHNvdXJjZUltYWdlLmFsdCB8fCBcIlwiLFxuICAgICAgICAgICAgdGl0bGU6IHNvdXJjZUltYWdlLnRpdGxlIHx8IHNvdXJjZUltYWdlLmFsdCB8fCBcIlwiLFxuICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICB0b3RhbDogMVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gY29sbGVjdGVkLmFjdGl2ZUluZGV4ID49IDAgPyBjb2xsZWN0ZWQuYWN0aXZlSW5kZXggOiAwO1xuICAgIGNvbnN0IGl0ZW0gPSBhbGxJdGVtc1thY3RpdmVJbmRleF0gPz8gYWxsSXRlbXNbMF07XG5cbiAgICBpZiAoc2V0dGluZ3MubW9kZSA9PT0gUHJldmlld01vZGUuUGluKSB7XG4gICAgICBjb25zdCBjYW5PcGVuID0gdGhpcy5lbmZvcmNlUGluTGltaXQoZG9jLCBob3N0LCBzZXR0aW5ncyk7XG4gICAgICBpZiAoIWNhbk9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByZXZpZXcgPSBob3N0Lm9wZW5QcmV2aWV3KHtcbiAgICAgIGl0ZW0sXG4gICAgICBzZXR0aW5ncyxcbiAgICAgIG1vZGU6IHNldHRpbmdzLm1vZGUsXG4gICAgICBhY3RpdmVJbmRleCxcbiAgICAgIGFsbEl0ZW1zLFxuICAgICAgb25Ub29sYmFyQWN0aW9uOiAocHJldmlld0lkLCBhY3Rpb24pID0+IHRoaXMuaGFuZGxlVG9vbGJhckFjdGlvbihwcmV2aWV3SWQsIGFjdGlvbiksXG4gICAgICBvbkdhbGxlcnlTZWxlY3Q6IChpbmRleCkgPT4gdGhpcy5oYW5kbGVHYWxsZXJ5U2VsZWN0KGRvYywgaW5kZXgpLFxuICAgICAgb25NYXNrQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2V0dGluZ3MoKS5tb2RlID09PSBQcmV2aWV3TW9kZS5Ob3JtYWwpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlQWxsSW5Eb2MoZG9jKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplUHJldmlld1J1bnRpbWUoZG9jLCBwcmV2aWV3LCBzb3VyY2VJbWFnZSwgYWxsSXRlbXMsIGFjdGl2ZUluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTk4ODRcdTg5QzhcdThGRDBcdTg4NENcdTY1RjZcdUZGMDhcdTcyQjZcdTYwMDFcdTY3M0EgKyBcdThGOTNcdTUxNjUgKyBcdTUyMURcdTU5Q0JcdTVFMDNcdTVDNDBcdUZGMDlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgaW5pdGlhbGl6ZVByZXZpZXdSdW50aW1lKFxuICAgIGRvYzogRG9jdW1lbnQsXG4gICAgcHJldmlldzogTW91bnRlZFByZXZpZXcsXG4gICAgc291cmNlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsXG4gICAgYWxsSXRlbXM6IEltYWdlSXRlbVtdLFxuICAgIGFjdGl2ZUluZGV4OiBudW1iZXJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc3RhdGVNYWNoaW5lID0gbmV3IFByZXZpZXdTdGF0ZU1hY2hpbmUoKTtcbiAgICBzdGF0ZU1hY2hpbmUub3BlbigpO1xuXG4gICAgY29uc3QgaW1hZ2VMb2FkZWQgPSBhd2FpdCB0aGlzLndhaXRGb3JJbWFnZUxvYWQocHJldmlldy5pbWFnZUVsKTtcbiAgICBpZiAoIWltYWdlTG9hZGVkKSB7XG4gICAgICBwcmV2aWV3LmltYWdlRWwuc3JjID0gc291cmNlSW1hZ2UuY3VycmVudFNyYyB8fCBzb3VyY2VJbWFnZS5zcmM7XG4gICAgfVxuXG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5nZXRMYXlvdXRWaWV3cG9ydChwcmV2aWV3LCBkb2MsIGFsbEl0ZW1zLmxlbmd0aCk7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gSW1hZ2VUcmFuc2Zvcm1FbmdpbmUuY3JlYXRlSW5pdGlhbFN0YXRlKFxuICAgICAgcHJldmlldy5pbWFnZUVsLm5hdHVyYWxXaWR0aCB8fCBzb3VyY2VJbWFnZS5uYXR1cmFsV2lkdGggfHwgMSxcbiAgICAgIHByZXZpZXcuaW1hZ2VFbC5uYXR1cmFsSGVpZ2h0IHx8IHNvdXJjZUltYWdlLm5hdHVyYWxIZWlnaHQgfHwgMSxcbiAgICAgIGxheW91dC53aWR0aCxcbiAgICAgIGxheW91dC5oZWlnaHQsXG4gICAgICBsYXlvdXQucmVzZXJ2ZWRCb3R0b21cbiAgICApO1xuXG4gICAgdGhpcy5nZXRPckNyZWF0ZUhvc3QoZG9jKS5hcHBseVN0YXRlKHByZXZpZXcuaWQsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dEFkYXB0ZXIoZG9jLCB7XG4gICAgICBvbkZvY3VzOiAoKSA9PiB0aGlzLmFjdGl2YXRlUHJldmlldyhwcmV2aWV3LmlkKSxcbiAgICAgIG9uRHJhZ1N0YXJ0OiAoeCwgeSkgPT4gdGhpcy5vbkRyYWdTdGFydChwcmV2aWV3LmlkLCB4LCB5KSxcbiAgICAgIG9uRHJhZ01vdmU6ICh4LCB5KSA9PiB0aGlzLm9uRHJhZ01vdmUocHJldmlldy5pZCwgeCwgeSksXG4gICAgICBvbkRyYWdFbmQ6ICgpID0+IHRoaXMub25EcmFnRW5kKHByZXZpZXcuaWQpLFxuICAgICAgb25XaGVlbFpvb206IChkZWx0YSwgYW5jaG9yWCwgYW5jaG9yWSkgPT4gdGhpcy5vblpvb20ocHJldmlldy5pZCwgZGVsdGEsIGFuY2hvclgsIGFuY2hvclkpLFxuICAgICAgb25QaW5jaFpvb206IChyYXRpbywgYW5jaG9yWCwgYW5jaG9yWSkgPT4gdGhpcy5vblpvb20ocHJldmlldy5pZCwgcmF0aW8sIGFuY2hvclgsIGFuY2hvclkpLFxuICAgICAgb25Eb3VibGVUYXA6ICgpID0+IHRoaXMub25Eb3VibGVUYXAocHJldmlldy5pZCksXG4gICAgICBvbkxvbmdQcmVzc01lbnU6ICh4LCB5KSA9PiB0aGlzLnNob3dDb250ZXh0TWVudShwcmV2aWV3LmlkLCB4LCB5KVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGV0YWNoSW5wdXQgPSBpbnB1dC5iaW5kKHByZXZpZXcuaW1hZ2VFbCk7XG5cbiAgICBjb25zdCBydW50aW1lOiBQcmV2aWV3UnVudGltZSA9IHtcbiAgICAgIGlkOiBwcmV2aWV3LmlkLFxuICAgICAgZG9jLFxuICAgICAgc291cmNlSW1hZ2UsXG4gICAgICBhbGxJdGVtcyxcbiAgICAgIGFjdGl2ZUluZGV4LFxuICAgICAgc3RhdGVNYWNoaW5lLFxuICAgICAgZGV0YWNoSW5wdXQsXG4gICAgICBsYXN0UG9pbnRlcjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBvcGVuZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgIHJlc3RvcmVCb3JkZXI6IHRoaXMuYXBwbHlTb3VyY2VJbWFnZUJvcmRlcihzb3VyY2VJbWFnZSlcbiAgICB9O1xuXG4gICAgdGhpcy5ydW50aW1lcy5zZXQocHJldmlldy5pZCwgcnVudGltZSk7XG5cbiAgICBpZiAodGhpcy5nZXRTZXR0aW5ncygpLm1vZGUgPT09IFByZXZpZXdNb2RlLlBpbikge1xuICAgICAgdGhpcy5wdXNoUGluUXVldWUoZG9jLCBwcmV2aWV3LmlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU1OTA0XHU3NDA2XHU1REU1XHU1MTc3XHU2ODBGXHU1MkE4XHU0RjVDXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZVRvb2xiYXJBY3Rpb24ocHJldmlld0lkOiBzdHJpbmcsIGFjdGlvbjogVG9vbGJhckFjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmhvc3RzLmdldChydW50aW1lLmRvYyk7XG4gICAgY29uc3QgcHJldmlldyA9IGhvc3Q/LmdldFByZXZpZXcocHJldmlld0lkKTtcbiAgICBpZiAoIWhvc3QgfHwgIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlUHJldmlldyhwcmV2aWV3SWQpO1xuICAgIGNvbnN0IHN0YXRlID0gcHJldmlldy5zdGF0ZTtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dFZpZXdwb3J0KHByZXZpZXcsIHJ1bnRpbWUuZG9jLCBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aCk7XG5cbiAgICBjb25zdCBhcHBseSA9IChuZXh0U3RhdGU6IFRyYW5zZm9ybVN0YXRlKTogdm9pZCA9PiB7XG4gICAgICBob3N0LmFwcGx5U3RhdGUocHJldmlld0lkLCBuZXh0U3RhdGUpO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSBcInpvb20taW5cIjpcbiAgICAgICAgYXBwbHkoSW1hZ2VUcmFuc2Zvcm1FbmdpbmUuem9vbUF0KHN0YXRlLCAxLjEsIHRoaXMuZ2V0Q2VudGVyQW5jaG9yKHN0YXRlKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ6b29tLW91dFwiOlxuICAgICAgICBhcHBseShJbWFnZVRyYW5zZm9ybUVuZ2luZS56b29tQXQoc3RhdGUsIDAuOSwgdGhpcy5nZXRDZW50ZXJBbmNob3Ioc3RhdGUpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInpvb20tMTAwXCI6XG4gICAgICAgIGFwcGx5KFxuICAgICAgICAgIEltYWdlVHJhbnNmb3JtRW5naW5lLnpvb21Ub0FjdHVhbChcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgICAgIGxheW91dC5yZXNlcnZlZEJvdHRvbVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZml0XCI6XG4gICAgICAgIGFwcGx5KFxuICAgICAgICAgIEltYWdlVHJhbnNmb3JtRW5naW5lLmZpdFRvVmlld3BvcnQoXG4gICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgIGxheW91dC53aWR0aCxcbiAgICAgICAgICAgIGxheW91dC5oZWlnaHQsXG4gICAgICAgICAgICBsYXlvdXQucmVzZXJ2ZWRCb3R0b21cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvcHlcIjpcbiAgICAgICAgdm9pZCB0aGlzLmNsaXBib2FyZFNlcnZpY2UuY29weUltYWdlT3JVcmwocHJldmlldy5pbWFnZUVsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY29weS1uYW1lXCI6XG4gICAgICAgIHZvaWQgdGhpcy5jb3B5SW1hZ2VOYW1lKHByZXZpZXcuY2FwdGlvbkVsLnRleHRDb250ZW50ID8/IFwiXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjbG9zZVwiOlxuICAgICAgICB0aGlzLmNsb3NlUHJldmlldyhwcmV2aWV3SWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgIHRoaXMuc3dpdGNoSW1hZ2UocHJldmlld0lkLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicHJldlwiOlxuICAgICAgICB0aGlzLnN3aXRjaEltYWdlKHByZXZpZXdJZCwgZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTc1M0JcdTVFQ0FcdTcwQjlcdTUxRkJcdTUyMDdcdTU2RkVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlR2FsbGVyeVNlbGVjdChkb2M6IERvY3VtZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdHMuZ2V0KGRvYyk7XG4gICAgY29uc3QgYWN0aXZlID0gaG9zdD8uZ2V0QWN0aXZlUHJldmlldygpO1xuICAgIGlmICghaG9zdCB8fCAhYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3dpdGNoSW1hZ2VUb0luZGV4KGFjdGl2ZS5pZCwgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIwN1x1NjM2Mlx1NTIzMFx1NjMwN1x1NUI5QVx1N0QyMlx1NUYxNVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBzd2l0Y2hJbWFnZVRvSW5kZXgocHJldmlld0lkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJ1bnRpbWUuYWxsSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKTtcbiAgICBjb25zdCBwcmV2aWV3ID0gaG9zdD8uZ2V0UHJldmlldyhwcmV2aWV3SWQpO1xuICAgIGlmICghaG9zdCB8fCAhcHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhZmVJbmRleCA9ICgoaW5kZXggJSBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aCkgKyBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aCkgJSBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aDtcbiAgICBydW50aW1lLmFjdGl2ZUluZGV4ID0gc2FmZUluZGV4O1xuXG4gICAgY29uc3QgbmV4dEl0ZW0gPSBydW50aW1lLmFsbEl0ZW1zW3NhZmVJbmRleF07XG4gICAgcHJldmlldy5pdGVtID0gbmV4dEl0ZW07XG4gICAgcHJldmlldy5pbWFnZUVsLnNyYyA9IG5leHRJdGVtLnNyYztcbiAgICBwcmV2aWV3LmltYWdlRWwuYWx0ID0gbmV4dEl0ZW0uYWx0O1xuICAgIGhvc3QucmVuZGVyR2FsbGVyeSh0aGlzLmdldFNldHRpbmdzKCksIHJ1bnRpbWUuYWxsSXRlbXMsIHNhZmVJbmRleCwgKG5leHRJZHgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlR2FsbGVyeVNlbGVjdChydW50aW1lLmRvYywgbmV4dElkeCk7XG4gICAgfSk7XG5cbiAgICB2b2lkIHRoaXMud2FpdEZvckltYWdlTG9hZChwcmV2aWV3LmltYWdlRWwpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgbGF5b3V0ID0gdGhpcy5nZXRMYXlvdXRWaWV3cG9ydChwcmV2aWV3LCBydW50aW1lLmRvYywgcnVudGltZS5hbGxJdGVtcy5sZW5ndGgpO1xuICAgICAgY29uc3QgbmV4dFN0YXRlID0gSW1hZ2VUcmFuc2Zvcm1FbmdpbmUuY3JlYXRlSW5pdGlhbFN0YXRlKFxuICAgICAgICBwcmV2aWV3LmltYWdlRWwubmF0dXJhbFdpZHRoIHx8IDEsXG4gICAgICAgIHByZXZpZXcuaW1hZ2VFbC5uYXR1cmFsSGVpZ2h0IHx8IDEsXG4gICAgICAgIGxheW91dC53aWR0aCxcbiAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgbGF5b3V0LnJlc2VydmVkQm90dG9tXG4gICAgICApO1xuICAgICAgaG9zdC5hcHBseVN0YXRlKHByZXZpZXdJZCwgbmV4dFN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYzMDlcdTk4N0FcdTVFOEZcdTUyMDdcdTYzNjJcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgc3dpdGNoSW1hZ2UocHJldmlld0lkOiBzdHJpbmcsIG5leHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUgfHwgcnVudGltZS5hbGxJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSA9IG5leHQgPyAxIDogLTE7XG4gICAgdGhpcy5zd2l0Y2hJbWFnZVRvSW5kZXgocHJldmlld0lkLCBydW50aW1lLmFjdGl2ZUluZGV4ICsgZGVsdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NUYwMFx1NTlDQlx1NjJENlx1NjJGRFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBvbkRyYWdTdGFydChwcmV2aWV3SWQ6IHN0cmluZywgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlUHJldmlldyhwcmV2aWV3SWQpO1xuICAgIHJ1bnRpbWUubGFzdFBvaW50ZXIgPSB7IHg6IGNsaWVudFgsIHk6IGNsaWVudFkgfTtcbiAgICB0cnkge1xuICAgICAgcnVudGltZS5zdGF0ZU1hY2hpbmUuc3RhcnREcmFnKCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBcdTVERjJcdTU3MjhcdTYyRDZcdTYyRkRcdTYwMDFcdTY1RjZcdTVGRkRcdTc1NjVcdTkxQ0RcdTU5MEQgc3RhcnRcdTMwMDJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU2MkQ2XHU2MkZEXHU0RTJEXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG9uRHJhZ01vdmUocHJldmlld0lkOiBzdHJpbmcsIGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KHByZXZpZXdJZCk7XG4gICAgY29uc3QgaG9zdCA9IHJ1bnRpbWUgPyB0aGlzLmhvc3RzLmdldChydW50aW1lLmRvYykgOiBudWxsO1xuICAgIGNvbnN0IHByZXZpZXcgPSBob3N0Py5nZXRQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgaWYgKCFydW50aW1lIHx8ICFob3N0IHx8ICFwcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNsaWVudFggLSBydW50aW1lLmxhc3RQb2ludGVyLng7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNsaWVudFkgLSBydW50aW1lLmxhc3RQb2ludGVyLnk7XG4gICAgcnVudGltZS5sYXN0UG9pbnRlciA9IHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9O1xuXG4gICAgaG9zdC5hcHBseVN0YXRlKHByZXZpZXdJZCwgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUubW92ZUJ5KHByZXZpZXcuc3RhdGUsIHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogXHU3RUQzXHU2NzVGXHU2MkQ2XHU2MkZEXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG9uRHJhZ0VuZChwcmV2aWV3SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBydW50aW1lLnN0YXRlTWFjaGluZS5lbmREcmFnKCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBcdTk3NUVcdTYyRDZcdTYyRkRcdTYwMDFcdTdFRDNcdTY3NUZcdTY1RjZcdTY1RTBcdTk3MDBcdTU5MDRcdTc0MDZcdTMwMDJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU1OTA0XHU3NDA2XHU3RjI5XHU2NTNFXHU4RjkzXHU1MTY1XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG9uWm9vbShwcmV2aWV3SWQ6IHN0cmluZywgcmF0aW86IG51bWJlciwgYW5jaG9yWDogbnVtYmVyLCBhbmNob3JZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBjb25zdCBob3N0ID0gcnVudGltZSA/IHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKSA6IG51bGw7XG4gICAgY29uc3QgcHJldmlldyA9IGhvc3Q/LmdldFByZXZpZXcocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUgfHwgIWhvc3QgfHwgIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBob3N0LmFwcGx5U3RhdGUoXG4gICAgICBwcmV2aWV3SWQsXG4gICAgICBJbWFnZVRyYW5zZm9ybUVuZ2luZS56b29tQXQocHJldmlldy5zdGF0ZSwgcmF0aW8sIHtcbiAgICAgICAgeDogYW5jaG9yWCxcbiAgICAgICAgeTogYW5jaG9yWVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTNDQ1x1NTFGQlx1NTIwN1x1NjM2MiBmaXQvMToxXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG9uRG91YmxlVGFwKHByZXZpZXdJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KHByZXZpZXdJZCk7XG4gICAgY29uc3QgaG9zdCA9IHJ1bnRpbWUgPyB0aGlzLmhvc3RzLmdldChydW50aW1lLmRvYykgOiBudWxsO1xuICAgIGNvbnN0IHByZXZpZXcgPSBob3N0Py5nZXRQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgaWYgKCFydW50aW1lIHx8ICFob3N0IHx8ICFwcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGF5b3V0ID0gdGhpcy5nZXRMYXlvdXRWaWV3cG9ydChwcmV2aWV3LCBydW50aW1lLmRvYywgcnVudGltZS5hbGxJdGVtcy5sZW5ndGgpO1xuICAgIGlmIChNYXRoLmFicyhwcmV2aWV3LnN0YXRlLnpvb21SYXRpbyAtIDEpIDwgMC4wNSkge1xuICAgICAgaG9zdC5hcHBseVN0YXRlKFxuICAgICAgICBwcmV2aWV3SWQsXG4gICAgICAgIEltYWdlVHJhbnNmb3JtRW5naW5lLmZpdFRvVmlld3BvcnQoXG4gICAgICAgICAgcHJldmlldy5zdGF0ZSxcbiAgICAgICAgICBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgICBsYXlvdXQucmVzZXJ2ZWRCb3R0b21cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBob3N0LmFwcGx5U3RhdGUoXG4gICAgICBwcmV2aWV3SWQsXG4gICAgICBJbWFnZVRyYW5zZm9ybUVuZ2luZS56b29tVG9BY3R1YWwoXG4gICAgICAgIHByZXZpZXcuc3RhdGUsXG4gICAgICAgIGxheW91dC53aWR0aCxcbiAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgbGF5b3V0LnJlc2VydmVkQm90dG9tXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUzRjNcdTk1MkUvXHU5NTdGXHU2MzA5XHU2MjUzXHU1RjAwXHU4M0RDXHU1MzU1XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHNob3dDb250ZXh0TWVudShwcmV2aWV3SWQ6IHN0cmluZywgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSAodGl0bGU6IHN0cmluZywgYWN0aW9uOiBUb29sYmFyQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICBtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5zZXRUaXRsZSh0aXRsZSkub25DbGljaygoKSA9PiB0aGlzLmhhbmRsZVRvb2xiYXJBY3Rpb24ocHJldmlld0lkLCBhY3Rpb24pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhZGRJdGVtKFwiWm9vbSBJblwiLCBcInpvb20taW5cIik7XG4gICAgYWRkSXRlbShcIlpvb20gT3V0XCIsIFwiem9vbS1vdXRcIik7XG4gICAgYWRkSXRlbShcIkFjdHVhbCBTaXplXCIsIFwiem9vbS0xMDBcIik7XG4gICAgYWRkSXRlbShcIkZpdFwiLCBcImZpdFwiKTtcbiAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xuICAgIGFkZEl0ZW0oXCJDb3B5XCIsIFwiY29weVwiKTtcbiAgICBhZGRJdGVtKFwiQ2xvc2VcIiwgXCJjbG9zZVwiKTtcblxuICAgIG1lbnUuc2hvd0F0UG9zaXRpb24oeyB4OiBjbGllbnRYLCB5OiBjbGllbnRZIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OTUyRVx1NzZEOFx1NUZFQlx1NjM3N1x1OTUyRVx1NTkwNFx1NzQwNlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVLZXlEb3duKGRvYzogRG9jdW1lbnQsIGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdHMuZ2V0KGRvYyk7XG4gICAgY29uc3QgYWN0aXZlID0gaG9zdD8uZ2V0QWN0aXZlUHJldmlldygpO1xuICAgIGlmICghaG9zdCB8fCAhYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KGFjdGl2ZS5pZCk7XG4gICAgaWYgKCFydW50aW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xvc2VQcmV2aWV3KGFjdGl2ZS5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gXHU2NUI5XHU1NDExXHU5NTJFXHVGRjFBXHU2ODM5XHU2MzZFXHU0RTBEXHU1NDBDXHU0RkVFXHU5OTcwXHU5NTJFXHU2M0E3XHU1MjM2XHU3OUZCXHU1MkE4XHU2MjE2XHU1MjA3XHU1NkZFXHUzMDAyXG4gICAgaWYgKFtcIkFycm93TGVmdFwiLCBcIkFycm93UmlnaHRcIiwgXCJBcnJvd1VwXCIsIFwiQXJyb3dEb3duXCJdLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgIGlmICh0aGlzLm1hdGNoTW9kaWZpZXIoZXZlbnQsIHRoaXMuZ2V0U2V0dGluZ3MoKS5zd2l0Y2hIb3RrZXkpKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc3dpdGNoSW1hZ2UoYWN0aXZlLmlkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc3dpdGNoSW1hZ2UoYWN0aXZlLmlkLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1hdGNoTW9kaWZpZXIoZXZlbnQsIHRoaXMuZ2V0U2V0dGluZ3MoKS5tb3ZlSG90a2V5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm1vdmVCeUFycm93KGFjdGl2ZS5pZCwgZXZlbnQua2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU3QkFEXHU1OTM0XHU5NTJFXHU3OUZCXHU1MkE4XHU1NkZFXHU3MjQ3XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG1vdmVCeUFycm93KHByZXZpZXdJZDogc3RyaW5nLCBrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGNvbnN0IGhvc3QgPSBydW50aW1lID8gdGhpcy5ob3N0cy5nZXQocnVudGltZS5kb2MpIDogbnVsbDtcbiAgICBjb25zdCBwcmV2aWV3ID0gaG9zdD8uZ2V0UHJldmlldyhwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSB8fCAhaG9zdCB8fCAhcHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNwZWVkID0gdGhpcy5nZXRTZXR0aW5ncygpLm1vdmVTcGVlZDtcbiAgICBjb25zdCBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBpZiAoa2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBvZmZzZXQueCA9IC1zcGVlZDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIG9mZnNldC54ID0gc3BlZWQ7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICBvZmZzZXQueSA9IC1zcGVlZDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgb2Zmc2V0LnkgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBob3N0LmFwcGx5U3RhdGUocHJldmlld0lkLCBJbWFnZVRyYW5zZm9ybUVuZ2luZS5tb3ZlQnkocHJldmlldy5zdGF0ZSwgb2Zmc2V0KSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU2MzA3XHU1QjlBXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNsb3NlUHJldmlldyhwcmV2aWV3SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJ1bnRpbWUuZGV0YWNoSW5wdXQoKTtcbiAgICBydW50aW1lLnJlc3RvcmVCb3JkZXI/LigpO1xuICAgIHJ1bnRpbWUuc3RhdGVNYWNoaW5lLmNsb3NlKCk7XG5cbiAgICB0aGlzLmhvc3RzLmdldChydW50aW1lLmRvYyk/LmNsb3NlUHJldmlldyhwcmV2aWV3SWQpO1xuICAgIHRoaXMucnVudGltZXMuZGVsZXRlKHByZXZpZXdJZCk7XG5cbiAgICBjb25zdCBxdWV1ZSA9IHRoaXMucGluUXVldWUuZ2V0KHJ1bnRpbWUuZG9jKTtcbiAgICBpZiAocXVldWUpIHtcbiAgICAgIHRoaXMucGluUXVldWUuc2V0KFxuICAgICAgICBydW50aW1lLmRvYyxcbiAgICAgICAgcXVldWUuZmlsdGVyKChpZCkgPT4gaWQgIT09IHByZXZpZXdJZClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE3M1x1OTVFRFx1NUY1M1x1NTI0RFx1NjU4N1x1Njg2M1x1NjI0MFx1NjcwOVx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjbG9zZUFsbEluRG9jKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKHRoaXMucnVudGltZXMudmFsdWVzKCkpXG4gICAgICAuZmlsdGVyKChydW50aW1lKSA9PiBydW50aW1lLmRvYyA9PT0gZG9jKVxuICAgICAgLm1hcCgocnVudGltZSkgPT4gcnVudGltZS5pZCk7XG5cbiAgICBpZHMuZm9yRWFjaCgoaWQpID0+IHRoaXMuY2xvc2VQcmV2aWV3KGlkKSk7XG4gICAgdGhpcy5ob3N0cy5nZXQoZG9jKT8uY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUxNzNcdTk1RURcdTYyNDBcdTY3MDlcdTY1ODdcdTY4NjNcdTc2ODRcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLnJ1bnRpbWVzLmtleXMoKSkuZm9yRWFjaCgoaWQpID0+IHRoaXMuY2xvc2VQcmV2aWV3KGlkKSk7XG4gICAgdGhpcy5ob3N0cy5mb3JFYWNoKChob3N0KSA9PiBob3N0LmNsb3NlQWxsKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkZDMFx1NkQzQlx1NjdEMFx1NEUyQVx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhY3RpdmF0ZVByZXZpZXcocHJldmlld0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKTtcbiAgICBob3N0Py5zZXRBY3RpdmUocHJldmlld0lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaW4gXHU2QTIxXHU1RjBGXHU0RTBCXHU5NjUwXHU1MjM2XHU2NzAwXHU1OTI3XHU2NTcwXHU5MUNGXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGVuZm9yY2VQaW5MaW1pdChkb2M6IERvY3VtZW50LCBob3N0OiBPdmVybGF5SG9zdCwgc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzKTogYm9vbGVhbiB7XG4gICAgaWYgKGhvc3Quc2l6ZSgpIDwgc2V0dGluZ3MucGluTWF4aW11bSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFzZXR0aW5ncy5waW5Db3Zlck1vZGUpIHtcbiAgICAgIG5ldyBOb3RpY2UoYFBpbiBtYXhpbXVtIGlzICR7c2V0dGluZ3MucGluTWF4aW11bX0uYCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcXVldWUgPSB0aGlzLnBpblF1ZXVlLmdldChkb2MpID8/IFtdO1xuICAgIGNvbnN0IG9sZGVzdCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgaWYgKCFvbGRlc3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnBpblF1ZXVlLnNldChkb2MsIHF1ZXVlKTtcbiAgICB0aGlzLmNsb3NlUHJldmlldyhvbGRlc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJCMFx1NUY1NSBQaW4gXHU2QTIxXHU1RjBGXHU2MjUzXHU1RjAwXHU5ODdBXHU1RThGXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHB1c2hQaW5RdWV1ZShkb2M6IERvY3VtZW50LCBwcmV2aWV3SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHF1ZXVlID0gdGhpcy5waW5RdWV1ZS5nZXQoZG9jKSA/PyBbXTtcbiAgICBxdWV1ZS5wdXNoKHByZXZpZXdJZCk7XG4gICAgdGhpcy5waW5RdWV1ZS5zZXQoZG9jLCBxdWV1ZSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MjFCXHU1RUZBXHU2MjE2XHU4M0I3XHU1M0Q2XHU1QkJGXHU0RTNCXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGdldE9yQ3JlYXRlSG9zdChkb2M6IERvY3VtZW50KTogT3ZlcmxheUhvc3Qge1xuICAgIGxldCBob3N0ID0gdGhpcy5ob3N0cy5nZXQoZG9jKTtcbiAgICBpZiAoIWhvc3QpIHtcbiAgICAgIGhvc3QgPSBuZXcgT3ZlcmxheUhvc3QodGhpcy5hcHAsIGRvYyk7XG4gICAgICB0aGlzLmhvc3RzLnNldChkb2MsIGhvc3QpO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMDVcdTc0MDZcdTY1RTBcdTY1NDhcdTY1ODdcdTY4NjNcdTVCQkZcdTRFM0JcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY2xlYW51cERpc2Nvbm5lY3RlZEhvc3RzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpc2Nvbm5lY3RlZDogRG9jdW1lbnRbXSA9IFtdO1xuICAgIHRoaXMuaG9zdHMuZm9yRWFjaCgoX2hvc3QsIGRvYykgPT4ge1xuICAgICAgaWYgKCFkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLmRlZmF1bHRWaWV3LmNsb3NlZCkge1xuICAgICAgICBkaXNjb25uZWN0ZWQucHVzaChkb2MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlzY29ubmVjdGVkLmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgdGhpcy5jbG9zZUFsbEluRG9jKGRvYyk7XG4gICAgICB0aGlzLmhvc3RzLmdldChkb2MpPy5kZXN0cm95KCk7XG4gICAgICB0aGlzLmhvc3RzLmRlbGV0ZShkb2MpO1xuICAgICAgdGhpcy5waW5RdWV1ZS5kZWxldGUoZG9jKTtcbiAgICAgIHRoaXMuYm91bmREb2NzLmRlbGV0ZShkb2MpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIyNFx1NjVBRFx1ODI4Mlx1NzBCOVx1NjYyRlx1NTQyNlx1NkVFMVx1OERCM1x1ODlFNlx1NTNEMVx1ODlDNFx1NTIxOVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBpc1RhcmdldEltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKGltYWdlLmNsb3Nlc3QoXCIub2lwLW92ZXJsYXktcm9vdFwiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgc2NvcGVNYXRjaGVzID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHNjb3BlTWF0Y2hlcyA9IGltYWdlLm1hdGNoZXModGhpcy5zZWxlY3Rvcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbSW1hZ2VzIFByZXZpZXddIEludmFsaWQgc2VsZWN0b3I6XCIsIHRoaXMuc2VsZWN0b3IsIGVycm9yKTtcbiAgICAgIHNjb3BlTWF0Y2hlcyA9IGltYWdlLm1hdGNoZXMoXCJpbWdcIik7XG4gICAgfVxuICAgIGlmICghc2NvcGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3JjID0gaW1hZ2UuY3VycmVudFNyYyB8fCBpbWFnZS5zcmM7XG4gICAgcmV0dXJuIEJvb2xlYW4oc3JjKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTRFQ0VcdTlGMjBcdTY4MDdcdTRFOEJcdTRFRjZcdTRFMkRcdTg5RTNcdTY3OTBcdTc2RUVcdTY4MDdcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICogXHU0RjE4XHU1MTQ4XHU4RDcwIHRhcmdldC9jb21wb3NlZFBhdGhcdUZGMENcdTY3MDBcdTU0MEVcdTU2REVcdTkwMDBcdTUyMzAgZWxlbWVudEZyb21Qb2ludFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlSW1hZ2VGcm9tTW91c2VFdmVudChkb2M6IERvY3VtZW50LCBldmVudDogTW91c2VFdmVudCk6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBjb25zdCBjbG9zZXN0ID0gdGFyZ2V0LmNsb3Nlc3QoXCJpbWdcIik7XG4gICAgICBpZiAoY2xvc2VzdCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhdGgpIHtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSBkb2MuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBpZiAoaGl0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGhpdDtcbiAgICB9XG4gICAgaWYgKGhpdCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNsb3Nlc3QgPSBoaXQuY2xvc2VzdChcImltZ1wiKTtcbiAgICAgIGlmIChjbG9zZXN0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMjRcdTY1QURcdTRFOEJcdTRFRjZcdTY2MkZcdTU0MjZcdTZFRTFcdThEQjNcdTRGRUVcdTk5NzBcdTk1MkVcdTY3NjFcdTRFRjZcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgbWF0Y2hNb2RpZmllcihldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIG1vZGlmaWVyOiBIb3RrZXlNb2RpZmllcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN0cmwgPSBldmVudC5jdHJsS2V5IHx8IChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5tZXRhS2V5O1xuICAgIGNvbnN0IGFsdCA9IGV2ZW50LmFsdEtleTtcbiAgICBjb25zdCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5O1xuXG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgY2FzZSBIb3RrZXlNb2RpZmllci5Ob25lOlxuICAgICAgICByZXR1cm4gIWN0cmwgJiYgIWFsdCAmJiAhc2hpZnQ7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLkN0cmw6XG4gICAgICAgIHJldHVybiBjdHJsICYmICFhbHQgJiYgIXNoaWZ0O1xuICAgICAgY2FzZSBIb3RrZXlNb2RpZmllci5BbHQ6XG4gICAgICAgIHJldHVybiAhY3RybCAmJiBhbHQgJiYgIXNoaWZ0O1xuICAgICAgY2FzZSBIb3RrZXlNb2RpZmllci5TaGlmdDpcbiAgICAgICAgcmV0dXJuICFjdHJsICYmICFhbHQgJiYgc2hpZnQ7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLkN0cmxBbHQ6XG4gICAgICAgIHJldHVybiBjdHJsICYmIGFsdCAmJiAhc2hpZnQ7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLkN0cmxTaGlmdDpcbiAgICAgICAgcmV0dXJuIGN0cmwgJiYgIWFsdCAmJiBzaGlmdDtcbiAgICAgIGNhc2UgSG90a2V5TW9kaWZpZXIuU2hpZnRBbHQ6XG4gICAgICAgIHJldHVybiAhY3RybCAmJiBhbHQgJiYgc2hpZnQ7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLkN0cmxTaGlmdEFsdDpcbiAgICAgICAgcmV0dXJuIGN0cmwgJiYgYWx0ICYmIHNoaWZ0O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTRFM0FcdTdGMjlcdTY1M0VcdTYzMDlcdTk0QUVcdThGRDRcdTU2REVcdTRFMkRcdTVGQzNcdTk1MUFcdTcwQjlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZ2V0Q2VudGVyQW5jaG9yKHN0YXRlOiBUcmFuc2Zvcm1TdGF0ZSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHN0YXRlLmxlZnQgKyBzdGF0ZS53aWR0aCAvIDIsXG4gICAgICB5OiBzdGF0ZS50b3AgKyBzdGF0ZS5oZWlnaHQgLyAyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCRkJcdTUzRDZcdTVGNTNcdTUyNERcdTg5QzZcdTUzRTNcdTVDM0FcdTVCRjhcdTVFNzZcdTRGRERcdThCQzFcdTY3MDBcdTVDMEZcdTUwM0NcdUZGMENcdTkwN0ZcdTUxNERcdTVGMDJcdTVFMzhcdTdBOTdcdTUzRTNcdTVDM0FcdTVCRjhcdTVCRkNcdTgxRjRcdThCQTFcdTdCOTdcdTk1MTlcdThCRUZcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZ2V0Vmlld3BvcnRTaXplKGRvYzogRG9jdW1lbnQpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHdpZHRoID0gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2MuYm9keS5jbGllbnRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxO1xuICAgIGNvbnN0IGhlaWdodCA9IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvYy5ib2R5LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IE1hdGgubWF4KDEsIHdpZHRoKSxcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoMSwgaGVpZ2h0KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogXHU4QkExXHU3Qjk3XHU1RjUzXHU1MjREXHU5ODg0XHU4OUM4XHU5NzAwXHU4OTgxXHU5ODg0XHU3NTU5XHU3Njg0XHU1RTk1XHU5MEU4XHU5QUQ4XHU1RUE2XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGdldEJvdHRvbVJlc2VydmVkSGVpZ2h0KHByZXZpZXc6IE1vdW50ZWRQcmV2aWV3LCBhbGxJdGVtQ291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHByZXZpZXcuc2hlbGxFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvaXAtcGluLXNoZWxsXCIpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNHYWxsZXJ5ID0gdGhpcy5nZXRTZXR0aW5ncygpLmdhbGxlcnkuZW5hYmxlZCAmJiBhbGxJdGVtQ291bnQgPiAxO1xuICAgIHJldHVybiBoYXNHYWxsZXJ5XG4gICAgICA/IFByZXZpZXdDb250cm9sbGVyLk5PUk1BTF9CT1RUT01fUkVTRVJWRV9XSVRIX0dBTExFUllcbiAgICAgIDogUHJldmlld0NvbnRyb2xsZXIuTk9STUFMX0JPVFRPTV9SRVNFUlZFO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkM0N1x1NjAzQlx1NUUwM1x1NUM0MFx1OEJBMVx1N0I5N1x1OTcwMFx1ODk4MVx1NzY4NFx1ODlDNlx1NTNFM1x1NEZFMVx1NjA2Rlx1RkYwQ1x1NEY5Qlx1NTIxRFx1NTlDQlx1OTAwMlx1OTE0RFx1NEUwRSBmaXQvMToxIFx1NTE3MVx1NzUyOFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMYXlvdXRWaWV3cG9ydChcbiAgICBwcmV2aWV3OiBNb3VudGVkUHJldmlldyxcbiAgICBkb2M6IERvY3VtZW50LFxuICAgIGFsbEl0ZW1Db3VudDogbnVtYmVyXG4gICk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHJlc2VydmVkQm90dG9tOiBudW1iZXIgfSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLmdldFZpZXdwb3J0U2l6ZShkb2MpO1xuICAgIGNvbnN0IHJlc2VydmVkQm90dG9tID0gdGhpcy5nZXRCb3R0b21SZXNlcnZlZEhlaWdodChwcmV2aWV3LCBhbGxJdGVtQ291bnQpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdmlld3BvcnQud2lkdGgsXG4gICAgICBoZWlnaHQ6IHZpZXdwb3J0LmhlaWdodCxcbiAgICAgIHJlc2VydmVkQm90dG9tXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU5MERcdTUyMzZcdTU2RkVcdTcyNDdcdTU0MERcdTc5RjBcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY29weUltYWdlTmFtZShyYXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBpbWFnZU5hbWUgPSByYXdOYW1lLnRyaW0oKTtcbiAgICBpZiAoIWltYWdlTmFtZSkge1xuICAgICAgbmV3IE5vdGljZSh0KFwibm90aWNlLmNvcHlOYW1lRmFpbGVkXCIsIHRoaXMuYXBwKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29waWVkID0gYXdhaXQgdGhpcy5jbGlwYm9hcmRTZXJ2aWNlLmNvcHlQbGFpblRleHQoaW1hZ2VOYW1lKTtcbiAgICBuZXcgTm90aWNlKHQoY29waWVkID8gXCJub3RpY2UuY29weU5hbWVTdWNjZXNzXCIgOiBcIm5vdGljZS5jb3B5TmFtZUZhaWxlZFwiLCB0aGlzLmFwcCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1N0I0OVx1NUY4NVx1NTZGRVx1NzI0N1x1NTJBMFx1OEY3RFx1NUI4Q1x1NjIxMFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB3YWl0Rm9ySW1hZ2VMb2FkKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICBjb25zdCBkb25lID0gKHJlc3VsdDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQpO1xuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9uTG9hZCA9ICgpOiB2b2lkID0+IGRvbmUodHJ1ZSk7XG4gICAgICBjb25zdCBvbkVycm9yID0gKCk6IHZvaWQgPT4gZG9uZShmYWxzZSk7XG5cbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZCk7XG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGRvbmUoZmFsc2UpLCA1MDAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFRDlcdTUzOUZcdTU2RkVcdTUyQTBcdThGQjlcdTY4NDZcdTlBRDhcdTRFQUVcdUZGMENcdTVFNzZcdThGRDRcdTU2REVcdTYwNjJcdTU5MERcdTUxRkRcdTY1NzBcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgYXBwbHlTb3VyY2VJbWFnZUJvcmRlcihzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudCk6ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgaWYgKCFzZXR0aW5ncy5pbWFnZUJvcmRlckVuYWJsZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSBzb3VyY2VJbWFnZS5zdHlsZTtcbiAgICBjb25zdCBwcmV2ID0ge1xuICAgICAgd2lkdGg6IHN0eWxlLmJvcmRlcldpZHRoLFxuICAgICAgc3R5bGU6IHN0eWxlLmJvcmRlclN0eWxlLFxuICAgICAgY29sb3I6IHN0eWxlLmJvcmRlckNvbG9yXG4gICAgfTtcblxuICAgIHN0eWxlLmJvcmRlcldpZHRoID0gc2V0dGluZ3MuaW1hZ2VCb3JkZXJXaWR0aDtcbiAgICBzdHlsZS5ib3JkZXJTdHlsZSA9IHNldHRpbmdzLmltYWdlQm9yZGVyU3R5bGU7XG4gICAgc3R5bGUuYm9yZGVyQ29sb3IgPSBzZXR0aW5ncy5pbWFnZUJvcmRlckNvbG9yO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN0eWxlLmJvcmRlcldpZHRoID0gcHJldi53aWR0aDtcbiAgICAgIHN0eWxlLmJvcmRlclN0eWxlID0gcHJldi5zdHlsZTtcbiAgICAgIHN0eWxlLmJvcmRlckNvbG9yID0gcHJldi5jb2xvcjtcbiAgICB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBJbnB1dENhbGxiYWNrcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1OEY5M1x1NTE2NVx1OTAwMlx1OTE0RFx1NUM0Mlx1RkYxQVx1NjI4QVx1OUYyMFx1NjgwNy9cdTg5RTZcdTY0NzhcdTRFOEJcdTRFRjZcdTdFREZcdTRFMDBcdTY2MjBcdTVDMDRcdTRFM0FcdTYzQTdcdTUyMzZcdTVDNDJcdTU2REVcdThDMDNcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0QWRhcHRlciB7XG4gIC8vIDEyMHB4IFx1OEZEMVx1NEYzQ1x1NEUwMFx1NkIyMVx1NEYyMFx1N0VERlx1NkVEQVx1OEY2RVx1NTIzQlx1NUVBNlx1RkYxQlx1NzUyOFx1NEU4RVx1NjI4QVx1NEUwRFx1NTQwQ1x1OEJCRVx1NTkwN1x1OEY5M1x1NTE2NVx1N0VERlx1NEUwMFx1NTIzMFx1NTQwQ1x1NEUwMFx1NUMzQVx1NUVBNlx1MzAwMlxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXSEVFTF9TVEVQX1BJWEVMUyA9IDEyMDtcbiAgLy8gXHU4RjdCXHU1RkFFXHU2M0QwXHU5QUQ4XHU1MzU1XHU2QjY1XHU0RTBBXHU5NjUwXHVGRjBDXHU5NjMyXHU2QjYyXHU4OUU2XHU2M0E3XHU2NzdGXHU2MjE2XHU2MEVGXHU2MDI3XHU2RURBXHU1MkE4XHU1MUZBXHU3M0IwXHU3QTgxXHU1MTQwXHU4REYzXHU1M0Q4XHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdIRUVMX01BWF9TVEVQID0gMS4yNTtcbiAgLy8gXHU0RjIwXHU3RURGXHU2RURBXHU4RjZFXHU0RTAwXHU2QjY1XHU1QkY5XHU1RTk0XHU3RUE2IDEyJSBcdTdGMjlcdTY1M0VcdUZGMENcdTRGRERcdTc1NTlcdTlGMjBcdTY4MDdcdTZFREFcdThGNkVcdTYyNEJcdTYxMUZcdTMwMDJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0hFRUxfQkFTRV9GQUNUT1IgPSAxLjEyO1xuICAvLyBcdTg4NENcdTZBMjFcdTVGMEZcdThGNkNcdTUwQ0ZcdTdEMjBcdTc2ODRcdTdFQ0ZcdTlBOENcdTUwM0NcdUZGMENcdTRGQkZcdTRFOEVcdTUxN0NcdTVCQjlcdTRFMERcdTU0MENcdTZENEZcdTg5QzhcdTU2NjhcdTc2ODQgZGVsdGFNb2RlXHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdIRUVMX0xJTkVfSEVJR0hUX1BJWEVMUyA9IDE2O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZG9jOiBEb2N1bWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSBjYWxsYmFja3M6IElucHV0Q2FsbGJhY2tzO1xuXG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwaW5jaERpc3RhbmNlID0gMDtcbiAgcHJpdmF0ZSBsYXN0VGFwQXQgPSAwO1xuICBwcml2YXRlIGxvbmdQcmVzc1RpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogXHU2Nzg0XHU5MDIwXHU4RjkzXHU1MTY1XHU5MDAyXHU5MTREXHU1QzQyXHUzMDAyXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihkb2M6IERvY3VtZW50LCBjYWxsYmFja3M6IElucHV0Q2FsbGJhY2tzKSB7XG4gICAgdGhpcy5kb2MgPSBkb2M7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gIH1cblxuICAvKipcbiAgICogXHU3RUQxXHU1QjlBXHU1MjMwXHU1NkZFXHU3MjQ3XHU1MTQzXHU3RDIwXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYmluZChpbWFnZUVsOiBIVE1MSW1hZ2VFbGVtZW50KTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRm9jdXMoKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25EcmFnU3RhcnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRHJhZ01vdmUoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTW91c2VVcCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbkRyYWdFbmQoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25XaGVlbCA9IChldmVudDogV2hlZWxFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRm9jdXMoKTtcbiAgICAgIGNvbnN0IGZhY3RvciA9IHRoaXMuY29tcHV0ZVdoZWVsWm9vbUZhY3RvcihldmVudCk7XG4gICAgICBpZiAoTWF0aC5hYnMoZmFjdG9yIC0gMSkgPCAwLjAwMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbldoZWVsWm9vbShmYWN0b3IsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkRvdWJsZUNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25Eb3VibGVUYXAoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Db250ZXh0TWVudSA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTG9uZ1ByZXNzTWVudShldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Ub3VjaFN0YXJ0ID0gKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkZvY3VzKCk7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkRyYWdTdGFydCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlTG9uZ1ByZXNzKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgICAgICB0aGlzLmRldGVjdERvdWJsZVRhcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdGhpcy5jbGVhckxvbmdQcmVzcygpO1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGluY2hEaXN0YW5jZSA9IHRoaXMubWVhc3VyZVRvdWNoRGlzdGFuY2UoZXZlbnQudG91Y2hlc1swXSwgZXZlbnQudG91Y2hlc1sxXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVG91Y2hNb3ZlID0gKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgW2ZpcnN0LCBzZWNvbmRdID0gW2V2ZW50LnRvdWNoZXNbMF0sIGV2ZW50LnRvdWNoZXNbMV1dO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMubWVhc3VyZVRvdWNoRGlzdGFuY2UoZmlyc3QsIHNlY29uZCk7XG4gICAgICAgIGlmICh0aGlzLnBpbmNoRGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgY29uc3QgcmF0aW8gPSBkaXN0YW5jZSAvIHRoaXMucGluY2hEaXN0YW5jZTtcbiAgICAgICAgICBjb25zdCBhbmNob3JYID0gKGZpcnN0LmNsaWVudFggKyBzZWNvbmQuY2xpZW50WCkgLyAyO1xuICAgICAgICAgIGNvbnN0IGFuY2hvclkgPSAoZmlyc3QuY2xpZW50WSArIHNlY29uZC5jbGllbnRZKSAvIDI7XG4gICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25QaW5jaFpvb20ocmF0aW8sIGFuY2hvclgsIGFuY2hvclkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGluY2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xlYXJMb25nUHJlc3MoKTtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkRyYWdNb3ZlKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvblRvdWNoRW5kID0gKCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5jbGVhckxvbmdQcmVzcygpO1xuICAgICAgdGhpcy5waW5jaERpc3RhbmNlID0gMDtcbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25EcmFnRW5kKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gICAgaW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBvbkRvdWJsZUNsaWNrKTtcbiAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBvbkNvbnRleHRNZW51KTtcbiAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG9uVG91Y2hTdGFydCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBvblRvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgaW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgb25Ub3VjaEVuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5kb2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgdGhpcy5kb2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyTG9uZ1ByZXNzKCk7XG4gICAgICBpbWFnZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb25Nb3VzZURvd24pO1xuICAgICAgaW1hZ2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XG4gICAgICBpbWFnZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBvbkRvdWJsZUNsaWNrKTtcbiAgICAgIGltYWdlRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIG9uQ29udGV4dE1lbnUpO1xuICAgICAgaW1hZ2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBvblRvdWNoU3RhcnQpO1xuICAgICAgaW1hZ2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGltYWdlRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG9uVG91Y2hFbmQpO1xuICAgICAgaW1hZ2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgb25Ub3VjaEVuZCk7XG4gICAgICB0aGlzLmRvYy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgIHRoaXMuZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9uTW91c2VVcCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCQzZcdTUyMkJcdTUzQ0NcdTUxRkIvXHU1M0NDXHU1MUZCXHU4OUU2XHU2M0E3XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGRldGVjdERvdWJsZVRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmIChub3cgLSB0aGlzLmxhc3RUYXBBdCA8PSAyNjApIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRG91YmxlVGFwKCk7XG4gICAgfVxuICAgIHRoaXMubGFzdFRhcEF0ID0gbm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTFDNlx1NTkwN1x1OTU3Rlx1NjMwOVx1ODNEQ1x1NTM1NVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBwcmVwYXJlTG9uZ1ByZXNzKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxvbmdQcmVzcygpO1xuICAgIHRoaXMubG9uZ1ByZXNzVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbkxvbmdQcmVzc01lbnUoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgfSwgNDUwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMDVcdTc0MDZcdTk1N0ZcdTYzMDlcdThCQTFcdTY1RjZcdTU2NjhcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY2xlYXJMb25nUHJlc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9uZ1ByZXNzVGltZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmxvbmdQcmVzc1RpbWVyKTtcbiAgICB0aGlzLmxvbmdQcmVzc1RpbWVyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCQTFcdTdCOTdcdTUzQ0NcdTYzMDdcdThERERcdTc5QkJcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgbWVhc3VyZVRvdWNoRGlzdGFuY2UoZmlyc3Q6IFRvdWNoLCBzZWNvbmQ6IFRvdWNoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkeCA9IGZpcnN0LmNsaWVudFggLSBzZWNvbmQuY2xpZW50WDtcbiAgICBjb25zdCBkeSA9IGZpcnN0LmNsaWVudFkgLSBzZWNvbmQuY2xpZW50WTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCQTFcdTdCOTdcdTZFREFcdThGNkVcdTdGMjlcdTY1M0VcdTUwMERcdTczODdcdTMwMDJcbiAgICogXHU4QkY0XHU2NjBFXHVGRjFBXHU1MTQ4XHU2MjhBIGRlbHRhIFx1N0VERlx1NEUwMFx1NjIxMFx1NTBDRlx1N0QyMFx1RkYwQ1x1NTE4RFx1OTY1MFx1NTIzNlx1NTM1NVx1NkIyMVx1OEY5M1x1NTE2NVx1NUU0NVx1NUVBNlx1RkYwQ1x1NjcwMFx1NTQwRVx1NjYyMFx1NUMwNFx1NEUzQVx1NUU3M1x1NkVEMVx1NTAwRFx1NzM4N1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjb21wdXRlV2hlZWxab29tRmFjdG9yKGV2ZW50OiBXaGVlbEV2ZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBwaXhlbERlbHRhWSA9IHRoaXMubm9ybWFsaXplV2hlZWxEZWx0YVkoZXZlbnQpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHBpeGVsRGVsdGFZKSB8fCBwaXhlbERlbHRhWSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZFN0ZXAgPSB0aGlzLmNsYW1wKFxuICAgICAgcGl4ZWxEZWx0YVkgLyBJbnB1dEFkYXB0ZXIuV0hFRUxfU1RFUF9QSVhFTFMsXG4gICAgICAtSW5wdXRBZGFwdGVyLldIRUVMX01BWF9TVEVQLFxuICAgICAgSW5wdXRBZGFwdGVyLldIRUVMX01BWF9TVEVQXG4gICAgKTtcblxuICAgIHJldHVybiBNYXRoLnBvdyhJbnB1dEFkYXB0ZXIuV0hFRUxfQkFTRV9GQUNUT1IsIC1ub3JtYWxpemVkU3RlcCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2MjhBXHU0RTBEXHU1NDBDIGRlbHRhTW9kZSBcdTdFREZcdTRFMDBcdTYzNjJcdTdCOTdcdTYyMTBcdTUwQ0ZcdTdEMjBcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplV2hlZWxEZWx0YVkoZXZlbnQ6IFdoZWVsRXZlbnQpOiBudW1iZXIge1xuICAgIGlmIChldmVudC5kZWx0YU1vZGUgPT09IFdoZWVsRXZlbnQuRE9NX0RFTFRBX0xJTkUpIHtcbiAgICAgIHJldHVybiBldmVudC5kZWx0YVkgKiBJbnB1dEFkYXB0ZXIuV0hFRUxfTElORV9IRUlHSFRfUElYRUxTO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZGVsdGFNb2RlID09PSBXaGVlbEV2ZW50LkRPTV9ERUxUQV9QQUdFKSB7XG4gICAgICBjb25zdCBwYWdlSGVpZ2h0ID1cbiAgICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB0aGlzLmRvYy5ib2R5Py5jbGllbnRIZWlnaHQgfHwgd2luZG93LmlubmVySGVpZ2h0IHx8IDgwMDtcbiAgICAgIHJldHVybiBldmVudC5kZWx0YVkgKiBwYWdlSGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQuZGVsdGFZO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjU3MFx1NTAzQ1x1OTY1MFx1NUU0NVx1RkYwQ1x1OTA3Rlx1NTE0RFx1NTM1NVx1NkIyMVx1N0YyOVx1NjUzRVx1OERGM1x1NTNEOFx1OEZDN1x1NTkyN1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgT2Zmc2V0LCBUcmFuc2Zvcm1TdGF0ZSwgWm9vbUFuY2hvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1NTZGRVx1NzI0N1x1NTNEOFx1NjM2Mlx1NUYxNVx1NjRDRVx1MzAwMlxuICogXHU3RUFGXHU1MUZEXHU2NTcwXHU1RjBGXHU4RkQ0XHU1NkRFXHU2NUIwXHU3MkI2XHU2MDAxXHVGRjBDXHU5MDdGXHU1MTREIFVJIFx1NUM0Mlx1NzZGNFx1NjNBNVx1NTE5OVx1NTE2NVx1NzJCNlx1NjAwMVx1NUJGQ1x1ODFGNFx1N0FERVx1NjAwMVx1MzAwMlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNSU5fU0laRSA9IDMwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfUkFUSU8gPSAyMDtcblxuICAvKipcbiAgICogXHU1MjFCXHU1RUZBXHU1MjFEXHU1OUNCXHU3MkI2XHU2MDAxXHU1RTc2XHU2MzA5XHU4OUM2XHU1M0UzXHU1MDVBXHU4MUVBXHU5MDAyXHU1RTk0XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUluaXRpYWxTdGF0ZShcbiAgICBuYXR1cmFsV2lkdGg6IG51bWJlcixcbiAgICBuYXR1cmFsSGVpZ2h0OiBudW1iZXIsXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyLFxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIsXG4gICAgcmVzZXJ2ZWRCb3R0b20gPSAwXG4gICk6IFRyYW5zZm9ybVN0YXRlIHtcbiAgICBjb25zdCBzYWZlTmF0dXJhbFdpZHRoID0gTWF0aC5tYXgoMSwgbmF0dXJhbFdpZHRoKTtcbiAgICBjb25zdCBzYWZlTmF0dXJhbEhlaWdodCA9IE1hdGgubWF4KDEsIG5hdHVyYWxIZWlnaHQpO1xuICAgIGNvbnN0IHNhZmVWaWV3cG9ydFdpZHRoID0gTWF0aC5tYXgoMSwgdmlld3BvcnRXaWR0aCk7XG4gICAgY29uc3Qgc2FmZVZpZXdwb3J0SGVpZ2h0ID0gTWF0aC5tYXgoMSwgdmlld3BvcnRIZWlnaHQpO1xuXG4gICAgLy8gXHU5ODg0XHU3NTU5XHU1RTk1XHU5MEU4XHU1NkZBXHU1QjlBIFVJIFx1N0E3QVx1OTVGNFx1RkYwQ1x1OTA3Rlx1NTE0RFx1OUFEOFx1OTU3Rlx1NTZGRVx1NjVGNlx1NTQwRFx1NzlGMFx1ODhBQlx1NUU5NVx1NjgwRlx1OTA2RVx1NjMyMVx1MzAwMlxuICAgIGNvbnN0IHNhZmVSZXNlcnZlZEJvdHRvbSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHJlc2VydmVkQm90dG9tLCBzYWZlVmlld3BvcnRIZWlnaHQgLSAxKSk7XG4gICAgY29uc3QgYXZhaWxhYmxlSGVpZ2h0ID0gTWF0aC5tYXgoMSwgc2FmZVZpZXdwb3J0SGVpZ2h0IC0gc2FmZVJlc2VydmVkQm90dG9tKTtcblxuICAgIC8vIFx1OTk5Nlx1NUM0Rlx1OUVEOFx1OEJBNFx1NEY3Rlx1NzUyOCA4MCUgXHU1M0VGXHU4OUM2XHU1MzNBXHU1N0RGXHVGRjBDXHU5MDdGXHU1MTREXHU5MDZFXHU2MzIxXHU4RkM3XHU2RUUxXHUzMDAyXG4gICAgY29uc3QgbWF4V2lkdGggPSBzYWZlVmlld3BvcnRXaWR0aCAqIDAuODtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBhdmFpbGFibGVIZWlnaHQgKiAwLjg7XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbihtYXhXaWR0aCAvIHNhZmVOYXR1cmFsV2lkdGgsIG1heEhlaWdodCAvIHNhZmVOYXR1cmFsSGVpZ2h0LCAxKTtcblxuICAgIGNvbnN0IHdpZHRoID0gc2FmZU5hdHVyYWxXaWR0aCAqIHJhdGlvO1xuICAgIGNvbnN0IGhlaWdodCA9IHNhZmVOYXR1cmFsSGVpZ2h0ICogcmF0aW87XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmF0dXJhbFdpZHRoOiBzYWZlTmF0dXJhbFdpZHRoLFxuICAgICAgbmF0dXJhbEhlaWdodDogc2FmZU5hdHVyYWxIZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGxlZnQ6IChzYWZlVmlld3BvcnRXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICB0b3A6IChhdmFpbGFibGVIZWlnaHQgLSBoZWlnaHQpIC8gMixcbiAgICAgIHpvb21SYXRpbzogd2lkdGggLyBzYWZlTmF0dXJhbFdpZHRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYzMDlcdTg5QzZcdTUzRTNcdTkxQ0RcdTY1QjBcdThCQTFcdTdCOTcgZml0XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZpdFRvVmlld3BvcnQoXG4gICAgY3VycmVudDogVHJhbnNmb3JtU3RhdGUsXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyLFxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIsXG4gICAgcmVzZXJ2ZWRCb3R0b20gPSAwXG4gICk6IFRyYW5zZm9ybVN0YXRlIHtcbiAgICBjb25zdCBmaXR0ZWQgPSB0aGlzLmNyZWF0ZUluaXRpYWxTdGF0ZShcbiAgICAgIGN1cnJlbnQubmF0dXJhbFdpZHRoLFxuICAgICAgY3VycmVudC5uYXR1cmFsSGVpZ2h0LFxuICAgICAgdmlld3BvcnRXaWR0aCxcbiAgICAgIHZpZXdwb3J0SGVpZ2h0LFxuICAgICAgcmVzZXJ2ZWRCb3R0b21cbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgd2lkdGg6IGZpdHRlZC53aWR0aCxcbiAgICAgIGhlaWdodDogZml0dGVkLmhlaWdodCxcbiAgICAgIGxlZnQ6IGZpdHRlZC5sZWZ0LFxuICAgICAgdG9wOiBmaXR0ZWQudG9wLFxuICAgICAgem9vbVJhdGlvOiBmaXR0ZWQuem9vbVJhdGlvXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdGMjlcdTY1M0VcdTUyMzAgMTAwJVx1MzAwMlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB6b29tVG9BY3R1YWwoXG4gICAgY3VycmVudDogVHJhbnNmb3JtU3RhdGUsXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyLFxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIsXG4gICAgcmVzZXJ2ZWRCb3R0b20gPSAwXG4gICk6IFRyYW5zZm9ybVN0YXRlIHtcbiAgICBjb25zdCBzYWZlVmlld3BvcnRIZWlnaHQgPSBNYXRoLm1heCgxLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgY29uc3Qgc2FmZVJlc2VydmVkQm90dG9tID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocmVzZXJ2ZWRCb3R0b20sIHNhZmVWaWV3cG9ydEhlaWdodCAtIDEpKTtcbiAgICBjb25zdCBhdmFpbGFibGVIZWlnaHQgPSBNYXRoLm1heCgxLCBzYWZlVmlld3BvcnRIZWlnaHQgLSBzYWZlUmVzZXJ2ZWRCb3R0b20pO1xuICAgIGNvbnN0IHdpZHRoID0gY3VycmVudC5uYXR1cmFsV2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gY3VycmVudC5uYXR1cmFsSGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBsZWZ0OiAodmlld3BvcnRXaWR0aCAtIHdpZHRoKSAvIDIsXG4gICAgICB0b3A6IChhdmFpbGFibGVIZWlnaHQgLSBoZWlnaHQpIC8gMixcbiAgICAgIHpvb21SYXRpbzogMVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogXHU2MzA5XHU5NTFBXHU3MEI5XHU3RjI5XHU2NTNFXHVGRjBDXHU0RkREXHU4QkMxXHU5NTFBXHU3MEI5XHU4OUM2XHU4OUM5XHU0RjREXHU3RjZFXHU3QTMzXHU1QjlBXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHpvb21BdChcbiAgICBjdXJyZW50OiBUcmFuc2Zvcm1TdGF0ZSxcbiAgICBzY2FsZUZhY3RvcjogbnVtYmVyLFxuICAgIGFuY2hvcjogWm9vbUFuY2hvclxuICApOiBUcmFuc2Zvcm1TdGF0ZSB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2NhbGVGYWN0b3IpIHx8IHNjYWxlRmFjdG9yIDw9IDApIHtcbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRXaWR0aCA9IHRoaXMuY2xhbXBTaXplKGN1cnJlbnQud2lkdGggKiBzY2FsZUZhY3RvciwgY3VycmVudC5uYXR1cmFsV2lkdGgpO1xuICAgIGNvbnN0IG5leHRIZWlnaHQgPSAobmV4dFdpZHRoIC8gY3VycmVudC5uYXR1cmFsV2lkdGgpICogY3VycmVudC5uYXR1cmFsSGVpZ2h0O1xuXG4gICAgLy8gXHU2ODM4XHU1RkMzXHU0RkVFXHU2QjYzXHVGRjFBXHU2MzA5XHU5NTFBXHU3MEI5XHU1M0NEXHU2M0E4IGxlZnQvdG9wXHVGRjBDXHU5MDdGXHU1MTREXHU4RkRFXHU3RUVEXHU3RjI5XHU2NTNFXHU2RjAyXHU3OUZCXHUzMDAyXG4gICAgY29uc3QgcmF0aW9YID0gKGFuY2hvci54IC0gY3VycmVudC5sZWZ0KSAvIGN1cnJlbnQud2lkdGg7XG4gICAgY29uc3QgcmF0aW9ZID0gKGFuY2hvci55IC0gY3VycmVudC50b3ApIC8gY3VycmVudC5oZWlnaHQ7XG4gICAgY29uc3QgbGVmdCA9IGFuY2hvci54IC0gcmF0aW9YICogbmV4dFdpZHRoO1xuICAgIGNvbnN0IHRvcCA9IGFuY2hvci55IC0gcmF0aW9ZICogbmV4dEhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgd2lkdGg6IG5leHRXaWR0aCxcbiAgICAgIGhlaWdodDogbmV4dEhlaWdodCxcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICB6b29tUmF0aW86IG5leHRXaWR0aCAvIGN1cnJlbnQubmF0dXJhbFdpZHRoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTY4MzlcdTYzNkVcdTUwNEZcdTc5RkJcdTkxQ0ZcdTc5RkJcdTUyQThcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbW92ZUJ5KGN1cnJlbnQ6IFRyYW5zZm9ybVN0YXRlLCBvZmZzZXQ6IE9mZnNldCk6IFRyYW5zZm9ybVN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIGxlZnQ6IGN1cnJlbnQubGVmdCArIG9mZnNldC54LFxuICAgICAgdG9wOiBjdXJyZW50LnRvcCArIG9mZnNldC55XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTk2NTBcdTUyMzZcdTY3MDBcdTVDMEZcdTVDM0FcdTVCRjhcdTRFMEVcdTY3MDBcdTU5MjdcdTUwMERcdTczODdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGNsYW1wU2l6ZShuZXh0OiBudW1iZXIsIG5hdHVyYWxXaWR0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuTUlOX1NJWkU7XG4gICAgY29uc3QgbWF4V2lkdGggPSBuYXR1cmFsV2lkdGggKiB0aGlzLk1BWF9SQVRJTztcbiAgICByZXR1cm4gTWF0aC5tYXgobWluV2lkdGgsIE1hdGgubWluKG1heFdpZHRoLCBuZXh0KSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbi8qKlxuICogXHU2M0QyXHU0RUY2XHU5ODg0XHU4OUM4XHU2QTIxXHU1RjBGXHUzMDAyXG4gKi9cbmV4cG9ydCBlbnVtIFByZXZpZXdNb2RlIHtcbiAgTm9ybWFsID0gXCJub3JtYWxcIixcbiAgUGluID0gXCJwaW5cIlxufVxuXG4vKipcbiAqIFx1OEZEMFx1ODg0Q1x1NjVGNlx1NzJCNlx1NjAwMVx1NjczQVx1NzJCNlx1NjAwMVx1MzAwMlxuICovXG5leHBvcnQgZW51bSBQcmV2aWV3U3RhdGUge1xuICBJZGxlID0gXCJpZGxlXCIsXG4gIE9wZW4gPSBcIm9wZW5cIixcbiAgRHJhZ2dpbmcgPSBcImRyYWdnaW5nXCIsXG4gIE1lbnUgPSBcIm1lbnVcIlxufVxuXG4vKipcbiAqIFx1NTZGRVx1NzI0N1x1NzBCOVx1NTFGQlx1ODlFNlx1NTNEMVx1ODMwM1x1NTZGNFx1MzAwMlxuICovXG5leHBvcnQgZW51bSBUcmlnZ2VyU2NvcGUge1xuICBNYXJrZG93bk9ubHkgPSBcIm1hcmtkb3duLW9ubHlcIixcbiAgTWFya2Rvd25BbmRDb21tb24gPSBcIm1hcmtkb3duLWFuZC1jb21tb25cIixcbiAgR2xvYmFsID0gXCJnbG9iYWxcIlxufVxuXG4vKipcbiAqIFx1NEZFRVx1OTk3MFx1OTUyRVx1OTE0RFx1N0Y2RVx1MzAwMlxuICovXG5leHBvcnQgZW51bSBIb3RrZXlNb2RpZmllciB7XG4gIE5vbmUgPSBcIm5vbmVcIixcbiAgQ3RybCA9IFwiY3RybFwiLFxuICBBbHQgPSBcImFsdFwiLFxuICBTaGlmdCA9IFwic2hpZnRcIixcbiAgQ3RybEFsdCA9IFwiY3RybC1hbHRcIixcbiAgQ3RybFNoaWZ0ID0gXCJjdHJsLXNoaWZ0XCIsXG4gIFNoaWZ0QWx0ID0gXCJzaGlmdC1hbHRcIixcbiAgQ3RybFNoaWZ0QWx0ID0gXCJjdHJsLXNoaWZ0LWFsdFwiXG59XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU4QkVEXHU4QTAwXHU1MDRGXHU1OTdEXHUzMDAyXG4gKi9cbmV4cG9ydCBlbnVtIFVJTGFuZ3VhZ2Uge1xuICBBdXRvID0gXCJhdXRvXCIsXG4gIFpoID0gXCJ6aFwiLFxuICBFbiA9IFwiZW5cIlxufVxuXG4vKipcbiAqIFx1NURFNVx1NTE3N1x1NjgwRlx1NTJBOFx1NEY1Q1x1MzAwMlxuICovXG5leHBvcnQgdHlwZSBUb29sYmFyQWN0aW9uID1cbiAgfCBcInpvb20taW5cIlxuICB8IFwiem9vbS1vdXRcIlxuICB8IFwiem9vbS0xMDBcIlxuICB8IFwiZml0XCJcbiAgfCBcImNvcHlcIlxuICB8IFwiY29weS1uYW1lXCJcbiAgfCBcImNsb3NlXCJcbiAgfCBcIm5leHRcIlxuICB8IFwicHJldlwiO1xuXG4vKipcbiAqIFx1NTZGRVx1NzI0N1x1NTdGQVx1Nzg0MFx1NEZFMVx1NjA2Rlx1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlSXRlbSB7XG4gIHNyYzogc3RyaW5nO1xuICBhbHQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaW5kZXg6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgZmlsZT86IFRGaWxlIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBcdTk4ODRcdTg5QzhcdTY1RjZcdTc2ODRcdTUzRDhcdTYzNjJcdTcyQjZcdTYwMDFcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2Zvcm1TdGF0ZSB7XG4gIG5hdHVyYWxXaWR0aDogbnVtYmVyO1xuICBuYXR1cmFsSGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICB6b29tUmF0aW86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBcdTc1MjhcdTYyMzdcdTRFQTRcdTRFOTJcdTkxNERcdTdGNkVcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvblByb2ZpbGUge1xuICBlbmFibGVNb2JpbGVHZXN0dXJlczogYm9vbGVhbjtcbiAgZW5hYmxlRG91YmxlVGFwWm9vbTogYm9vbGVhbjtcbiAgbG9uZ1ByZXNzTWVudU1zOiBudW1iZXI7XG59XG5cbi8qKlxuICogXHU3NTNCXHU1RUNBXHU5ODlDXHU4MjcyXHU5MTREXHU3RjZFXHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2FsbGVyeVRoZW1lIHtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIGhvdmVyQ29sb3I6IHN0cmluZztcbiAgYWN0aXZlQm9yZGVyQ29sb3I6IHN0cmluZztcbiAgaGlnaGxpZ2h0QWN0aXZlQm9yZGVyOiBib29sZWFuO1xufVxuXG4vKipcbiAqIFx1NjNEMlx1NEVGNlx1OEJCRVx1N0Y2RVx1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcbiAgc2NoZW1hVmVyc2lvbjogbnVtYmVyO1xuICBtb2RlOiBQcmV2aWV3TW9kZTtcbiAgdHJpZ2dlclNjb3BlOiBUcmlnZ2VyU2NvcGU7XG4gIGluY2x1ZGVMaW5rZWRJbWFnZXM6IGJvb2xlYW47XG4gIG1vdmVIb3RrZXk6IEhvdGtleU1vZGlmaWVyO1xuICBzd2l0Y2hIb3RrZXk6IEhvdGtleU1vZGlmaWVyO1xuICBtb3ZlU3BlZWQ6IG51bWJlcjtcbiAgcGluTWF4aW11bTogbnVtYmVyO1xuICBwaW5Db3Zlck1vZGU6IGJvb2xlYW47XG4gIHNob3dJbWFnZVRvb2x0aXA6IGJvb2xlYW47XG4gIHVpTGFuZ3VhZ2U6IFVJTGFuZ3VhZ2U7XG4gIGltYWdlQm9yZGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgaW1hZ2VCb3JkZXJXaWR0aDogc3RyaW5nO1xuICBpbWFnZUJvcmRlclN0eWxlOiBzdHJpbmc7XG4gIGltYWdlQm9yZGVyQ29sb3I6IHN0cmluZztcbiAgZ2FsbGVyeTogR2FsbGVyeVRoZW1lO1xuICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25Qcm9maWxlO1xufVxuXG4vKipcbiAqIFx1NTZGRVx1NzI0N1x1NjUzNlx1OTZDNlx1N0VEM1x1Njc5Q1x1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdhbGxlcnlSZXN1bHQge1xuICBpdGVtczogSW1hZ2VJdGVtW107XG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XG59XG5cbi8qKlxuICogXHU2M0E3XHU1MjM2XHU1NjY4XHU0RThCXHU0RUY2XHU0RTBBXHU0RTBCXHU2NTg3XHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJldmlld0NvbnRleHQge1xuICBkb2M6IERvY3VtZW50O1xuICBzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgaXRlbTogSW1hZ2VJdGVtO1xuICBhbGxJdGVtczogSW1hZ2VJdGVtW107XG59XG5cbi8qKlxuICogXHU2MkQ2XHU2MkZEXHU1MDRGXHU3OUZCXHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT2Zmc2V0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogXHU3RjI5XHU2NTNFXHU5NTFBXHU3MEI5XHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgWm9vbUFuY2hvciB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIFx1OEY5M1x1NTE2NVx1NUM0Mlx1NUJGOVx1NjNBN1x1NTIzNlx1NUM0Mlx1NjZCNFx1OTczMlx1NzY4NFx1NTZERVx1OEMwM1x1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElucHV0Q2FsbGJhY2tzIHtcbiAgb25Gb2N1czogKCkgPT4gdm9pZDtcbiAgb25EcmFnU3RhcnQ6IChjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcikgPT4gdm9pZDtcbiAgb25EcmFnTW92ZTogKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkRyYWdFbmQ6ICgpID0+IHZvaWQ7XG4gIG9uV2hlZWxab29tOiAoZGVsdGE6IG51bWJlciwgYW5jaG9yWDogbnVtYmVyLCBhbmNob3JZOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uUGluY2hab29tOiAoc2NhbGU6IG51bWJlciwgYW5jaG9yWDogbnVtYmVyLCBhbmNob3JZOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uRG91YmxlVGFwOiAoKSA9PiB2b2lkO1xuICBvbkxvbmdQcmVzc01lbnU6IChjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBcdThGRDBcdTg4NENcdTY1RjZcdTYzMDJcdThGN0RcdTVCRjlcdThDNjFcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNb3VudGVkUHJldmlldyB7XG4gIGlkOiBzdHJpbmc7XG4gIHNoZWxsRWw6IEhUTUxEaXZFbGVtZW50O1xuICBpbWFnZUVsOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBjYXB0aW9uRWw6IEhUTUxEaXZFbGVtZW50O1xuICB0b29sYmFyRWw6IEhUTUxEaXZFbGVtZW50O1xuICBpdGVtOiBJbWFnZUl0ZW07XG4gIHN0YXRlOiBUcmFuc2Zvcm1TdGF0ZTtcbn1cbiIsICJpbXBvcnQgeyBQcmV2aWV3U3RhdGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdTZENkVcdTdBOTdcdTcyQjZcdTYwMDFcdTY3M0FcdUZGMENcdThEMUZcdThEMjNcdTdFQTZcdTY3NUZcdTcyQjZcdTYwMDFcdThGNkNcdTYzNjJcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXZpZXdTdGF0ZU1hY2hpbmUge1xuICBwcml2YXRlIHN0YXRlOiBQcmV2aWV3U3RhdGUgPSBQcmV2aWV3U3RhdGUuSWRsZTtcblxuICAvKipcbiAgICogXHU4QkZCXHU1M0Q2XHU1RjUzXHU1MjREXHU3MkI2XHU2MDAxXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhdGUoKTogUHJldmlld1N0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVDMURcdThCRDVcdTYyNTNcdTVGMDBcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNpdGlvbihbUHJldmlld1N0YXRlLklkbGVdLCBQcmV2aWV3U3RhdGUuT3Blbik7XG4gIH1cblxuICAvKipcbiAgICogXHU1RjAwXHU1OUNCXHU2MkQ2XHU2MkZEXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc3RhcnREcmFnKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNpdGlvbihbUHJldmlld1N0YXRlLk9wZW4sIFByZXZpZXdTdGF0ZS5NZW51XSwgUHJldmlld1N0YXRlLkRyYWdnaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFRDNcdTY3NUZcdTYyRDZcdTYyRkRcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBlbmREcmFnKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNpdGlvbihbUHJldmlld1N0YXRlLkRyYWdnaW5nXSwgUHJldmlld1N0YXRlLk9wZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjI1M1x1NUYwMFx1ODNEQ1x1NTM1NVx1MzAwMlxuICAgKi9cbiAgcHVibGljIG9wZW5NZW51KCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNpdGlvbihbUHJldmlld1N0YXRlLk9wZW5dLCBQcmV2aWV3U3RhdGUuTWVudSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU4M0RDXHU1MzU1XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNpdGlvbihbUHJldmlld1N0YXRlLk1lbnVdLCBQcmV2aWV3U3RhdGUuT3Blbik7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU2RDZFXHU3QTk3XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IFByZXZpZXdTdGF0ZS5JZGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NTkwNFx1NEU4RVx1NTNFRlx1NEVBNFx1NEU5Mlx1NzJCNlx1NjAwMVx1MzAwMlxuICAgKi9cbiAgcHVibGljIGlzSW50ZXJhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgIT09IFByZXZpZXdTdGF0ZS5JZGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE4NVx1OTBFOFx1OTAxQVx1NzUyOFx1OEY2Q1x1NjM2Mlx1NTFGRFx1NjU3MFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSB0cmFuc2l0aW9uKGZyb206IFByZXZpZXdTdGF0ZVtdLCB0bzogUHJldmlld1N0YXRlKTogdm9pZCB7XG4gICAgaWYgKCFmcm9tLmluY2x1ZGVzKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJldmlldyBzdGF0ZSB0cmFuc2l0aW9uOiAke3RoaXMuc3RhdGV9IC0+ICR7dG99YCk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB0bztcbiAgfVxufVxuIiwgImltcG9ydCB7IE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuLi9pMThuXCI7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG4vKipcbiAqIFx1NTkwRFx1NTIzNlx1NjcwRFx1NTJBMVx1RkYwQ1x1N0VERlx1NEUwMFx1NTkwNFx1NzQwNlx1NjIxMFx1NTI5Ri9cdTU5MzFcdThEMjVcdTYzRDBcdTc5M0FcdTRFMEVcdTk2NERcdTdFQTdcdTdCNTZcdTc1NjVcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIENsaXBib2FyZFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwcDogQXBwO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdTU5MERcdTUyMzZcdTY3MERcdTUyQTFcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gIH1cblxuICAvKipcbiAgICogXHU1OTBEXHU1MjM2XHU1NkZFXHU3MjQ3XHVGRjFCXHU1OTMxXHU4RDI1XHU2NUY2XHU5NjREXHU3RUE3XHU1OTBEXHU1MjM2IFVSTFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNvcHlJbWFnZU9yVXJsKGltZ0VsOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgY29waWVkSW1hZ2UgPSBhd2FpdCB0aGlzLmNvcHlJbWFnZShpbWdFbCk7XG4gICAgaWYgKGNvcGllZEltYWdlKSB7XG4gICAgICBuZXcgTm90aWNlKHQoXCJub3RpY2UuY29weVN1Y2Nlc3NcIiwgdGhpcy5hcHApKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvcGllZFVybCA9IGF3YWl0IHRoaXMuY29weVBsYWluVGV4dChpbWdFbC5zcmMpO1xuICAgIGlmIChjb3BpZWRVcmwpIHtcbiAgICAgIG5ldyBOb3RpY2UoYCR7dChcIm5vdGljZS5jb3B5RmFpbGVkXCIsIHRoaXMuYXBwKX0gVVJMIGNvcGllZCBpbnN0ZWFkLmApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbmV3IE5vdGljZSh0KFwibm90aWNlLmNvcHlGYWlsZWRcIiwgdGhpcy5hcHApKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogXHU0RjE4XHU1MTQ4XHU1QzFEXHU4QkQ1XHU1OTBEXHU1MjM2XHU0RThDXHU4RkRCXHU1MjM2XHU1NkZFXHU3MjQ3XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNvcHlJbWFnZShpbWdFbDogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICh0eXBlb2YgQ2xpcGJvYXJkSXRlbSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhbmF2aWdhdG9yLmNsaXBib2FyZD8ud3JpdGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHRoaXMucmVuZGVySW1hZ2VUb0Jsb2IoaW1nRWwpO1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZShbbmV3IENsaXBib2FyZEl0ZW0oeyBcImltYWdlL3BuZ1wiOiBibG9iIH0pXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU1OTBEXHU1MjM2XHU3RUFGXHU2NTg3XHU2NzJDXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY29weVBsYWluVGV4dCh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhbmF2aWdhdG9yLmNsaXBib2FyZD8ud3JpdGVUZXh0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh2YWx1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU2MjhBXHU1NkZFXHU3MjQ3XHU3NTNCXHU1MjMwIGNhbnZhcyBcdTU0MEVcdTVCRkNcdTUxRkEgUE5HXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHJlbmRlckltYWdlVG9CbG9iKGltZ0VsOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxCbG9iPiB7XG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCB0aGlzLmxvYWRJbWFnZShpbWdFbC5zcmMpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAoIWN0eCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIGNvbnRleHQgdW5hdmFpbGFibGVcIik7XG4gICAgfVxuXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPEJsb2I+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgaWYgKCFibG9iKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNhbnZhcyBibG9iIGdlbmVyYXRpb24gZmFpbGVkXCIpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShibG9iKTtcbiAgICAgIH0sIFwiaW1hZ2UvcG5nXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NUYwMlx1NkI2NVx1NTJBMFx1OEY3RFx1NTZGRVx1NzI0N1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBsb2FkSW1hZ2Uoc3JjOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xuICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJJbWFnZSBsb2FkIGZhaWxlZFwiKSk7XG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgfSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBNYXJrZG93blZpZXcsIHR5cGUgQXBwLCB0eXBlIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQge1xuICB0eXBlIEdhbGxlcnlSZXN1bHQsXG4gIHR5cGUgSW1hZ2VJdGVtLFxuICB0eXBlIFBsdWdpblNldHRpbmdzLFxuICBUcmlnZ2VyU2NvcGVcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbi8qKlxuICogXHU3NTNCXHU1RUNBXHU2NzBEXHU1MkExXHVGRjFBXHU2NTM2XHU5NkM2XHU1RjUzXHU1MjREXHU0RTBBXHU0RTBCXHU2NTg3XHU1M0VGXHU1MjA3XHU2MzYyXHU1NkZFXHU3MjQ3XHUzMDAyXG4gKi9cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwOiBBcHA7XG5cbiAgLyoqXG4gICAqIFx1Njc4NFx1OTAyMFx1NzUzQlx1NUVDQVx1NjcwRFx1NTJBMVx1MzAwMlxuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVCRjlcdTU5MTZcdTRFM0JcdTUxNjVcdTUzRTNcdUZGMUFcdTUxNDggRE9NXHVGRjBDXHU1MThEIE1hcmtkb3duIFx1NjU4N1x1NjcyQ1x1NTZERVx1OTAwMFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNvbGxlY3RXaXRoRmFsbGJhY2soXG4gICAgZG9jOiBEb2N1bWVudCxcbiAgICBzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudCxcbiAgICBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3NcbiAgKTogUHJvbWlzZTxHYWxsZXJ5UmVzdWx0PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmJ1aWxkU2VsZWN0b3Ioc2V0dGluZ3MudHJpZ2dlclNjb3BlLCBzZXR0aW5ncy5pbmNsdWRlTGlua2VkSW1hZ2VzKTtcbiAgICBjb25zdCBieURvbSA9IHRoaXMuY29sbGVjdEZyb21Eb2N1bWVudChkb2MsIHNvdXJjZUltYWdlLCBzZWxlY3Rvcik7XG4gICAgaWYgKGJ5RG9tLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBieURvbTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb2xsZWN0RnJvbUFjdGl2ZU1hcmtkb3duKHNvdXJjZUltYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFQzRcdTg4QzVcdTg5RTZcdTUzRDFcdTkwMDlcdTYyRTlcdTU2NjhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBidWlsZFNlbGVjdG9yKHNjb3BlOiBUcmlnZ2VyU2NvcGUsIGluY2x1ZGVMaW5rZWRJbWFnZXM6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vTGlua1N1ZmZpeCA9IGluY2x1ZGVMaW5rZWRJbWFnZXMgPyBcIlwiIDogXCI6bm90KGEgaW1nKVwiO1xuICAgIGlmIChzY29wZSA9PT0gVHJpZ2dlclNjb3BlLkdsb2JhbCkge1xuICAgICAgcmV0dXJuIGBpbWcke25vTGlua1N1ZmZpeH1gO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtkb3duU2VsZWN0b3JzID0gW1xuICAgICAgYC53b3Jrc3BhY2UtbGVhZi1jb250ZW50W2RhdGEtdHlwZT0nbWFya2Rvd24nXSBpbWcke25vTGlua1N1ZmZpeH1gLFxuICAgICAgYC53b3Jrc3BhY2UtbGVhZi1jb250ZW50W2RhdGEtdHlwZT0naW1hZ2UnXSBpbWcke25vTGlua1N1ZmZpeH1gLFxuICAgICAgYC5tYXJrZG93bi1wcmV2aWV3LXZpZXcgaW1nJHtub0xpbmtTdWZmaXh9YCxcbiAgICAgIGAubWFya2Rvd24tc291cmNlLXZpZXcubW9kLWNtNiBpbWcke25vTGlua1N1ZmZpeH1gXG4gICAgXTtcblxuICAgIGlmIChzY29wZSA9PT0gVHJpZ2dlclNjb3BlLk1hcmtkb3duT25seSkge1xuICAgICAgcmV0dXJuIG1hcmtkb3duU2VsZWN0b3JzLmpvaW4oXCIsXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbW1vblNlbGVjdG9ycyA9IFtcbiAgICAgIGAubW9kYWwtY29udGVudCBpbWcke25vTGlua1N1ZmZpeH1gLFxuICAgICAgYC5jb21tdW5pdHktbW9kYWwtZGV0YWlscyBpbWcke25vTGlua1N1ZmZpeH1gLFxuICAgICAgYC5jYW52YXMtbm9kZS1jb250ZW50IGltZyR7bm9MaW5rU3VmZml4fWBcbiAgICBdO1xuXG4gICAgcmV0dXJuIFsuLi5tYXJrZG93blNlbGVjdG9ycywgLi4uY29tbW9uU2VsZWN0b3JzXS5qb2luKFwiLFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTRFQ0VcdTVGNTNcdTUyNEQgZG9jdW1lbnQgXHU2MkJEXHU1M0Q2XHU1NkZFXHU3MjQ3XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgY29sbGVjdEZyb21Eb2N1bWVudChcbiAgICBkb2M6IERvY3VtZW50LFxuICAgIHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LFxuICAgIHNlbGVjdG9yOiBzdHJpbmdcbiAgKTogR2FsbGVyeVJlc3VsdCB7XG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGRvYy5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KHNlbGVjdG9yKSk7XG4gICAgY29uc3QgaXRlbXM6IEltYWdlSXRlbVtdID0gW107XG5cbiAgICBub2Rlcy5mb3JFYWNoKChpbWcsIGlkeCkgPT4ge1xuICAgICAgY29uc3Qgc3JjID0gaW1nLmN1cnJlbnRTcmMgfHwgaW1nLnNyYztcbiAgICAgIGlmICghc3JjKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBzcmMsXG4gICAgICAgIGFsdDogaW1nLmFsdCB8fCBcIlwiLFxuICAgICAgICB0aXRsZTogaW1nLnRpdGxlIHx8IGltZy5hbHQgfHwgXCJcIixcbiAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgdG90YWw6IDBcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpdGVtLmluZGV4ID0gaWR4O1xuICAgICAgaXRlbS50b3RhbCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5yZXNvbHZlQWN0aXZlSW5kZXgoaXRlbXMsIHNvdXJjZUltYWdlKTtcbiAgICByZXR1cm4geyBpdGVtcywgYWN0aXZlSW5kZXggfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU2REVcdTkwMDBcdTY1QjlcdTY4NDhcdUZGMUFcdTRFQ0VcdTVGNTNcdTUyNEQgTWFya2Rvd24gXHU2NTg3XHU0RUY2XHU2NTg3XHU2NzJDXHU4OUUzXHU2NzkwXHU1NkZFXHU3MjQ3XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY29sbGVjdEZyb21BY3RpdmVNYXJrZG93bihzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8R2FsbGVyeVJlc3VsdD4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgIGNvbnN0IGZpbGUgPSBhY3RpdmVWaWV3Py5maWxlO1xuXG4gICAgaWYgKCFhY3RpdmVWaWV3IHx8ICFmaWxlKSB7XG4gICAgICByZXR1cm4geyBpdGVtczogW10sIGFjdGl2ZUluZGV4OiAtMSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1RleHQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpO1xuICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VNYXJrZG93bkltYWdlcyhyYXdUZXh0LCBmaWxlKTtcbiAgICBwYXJzZWQuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpdGVtLmluZGV4ID0gaWR4O1xuICAgICAgaXRlbS50b3RhbCA9IHBhcnNlZC5sZW5ndGg7XG4gICAgICBpdGVtLmZpbGUgPSBmaWxlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBwYXJzZWQsXG4gICAgICBhY3RpdmVJbmRleDogdGhpcy5yZXNvbHZlQWN0aXZlSW5kZXgocGFyc2VkLCBzb3VyY2VJbWFnZSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1ODlFM1x1Njc5MCBNYXJrZG93bi9XaWtpTGluay9IVE1MIFx1NTZGRVx1NzI0N1x1MzAwMlxuICAgKi9cbiAgcHVibGljIHBhcnNlTWFya2Rvd25JbWFnZXMoY29udGVudDogc3RyaW5nLCBmaWxlOiBURmlsZSk6IEltYWdlSXRlbVtdIHtcbiAgICBjb25zdCBpdGVtczogSW1hZ2VJdGVtW10gPSBbXTtcblxuICAgIGNvbnN0IG1hcmtkb3duUmVnZXggPSAvIVxcWyguKj8pXFxdXFwoKC4qPylcXCkvZztcbiAgICBjb25zdCB3aWtpUmVnZXggPSAvIVxcW1xcWyguKj8pXFxdXFxdL2c7XG4gICAgY29uc3QgaHRtbFJlZ2V4ID0gLzxpbWdbXj5dKnNyYz1bXCInXShbXlwiJ10rKVtcIiddW14+XSphbHQ9W1wiJ10/KFteXCInPl0qKVtcIiddP1tePl0qPnw8aW1nW14+XSphbHQ9W1wiJ10/KFteXCInPl0qKVtcIiddP1tePl0qc3JjPVtcIiddKFteXCInXSspW1wiJ11bXj5dKj4vZ2k7XG5cbiAgICBsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gXHU4OUUzXHU2NzkwXHU2ODA3XHU1MUM2IE1hcmtkb3duIFx1NTZGRVx1NzI0N1x1OEJFRFx1NkNENVx1MzAwMlxuICAgIHdoaWxlICgobWF0Y2ggPSBtYXJrZG93blJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhbHRSYXcgPSBtYXRjaFsxXSB8fCBcIlwiO1xuICAgICAgY29uc3Qgc3JjUmF3ID0gbWF0Y2hbMl0gfHwgXCJcIjtcbiAgICAgIGNvbnN0IGFsdCA9IGFsdFJhdy5zcGxpdChcInxcIilbMF0gfHwgYWx0UmF3O1xuICAgICAgY29uc3Qgc3JjID0gdGhpcy5yZXNvbHZlSW1hZ2VQYXRoKHNyY1JhdywgZmlsZSk7XG4gICAgICBpZiAoIXNyYykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGl0ZW1zLnB1c2goeyBzcmMsIGFsdCwgdGl0bGU6IGFsdCwgaW5kZXg6IDAsIHRvdGFsOiAwLCBmaWxlIH0pO1xuICAgIH1cblxuICAgIC8vIFx1ODlFM1x1Njc5MCBPYnNpZGlhbiBXaWtpTGluayBcdTU2RkVcdTcyNDdcdThCRURcdTZDRDVcdTMwMDJcbiAgICB3aGlsZSAoKG1hdGNoID0gd2lraVJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gKG1hdGNoWzFdIHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHMgPSBwYXlsb2FkLnNwbGl0KFwifFwiKS5tYXAoKHBhcnQpID0+IHBhcnQudHJpbSgpKTtcbiAgICAgIGNvbnN0IHNyY1JhdyA9IHBhcnRzWzBdIHx8IFwiXCI7XG4gICAgICBjb25zdCBhbHQgPSBwYXJ0cy5sZW5ndGggPiAxID8gcGFydHMuc2xpY2UoMSkuam9pbihcInxcIikgOiBzcmNSYXc7XG4gICAgICBjb25zdCBzcmMgPSB0aGlzLnJlc29sdmVJbWFnZVBhdGgoc3JjUmF3LCBmaWxlKTtcbiAgICAgIGlmICghc3JjKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaXRlbXMucHVzaCh7IHNyYywgYWx0LCB0aXRsZTogYWx0LCBpbmRleDogMCwgdG90YWw6IDAsIGZpbGUgfSk7XG4gICAgfVxuXG4gICAgLy8gXHU4OUUzXHU2NzkwIEhUTUwgaW1nIFx1NjgwN1x1N0I3RVx1MzAwMlxuICAgIHdoaWxlICgobWF0Y2ggPSBodG1sUmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNyY1JhdyA9IG1hdGNoWzFdIHx8IG1hdGNoWzRdIHx8IFwiXCI7XG4gICAgICBjb25zdCBhbHQgPSBtYXRjaFsyXSB8fCBtYXRjaFszXSB8fCBcIlwiO1xuICAgICAgY29uc3Qgc3JjID0gdGhpcy5yZXNvbHZlSW1hZ2VQYXRoKHNyY1JhdywgZmlsZSk7XG4gICAgICBpZiAoIXNyYykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGl0ZW1zLnB1c2goeyBzcmMsIGFsdCwgdGl0bGU6IGFsdCwgaW5kZXg6IDAsIHRvdGFsOiAwLCBmaWxlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTg5RTNcdTY3OTBcdThENDRcdTZFOTBcdThERUZcdTVGODRcdTRFM0FcdTUzRUZcdTk4ODRcdTg5QzggVVJMXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVJbWFnZVBhdGgocmF3UGF0aDogc3RyaW5nLCBmaWxlOiBURmlsZSk6IHN0cmluZyB7XG4gICAgaWYgKCFyYXdQYXRoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCB0cmltbWVkID0gcmF3UGF0aC50cmltKCk7XG5cbiAgICAvLyBcdTc2RjRcdTYzQTVcdTY1MkZcdTYzMDEgVVJMIFx1NEUwRSBkYXRhIFVSSVx1MzAwMlxuICAgIGlmICgvXihodHRwcz86fGFwcDpcXC9cXC98ZGF0YTppbWFnZVxcL3xmaWxlOlxcL1xcLykvaS50ZXN0KHRyaW1tZWQpKSB7XG4gICAgICByZXR1cm4gdHJpbW1lZC5yZXBsYWNlKC9eZmlsZTpcXC9cXC8rLywgXCJhcHA6Ly9sb2NhbC9cIik7XG4gICAgfVxuXG4gICAgLy8gd2lraUxpbmsgXHU2MjE2IG1hcmtkb3duIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1OEQ3MCBtZXRhZGF0YUNhY2hlIFx1ODlFM1x1Njc5MFx1MzAwMlxuICAgIGNvbnN0IGNsZWFuUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudCh0cmltbWVkLnNwbGl0KFwiI1wiKVswXSk7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KGNsZWFuUGF0aCwgZmlsZS5wYXRoKTtcbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXBwLnZhdWx0LmdldFJlc291cmNlUGF0aChyZXNvbHZlZCk7XG4gIH1cblxuICAvKipcbiAgICogXHU1QjlBXHU0RjREXHU1RjUzXHU1MjREXHU3MEI5XHU1MUZCXHU1NkZFXHU3MjQ3XHU1NzI4XHU3NTNCXHU1RUNBXHU0RTJEXHU3Njg0XHU3RDIyXHU1RjE1XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVBY3RpdmVJbmRleChpdGVtczogSW1hZ2VJdGVtW10sIHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogbnVtYmVyIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlU3JjID0gc291cmNlSW1hZ2UuY3VycmVudFNyYyB8fCBzb3VyY2VJbWFnZS5zcmM7XG4gICAgY29uc3Qgc291cmNlQWx0ID0gc291cmNlSW1hZ2UuYWx0IHx8IFwiXCI7XG5cbiAgICBjb25zdCBleGFjdEluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLnNyYyA9PT0gc291cmNlU3JjICYmIGl0ZW0uYWx0ID09PSBzb3VyY2VBbHQpO1xuICAgIGlmIChleGFjdEluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiBleGFjdEluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IGJ5U3JjSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uc3JjID09PSBzb3VyY2VTcmMpO1xuICAgIHJldHVybiBieVNyY0luZGV4ID49IDAgPyBieVNyY0luZGV4IDogMDtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4uL2kxOG5cIjtcbmltcG9ydCB0eXBlIHtcbiAgSW1hZ2VJdGVtLFxuICBNb3VudGVkUHJldmlldyxcbiAgUGx1Z2luU2V0dGluZ3MsXG4gIFByZXZpZXdNb2RlLFxuICBUb29sYmFyQWN0aW9uLFxuICBUcmFuc2Zvcm1TdGF0ZVxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFByZXZpZXdNb2RlIGFzIE1vZGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdTYyNTNcdTVGMDBcdTk4ODRcdTg5QzhcdTk3MDBcdTg5ODFcdTc2ODRcdTUzQzJcdTY1NzBcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPcGVuUHJldmlld09wdGlvbnMge1xuICBpdGVtOiBJbWFnZUl0ZW07XG4gIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncztcbiAgbW9kZTogUHJldmlld01vZGU7XG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XG4gIGFsbEl0ZW1zOiBJbWFnZUl0ZW1bXTtcbiAgb25Ub29sYmFyQWN0aW9uOiAocHJldmlld0lkOiBzdHJpbmcsIGFjdGlvbjogVG9vbGJhckFjdGlvbikgPT4gdm9pZDtcbiAgb25HYWxsZXJ5U2VsZWN0OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25NYXNrQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogXHU4OUM2XHU1NkZFXHU1QzQyXHU1QkJGXHU0RTNCXHVGRjFBXHU4RDFGXHU4RDIzXHU2RTMyXHU2N0QzL1x1OTUwMFx1NkJDMSBET01cdUZGMENcdTRFMERcdThEMUZcdThEMjNcdTRFMUFcdTUyQTFcdTkwM0JcdThGOTFcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIE92ZXJsYXlIb3N0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSByZWFkb25seSBkb2M6IERvY3VtZW50O1xuXG4gIHByaXZhdGUgcm9vdEVsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG1hc2tFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBnYWxsZXJ5RWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcHJldmlld3MgPSBuZXcgTWFwPHN0cmluZywgTW91bnRlZFByZXZpZXc+KCk7XG4gIHByaXZhdGUgZGV0YWNoTWFza0NsaWNrOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBhY3RpdmVQcmV2aWV3SWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdTVCQkZcdTRFM0JcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBkb2M6IERvY3VtZW50KSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5kb2MgPSBkb2M7XG4gIH1cblxuICAvKipcbiAgICogXHU1MjFCXHU1RUZBXHU1RTc2XHU2MzAyXHU4RjdEXHU0RTAwXHU0RTJBXHU2NUIwXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgb3BlblByZXZpZXcob3B0aW9uczogT3BlblByZXZpZXdPcHRpb25zKTogTW91bnRlZFByZXZpZXcge1xuICAgIHRoaXMuZW5zdXJlUm9vdCgpO1xuICAgIHRoaXMudXBkYXRlTWFzayhvcHRpb25zLm1vZGUsIG9wdGlvbnMub25NYXNrQ2xpY2spO1xuXG4gICAgaWYgKG9wdGlvbnMubW9kZSA9PT0gTW9kZS5Ob3JtYWwpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGwoKTtcbiAgICAgIHRoaXMudXBkYXRlTWFzayhvcHRpb25zLm1vZGUsIG9wdGlvbnMub25NYXNrQ2xpY2spO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpZXdJZCA9IHRoaXMuY3JlYXRlUHJldmlld0lkKCk7XG4gICAgY29uc3Qgc2hlbGxFbCA9IHRoaXMuY3JlYXRlU2hlbGwob3B0aW9ucy5tb2RlKTtcbiAgICBjb25zdCBpbWFnZUVsID0gdGhpcy5jcmVhdGVJbWFnZSgpO1xuICAgIGNvbnN0IGNhcHRpb25CbG9ja0VsID0gdGhpcy5jcmVhdGVDYXB0aW9uQmxvY2socHJldmlld0lkLCBvcHRpb25zLml0ZW0sIG9wdGlvbnMub25Ub29sYmFyQWN0aW9uKTtcbiAgICBjb25zdCBjYXB0aW9uRWwgPSBjYXB0aW9uQmxvY2tFbC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIi5vaXAtaW1hZ2UtY2FwdGlvblwiKTtcbiAgICBjb25zdCB0b29sYmFyRWwgPSB0aGlzLmNyZWF0ZVRvb2xiYXIocHJldmlld0lkLCBvcHRpb25zLm9uVG9vbGJhckFjdGlvbik7XG5cbiAgICBpbWFnZUVsLnNyYyA9IG9wdGlvbnMuaXRlbS5zcmM7XG4gICAgaW1hZ2VFbC5hbHQgPSBvcHRpb25zLml0ZW0uYWx0IHx8IFwiXCI7XG5cbiAgICBzaGVsbEVsLmFwcGVuZENoaWxkKGltYWdlRWwpO1xuICAgIHNoZWxsRWwuYXBwZW5kQ2hpbGQoY2FwdGlvbkJsb2NrRWwpO1xuICAgIHNoZWxsRWwuYXBwZW5kQ2hpbGQodG9vbGJhckVsKTtcbiAgICB0aGlzLnJvb3RFbD8uYXBwZW5kQ2hpbGQoc2hlbGxFbCk7XG5cbiAgICBjb25zdCBwcmV2aWV3OiBNb3VudGVkUHJldmlldyA9IHtcbiAgICAgIGlkOiBwcmV2aWV3SWQsXG4gICAgICBzaGVsbEVsLFxuICAgICAgaW1hZ2VFbCxcbiAgICAgIGNhcHRpb25FbDogY2FwdGlvbkVsID8/IHRoaXMuY3JlYXRlRmFsbGJhY2tDYXB0aW9uKGNhcHRpb25CbG9ja0VsKSxcbiAgICAgIHRvb2xiYXJFbCxcbiAgICAgIGl0ZW06IG9wdGlvbnMuaXRlbSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIG5hdHVyYWxXaWR0aDogMSxcbiAgICAgICAgbmF0dXJhbEhlaWdodDogMSxcbiAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICB6b29tUmF0aW86IDFcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5wcmV2aWV3cy5zZXQocHJldmlld0lkLCBwcmV2aWV3KTtcbiAgICB0aGlzLnNldEFjdGl2ZShwcmV2aWV3SWQpO1xuICAgIHRoaXMudXBkYXRlR2FsbGVyeShvcHRpb25zLnNldHRpbmdzLCBvcHRpb25zLmFsbEl0ZW1zLCBvcHRpb25zLmFjdGl2ZUluZGV4LCBvcHRpb25zLm9uR2FsbGVyeVNlbGVjdCk7XG4gICAgcmV0dXJuIHByZXZpZXc7XG4gIH1cblxuICAvKipcbiAgICogXHU1QkY5XHU1OTE2XHU1MjM3XHU2NUIwXHU3NTNCXHU1RUNBXHVGRjBDXHU3NTI4XHU0RThFXHU1MjA3XHU1NkZFXHU1NDBFXHU2NkY0XHU2NUIwXHU2RkMwXHU2RDNCXHU2MDAxXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyR2FsbGVyeShcbiAgICBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MsXG4gICAgYWxsSXRlbXM6IEltYWdlSXRlbVtdLFxuICAgIGFjdGl2ZUluZGV4OiBudW1iZXIsXG4gICAgb25TZWxlY3Q6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlR2FsbGVyeShzZXR0aW5ncywgYWxsSXRlbXMsIGFjdGl2ZUluZGV4LCBvblNlbGVjdCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2NkY0XHU2NUIwXHU5ODg0XHU4OUM4XHU2RTMyXHU2N0QzXHU3MkI2XHU2MDAxXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXBwbHlTdGF0ZShwcmV2aWV3SWQ6IHN0cmluZywgc3RhdGU6IFRyYW5zZm9ybVN0YXRlKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlldyA9IHRoaXMucHJldmlld3MuZ2V0KHByZXZpZXdJZCk7XG4gICAgaWYgKCFwcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlldy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgcHJldmlldy5zaGVsbEVsLnN0eWxlLmxlZnQgPSBgJHtzdGF0ZS5sZWZ0fXB4YDtcbiAgICBwcmV2aWV3LnNoZWxsRWwuc3R5bGUudG9wID0gYCR7c3RhdGUudG9wfXB4YDtcblxuICAgIHByZXZpZXcuaW1hZ2VFbC5zdHlsZS53aWR0aCA9IGAke3N0YXRlLndpZHRofXB4YDtcbiAgICBwcmV2aWV3LmltYWdlRWwuc3R5bGUuaGVpZ2h0ID0gYCR7c3RhdGUuaGVpZ2h0fXB4YDtcbiAgICBwcmV2aWV3LmltYWdlRWwuc3R5bGUudHJhbnNmb3JtID0gXCJub25lXCI7XG4gICAgcHJldmlldy5jYXB0aW9uRWwuc2V0VGV4dCh0aGlzLnJlc29sdmVJbWFnZUZpbGVOYW1lKHByZXZpZXcuaXRlbSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJGQlx1NTNENlx1NURGMlx1NjMwMlx1OEY3RFx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGdldFByZXZpZXcocHJldmlld0lkOiBzdHJpbmcpOiBNb3VudGVkUHJldmlldyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucHJldmlld3MuZ2V0KHByZXZpZXdJZCk7XG4gIH1cblxuICAvKipcbiAgICogXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU2RkMwXHU2RDNCXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgZ2V0QWN0aXZlUHJldmlldygpOiBNb3VudGVkUHJldmlldyB8IG51bGwge1xuICAgIGlmICghdGhpcy5hY3RpdmVQcmV2aWV3SWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3cy5nZXQodGhpcy5hY3RpdmVQcmV2aWV3SWQpID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogXHU4QkJFXHU1QjlBXHU2RkMwXHU2RDNCXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc2V0QWN0aXZlKHByZXZpZXdJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVQcmV2aWV3SWQgPSBwcmV2aWV3SWQ7XG4gICAgdGhpcy5wcmV2aWV3cy5mb3JFYWNoKChwcmV2aWV3LCBpZCkgPT4ge1xuICAgICAgcHJldmlldy5zaGVsbEVsLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIsIGlkID09PSBwcmV2aWV3SWQpO1xuICAgICAgaWYgKGlkID09PSBwcmV2aWV3SWQpIHtcbiAgICAgICAgcHJldmlldy5zaGVsbEVsLnN0eWxlLnpJbmRleCA9IGAkezIwMDAgKyB0aGlzLnByZXZpZXdzLnNpemV9YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUxNzNcdTk1RURcdTYzMDdcdTVCOUFcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBjbG9zZVByZXZpZXcocHJldmlld0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2aWV3ID0gdGhpcy5wcmV2aWV3cy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aWV3LnNoZWxsRWwucmVtb3ZlKCk7XG4gICAgdGhpcy5wcmV2aWV3cy5kZWxldGUocHJldmlld0lkKTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVByZXZpZXdJZCA9PT0gcHJldmlld0lkKSB7XG4gICAgICBjb25zdCBmYWxsYmFjayA9IEFycmF5LmZyb20odGhpcy5wcmV2aWV3cy5rZXlzKCkpLnBvcCgpID8/IG51bGw7XG4gICAgICB0aGlzLmFjdGl2ZVByZXZpZXdJZCA9IGZhbGxiYWNrO1xuICAgICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2aWV3cy5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLmhpZGVNYXNrKCk7XG4gICAgICB0aGlzLnJlbW92ZUdhbGxlcnkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU1RjUzXHU1MjREXHU2RkMwXHU2RDNCXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZVByZXZpZXdJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUHJldmlldyh0aGlzLmFjdGl2ZVByZXZpZXdJZCk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU1MTY4XHU5MEU4XHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aWV3cy5mb3JFYWNoKChwcmV2aWV3KSA9PiBwcmV2aWV3LnNoZWxsRWwucmVtb3ZlKCkpO1xuICAgIHRoaXMucHJldmlld3MuY2xlYXIoKTtcbiAgICB0aGlzLmFjdGl2ZVByZXZpZXdJZCA9IG51bGw7XG4gICAgdGhpcy5oaWRlTWFzaygpO1xuICAgIHRoaXMucmVtb3ZlR2FsbGVyeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJGQlx1NTNENlx1NUY1M1x1NTI0RFx1OTg4NFx1ODlDOFx1NjU3MFx1OTFDRlx1MzAwMlxuICAgKi9cbiAgcHVibGljIHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aWV3cy5zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OTUwMFx1NkJDMVx1NUJCRlx1NEUzQlx1MzAwMlxuICAgKi9cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUFsbCgpO1xuICAgIGlmICh0aGlzLmRldGFjaE1hc2tDbGljaykge1xuICAgICAgdGhpcy5kZXRhY2hNYXNrQ2xpY2soKTtcbiAgICAgIHRoaXMuZGV0YWNoTWFza0NsaWNrID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5tYXNrRWw/LnJlbW92ZSgpO1xuICAgIHRoaXMucm9vdEVsPy5yZW1vdmUoKTtcbiAgICB0aGlzLm1hc2tFbCA9IG51bGw7XG4gICAgdGhpcy5yb290RWwgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxQlx1NUVGQVx1NjgzOVx1ODI4Mlx1NzBCOVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBlbnN1cmVSb290KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvb3RFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucm9vdEVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnJvb3RFbC5hZGRDbGFzcyhcIm9pcC1vdmVybGF5LXJvb3RcIik7XG5cbiAgICB0aGlzLm1hc2tFbCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5tYXNrRWwuYWRkQ2xhc3MoXCJvaXAtb3ZlcmxheS1tYXNrXCIpO1xuICAgIHRoaXMubWFza0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yb290RWwpO1xuICAgIHRoaXMucm9vdEVsLmFwcGVuZENoaWxkKHRoaXMubWFza0VsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTY4MzlcdTYzNkVcdTZBMjFcdTVGMEZcdTY2RjRcdTY1QjBcdTkwNkVcdTdGNjlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlTWFzayhtb2RlOiBQcmV2aWV3TW9kZSwgb25NYXNrQ2xpY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubWFza0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGV0YWNoTWFza0NsaWNrKSB7XG4gICAgICB0aGlzLmRldGFjaE1hc2tDbGljaygpO1xuICAgICAgdGhpcy5kZXRhY2hNYXNrQ2xpY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChtb2RlID09PSBNb2RlLk5vcm1hbCkge1xuICAgICAgdGhpcy5tYXNrRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKTogdm9pZCA9PiBvbk1hc2tDbGljaygpO1xuICAgICAgdGhpcy5tYXNrRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgICAgdGhpcy5kZXRhY2hNYXNrQ2xpY2sgPSAoKSA9PiB0aGlzLm1hc2tFbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZU1hc2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTk2OTBcdTg1Q0ZcdTkwNkVcdTdGNjlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgaGlkZU1hc2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm1hc2tFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZXRhY2hNYXNrQ2xpY2spIHtcbiAgICAgIHRoaXMuZGV0YWNoTWFza0NsaWNrKCk7XG4gICAgICB0aGlzLmRldGFjaE1hc2tDbGljayA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubWFza0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTUzNTVcdTRFMkFcdTk4ODRcdTg5QzhcdTU5MTZcdTU4RjNcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlU2hlbGwobW9kZTogUHJldmlld01vZGUpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3Qgc2hlbGwgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoZWxsLmFkZENsYXNzKFwib2lwLXByZXZpZXctc2hlbGxcIik7XG4gICAgaWYgKG1vZGUgPT09IE1vZGUuUGluKSB7XG4gICAgICBzaGVsbC5hZGRDbGFzcyhcIm9pcC1waW4tc2hlbGxcIik7XG4gICAgfVxuICAgIHNoZWxsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIHNoZWxsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgcmV0dXJuIHNoZWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxQlx1NUVGQVx1NTZGRVx1NzI0N1x1NTE0M1x1N0QyMFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVJbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2UuYWRkQ2xhc3MoXCJvaXAtcHJldmlldy1pbWFnZVwiKTtcbiAgICBpbWFnZS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICByZXR1cm4gaW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogXHU1MjFCXHU1RUZBXHU1NkZFXHU3MjQ3XHU2NTg3XHU0RUY2XHU1NDBEXHU1MzNBXHU1N0RGXHVGRjA4XHU3MEI5XHU1MUZCXHU1MzczXHU1OTBEXHU1MjM2XHU1NDBEXHU3OUYwXHVGRjA5XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUNhcHRpb25CbG9jayhcbiAgICBwcmV2aWV3SWQ6IHN0cmluZyxcbiAgICBpdGVtOiBJbWFnZUl0ZW0sXG4gICAgb25BY3Rpb246IChwcmV2aWV3SWQ6IHN0cmluZywgYWN0aW9uOiBUb29sYmFyQWN0aW9uKSA9PiB2b2lkXG4gICk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxvY2suYWRkQ2xhc3MoXCJvaXAtaW1hZ2UtY2FwdGlvbi1ibG9ja1wiKTtcblxuICAgIGNvbnN0IGNhcHRpb24gPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcHRpb24uYWRkQ2xhc3MoXCJvaXAtaW1hZ2UtY2FwdGlvblwiKTtcbiAgICBjYXB0aW9uLnNldFRleHQodGhpcy5yZXNvbHZlSW1hZ2VGaWxlTmFtZShpdGVtKSk7XG4gICAgY2FwdGlvbi5kYXRhc2V0LmFjdGlvbiA9IFwiY29weS1uYW1lXCI7XG4gICAgY2FwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvbkFjdGlvbihwcmV2aWV3SWQsIFwiY29weS1uYW1lXCIpO1xuICAgIH0pO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGNhcHRpb24pO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhcHRpb24gXHU1MTVDXHU1RTk1XHU1MjFCXHU1RUZBXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUZhbGxiYWNrQ2FwdGlvbihibG9jazogSFRNTERpdkVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgY2FwdGlvbiA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FwdGlvbi5hZGRDbGFzcyhcIm9pcC1pbWFnZS1jYXB0aW9uXCIpO1xuICAgIGJsb2NrLnByZXBlbmQoY2FwdGlvbik7XG4gICAgcmV0dXJuIGNhcHRpb247XG4gIH1cblxuICAvKipcbiAgICogXHU1MjFCXHU1RUZBXHU1REU1XHU1MTc3XHU2ODBGXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVRvb2xiYXIocHJldmlld0lkOiBzdHJpbmcsIG9uQWN0aW9uOiAocHJldmlld0lkOiBzdHJpbmcsIGFjdGlvbjogVG9vbGJhckFjdGlvbikgPT4gdm9pZCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB0b29sYmFyID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b29sYmFyLmFkZENsYXNzKFwib2lwLXRvb2xiYXJcIik7XG5cbiAgICBjb25zdCBhY3Rpb25zOiBBcnJheTx7IGFjdGlvbjogVG9vbGJhckFjdGlvbjsgbGFiZWw6IHN0cmluZyB9PiA9IFtcbiAgICAgIHsgYWN0aW9uOiBcInpvb20tb3V0XCIsIGxhYmVsOiBcIi1cIiB9LFxuICAgICAgeyBhY3Rpb246IFwiem9vbS1pblwiLCBsYWJlbDogXCIrXCIgfSxcbiAgICAgIHsgYWN0aW9uOiBcInpvb20tMTAwXCIsIGxhYmVsOiBcIjE6MVwiIH0sXG4gICAgICB7IGFjdGlvbjogXCJmaXRcIiwgbGFiZWw6IHQoXCJ0b29sYmFyLmZpdFwiLCB0aGlzLmFwcCkgfSxcbiAgICAgIHsgYWN0aW9uOiBcImNvcHlcIiwgbGFiZWw6IHQoXCJ0b29sYmFyLmNvcHlcIiwgdGhpcy5hcHApIH0sXG4gICAgICB7IGFjdGlvbjogXCJwcmV2XCIsIGxhYmVsOiBcIlx1MjVDMFwiIH0sXG4gICAgICB7IGFjdGlvbjogXCJuZXh0XCIsIGxhYmVsOiBcIlx1MjVCNlwiIH0sXG4gICAgICB7IGFjdGlvbjogXCJjbG9zZVwiLCBsYWJlbDogdChcInRvb2xiYXIuY2xvc2VcIiwgdGhpcy5hcHApIH1cbiAgICBdO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKCh7IGFjdGlvbiwgbGFiZWwgfSkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgIGJ1dHRvbi5hZGRDbGFzcyhcIm9pcC10b29sYmFyLWJ0blwiKTtcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgIGJ1dHRvbi5zZXRUZXh0KGxhYmVsKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvbkFjdGlvbihwcmV2aWV3SWQsIGFjdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b29sYmFyO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NEVDRVx1NTZGRVx1NzI0N1x1OTg3OVx1ODlFM1x1Njc5MFx1NzUyOFx1NEU4RVx1NUM1NVx1NzkzQVx1NzY4NFx1NjU4N1x1NEVGNlx1NTQwRFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlSW1hZ2VGaWxlTmFtZShpdGVtOiBJbWFnZUl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpbGVOYW1lQnlTcmMgPSB0aGlzLmV4dHJhY3RGaWxlTmFtZUZyb21TcmMoaXRlbS5zcmMpO1xuICAgIGlmIChmaWxlTmFtZUJ5U3JjKSB7XG4gICAgICByZXR1cm4gZmlsZU5hbWVCeVNyYztcbiAgICB9XG4gICAgaWYgKGl0ZW0udGl0bGUpIHtcbiAgICAgIHJldHVybiBpdGVtLnRpdGxlO1xuICAgIH1cbiAgICBpZiAoaXRlbS5hbHQpIHtcbiAgICAgIHJldHVybiBpdGVtLmFsdDtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0uc3JjO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NEVDRSBVUkwvcGF0aCBcdTRFMkRcdTYzRDBcdTUzRDZcdTY1ODdcdTRFRjZcdTU0MERcdUZGMENcdTgxRUFcdTUyQThcdTUzQkJcdTYzODkgcXVlcnkvaGFzaFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBleHRyYWN0RmlsZU5hbWVGcm9tU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlU2FmZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoc3JjKTtcbiAgICAgIGNvbnN0IHBhcnRzID0gdXJsLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICByZXR1cm4gZGVjb2RlU2FmZShwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSA/PyBcIlwiKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZCA9IHNyYy5zcGxpdChcIiNcIilbMF0/LnNwbGl0KFwiP1wiKVswXSA/PyBcIlwiO1xuICAgICAgY29uc3QgcGFydHMgPSBzYW5pdGl6ZWQuc3BsaXQoXCIvXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHJldHVybiBkZWNvZGVTYWZlKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdID8/IFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTY2RjRcdTY1QjBcdTc1M0JcdTVFQ0FcdTY2M0VcdTc5M0FcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlR2FsbGVyeShcbiAgICBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MsXG4gICAgYWxsSXRlbXM6IEltYWdlSXRlbVtdLFxuICAgIGFjdGl2ZUluZGV4OiBudW1iZXIsXG4gICAgb25TZWxlY3Q6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlR2FsbGVyeSgpO1xuXG4gICAgaWYgKCFzZXR0aW5ncy5nYWxsZXJ5LmVuYWJsZWQgfHwgYWxsSXRlbXMubGVuZ3RoIDw9IDEgfHwgIXRoaXMucm9vdEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nYWxsZXJ5RWwgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZ2FsbGVyeUVsLmFkZENsYXNzKFwib2lwLWdhbGxlcnlcIik7XG4gICAgdGhpcy5nYWxsZXJ5RWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3MuZ2FsbGVyeS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5yb290RWwuYWRkQ2xhc3MoXCJvaXAtaGFzLWdhbGxlcnlcIik7XG5cbiAgICBhbGxJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB3cmFwcGVyLmFkZENsYXNzKFwib2lwLWdhbGxlcnktaXRlbVwiKTtcbiAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5ib3JkZXJDb2xvciA9IHNldHRpbmdzLmdhbGxlcnkuYWN0aXZlQm9yZGVyQ29sb3I7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uU2VsZWN0KGluZGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWFnZS5hZGRDbGFzcyhcIm9pcC1nYWxsZXJ5LWltYWdlXCIpO1xuICAgICAgaW1hZ2Uuc3JjID0gaXRlbS5zcmM7XG4gICAgICBpbWFnZS5hbHQgPSBpdGVtLmFsdDtcblxuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICB0aGlzLmdhbGxlcnlFbD8uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJvb3RFbC5hcHBlbmRDaGlsZCh0aGlzLmdhbGxlcnlFbCk7XG4gIH1cblxuICAvKipcbiAgICogXHU3OUZCXHU5NjY0XHU3NTNCXHU1RUNBXHU4MjgyXHU3MEI5XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUdhbGxlcnkoKTogdm9pZCB7XG4gICAgdGhpcy5nYWxsZXJ5RWw/LnJlbW92ZSgpO1xuICAgIHRoaXMuZ2FsbGVyeUVsID0gbnVsbDtcbiAgICB0aGlzLnJvb3RFbD8ucmVtb3ZlQ2xhc3MoXCJvaXAtaGFzLWdhbGxlcnlcIik7XG4gIH1cblxuICAvKipcbiAgICogXHU3NTFGXHU2MjEwXHU5ODg0XHU4OUM4IGlkXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVByZXZpZXdJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgcHJldmlldy0ke0RhdGUubm93KCl9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBJbWFnZXNQcmV2aWV3UGx1Z2luIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuXCI7XG5pbXBvcnQge1xuICBIb3RrZXlNb2RpZmllcixcbiAgUGx1Z2luU2V0dGluZ3MsXG4gIFByZXZpZXdNb2RlLFxuICBUcmlnZ2VyU2NvcGUsXG4gIFVJTGFuZ3VhZ2Vcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdTYzRDJcdTRFRjZcdThCQkVcdTdGNkVcdTcyNDhcdTY3MkNcdTUzRjdcdTMwMDJcbiAqL1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1NDSEVNQV9WRVJTSU9OID0gMTtcblxuLyoqXG4gKiBcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcdTMwMDJcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFBsdWdpblNldHRpbmdzID0ge1xuICBzY2hlbWFWZXJzaW9uOiBTRVRUSU5HU19TQ0hFTUFfVkVSU0lPTixcbiAgbW9kZTogUHJldmlld01vZGUuTm9ybWFsLFxuICB0cmlnZ2VyU2NvcGU6IFRyaWdnZXJTY29wZS5NYXJrZG93bk9ubHksXG4gIGluY2x1ZGVMaW5rZWRJbWFnZXM6IHRydWUsXG4gIG1vdmVIb3RrZXk6IEhvdGtleU1vZGlmaWVyLk5vbmUsXG4gIHN3aXRjaEhvdGtleTogSG90a2V5TW9kaWZpZXIuQ3RybCxcbiAgbW92ZVNwZWVkOiAxMCxcbiAgcGluTWF4aW11bTogMyxcbiAgcGluQ292ZXJNb2RlOiB0cnVlLFxuICBzaG93SW1hZ2VUb29sdGlwOiB0cnVlLFxuICB1aUxhbmd1YWdlOiBVSUxhbmd1YWdlLkF1dG8sXG4gIGltYWdlQm9yZGVyRW5hYmxlZDogZmFsc2UsXG4gIGltYWdlQm9yZGVyV2lkdGg6IFwibWVkaXVtXCIsXG4gIGltYWdlQm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgaW1hZ2VCb3JkZXJDb2xvcjogXCJ2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpXCIsXG4gIGdhbGxlcnk6IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNDUpXCIsXG4gICAgaG92ZXJDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICBhY3RpdmVCb3JkZXJDb2xvcjogXCJ2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpXCIsXG4gICAgaGlnaGxpZ2h0QWN0aXZlQm9yZGVyOiB0cnVlXG4gIH0sXG4gIGludGVyYWN0aW9uOiB7XG4gICAgZW5hYmxlTW9iaWxlR2VzdHVyZXM6IHRydWUsXG4gICAgZW5hYmxlRG91YmxlVGFwWm9vbTogdHJ1ZSxcbiAgICBsb25nUHJlc3NNZW51TXM6IDQ1MFxuICB9XG59O1xuXG4vKipcbiAqIFx1NzBFRFx1OTUyRVx1NEUwQlx1NjJDOVx1OTE0RFx1N0Y2RVx1MzAwMlxuICovXG5jb25zdCBIT1RLRVlfT1BUSU9OUzogUmVjb3JkPEhvdGtleU1vZGlmaWVyLCBzdHJpbmc+ID0ge1xuICBbSG90a2V5TW9kaWZpZXIuTm9uZV06IFwiTm9uZVwiLFxuICBbSG90a2V5TW9kaWZpZXIuQ3RybF06IFwiQ3RybFwiLFxuICBbSG90a2V5TW9kaWZpZXIuQWx0XTogXCJBbHRcIixcbiAgW0hvdGtleU1vZGlmaWVyLlNoaWZ0XTogXCJTaGlmdFwiLFxuICBbSG90a2V5TW9kaWZpZXIuQ3RybEFsdF06IFwiQ3RybCArIEFsdFwiLFxuICBbSG90a2V5TW9kaWZpZXIuQ3RybFNoaWZ0XTogXCJDdHJsICsgU2hpZnRcIixcbiAgW0hvdGtleU1vZGlmaWVyLlNoaWZ0QWx0XTogXCJTaGlmdCArIEFsdFwiLFxuICBbSG90a2V5TW9kaWZpZXIuQ3RybFNoaWZ0QWx0XTogXCJDdHJsICsgU2hpZnQgKyBBbHRcIlxufTtcblxuLyoqXG4gKiBcdThCQkVcdTdGNkVcdTk4NzVcdTVCOUVcdTczQjBcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlc1ByZXZpZXdTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBJbWFnZXNQcmV2aWV3UGx1Z2luO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdThCQkVcdTdGNkVcdTk4NzVcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEltYWdlc1ByZXZpZXdQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvKipcbiAgICogXHU2QkNGXHU2QjIxXHU2MjUzXHU1RjAwXHU4QkJFXHU3RjZFXHU5ODc1XHU2NUY2XHU1MjM3XHU2NUIwXHU1MTg1XHU1QkI5XHUzMDAyXG4gICAqL1xuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLnRpdGxlXCIsIHRoaXMuYXBwKSlcbiAgICAgIC5zZXRIZWFkaW5nKCk7XG5cbiAgICB0aGlzLnJlbmRlckxhbmd1YWdlU2V0dGluZyhjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJNb2RlU2V0dGluZyhjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUcmlnZ2VyU2V0dGluZyhjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJQaW5TZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclZpZXdTZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckhvdGtleVNldHRpbmcoY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyTW9iaWxlU2V0dGluZyhjb250YWluZXJFbCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RTMyXHU2N0QzXHU3NTRDXHU5NzYyXHU4QkVEXHU4QTAwXHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlbmRlckxhbmd1YWdlU2V0dGluZyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy51aUxhbmd1YWdlXCIsIHRoaXMuYXBwKSlcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKFVJTGFuZ3VhZ2UuQXV0bywgdChcImxhbmd1YWdlLmF1dG9cIiwgdGhpcy5hcHApKVxuICAgICAgICAgIC5hZGRPcHRpb24oVUlMYW5ndWFnZS5aaCwgdChcImxhbmd1YWdlLnpoXCIsIHRoaXMuYXBwKSlcbiAgICAgICAgICAuYWRkT3B0aW9uKFVJTGFuZ3VhZ2UuRW4sIHQoXCJsYW5ndWFnZS5lblwiLCB0aGlzLmFwcCkpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVpTGFuZ3VhZ2UpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudWlMYW5ndWFnZSA9IHZhbHVlIGFzIFVJTGFuZ3VhZ2U7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RTMyXHU2N0QzXHU2QTIxXHU1RjBGXHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlbmRlck1vZGVTZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLm1vZGVcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oUHJldmlld01vZGUuTm9ybWFsLCB0KFwibW9kZS5ub3JtYWxcIiwgdGhpcy5hcHApKVxuICAgICAgICAgIC5hZGRPcHRpb24oUHJldmlld01vZGUuUGluLCB0KFwibW9kZS5waW5cIiwgdGhpcy5hcHApKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb2RlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1vZGUgPSB2YWx1ZSBhcyBQcmV2aWV3TW9kZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uY29udHJvbGxlci5zeW5jTW9kZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RTMyXHU2N0QzXHU4OUU2XHU1M0QxXHU4MzAzXHU1NkY0XHU0RTBFXHU5NEZFXHU2M0E1XHU1NkZFXHU3MjQ3XHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlbmRlclRyaWdnZXJTZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRyaWdnZXJTY29wZVNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy50cmlnZ2VyU2NvcGVcIiwgdGhpcy5hcHApKVxuICAgICAgLnNldERlc2ModChcInNldHRpbmdzLnRyaWdnZXJTY29wZUhpbnRcIiwgdGhpcy5hcHApKTtcblxuICAgIHRyaWdnZXJTY29wZVNldHRpbmcuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICBkcm9wZG93blxuICAgICAgICAuYWRkT3B0aW9uKFRyaWdnZXJTY29wZS5NYXJrZG93bk9ubHksIHQoXCJzY29wZS5tYXJrZG93blwiLCB0aGlzLmFwcCkpXG4gICAgICAgIC5hZGRPcHRpb24oVHJpZ2dlclNjb3BlLk1hcmtkb3duQW5kQ29tbW9uLCB0KFwic2NvcGUuY29tbW9uXCIsIHRoaXMuYXBwKSlcbiAgICAgICAgLmFkZE9wdGlvbihUcmlnZ2VyU2NvcGUuR2xvYmFsLCB0KFwic2NvcGUuZ2xvYmFsXCIsIHRoaXMuYXBwKSlcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJTY29wZSlcbiAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJTY29wZSA9IHZhbHVlIGFzIFRyaWdnZXJTY29wZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5jb250cm9sbGVyLnJlZnJlc2hTZWxlY3RvcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy5pbmNsdWRlTGlua2VkXCIsIHRoaXMuYXBwKSlcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5jbHVkZUxpbmtlZEltYWdlcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pbmNsdWRlTGlua2VkSW1hZ2VzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmNvbnRyb2xsZXIucmVmcmVzaFNlbGVjdG9ycygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RTMyXHU2N0QzIFBpbiBcdTZBMjFcdTVGMEZcdTUzQzJcdTY1NzBcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyUGluU2V0dGluZyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBwaW5NYXhpbXVtU2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXR0aW5ncy5waW5NYXhpbXVtXCIsIHRoaXMuYXBwKSk7XG4gICAgY29uc3QgdXBkYXRlUGluTWF4aW11bUhpbnQgPSAodmFsdWU6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgcGluTWF4aW11bVNldHRpbmcuc2V0RGVzYyhcbiAgICAgICAgdChcInNldHRpbmdzLnBpbk1heGltdW1IaW50XCIsIHRoaXMuYXBwKS5yZXBsYWNlKFwie2NvdW50fVwiLCBTdHJpbmcodmFsdWUpKVxuICAgICAgKTtcbiAgICB9O1xuICAgIHVwZGF0ZVBpbk1heGltdW1IaW50KHRoaXMucGx1Z2luLnNldHRpbmdzLnBpbk1heGltdW0pO1xuXG4gICAgcGluTWF4aW11bVNldHRpbmcuYWRkU2xpZGVyKChzbGlkZXIpID0+IHtcbiAgICAgIHNsaWRlclxuICAgICAgICAuc2V0TGltaXRzKDEsIDYsIDEpXG4gICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5waW5NYXhpbXVtKVxuICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGluTWF4aW11bSA9IHZhbHVlO1xuICAgICAgICAgIHVwZGF0ZVBpbk1heGltdW1IaW50KHZhbHVlKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy5waW5Db3Zlck1vZGVcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5waW5Db3Zlck1vZGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGluQ292ZXJNb2RlID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkUzMlx1NjdEM1x1ODlDNlx1ODlDOVx1NEUwRVx1NzUzQlx1NUVDQVx1OTE0RFx1N0Y2RVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJWaWV3U2V0dGluZyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy5nYWxsZXJ5XCIsIHRoaXMuYXBwKSlcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZ2FsbGVyeS5lbmFibGVkKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmdhbGxlcnkuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IG1vdmVTcGVlZFNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0dGluZ3MubW92ZVNwZWVkXCIsIHRoaXMuYXBwKSk7XG4gICAgY29uc3QgdXBkYXRlTW92ZVNwZWVkSGludCA9ICh2YWx1ZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBtb3ZlU3BlZWRTZXR0aW5nLnNldERlc2MoXG4gICAgICAgIHQoXCJzZXR0aW5ncy5tb3ZlU3BlZWRIaW50XCIsIHRoaXMuYXBwKS5yZXBsYWNlKFwie3NwZWVkfVwiLCBTdHJpbmcodmFsdWUpKVxuICAgICAgKTtcbiAgICB9O1xuICAgIHVwZGF0ZU1vdmVTcGVlZEhpbnQodGhpcy5wbHVnaW4uc2V0dGluZ3MubW92ZVNwZWVkKTtcblxuICAgIG1vdmVTcGVlZFNldHRpbmcuYWRkU2xpZGVyKChzbGlkZXIpID0+IHtcbiAgICAgIHNsaWRlclxuICAgICAgICAuc2V0TGltaXRzKDEsIDMwLCAxKVxuICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubW92ZVNwZWVkKVxuICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubW92ZVNwZWVkID0gdmFsdWU7XG4gICAgICAgICAgdXBkYXRlTW92ZVNwZWVkSGludCh2YWx1ZSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkUzMlx1NjdEM1x1NzBFRFx1OTUyRVx1OTE0RFx1N0Y2RVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJIb3RrZXlTZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLm1vdmVIb3RrZXlcIiwgdGhpcy5hcHApKVxuICAgICAgLnNldERlc2ModChcInNldHRpbmdzLm1vdmVIb3RrZXlIaW50XCIsIHRoaXMuYXBwKSlcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgICAgdGhpcy5maWxsSG90a2V5T3B0aW9ucyhkcm9wZG93biwgdGhpcy5wbHVnaW4uc2V0dGluZ3MubW92ZUhvdGtleSwgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubW92ZUhvdGtleSA9IHZhbHVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0KFwic2V0dGluZ3Muc3dpdGNoSG90a2V5XCIsIHRoaXMuYXBwKSlcbiAgICAgIC5zZXREZXNjKHQoXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlIaW50XCIsIHRoaXMuYXBwKSlcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgICAgdGhpcy5maWxsSG90a2V5T3B0aW9ucyhkcm9wZG93biwgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3dpdGNoSG90a2V5LCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zd2l0Y2hIb3RrZXkgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMzJcdTY3RDNcdTc5RkJcdTUyQThcdTdBRUZcdTRFQTRcdTRFOTJcdTkxNERcdTdGNkVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyTW9iaWxlU2V0dGluZyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy5tb2JpbGVHZXN0dXJlXCIsIHRoaXMuYXBwKSlcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaW50ZXJhY3Rpb24uZW5hYmxlTW9iaWxlR2VzdHVyZXMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaW50ZXJhY3Rpb24uZW5hYmxlTW9iaWxlR2VzdHVyZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU3RURGXHU0RTAwXHU1ODZCXHU1MTQ1XHU3MEVEXHU5NTJFXHU0RTBCXHU2MkM5XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGZpbGxIb3RrZXlPcHRpb25zKFxuICAgIGRyb3Bkb3duOiBpbXBvcnQoXCJvYnNpZGlhblwiKS5Ecm9wZG93bkNvbXBvbmVudCxcbiAgICB2YWx1ZTogSG90a2V5TW9kaWZpZXIsXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogSG90a2V5TW9kaWZpZXIpID0+IFByb21pc2U8dm9pZD5cbiAgKTogdm9pZCB7XG4gICAgT2JqZWN0LnZhbHVlcyhIb3RrZXlNb2RpZmllcikuZm9yRWFjaCgoaG90a2V5KSA9PiB7XG4gICAgICBkcm9wZG93bi5hZGRPcHRpb24oaG90a2V5LCBIT1RLRVlfT1BUSU9OU1tob3RrZXldKTtcbiAgICB9KTtcblxuICAgIGRyb3Bkb3duLnNldFZhbHVlKHZhbHVlKS5vbkNoYW5nZShhc3luYyAoc2VsZWN0ZWQpID0+IHtcbiAgICAgIGF3YWl0IG9uQ2hhbmdlKHNlbGVjdGVkIGFzIEhvdGtleU1vZGlmaWVyKTtcbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTLCBTRVRUSU5HU19TQ0hFTUFfVkVSU0lPTiB9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtcbiAgSG90a2V5TW9kaWZpZXIsXG4gIFBsdWdpblNldHRpbmdzLFxuICBQcmV2aWV3TW9kZSxcbiAgVHJpZ2dlclNjb3BlLFxuICBVSUxhbmd1YWdlLFxuICB0eXBlIEdhbGxlcnlUaGVtZSxcbiAgdHlwZSBJbnRlcmFjdGlvblByb2ZpbGVcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbi8qKlxuICogXHU4QkJFXHU3RjZFXHU1QjU4XHU1MEE4XHU2NzBEXHU1MkExXHUzMDAyXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1N0b3JlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IFBsdWdpbjtcblxuICAvKipcbiAgICogXHU2Nzg0XHU5MDIwXHU4QkJFXHU3RjZFXHU2NzBEXHU1MkExXHUzMDAyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwbHVnaW46IFBsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJGQlx1NTNENlx1OTE0RFx1N0Y2RVx1NUU3Nlx1NTA1QVx1OEZDMVx1NzlGQlx1NTQ4Q1x1NTE1Q1x1NUU5NVx1MzAwMlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvYWQoKTogUHJvbWlzZTxQbHVnaW5TZXR0aW5ncz4ge1xuICAgIGNvbnN0IHJhdyA9IChhd2FpdCB0aGlzLnBsdWdpbi5sb2FkRGF0YSgpKSBhcyBQYXJ0aWFsPFBsdWdpblNldHRpbmdzPiB8IG51bGw7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKHJhdyk7XG4gIH1cblxuICAvKipcbiAgICogXHU2MzAxXHU0RTQ1XHU1MzE2XHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2F2ZShzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLm5vcm1hbGl6ZShzZXR0aW5ncykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTQwOFx1NUU3Nlx1OUVEOFx1OEJBNFx1NTAzQ1x1NUU3Nlx1NEZFRVx1NTkwRFx1OTc1RVx1NkNENVx1NUI1N1x1NkJCNVx1MzAwMlxuICAgKi9cbiAgcHVibGljIG5vcm1hbGl6ZShpbnB1dDogUGFydGlhbDxQbHVnaW5TZXR0aW5ncz4gfCBudWxsIHwgdW5kZWZpbmVkKTogUGx1Z2luU2V0dGluZ3Mge1xuICAgIGNvbnN0IG1lcmdlZDogUGx1Z2luU2V0dGluZ3MgPSB7XG4gICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxuICAgICAgLi4uaW5wdXQsXG4gICAgICBzY2hlbWFWZXJzaW9uOiBTRVRUSU5HU19TQ0hFTUFfVkVSU0lPTixcbiAgICAgIGdhbGxlcnk6IHRoaXMubm9ybWFsaXplR2FsbGVyeShpbnB1dD8uZ2FsbGVyeSksXG4gICAgICBpbnRlcmFjdGlvbjogdGhpcy5ub3JtYWxpemVJbnRlcmFjdGlvbihpbnB1dD8uaW50ZXJhY3Rpb24pXG4gICAgfTtcblxuICAgIG1lcmdlZC5tb2RlID0gdGhpcy5lbnN1cmVFbnVtKG1lcmdlZC5tb2RlLCBPYmplY3QudmFsdWVzKFByZXZpZXdNb2RlKSwgREVGQVVMVF9TRVRUSU5HUy5tb2RlKTtcbiAgICBtZXJnZWQudHJpZ2dlclNjb3BlID0gdGhpcy5lbnN1cmVFbnVtKFxuICAgICAgbWVyZ2VkLnRyaWdnZXJTY29wZSxcbiAgICAgIE9iamVjdC52YWx1ZXMoVHJpZ2dlclNjb3BlKSxcbiAgICAgIERFRkFVTFRfU0VUVElOR1MudHJpZ2dlclNjb3BlXG4gICAgKTtcbiAgICBtZXJnZWQubW92ZUhvdGtleSA9IHRoaXMuZW5zdXJlRW51bShcbiAgICAgIG1lcmdlZC5tb3ZlSG90a2V5LFxuICAgICAgT2JqZWN0LnZhbHVlcyhIb3RrZXlNb2RpZmllciksXG4gICAgICBERUZBVUxUX1NFVFRJTkdTLm1vdmVIb3RrZXlcbiAgICApO1xuICAgIG1lcmdlZC5zd2l0Y2hIb3RrZXkgPSB0aGlzLmVuc3VyZUVudW0oXG4gICAgICBtZXJnZWQuc3dpdGNoSG90a2V5LFxuICAgICAgT2JqZWN0LnZhbHVlcyhIb3RrZXlNb2RpZmllciksXG4gICAgICBERUZBVUxUX1NFVFRJTkdTLnN3aXRjaEhvdGtleVxuICAgICk7XG4gICAgbWVyZ2VkLnVpTGFuZ3VhZ2UgPSB0aGlzLmVuc3VyZUVudW0oXG4gICAgICBtZXJnZWQudWlMYW5ndWFnZSxcbiAgICAgIE9iamVjdC52YWx1ZXMoVUlMYW5ndWFnZSksXG4gICAgICBERUZBVUxUX1NFVFRJTkdTLnVpTGFuZ3VhZ2VcbiAgICApO1xuXG4gICAgbWVyZ2VkLmluY2x1ZGVMaW5rZWRJbWFnZXMgPSBCb29sZWFuKG1lcmdlZC5pbmNsdWRlTGlua2VkSW1hZ2VzKTtcbiAgICBtZXJnZWQucGluQ292ZXJNb2RlID0gQm9vbGVhbihtZXJnZWQucGluQ292ZXJNb2RlKTtcbiAgICBtZXJnZWQuc2hvd0ltYWdlVG9vbHRpcCA9IEJvb2xlYW4obWVyZ2VkLnNob3dJbWFnZVRvb2x0aXApO1xuICAgIG1lcmdlZC5pbWFnZUJvcmRlckVuYWJsZWQgPSBCb29sZWFuKG1lcmdlZC5pbWFnZUJvcmRlckVuYWJsZWQpO1xuXG4gICAgbWVyZ2VkLm1vdmVTcGVlZCA9IHRoaXMuY2xhbXAodGhpcy5zYWZlTnVtYmVyKG1lcmdlZC5tb3ZlU3BlZWQsIERFRkFVTFRfU0VUVElOR1MubW92ZVNwZWVkKSwgMSwgMzApO1xuICAgIG1lcmdlZC5waW5NYXhpbXVtID0gdGhpcy5jbGFtcCh0aGlzLnNhZmVOdW1iZXIobWVyZ2VkLnBpbk1heGltdW0sIERFRkFVTFRfU0VUVElOR1MucGluTWF4aW11bSksIDEsIDYpO1xuXG4gICAgbWVyZ2VkLmltYWdlQm9yZGVyV2lkdGggPSB0aGlzLnNhZmVTdHJpbmcobWVyZ2VkLmltYWdlQm9yZGVyV2lkdGgsIERFRkFVTFRfU0VUVElOR1MuaW1hZ2VCb3JkZXJXaWR0aCk7XG4gICAgbWVyZ2VkLmltYWdlQm9yZGVyU3R5bGUgPSB0aGlzLnNhZmVTdHJpbmcobWVyZ2VkLmltYWdlQm9yZGVyU3R5bGUsIERFRkFVTFRfU0VUVElOR1MuaW1hZ2VCb3JkZXJTdHlsZSk7XG4gICAgbWVyZ2VkLmltYWdlQm9yZGVyQ29sb3IgPSB0aGlzLnNhZmVTdHJpbmcobWVyZ2VkLmltYWdlQm9yZGVyQ29sb3IsIERFRkFVTFRfU0VUVElOR1MuaW1hZ2VCb3JkZXJDb2xvcik7XG5cbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE1Q1x1NUU5NVx1NzUzQlx1NUVDQVx1OTE0RFx1N0Y2RVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVHYWxsZXJ5KGlucHV0OiBQYXJ0aWFsPEdhbGxlcnlUaGVtZT4gfCBudWxsIHwgdW5kZWZpbmVkKTogR2FsbGVyeVRoZW1lIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uREVGQVVMVF9TRVRUSU5HUy5nYWxsZXJ5LFxuICAgICAgLi4uaW5wdXQsXG4gICAgICBlbmFibGVkOiBCb29sZWFuKGlucHV0Py5lbmFibGVkID8/IERFRkFVTFRfU0VUVElOR1MuZ2FsbGVyeS5lbmFibGVkKSxcbiAgICAgIGhpZ2hsaWdodEFjdGl2ZUJvcmRlcjogQm9vbGVhbihcbiAgICAgICAgaW5wdXQ/LmhpZ2hsaWdodEFjdGl2ZUJvcmRlciA/PyBERUZBVUxUX1NFVFRJTkdTLmdhbGxlcnkuaGlnaGxpZ2h0QWN0aXZlQm9yZGVyXG4gICAgICApLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnNhZmVTdHJpbmcoXG4gICAgICAgIGlucHV0Py5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIERFRkFVTFRfU0VUVElOR1MuZ2FsbGVyeS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICksXG4gICAgICBob3ZlckNvbG9yOiB0aGlzLnNhZmVTdHJpbmcoaW5wdXQ/LmhvdmVyQ29sb3IsIERFRkFVTFRfU0VUVElOR1MuZ2FsbGVyeS5ob3ZlckNvbG9yKSxcbiAgICAgIGFjdGl2ZUJvcmRlckNvbG9yOiB0aGlzLnNhZmVTdHJpbmcoXG4gICAgICAgIGlucHV0Py5hY3RpdmVCb3JkZXJDb2xvcixcbiAgICAgICAgREVGQVVMVF9TRVRUSU5HUy5nYWxsZXJ5LmFjdGl2ZUJvcmRlckNvbG9yXG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUxNUNcdTVFOTVcdTRFQTRcdTRFOTJcdTkxNERcdTdGNkVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgbm9ybWFsaXplSW50ZXJhY3Rpb24oXG4gICAgaW5wdXQ6IFBhcnRpYWw8SW50ZXJhY3Rpb25Qcm9maWxlPiB8IG51bGwgfCB1bmRlZmluZWRcbiAgKTogSW50ZXJhY3Rpb25Qcm9maWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uREVGQVVMVF9TRVRUSU5HUy5pbnRlcmFjdGlvbixcbiAgICAgIC4uLmlucHV0LFxuICAgICAgZW5hYmxlTW9iaWxlR2VzdHVyZXM6IEJvb2xlYW4oXG4gICAgICAgIGlucHV0Py5lbmFibGVNb2JpbGVHZXN0dXJlcyA/PyBERUZBVUxUX1NFVFRJTkdTLmludGVyYWN0aW9uLmVuYWJsZU1vYmlsZUdlc3R1cmVzXG4gICAgICApLFxuICAgICAgZW5hYmxlRG91YmxlVGFwWm9vbTogQm9vbGVhbihcbiAgICAgICAgaW5wdXQ/LmVuYWJsZURvdWJsZVRhcFpvb20gPz8gREVGQVVMVF9TRVRUSU5HUy5pbnRlcmFjdGlvbi5lbmFibGVEb3VibGVUYXBab29tXG4gICAgICApLFxuICAgICAgbG9uZ1ByZXNzTWVudU1zOiB0aGlzLmNsYW1wKFxuICAgICAgICB0aGlzLnNhZmVOdW1iZXIoaW5wdXQ/LmxvbmdQcmVzc01lbnVNcywgREVGQVVMVF9TRVRUSU5HUy5pbnRlcmFjdGlvbi5sb25nUHJlc3NNZW51TXMpLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMDBcbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjgyMVx1OUE4Q1x1Njc5QVx1NEUzRVx1NTAzQ1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBlbnN1cmVFbnVtPFQgZXh0ZW5kcyBzdHJpbmc+KFxuICAgIHZhbHVlOiB1bmtub3duLFxuICAgIHZhbGlkVmFsdWVzOiByZWFkb25seSBUW10sXG4gICAgZmFsbGJhY2s6IFRcbiAgKTogVCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gKHZhbGlkVmFsdWVzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSkgPyAodmFsdWUgYXMgVCkgOiBmYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVCODlcdTUxNjhcdThCRkJcdTUzRDZcdTVCNTdcdTdCMjZcdTRFMzJcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgc2FmZVN0cmluZyh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZS5sZW5ndGggPiAwID8gdmFsdWUgOiBmYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVCODlcdTUxNjhcdThCRkJcdTUzRDZcdTY1NzBcdTVCNTdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgc2FmZU51bWJlcih2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTY1NzBcdTUwM0NcdTg4QzFcdTUyNkFcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUFBLG1CQUErQjs7O0FDMkQvQixJQUFNLFVBQXNEO0FBQUEsRUFDMUQsSUFBSTtBQUFBLElBQ0Ysa0JBQWtCO0FBQUEsSUFDbEIsaUJBQWlCO0FBQUEsSUFDakIsdUJBQXVCO0FBQUEsSUFDdkIseUJBQXlCO0FBQUEsSUFDekIsNkJBQ0U7QUFBQSxJQUNGLDBCQUEwQjtBQUFBLElBQzFCLHVCQUF1QjtBQUFBLElBQ3ZCLDJCQUEyQjtBQUFBLElBQzNCLHlCQUF5QjtBQUFBLElBQ3pCLG9CQUFv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SyxHQUFHLENBQUM7QUFBQSxNQUMvRjtBQUFBLElBQ0YsQ0FBQztBQUVELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTSxFQUFFLGlCQUFpQixLQUFLLEdBQUc7QUFBQSxNQUNqQyxVQUFVLE1BQU07QUFDZCxhQUFLLFdBQVcsbUJBQW1CO0FBQUEsTUFDckM7QUFBQSxJQUNGLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU0sRUFBRSxnQkFBZ0IsS0FBSyxHQUFHO0FBQUEsTUFDaEMsVUFBVSxNQUFNO0FBQ2QsYUFBSyxXQUFXLGtCQUFrQjtBQUFBLE1BQ3BDO0FBQUEsSUFDRixDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNLEVBQUUsZ0JBQWdCLEtBQUssR0FBRztBQUFBLE1BQ2hDLFVBQVUsTUFBTTtBQUNkLGFBQUssV0FBVyxzQkFBc0I7QUFBQSxNQUN4QztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJQcmV2aWV3TW9kZSIsICJUcmlnZ2VyU2NvcGUiLCAiSG90a2V5TW9kaWZpZXIiLCAiVUlMYW5ndWFnZSIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIl0KfQo=

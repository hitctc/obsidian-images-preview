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
    preview.shellEl.setCssProps({
      "--oip-left": `${state.left}px`,
      "--oip-top": `${state.top}px`
    });
    preview.imageEl.style.width = `${state.width}px`;
    preview.imageEl.style.height = `${state.height}px`;
    preview.imageEl.setCssProps({ "--oip-image-transform": "none" });
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
      this.maskEl.toggleClass("is-visible", true);
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
    this.maskEl.toggleClass("is-visible", false);
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
    this.galleryEl.setCssProps({
      "--oip-gallery-bg": settings.gallery.backgroundColor,
      "--oip-gallery-hover": settings.gallery.hoverColor,
      "--oip-gallery-active-border": settings.gallery.activeBorderColor
    });
    this.rootEl.addClass("oip-has-gallery");
    allItems.forEach((item, index) => {
      const wrapper = this.doc.createElement("div");
      wrapper.addClass("oip-gallery-item");
      if (index === activeIndex) {
        wrapper.addClass("is-active");
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
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
    const container = activeView?.containerEl;
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
      image.classList.add("oip-clickable-image");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2kxOG4udHMiLCAic3JjL2NvbnRyb2xsZXJzL3ByZXZpZXctY29udHJvbGxlci50cyIsICJzcmMvaW5wdXQvaW5wdXQtYWRhcHRlci50cyIsICJzcmMvY29yZS9pbWFnZS10cmFuc2Zvcm0tZW5naW5lLnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvY29yZS9wcmV2aWV3LXN0YXRlLW1hY2hpbmUudHMiLCAic3JjL3NlcnZpY2VzL2NsaXBib2FyZC1zZXJ2aWNlLnRzIiwgInNyYy9zZXJ2aWNlcy9nYWxsZXJ5LXNlcnZpY2UudHMiLCAic3JjL3VpL292ZXJsYXktaG9zdC50cyIsICJzcmMvc2V0dGluZ3MudHMiLCAic3JjL3NlcnZpY2VzL3NldHRpbmdzLXN0b3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBOb3RpY2UsIFBsdWdpbiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgc2V0TG9jYWxlUHJlZmVyZW5jZSwgdCB9IGZyb20gXCIuL2kxOG5cIjtcbmltcG9ydCB7IFByZXZpZXdDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvcHJldmlldy1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBJbWFnZXNQcmV2aWV3U2V0dGluZ1RhYiB9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBTZXR0aW5nc1N0b3JlIH0gZnJvbSBcIi4vc2VydmljZXMvc2V0dGluZ3Mtc3RvcmVcIjtcbmltcG9ydCB7IFByZXZpZXdNb2RlLCB0eXBlIFBsdWdpblNldHRpbmdzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdTYzRDJcdTRFRjZcdTRFM0JcdTUxNjVcdTUzRTNcdTMwMDJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VzUHJldmlld1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHB1YmxpYyBzZXR0aW5ncyE6IFBsdWdpblNldHRpbmdzO1xuICBwdWJsaWMgY29udHJvbGxlciE6IFByZXZpZXdDb250cm9sbGVyO1xuXG4gIHByaXZhdGUgc2V0dGluZ3NTdG9yZSE6IFNldHRpbmdzU3RvcmU7XG5cbiAgLyoqXG4gICAqIFx1NjNEMlx1NEVGNlx1NTJBMFx1OEY3RFx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRlx1MzAwMlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNldHRpbmdzU3RvcmUgPSBuZXcgU2V0dGluZ3NTdG9yZSh0aGlzKTtcbiAgICB0aGlzLnNldHRpbmdzID0gYXdhaXQgdGhpcy5zZXR0aW5nc1N0b3JlLmxvYWQoKTtcbiAgICBzZXRMb2NhbGVQcmVmZXJlbmNlKHRoaXMuc2V0dGluZ3MudWlMYW5ndWFnZSk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgUHJldmlld0NvbnRyb2xsZXIodGhpcy5hcHAsIHRoaXMsICgpID0+IHRoaXMuc2V0dGluZ3MpO1xuICAgIHRoaXMuY29udHJvbGxlci5pbml0aWFsaXplKCk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IEltYWdlc1ByZXZpZXdTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG4gICAgdGhpcy5yZWdpc3RlckNvbW1hbmRzKCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2M0QyXHU0RUY2XHU1Mzc4XHU4RjdEXHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgb251bmxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sbGVyPy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogXHU2MzAxXHU0RTQ1XHU1MzE2XHU4QkJFXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2F2ZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzU3RvcmUubm9ybWFsaXplKHRoaXMuc2V0dGluZ3MpO1xuICAgIHNldExvY2FsZVByZWZlcmVuY2UodGhpcy5zZXR0aW5ncy51aUxhbmd1YWdlKTtcbiAgICBhd2FpdCB0aGlzLnNldHRpbmdzU3RvcmUuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZDRThcdTUxOENcdTU0N0RcdTRFRTRcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVnaXN0ZXJDb21tYW5kcygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwib3Blbi1wcmV2aWV3LWF0LWFjdGl2ZS1pbWFnZVwiLFxuICAgICAgbmFtZTogdChcImNvbW1hbmQub3BlblwiLCB0aGlzLmFwcCksXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB2b2lkIHRoaXMuY29udHJvbGxlci5vcGVuUHJldmlld0F0QWN0aXZlSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJ0b2dnbGUtcHJldmlldy1tb2RlXCIsXG4gICAgICBuYW1lOiB0KFwiY29tbWFuZC50b2dnbGVcIiwgdGhpcy5hcHApLFxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHRoaXMuY29udHJvbGxlci50b2dnbGVNb2RlKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIG5ldyBOb3RpY2UobW9kZSA9PT0gUHJldmlld01vZGUuTm9ybWFsID8gdChcIm1vZGUubm9ybWFsXCIsIHRoaXMuYXBwKSA6IHQoXCJtb2RlLnBpblwiLCB0aGlzLmFwcCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImNsb3NlLWFjdGl2ZS1wcmV2aWV3XCIsXG4gICAgICBuYW1lOiB0KFwiY29tbWFuZC5jbG9zZVwiLCB0aGlzLmFwcCksXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2xvc2VBY3RpdmVQcmV2aWV3KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwibmV4dC1pbWFnZVwiLFxuICAgICAgbmFtZTogdChcImNvbW1hbmQubmV4dFwiLCB0aGlzLmFwcCksXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc3dpdGNoVG9OZXh0SW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJwcmV2LWltYWdlXCIsXG4gICAgICBuYW1lOiB0KFwiY29tbWFuZC5wcmV2XCIsIHRoaXMuYXBwKSxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zd2l0Y2hUb1ByZXZpb3VzSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbi8qKlxuICogXHU2NTJGXHU2MzAxXHU3Njg0XHU4QkVEXHU4QTAwXHU0RUUzXHU3ODAxXHUzMDAyXG4gKi9cbmV4cG9ydCB0eXBlIExvY2FsZUtleSA9IFwiZW5cIiB8IFwiemhcIjtcblxuLyoqXG4gKiBcdThCRURcdThBMDBcdTUwNEZcdTU5N0RcdUZGMDhhdXRvID0gXHU4RERGXHU5NjhGXHU3Q0ZCXHU3RURGXHVGRjA5XHUzMDAyXG4gKi9cbmV4cG9ydCB0eXBlIExvY2FsZVByZWZlcmVuY2UgPSBcImF1dG9cIiB8IExvY2FsZUtleTtcblxuLyoqXG4gKiBcdTY1ODdcdTY4NDhcdTk1MkVcdTMwMDJcbiAqL1xuZXhwb3J0IHR5cGUgSTE4bktleSA9XG4gIHwgXCJzZXR0aW5ncy50aXRsZVwiXG4gIHwgXCJzZXR0aW5ncy5tb2RlXCJcbiAgfCBcInNldHRpbmdzLnVpTGFuZ3VhZ2VcIlxuICB8IFwic2V0dGluZ3MudHJpZ2dlclNjb3BlXCJcbiAgfCBcInNldHRpbmdzLnRyaWdnZXJTY29wZUhpbnRcIlxuICB8IFwic2V0dGluZ3MuaW5jbHVkZUxpbmtlZFwiXG4gIHwgXCJzZXR0aW5ncy5waW5NYXhpbXVtXCJcbiAgfCBcInNldHRpbmdzLnBpbk1heGltdW1IaW50XCJcbiAgfCBcInNldHRpbmdzLnBpbkNvdmVyTW9kZVwiXG4gIHwgXCJzZXR0aW5ncy5nYWxsZXJ5XCJcbiAgfCBcInNldHRpbmdzLm1vYmlsZUdlc3R1cmVcIlxuICB8IFwic2V0dGluZ3MubW92ZVNwZWVkXCJcbiAgfCBcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIlxuICB8IFwic2V0dGluZ3MubW92ZUhvdGtleVwiXG4gIHwgXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlcIlxuICB8IFwic2V0dGluZ3MubW92ZUhvdGtleUhpbnRcIlxuICB8IFwic2V0dGluZ3Muc3dpdGNoSG90a2V5SGludFwiXG4gIHwgXCJtb2RlLm5vcm1hbFwiXG4gIHwgXCJtb2RlLnBpblwiXG4gIHwgXCJzY29wZS5tYXJrZG93blwiXG4gIHwgXCJzY29wZS5jb21tb25cIlxuICB8IFwic2NvcGUuZ2xvYmFsXCJcbiAgfCBcImxhbmd1YWdlLmF1dG9cIlxuICB8IFwibGFuZ3VhZ2UuemhcIlxuICB8IFwibGFuZ3VhZ2UuZW5cIlxuICB8IFwidG9vbGJhci5maXRcIlxuICB8IFwidG9vbGJhci5jb3B5XCJcbiAgfCBcInRvb2xiYXIuY29weU5hbWVcIlxuICB8IFwidG9vbGJhci5jbG9zZVwiXG4gIHwgXCJub3RpY2UuY29weVN1Y2Nlc3NcIlxuICB8IFwibm90aWNlLmNvcHlGYWlsZWRcIlxuICB8IFwibm90aWNlLmNvcHlOYW1lU3VjY2Vzc1wiXG4gIHwgXCJub3RpY2UuY29weU5hbWVGYWlsZWRcIlxuICB8IFwibm90aWNlLm5vSW1hZ2VcIlxuICB8IFwiY29tbWFuZC5vcGVuXCJcbiAgfCBcImNvbW1hbmQudG9nZ2xlXCJcbiAgfCBcImNvbW1hbmQuY2xvc2VcIlxuICB8IFwiY29tbWFuZC5uZXh0XCJcbiAgfCBcImNvbW1hbmQucHJldlwiO1xuXG4vKipcbiAqIFx1OEJFRFx1OEEwMFx1NUI1N1x1NTE3OFx1MzAwMlxuICovXG5jb25zdCBMT0NBTEVTOiBSZWNvcmQ8TG9jYWxlS2V5LCBSZWNvcmQ8STE4bktleSwgc3RyaW5nPj4gPSB7XG4gIGVuOiB7XG4gICAgXCJzZXR0aW5ncy50aXRsZVwiOiBcIkltYWdlcyBQcmV2aWV3IFNldHRpbmdzXCIsXG4gICAgXCJzZXR0aW5ncy5tb2RlXCI6IFwiUHJldmlldyBtb2RlXCIsXG4gICAgXCJzZXR0aW5ncy51aUxhbmd1YWdlXCI6IFwiSW50ZXJmYWNlIGxhbmd1YWdlXCIsXG4gICAgXCJzZXR0aW5ncy50cmlnZ2VyU2NvcGVcIjogXCJUcmlnZ2VyIHNjb3BlXCIsXG4gICAgXCJzZXR0aW5ncy50cmlnZ2VyU2NvcGVIaW50XCI6XG4gICAgICBcIk1hcmtkb3duIG9ubHk6IHRyaWdnZXJzIGluIG5vdGUvaW1hZ2Ugdmlld3Mgb25seTsgTWFya2Rvd24gKyBjb21tb24gcGFuZWxzOiBhbHNvIGNvdmVycyBtb2RhbCBhbmQgQ2FudmFzOyBHbG9iYWwgaW1hZ2Ugc2VsZWN0b3I6IHRyaWdnZXJzIG9uIGFueSBpbWFnZSBpbiBjdXJyZW50IHdpbmRvdy5cIixcbiAgICBcInNldHRpbmdzLmluY2x1ZGVMaW5rZWRcIjogXCJFbmFibGUgbGlua2VkIGltYWdlc1wiLFxuICAgIFwic2V0dGluZ3MucGluTWF4aW11bVwiOiBcIlBpbiBtb2RlIG1heCBpbWFnZXNcIixcbiAgICBcInNldHRpbmdzLnBpbk1heGltdW1IaW50XCI6IFwiQ3VycmVudCB2YWx1ZToge2NvdW50fSBpbWFnZXNcIixcbiAgICBcInNldHRpbmdzLnBpbkNvdmVyTW9kZVwiOiBcIlJlcGxhY2Ugb2xkZXN0IGltYWdlIHdoZW4gZnVsbFwiLFxuICAgIFwic2V0dGluZ3MuZ2FsbGVyeVwiOiBcIkVuYWJsZSBnYWxsZXJ5IG5hdmJhclwiLFxuICAgIFwic2V0dGluZ3MubW9iaWxlR2VzdHVyZVwiOiBcIkVuYWJsZSBtb2JpbGUgZ2VzdHVyZXNcIixcbiAgICBcInNldHRpbmdzLm1vdmVTcGVlZFwiOiBcIktleWJvYXJkIG1vdmUgc3BlZWRcIixcbiAgICBcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIjogXCJDdXJyZW50IHNwZWVkOiB7c3BlZWR9XCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlSG90a2V5XCI6IFwiTW92ZSBpbWFnZSBtb2RpZmllclwiLFxuICAgIFwic2V0dGluZ3Muc3dpdGNoSG90a2V5XCI6IFwiU3dpdGNoIGltYWdlIG1vZGlmaWVyXCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlSG90a2V5SGludFwiOiBcIk1vZGlmaWVyICsgQXJyb3cga2V5c1wiLFxuICAgIFwic2V0dGluZ3Muc3dpdGNoSG90a2V5SGludFwiOiBcIk1vZGlmaWVyICsgQXJyb3cgTGVmdCAvIEFycm93IFJpZ2h0XCIsXG4gICAgXCJtb2RlLm5vcm1hbFwiOiBcIk5vcm1hbFwiLFxuICAgIFwibW9kZS5waW5cIjogXCJQaW5cIixcbiAgICBcInNjb3BlLm1hcmtkb3duXCI6IFwiTWFya2Rvd24gb25seVwiLFxuICAgIFwic2NvcGUuY29tbW9uXCI6IFwiTWFya2Rvd24gKyBjb21tb24gcGFuZWxzXCIsXG4gICAgXCJzY29wZS5nbG9iYWxcIjogXCJHbG9iYWwgaW1hZ2Ugc2VsZWN0b3JcIixcbiAgICBcImxhbmd1YWdlLmF1dG9cIjogXCJTeXN0ZW0gZGVmYXVsdFwiLFxuICAgIFwibGFuZ3VhZ2UuemhcIjogXCJDaGluZXNlXCIsXG4gICAgXCJsYW5ndWFnZS5lblwiOiBcIkVuZ2xpc2hcIixcbiAgICBcInRvb2xiYXIuZml0XCI6IFwiRml0XCIsXG4gICAgXCJ0b29sYmFyLmNvcHlcIjogXCJDb3B5XCIsXG4gICAgXCJ0b29sYmFyLmNvcHlOYW1lXCI6IFwiQ29weSBOYW1lXCIsXG4gICAgXCJ0b29sYmFyLmNsb3NlXCI6IFwiQ2xvc2VcIixcbiAgICBcIm5vdGljZS5jb3B5U3VjY2Vzc1wiOiBcIkltYWdlIGNvcGllZC5cIixcbiAgICBcIm5vdGljZS5jb3B5RmFpbGVkXCI6IFwiSW1hZ2UgY29weSBmYWlsZWQuXCIsXG4gICAgXCJub3RpY2UuY29weU5hbWVTdWNjZXNzXCI6IFwiSW1hZ2UgbmFtZSBjb3BpZWQuXCIsXG4gICAgXCJub3RpY2UuY29weU5hbWVGYWlsZWRcIjogXCJJbWFnZSBuYW1lIGNvcHkgZmFpbGVkLlwiLFxuICAgIFwibm90aWNlLm5vSW1hZ2VcIjogXCJObyBpbWFnZSBmb3VuZCBpbiBjdXJyZW50IHZpZXcuXCIsXG4gICAgXCJjb21tYW5kLm9wZW5cIjogXCJPcGVuIHByZXZpZXcgYXQgYWN0aXZlIGltYWdlXCIsXG4gICAgXCJjb21tYW5kLnRvZ2dsZVwiOiBcIlRvZ2dsZSBwcmV2aWV3IG1vZGVcIixcbiAgICBcImNvbW1hbmQuY2xvc2VcIjogXCJDbG9zZSBhY3RpdmUgcHJldmlld1wiLFxuICAgIFwiY29tbWFuZC5uZXh0XCI6IFwiTmV4dCBpbWFnZVwiLFxuICAgIFwiY29tbWFuZC5wcmV2XCI6IFwiUHJldmlvdXMgaW1hZ2VcIlxuICB9LFxuICB6aDoge1xuICAgIFwic2V0dGluZ3MudGl0bGVcIjogXCJcdTU2RkVcdTcyNDdcdTZENkVcdTdBOTdcdTk4ODRcdTg5QzhcdThCQkVcdTdGNkVcIixcbiAgICBcInNldHRpbmdzLm1vZGVcIjogXCJcdTk4ODRcdTg5QzhcdTZBMjFcdTVGMEZcIixcbiAgICBcInNldHRpbmdzLnVpTGFuZ3VhZ2VcIjogXCJcdTc1NENcdTk3NjJcdThCRURcdThBMDBcIixcbiAgICBcInNldHRpbmdzLnRyaWdnZXJTY29wZVwiOiBcIlx1ODlFNlx1NTNEMVx1ODMwM1x1NTZGNFwiLFxuICAgIFwic2V0dGluZ3MudHJpZ2dlclNjb3BlSGludFwiOlxuICAgICAgXCJcdTRFQzUgTWFya2Rvd25cdUZGMUFcdTUzRUFcdTU3MjhcdTdCMTRcdThCQjBcdTZCNjNcdTY1ODcvXHU2RTkwXHU3ODAxXHU2MjE2XHU1NkZFXHU3MjQ3XHU4OUM2XHU1NkZFXHU4OUU2XHU1M0QxXHVGRjFCTWFya2Rvd24gKyBcdTVFMzhcdTg5QzFcdTk3NjJcdTY3N0ZcdUZGMUFcdTk4OURcdTU5MTZcdTY1MkZcdTYzMDFcdTVGMzlcdTdBOTdcdTRFMEUgQ2FudmFzXHVGRjFCXHU1MTY4XHU1QzQwXHU1NkZFXHU3MjQ3XHU5MDA5XHU2MkU5XHU1NjY4XHVGRjFBXHU1RjUzXHU1MjREXHU3QTk3XHU1M0UzXHU0RUZCXHU2MTBGXHU1NkZFXHU3MjQ3XHU5MEZEXHU1M0VGXHU4OUU2XHU1M0QxXHUzMDAyXCIsXG4gICAgXCJzZXR0aW5ncy5pbmNsdWRlTGlua2VkXCI6IFwiXHU2NTJGXHU2MzAxXHU1RTI2XHU5NEZFXHU2M0E1XHU1NkZFXHU3MjQ3XCIsXG4gICAgXCJzZXR0aW5ncy5waW5NYXhpbXVtXCI6IFwiUGluIFx1NkEyMVx1NUYwRlx1NjcwMFx1NTkyN1x1NTZGRVx1NzI0N1x1NjU3MFwiLFxuICAgIFwic2V0dGluZ3MucGluTWF4aW11bUhpbnRcIjogXCJcdTVGNTNcdTUyNERcdThCQkVcdTdGNkVcdUZGMUF7Y291bnR9IFx1NUYyMFx1NTZGRVx1NzI0N1wiLFxuICAgIFwic2V0dGluZ3MucGluQ292ZXJNb2RlXCI6IFwiXHU4RkJFXHU1MjMwXHU0RTBBXHU5NjUwXHU2NUY2XHU2NkZGXHU2MzYyXHU2NzAwXHU2NUU3XHU1NkZFXHU3MjQ3XCIsXG4gICAgXCJzZXR0aW5ncy5nYWxsZXJ5XCI6IFwiXHU1NDJGXHU3NTI4XHU3NTNCXHU1RUNBXHU1QkZDXHU4MjJBXHU2ODBGXCIsXG4gICAgXCJzZXR0aW5ncy5tb2JpbGVHZXN0dXJlXCI6IFwiXHU1NDJGXHU3NTI4XHU3OUZCXHU1MkE4XHU3QUVGXHU2MjRCXHU1MkJGXCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlU3BlZWRcIjogXCJcdTk1MkVcdTc2RDhcdTc5RkJcdTUyQThcdTkwMUZcdTVFQTZcIixcbiAgICBcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIjogXCJcdTVGNTNcdTUyNERcdTkwMUZcdTVFQTZcdUZGMUF7c3BlZWR9XCIsXG4gICAgXCJzZXR0aW5ncy5tb3ZlSG90a2V5XCI6IFwiXHU3OUZCXHU1MkE4XHU1NkZFXHU3MjQ3XHU0RkVFXHU5OTcwXHU5NTJFXCIsXG4gICAgXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlcIjogXCJcdTUyMDdcdTYzNjJcdTU2RkVcdTcyNDdcdTRGRUVcdTk5NzBcdTk1MkVcIixcbiAgICBcInNldHRpbmdzLm1vdmVIb3RrZXlIaW50XCI6IFwiXHU0RkVFXHU5OTcwXHU5NTJFICsgXHU2NUI5XHU1NDExXHU5NTJFXCIsXG4gICAgXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlIaW50XCI6IFwiXHU0RkVFXHU5OTcwXHU5NTJFICsgXHU1REU2L1x1NTNGM1x1NjVCOVx1NTQxMVx1OTUyRVwiLFxuICAgIFwibW9kZS5ub3JtYWxcIjogXCJcdTY2NkVcdTkwMUFcdTZBMjFcdTVGMEZcIixcbiAgICBcIm1vZGUucGluXCI6IFwiUGluIFx1NkEyMVx1NUYwRlwiLFxuICAgIFwic2NvcGUubWFya2Rvd25cIjogXCJcdTRFQzUgTWFya2Rvd25cIixcbiAgICBcInNjb3BlLmNvbW1vblwiOiBcIk1hcmtkb3duICsgXHU1RTM4XHU4OUMxXHU5NzYyXHU2NzdGXCIsXG4gICAgXCJzY29wZS5nbG9iYWxcIjogXCJcdTUxNjhcdTVDNDBcdTU2RkVcdTcyNDdcdTkwMDlcdTYyRTlcdTU2NjhcIixcbiAgICBcImxhbmd1YWdlLmF1dG9cIjogXCJcdThEREZcdTk2OEZcdTdDRkJcdTdFREZcIixcbiAgICBcImxhbmd1YWdlLnpoXCI6IFwiXHU0RTJEXHU2NTg3XCIsXG4gICAgXCJsYW5ndWFnZS5lblwiOiBcIlx1ODJGMVx1NjU4N1wiLFxuICAgIFwidG9vbGJhci5maXRcIjogXCJcdTkwMDJcdTkxNERcIixcbiAgICBcInRvb2xiYXIuY29weVwiOiBcIlx1NTkwRFx1NTIzNlwiLFxuICAgIFwidG9vbGJhci5jb3B5TmFtZVwiOiBcIlx1NTkwRFx1NTIzNlx1NTZGRVx1NzI0N1x1NTQwRFx1NzlGMFwiLFxuICAgIFwidG9vbGJhci5jbG9zZVwiOiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgIFwibm90aWNlLmNvcHlTdWNjZXNzXCI6IFwiXHU1NkZFXHU3MjQ3XHU1REYyXHU1OTBEXHU1MjM2XHUzMDAyXCIsXG4gICAgXCJub3RpY2UuY29weUZhaWxlZFwiOiBcIlx1NTZGRVx1NzI0N1x1NTkwRFx1NTIzNlx1NTkzMVx1OEQyNVx1MzAwMlwiLFxuICAgIFwibm90aWNlLmNvcHlOYW1lU3VjY2Vzc1wiOiBcIlx1NTZGRVx1NzI0N1x1NTQwRFx1NzlGMFx1NURGMlx1NTkwRFx1NTIzNlx1MzAwMlwiLFxuICAgIFwibm90aWNlLmNvcHlOYW1lRmFpbGVkXCI6IFwiXHU1NkZFXHU3MjQ3XHU1NDBEXHU3OUYwXHU1OTBEXHU1MjM2XHU1OTMxXHU4RDI1XHUzMDAyXCIsXG4gICAgXCJub3RpY2Uubm9JbWFnZVwiOiBcIlx1NUY1M1x1NTI0RFx1ODlDNlx1NTZGRVx1NjcyQVx1NjI3RVx1NTIzMFx1NTZGRVx1NzI0N1x1MzAwMlwiLFxuICAgIFwiY29tbWFuZC5vcGVuXCI6IFwiXHU1NzI4XHU1RjUzXHU1MjREXHU1NkZFXHU3MjQ3XHU2MjUzXHU1RjAwXHU5ODg0XHU4OUM4XCIsXG4gICAgXCJjb21tYW5kLnRvZ2dsZVwiOiBcIlx1NTIwN1x1NjM2Mlx1OTg4NFx1ODlDOFx1NkEyMVx1NUYwRlwiLFxuICAgIFwiY29tbWFuZC5jbG9zZVwiOiBcIlx1NTE3M1x1OTVFRFx1NUY1M1x1NTI0RFx1OTg4NFx1ODlDOFwiLFxuICAgIFwiY29tbWFuZC5uZXh0XCI6IFwiXHU0RTBCXHU0RTAwXHU1RjIwXHU1NkZFXHU3MjQ3XCIsXG4gICAgXCJjb21tYW5kLnByZXZcIjogXCJcdTRFMEFcdTRFMDBcdTVGMjBcdTU2RkVcdTcyNDdcIlxuICB9XG59O1xuXG5sZXQgbG9jYWxlT3ZlcnJpZGU6IExvY2FsZUtleSB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIFx1OEJCRVx1N0Y2RVx1OEJFRFx1OEEwMFx1NTA0Rlx1NTk3RFx1MzAwMlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlUHJlZmVyZW5jZShwcmVmZXJlbmNlOiBMb2NhbGVQcmVmZXJlbmNlKTogdm9pZCB7XG4gIGxvY2FsZU92ZXJyaWRlID0gcHJlZmVyZW5jZSA9PT0gXCJhdXRvXCIgPyBudWxsIDogcHJlZmVyZW5jZTtcbn1cblxuLyoqXG4gKiBcdTY4MzlcdTYzNkVcdTVGNTNcdTUyNERcdTczQUZcdTU4ODNcdTYzQThcdTY1QURcdThCRURcdThBMDBcdTMwMDJcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUxvY2FsZShfYXBwPzogQXBwKTogTG9jYWxlS2V5IHtcbiAgaWYgKGxvY2FsZU92ZXJyaWRlKSB7XG4gICAgcmV0dXJuIGxvY2FsZU92ZXJyaWRlO1xuICB9XG4gIGNvbnN0IGxhbmd1YWdlID0gKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLmxhbmd1YWdlKSB8fCBcImVuXCI7XG4gIHJldHVybiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJ6aFwiKSA/IFwiemhcIiA6IFwiZW5cIjtcbn1cblxuLyoqXG4gKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTUzMTZcdTY1ODdcdTY3MkNcdTMwMDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHQoa2V5OiBJMThuS2V5LCBhcHA/OiBBcHApOiBzdHJpbmcge1xuICBjb25zdCBsb2NhbGUgPSByZXNvbHZlTG9jYWxlKGFwcCk7XG4gIHJldHVybiBMT0NBTEVTW2xvY2FsZV1ba2V5XSA/PyBMT0NBTEVTLmVuW2tleV0gPz8ga2V5O1xufVxuIiwgImltcG9ydCB7XG4gIE1hcmtkb3duVmlldyxcbiAgTWVudSxcbiAgTm90aWNlLFxuICB0eXBlIEFwcCxcbiAgdHlwZSBQbHVnaW4sXG4gIHR5cGUgV29ya3NwYWNlV2luZG93XG59IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuLi9pMThuXCI7XG5pbXBvcnQgeyBJbnB1dEFkYXB0ZXIgfSBmcm9tIFwiLi4vaW5wdXQvaW5wdXQtYWRhcHRlclwiO1xuaW1wb3J0IHsgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUgfSBmcm9tIFwiLi4vY29yZS9pbWFnZS10cmFuc2Zvcm0tZW5naW5lXCI7XG5pbXBvcnQgeyBQcmV2aWV3U3RhdGVNYWNoaW5lIH0gZnJvbSBcIi4uL2NvcmUvcHJldmlldy1zdGF0ZS1tYWNoaW5lXCI7XG5pbXBvcnQgeyBDbGlwYm9hcmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NsaXBib2FyZC1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nYWxsZXJ5LXNlcnZpY2VcIjtcbmltcG9ydCB7IE92ZXJsYXlIb3N0IH0gZnJvbSBcIi4uL3VpL292ZXJsYXktaG9zdFwiO1xuaW1wb3J0IHtcbiAgSG90a2V5TW9kaWZpZXIsXG4gIFByZXZpZXdNb2RlLFxuICB0eXBlIEltYWdlSXRlbSxcbiAgdHlwZSBNb3VudGVkUHJldmlldyxcbiAgdHlwZSBQbHVnaW5TZXR0aW5ncyxcbiAgdHlwZSBUb29sYmFyQWN0aW9uLFxuICB0eXBlIFRyYW5zZm9ybVN0YXRlXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1NkJDRlx1NEUyQVx1OTg4NFx1ODlDOFx1NUI5RVx1NEY4Qlx1NzY4NFx1OEZEMFx1ODg0Q1x1NjVGNlx1NEZFMVx1NjA2Rlx1MzAwMlxuICovXG5pbnRlcmZhY2UgUHJldmlld1J1bnRpbWUge1xuICBpZDogc3RyaW5nO1xuICBkb2M6IERvY3VtZW50O1xuICBzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgYWxsSXRlbXM6IEltYWdlSXRlbVtdO1xuICBhY3RpdmVJbmRleDogbnVtYmVyO1xuICBzdGF0ZU1hY2hpbmU6IFByZXZpZXdTdGF0ZU1hY2hpbmU7XG4gIGRldGFjaElucHV0OiAoKSA9PiB2b2lkO1xuICBsYXN0UG9pbnRlcjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBvcGVuZWRBdDogbnVtYmVyO1xuICByZXN0b3JlQm9yZGVyPzogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBcdTk4ODRcdTg5QzhcdTYzQTdcdTUyMzZcdTU2NjhcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXZpZXdDb250cm9sbGVyIHtcbiAgLy8gXHU2NjZFXHU5MDFBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHUyMDFDXHU1NDBEXHU3OUYwICsgXHU1NkZBXHU1QjlBXHU1REU1XHU1MTc3XHU2ODBGXHUyMDFEXHU5ODg0XHU3NTU5XHU1RTk1XHU5MEU4XHU3QTdBXHU5NUY0XHVGRjBDXHU5MDdGXHU1MTREXHU5QUQ4XHU5NTdGXHU1NkZFXHU5MDZFXHU2MzIxXHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9CT1RUT01fUkVTRVJWRSA9IDEyODtcbiAgLy8gXHU2NzA5XHU3NTNCXHU1RUNBXHU2NUY2XHU5ODlEXHU1OTE2XHU5ODg0XHU3NTU5XHU0RTAwXHU2QkI1XHU5QUQ4XHU1RUE2XHVGRjBDXHU3ODZFXHU0RkREXHU1NDBEXHU3OUYwXHU1MzNBXHU1N0RGXHU1NzI4XHU1REU1XHU1MTc3XHU2ODBGXHU0RTBFXHU3RjI5XHU3NTY1XHU1NkZFXHU0RTRCXHU0RTBBXHU1M0VGXHU4OUMxXHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9CT1RUT01fUkVTRVJWRV9XSVRIX0dBTExFUlkgPSAyMDA7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IFBsdWdpbjtcbiAgcHJpdmF0ZSByZWFkb25seSBnZXRTZXR0aW5nczogKCkgPT4gUGx1Z2luU2V0dGluZ3M7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjbGlwYm9hcmRTZXJ2aWNlOiBDbGlwYm9hcmRTZXJ2aWNlO1xuICBwcml2YXRlIHJlYWRvbmx5IGdhbGxlcnlTZXJ2aWNlOiBHYWxsZXJ5U2VydmljZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGhvc3RzID0gbmV3IE1hcDxEb2N1bWVudCwgT3ZlcmxheUhvc3Q+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcnVudGltZXMgPSBuZXcgTWFwPHN0cmluZywgUHJldmlld1J1bnRpbWU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGluUXVldWUgPSBuZXcgTWFwPERvY3VtZW50LCBzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBib3VuZERvY3MgPSBuZXcgU2V0PERvY3VtZW50PigpO1xuXG4gIHByaXZhdGUgc2VsZWN0b3IgPSBcIlwiO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdTYzQTdcdTUyMzZcdTU2NjhcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFBsdWdpbiwgZ2V0U2V0dGluZ3M6ICgpID0+IFBsdWdpblNldHRpbmdzKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5nZXRTZXR0aW5ncyA9IGdldFNldHRpbmdzO1xuICAgIHRoaXMuY2xpcGJvYXJkU2VydmljZSA9IG5ldyBDbGlwYm9hcmRTZXJ2aWNlKGFwcCk7XG4gICAgdGhpcy5nYWxsZXJ5U2VydmljZSA9IG5ldyBHYWxsZXJ5U2VydmljZShhcHApO1xuICAgIHRoaXMuc2VsZWN0b3IgPSB0aGlzLmdhbGxlcnlTZXJ2aWNlLmJ1aWxkU2VsZWN0b3IoXG4gICAgICB0aGlzLmdldFNldHRpbmdzKCkudHJpZ2dlclNjb3BlLFxuICAgICAgdGhpcy5nZXRTZXR0aW5ncygpLmluY2x1ZGVMaW5rZWRJbWFnZXNcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU4N1x1Njg2M1x1NzZEMVx1NTQyQ1x1MzAwMlxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hUb0RvY3VtZW50KGRvY3VtZW50KTtcblxuICAgIC8vIFx1NjVCMFx1N0E5N1x1NTNFM1x1NjI1M1x1NUYwMFx1NTQwRVx1ODg2NVx1NTE0NVx1NzZEMVx1NTQyQ1x1RkYwQ1x1NEZERFx1OEJDMSBwb3BvdXQgXHU1NzNBXHU2NjZGXHU1M0VGXHU3NTI4XHUzMDAyXG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcIndpbmRvdy1vcGVuXCIsIChfd2luOiBXb3Jrc3BhY2VXaW5kb3csIHdpbjogV2luZG93KSA9PiB7XG4gICAgICAgIHRoaXMuYXR0YWNoVG9Eb2N1bWVudCh3aW4uZG9jdW1lbnQpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gXHU1RTAzXHU1QzQwXHU1M0Q4XHU1MzE2XHU1NDBFXHU5MUNEXHU2NUIwXHU2MjZCXHU2M0NGXHVGRjBDXHU1OTA0XHU3NDA2XHU1RUY2XHU4RkRGXHU2MzAyXHU4RjdEXHU4OUM2XHU1NkZFXHUzMDAyXG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImxheW91dC1jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dGFjaFRvRG9jdW1lbnQoZG9jdW1lbnQpO1xuICAgICAgICB0aGlzLmNsZWFudXBEaXNjb25uZWN0ZWRIb3N0cygpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkEyMVx1NUYwRlx1NTIwN1x1NjM2Mlx1NjVGNlx1NTQwQ1x1NkI2NVx1NUJCOVx1NTY2OFx1NzJCNlx1NjAwMVx1MzAwMlxuICAgKi9cbiAgcHVibGljIHN5bmNNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMzdcdTY1QjBcdTkwMDlcdTYyRTlcdTU2NjhcdTg5QzRcdTUyMTlcdTMwMDJcbiAgICovXG4gIHB1YmxpYyByZWZyZXNoU2VsZWN0b3JzKCk6IHZvaWQge1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5nZXRTZXR0aW5ncygpO1xuICAgIHRoaXMuc2VsZWN0b3IgPSB0aGlzLmdhbGxlcnlTZXJ2aWNlLmJ1aWxkU2VsZWN0b3IoXG4gICAgICBzZXR0aW5ncy50cmlnZ2VyU2NvcGUsXG4gICAgICBzZXR0aW5ncy5pbmNsdWRlTGlua2VkSW1hZ2VzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU0N0RcdTRFRTRcdUZGMUFcdTU3MjhcdTVGNTNcdTUyNERcdTg5QzZcdTU2RkVcdTYyNTNcdTVGMDBcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBvcGVuUHJldmlld0F0QWN0aXZlSW1hZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gYWN0aXZlVmlldz8uY29udGFpbmVyRWw7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIG5ldyBOb3RpY2UodChcIm5vdGljZS5ub0ltYWdlXCIsIHRoaXMuYXBwKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEltYWdlRWxlbWVudD4odGhpcy5zZWxlY3Rvcik7XG4gICAgaWYgKCFjYW5kaWRhdGUpIHtcbiAgICAgIG5ldyBOb3RpY2UodChcIm5vdGljZS5ub0ltYWdlXCIsIHRoaXMuYXBwKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5vcGVuRnJvbUltYWdlKGNhbmRpZGF0ZS5vd25lckRvY3VtZW50LCBjYW5kaWRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTQ3RFx1NEVFNFx1RkYxQVx1NTE3M1x1OTVFRFx1NUY1M1x1NTI0RFx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWN0aXZlUHJldmlldygpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5ob3N0cy5nZXQoZG9jdW1lbnQpO1xuICAgIGNvbnN0IGFjdGl2ZSA9IGhvc3Q/LmdldEFjdGl2ZVByZXZpZXcoKTtcbiAgICBpZiAoIWhvc3QgfHwgIWFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUHJldmlldyhhY3RpdmUuaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTQ3RFx1NEVFNFx1RkYxQVx1NTIwN1x1NjM2Mlx1NEUwQlx1NEUwMFx1NUYyMFx1MzAwMlxuICAgKi9cbiAgcHVibGljIHN3aXRjaFRvTmV4dEltYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaG9zdHMuZ2V0KGRvY3VtZW50KT8uZ2V0QWN0aXZlUHJldmlldygpO1xuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVG9vbGJhckFjdGlvbihhY3RpdmUuaWQsIFwibmV4dFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU0N0RcdTRFRTRcdUZGMUFcdTUyMDdcdTYzNjJcdTRFMEFcdTRFMDBcdTVGMjBcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzd2l0Y2hUb1ByZXZpb3VzSW1hZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5ob3N0cy5nZXQoZG9jdW1lbnQpPy5nZXRBY3RpdmVQcmV2aWV3KCk7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVUb29sYmFyQWN0aW9uKGFjdGl2ZS5pZCwgXCJwcmV2XCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTQ3RFx1NEVFNFx1RkYxQVx1NTIwN1x1NjM2Mlx1NkEyMVx1NUYwRlx1MzAwMlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZU1vZGUoKTogUHJldmlld01vZGUge1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5nZXRTZXR0aW5ncygpO1xuICAgIHNldHRpbmdzLm1vZGUgPSBzZXR0aW5ncy5tb2RlID09PSBQcmV2aWV3TW9kZS5Ob3JtYWwgPyBQcmV2aWV3TW9kZS5QaW4gOiBQcmV2aWV3TW9kZS5Ob3JtYWw7XG4gICAgdGhpcy5zeW5jTW9kZSgpO1xuICAgIHJldHVybiBzZXR0aW5ncy5tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjNEMlx1NEVGNlx1NTM3OFx1OEY3RFx1NTI0RFx1NkUwNVx1NzQwNlx1MzAwMlxuICAgKi9cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUFsbCgpO1xuICAgIHRoaXMuaG9zdHMuZm9yRWFjaCgoaG9zdCkgPT4gaG9zdC5kZXN0cm95KCkpO1xuICAgIHRoaXMuaG9zdHMuY2xlYXIoKTtcbiAgICB0aGlzLnBpblF1ZXVlLmNsZWFyKCk7XG4gICAgdGhpcy5ib3VuZERvY3MuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFRDFcdTVCOUEgZG9jdW1lbnQgXHU3RUE3XHU0RThCXHU0RUY2XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGF0dGFjaFRvRG9jdW1lbnQoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJvdW5kRG9jcy5oYXMoZG9jKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYm91bmREb2NzLmFkZChkb2MpO1xuXG4gICAgdGhpcy5wbHVnaW4ucmVnaXN0ZXJEb21FdmVudChcbiAgICAgIGRvYyxcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGFzeW5jIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMucmVzb2x2ZUltYWdlRnJvbU1vdXNlRXZlbnQoZG9jLCBldmVudCk7XG4gICAgICAgIGlmICghaW1hZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVGFyZ2V0SW1hZ2UoaW1hZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGF3YWl0IHRoaXMub3BlbkZyb21JbWFnZShkb2MsIGltYWdlKTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyRG9tRXZlbnQoZG9jLCBcIm1vdXNlb3ZlclwiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGwpPy5jbG9zZXN0KFwiaW1nXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsO1xuICAgICAgaWYgKCFpbWFnZSB8fCAhdGhpcy5pc1RhcmdldEltYWdlKGltYWdlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwib2lwLWNsaWNrYWJsZS1pbWFnZVwiKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGx1Z2luLnJlZ2lzdGVyRG9tRXZlbnQoZG9jLCBcImtleWRvd25cIiwgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oZG9jLCBldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU0RUNFXHU1NkZFXHU3MjQ3XHU4MjgyXHU3MEI5XHU2MjUzXHU1RjAwXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIG9wZW5Gcm9tSW1hZ2UoZG9jOiBEb2N1bWVudCwgc291cmNlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5nZXRPckNyZWF0ZUhvc3QoZG9jKTtcblxuICAgIGNvbnN0IGNvbGxlY3RlZCA9IGF3YWl0IHRoaXMuZ2FsbGVyeVNlcnZpY2UuY29sbGVjdFdpdGhGYWxsYmFjayhkb2MsIHNvdXJjZUltYWdlLCBzZXR0aW5ncyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBjb2xsZWN0ZWQuaXRlbXMubGVuZ3RoXG4gICAgICA/IGNvbGxlY3RlZC5pdGVtc1xuICAgICAgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBzb3VyY2VJbWFnZS5jdXJyZW50U3JjIHx8IHNvdXJjZUltYWdlLnNyYyxcbiAgICAgICAgICAgIGFsdDogc291cmNlSW1hZ2UuYWx0IHx8IFwiXCIsXG4gICAgICAgICAgICB0aXRsZTogc291cmNlSW1hZ2UudGl0bGUgfHwgc291cmNlSW1hZ2UuYWx0IHx8IFwiXCIsXG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIHRvdGFsOiAxXG4gICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBjb2xsZWN0ZWQuYWN0aXZlSW5kZXggPj0gMCA/IGNvbGxlY3RlZC5hY3RpdmVJbmRleCA6IDA7XG4gICAgY29uc3QgaXRlbSA9IGFsbEl0ZW1zW2FjdGl2ZUluZGV4XSA/PyBhbGxJdGVtc1swXTtcblxuICAgIGlmIChzZXR0aW5ncy5tb2RlID09PSBQcmV2aWV3TW9kZS5QaW4pIHtcbiAgICAgIGNvbnN0IGNhbk9wZW4gPSB0aGlzLmVuZm9yY2VQaW5MaW1pdChkb2MsIGhvc3QsIHNldHRpbmdzKTtcbiAgICAgIGlmICghY2FuT3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlldyA9IGhvc3Qub3BlblByZXZpZXcoe1xuICAgICAgaXRlbSxcbiAgICAgIHNldHRpbmdzLFxuICAgICAgbW9kZTogc2V0dGluZ3MubW9kZSxcbiAgICAgIGFjdGl2ZUluZGV4LFxuICAgICAgYWxsSXRlbXMsXG4gICAgICBvblRvb2xiYXJBY3Rpb246IChwcmV2aWV3SWQsIGFjdGlvbikgPT4gdGhpcy5oYW5kbGVUb29sYmFyQWN0aW9uKHByZXZpZXdJZCwgYWN0aW9uKSxcbiAgICAgIG9uR2FsbGVyeVNlbGVjdDogKGluZGV4KSA9PiB0aGlzLmhhbmRsZUdhbGxlcnlTZWxlY3QoZG9jLCBpbmRleCksXG4gICAgICBvbk1hc2tDbGljazogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5nZXRTZXR0aW5ncygpLm1vZGUgPT09IFByZXZpZXdNb2RlLk5vcm1hbCkge1xuICAgICAgICAgIHRoaXMuY2xvc2VBbGxJbkRvYyhkb2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVQcmV2aWV3UnVudGltZShkb2MsIHByZXZpZXcsIHNvdXJjZUltYWdlLCBhbGxJdGVtcywgYWN0aXZlSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1OTg4NFx1ODlDOFx1OEZEMFx1ODg0Q1x1NjVGNlx1RkYwOFx1NzJCNlx1NjAwMVx1NjczQSArIFx1OEY5M1x1NTE2NSArIFx1NTIxRFx1NTlDQlx1NUUwM1x1NUM0MFx1RkYwOVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBpbml0aWFsaXplUHJldmlld1J1bnRpbWUoXG4gICAgZG9jOiBEb2N1bWVudCxcbiAgICBwcmV2aWV3OiBNb3VudGVkUHJldmlldyxcbiAgICBzb3VyY2VJbWFnZTogSFRNTEltYWdlRWxlbWVudCxcbiAgICBhbGxJdGVtczogSW1hZ2VJdGVtW10sXG4gICAgYWN0aXZlSW5kZXg6IG51bWJlclxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzdGF0ZU1hY2hpbmUgPSBuZXcgUHJldmlld1N0YXRlTWFjaGluZSgpO1xuICAgIHN0YXRlTWFjaGluZS5vcGVuKCk7XG5cbiAgICBjb25zdCBpbWFnZUxvYWRlZCA9IGF3YWl0IHRoaXMud2FpdEZvckltYWdlTG9hZChwcmV2aWV3LmltYWdlRWwpO1xuICAgIGlmICghaW1hZ2VMb2FkZWQpIHtcbiAgICAgIHByZXZpZXcuaW1hZ2VFbC5zcmMgPSBzb3VyY2VJbWFnZS5jdXJyZW50U3JjIHx8IHNvdXJjZUltYWdlLnNyYztcbiAgICB9XG5cbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dFZpZXdwb3J0KHByZXZpZXcsIGRvYywgYWxsSXRlbXMubGVuZ3RoKTtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBJbWFnZVRyYW5zZm9ybUVuZ2luZS5jcmVhdGVJbml0aWFsU3RhdGUoXG4gICAgICBwcmV2aWV3LmltYWdlRWwubmF0dXJhbFdpZHRoIHx8IHNvdXJjZUltYWdlLm5hdHVyYWxXaWR0aCB8fCAxLFxuICAgICAgcHJldmlldy5pbWFnZUVsLm5hdHVyYWxIZWlnaHQgfHwgc291cmNlSW1hZ2UubmF0dXJhbEhlaWdodCB8fCAxLFxuICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgIGxheW91dC5yZXNlcnZlZEJvdHRvbVxuICAgICk7XG5cbiAgICB0aGlzLmdldE9yQ3JlYXRlSG9zdChkb2MpLmFwcGx5U3RhdGUocHJldmlldy5pZCwgaW5pdGlhbFN0YXRlKTtcblxuICAgIGNvbnN0IGlucHV0ID0gbmV3IElucHV0QWRhcHRlcihkb2MsIHtcbiAgICAgIG9uRm9jdXM6ICgpID0+IHRoaXMuYWN0aXZhdGVQcmV2aWV3KHByZXZpZXcuaWQpLFxuICAgICAgb25EcmFnU3RhcnQ6ICh4LCB5KSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KHByZXZpZXcuaWQsIHgsIHkpLFxuICAgICAgb25EcmFnTW92ZTogKHgsIHkpID0+IHRoaXMub25EcmFnTW92ZShwcmV2aWV3LmlkLCB4LCB5KSxcbiAgICAgIG9uRHJhZ0VuZDogKCkgPT4gdGhpcy5vbkRyYWdFbmQocHJldmlldy5pZCksXG4gICAgICBvbldoZWVsWm9vbTogKGRlbHRhLCBhbmNob3JYLCBhbmNob3JZKSA9PiB0aGlzLm9uWm9vbShwcmV2aWV3LmlkLCBkZWx0YSwgYW5jaG9yWCwgYW5jaG9yWSksXG4gICAgICBvblBpbmNoWm9vbTogKHJhdGlvLCBhbmNob3JYLCBhbmNob3JZKSA9PiB0aGlzLm9uWm9vbShwcmV2aWV3LmlkLCByYXRpbywgYW5jaG9yWCwgYW5jaG9yWSksXG4gICAgICBvbkRvdWJsZVRhcDogKCkgPT4gdGhpcy5vbkRvdWJsZVRhcChwcmV2aWV3LmlkKSxcbiAgICAgIG9uTG9uZ1ByZXNzTWVudTogKHgsIHkpID0+IHRoaXMuc2hvd0NvbnRleHRNZW51KHByZXZpZXcuaWQsIHgsIHkpXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXRhY2hJbnB1dCA9IGlucHV0LmJpbmQocHJldmlldy5pbWFnZUVsKTtcblxuICAgIGNvbnN0IHJ1bnRpbWU6IFByZXZpZXdSdW50aW1lID0ge1xuICAgICAgaWQ6IHByZXZpZXcuaWQsXG4gICAgICBkb2MsXG4gICAgICBzb3VyY2VJbWFnZSxcbiAgICAgIGFsbEl0ZW1zLFxuICAgICAgYWN0aXZlSW5kZXgsXG4gICAgICBzdGF0ZU1hY2hpbmUsXG4gICAgICBkZXRhY2hJbnB1dCxcbiAgICAgIGxhc3RQb2ludGVyOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIG9wZW5lZEF0OiBEYXRlLm5vdygpLFxuICAgICAgcmVzdG9yZUJvcmRlcjogdGhpcy5hcHBseVNvdXJjZUltYWdlQm9yZGVyKHNvdXJjZUltYWdlKVxuICAgIH07XG5cbiAgICB0aGlzLnJ1bnRpbWVzLnNldChwcmV2aWV3LmlkLCBydW50aW1lKTtcblxuICAgIGlmICh0aGlzLmdldFNldHRpbmdzKCkubW9kZSA9PT0gUHJldmlld01vZGUuUGluKSB7XG4gICAgICB0aGlzLnB1c2hQaW5RdWV1ZShkb2MsIHByZXZpZXcuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU5MDRcdTc0MDZcdTVERTVcdTUxNzdcdTY4MEZcdTUyQThcdTRGNUNcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlVG9vbGJhckFjdGlvbihwcmV2aWV3SWQ6IHN0cmluZywgYWN0aW9uOiBUb29sYmFyQWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KHByZXZpZXdJZCk7XG4gICAgaWYgKCFydW50aW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKTtcbiAgICBjb25zdCBwcmV2aWV3ID0gaG9zdD8uZ2V0UHJldmlldyhwcmV2aWV3SWQpO1xuICAgIGlmICghaG9zdCB8fCAhcHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgY29uc3Qgc3RhdGUgPSBwcmV2aWV3LnN0YXRlO1xuICAgIGNvbnN0IGxheW91dCA9IHRoaXMuZ2V0TGF5b3V0Vmlld3BvcnQocHJldmlldywgcnVudGltZS5kb2MsIHJ1bnRpbWUuYWxsSXRlbXMubGVuZ3RoKTtcblxuICAgIGNvbnN0IGFwcGx5ID0gKG5leHRTdGF0ZTogVHJhbnNmb3JtU3RhdGUpOiB2b2lkID0+IHtcbiAgICAgIGhvc3QuYXBwbHlTdGF0ZShwcmV2aWV3SWQsIG5leHRTdGF0ZSk7XG4gICAgfTtcblxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlIFwiem9vbS1pblwiOlxuICAgICAgICBhcHBseShJbWFnZVRyYW5zZm9ybUVuZ2luZS56b29tQXQoc3RhdGUsIDEuMSwgdGhpcy5nZXRDZW50ZXJBbmNob3Ioc3RhdGUpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInpvb20tb3V0XCI6XG4gICAgICAgIGFwcGx5KEltYWdlVHJhbnNmb3JtRW5naW5lLnpvb21BdChzdGF0ZSwgMC45LCB0aGlzLmdldENlbnRlckFuY2hvcihzdGF0ZSkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiem9vbS0xMDBcIjpcbiAgICAgICAgYXBwbHkoXG4gICAgICAgICAgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUuem9vbVRvQWN0dWFsKFxuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBsYXlvdXQud2lkdGgsXG4gICAgICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICAgICAgbGF5b3V0LnJlc2VydmVkQm90dG9tXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJmaXRcIjpcbiAgICAgICAgYXBwbHkoXG4gICAgICAgICAgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUuZml0VG9WaWV3cG9ydChcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICAgICAgbGF5b3V0LmhlaWdodCxcbiAgICAgICAgICAgIGxheW91dC5yZXNlcnZlZEJvdHRvbVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY29weVwiOlxuICAgICAgICB2b2lkIHRoaXMuY2xpcGJvYXJkU2VydmljZS5jb3B5SW1hZ2VPclVybChwcmV2aWV3LmltYWdlRWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb3B5LW5hbWVcIjpcbiAgICAgICAgdm9pZCB0aGlzLmNvcHlJbWFnZU5hbWUocHJldmlldy5jYXB0aW9uRWwudGV4dENvbnRlbnQgPz8gXCJcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNsb3NlXCI6XG4gICAgICAgIHRoaXMuY2xvc2VQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgdGhpcy5zd2l0Y2hJbWFnZShwcmV2aWV3SWQsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwcmV2XCI6XG4gICAgICAgIHRoaXMuc3dpdGNoSW1hZ2UocHJldmlld0lkLCBmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFx1NzUzQlx1NUVDQVx1NzBCOVx1NTFGQlx1NTIwN1x1NTZGRVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVHYWxsZXJ5U2VsZWN0KGRvYzogRG9jdW1lbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5ob3N0cy5nZXQoZG9jKTtcbiAgICBjb25zdCBhY3RpdmUgPSBob3N0Py5nZXRBY3RpdmVQcmV2aWV3KCk7XG4gICAgaWYgKCFob3N0IHx8ICFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zd2l0Y2hJbWFnZVRvSW5kZXgoYWN0aXZlLmlkLCBpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MjA3XHU2MzYyXHU1MjMwXHU2MzA3XHU1QjlBXHU3RDIyXHU1RjE1XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHN3aXRjaEltYWdlVG9JbmRleChwcmV2aWV3SWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocnVudGltZS5hbGxJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBob3N0ID0gdGhpcy5ob3N0cy5nZXQocnVudGltZS5kb2MpO1xuICAgIGNvbnN0IHByZXZpZXcgPSBob3N0Py5nZXRQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgaWYgKCFob3N0IHx8ICFwcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FmZUluZGV4ID0gKChpbmRleCAlIHJ1bnRpbWUuYWxsSXRlbXMubGVuZ3RoKSArIHJ1bnRpbWUuYWxsSXRlbXMubGVuZ3RoKSAlIHJ1bnRpbWUuYWxsSXRlbXMubGVuZ3RoO1xuICAgIHJ1bnRpbWUuYWN0aXZlSW5kZXggPSBzYWZlSW5kZXg7XG5cbiAgICBjb25zdCBuZXh0SXRlbSA9IHJ1bnRpbWUuYWxsSXRlbXNbc2FmZUluZGV4XTtcbiAgICBwcmV2aWV3Lml0ZW0gPSBuZXh0SXRlbTtcbiAgICBwcmV2aWV3LmltYWdlRWwuc3JjID0gbmV4dEl0ZW0uc3JjO1xuICAgIHByZXZpZXcuaW1hZ2VFbC5hbHQgPSBuZXh0SXRlbS5hbHQ7XG4gICAgaG9zdC5yZW5kZXJHYWxsZXJ5KHRoaXMuZ2V0U2V0dGluZ3MoKSwgcnVudGltZS5hbGxJdGVtcywgc2FmZUluZGV4LCAobmV4dElkeCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVHYWxsZXJ5U2VsZWN0KHJ1bnRpbWUuZG9jLCBuZXh0SWR4KTtcbiAgICB9KTtcblxuICAgIHZvaWQgdGhpcy53YWl0Rm9ySW1hZ2VMb2FkKHByZXZpZXcuaW1hZ2VFbCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dFZpZXdwb3J0KHByZXZpZXcsIHJ1bnRpbWUuZG9jLCBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aCk7XG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSBJbWFnZVRyYW5zZm9ybUVuZ2luZS5jcmVhdGVJbml0aWFsU3RhdGUoXG4gICAgICAgIHByZXZpZXcuaW1hZ2VFbC5uYXR1cmFsV2lkdGggfHwgMSxcbiAgICAgICAgcHJldmlldy5pbWFnZUVsLm5hdHVyYWxIZWlnaHQgfHwgMSxcbiAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICBsYXlvdXQucmVzZXJ2ZWRCb3R0b21cbiAgICAgICk7XG4gICAgICBob3N0LmFwcGx5U3RhdGUocHJldmlld0lkLCBuZXh0U3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjMwOVx1OTg3QVx1NUU4Rlx1NTIwN1x1NjM2Mlx1NTZGRVx1NzI0N1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBzd2l0Y2hJbWFnZShwcmV2aWV3SWQ6IHN0cmluZywgbmV4dDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSB8fCBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0gbmV4dCA/IDEgOiAtMTtcbiAgICB0aGlzLnN3aXRjaEltYWdlVG9JbmRleChwcmV2aWV3SWQsIHJ1bnRpbWUuYWN0aXZlSW5kZXggKyBkZWx0YSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1RjAwXHU1OUNCXHU2MkQ2XHU2MkZEXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHByZXZpZXdJZDogc3RyaW5nLCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgcnVudGltZS5sYXN0UG9pbnRlciA9IHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9O1xuICAgIHRyeSB7XG4gICAgICBydW50aW1lLnN0YXRlTWFjaGluZS5zdGFydERyYWcoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFx1NURGMlx1NTcyOFx1NjJENlx1NjJGRFx1NjAwMVx1NjVGNlx1NUZGRFx1NzU2NVx1OTFDRFx1NTkwRCBzdGFydFx1MzAwMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYyRDZcdTYyRkRcdTRFMkRcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgb25EcmFnTW92ZShwcmV2aWV3SWQ6IHN0cmluZywgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBjb25zdCBob3N0ID0gcnVudGltZSA/IHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKSA6IG51bGw7XG4gICAgY29uc3QgcHJldmlldyA9IGhvc3Q/LmdldFByZXZpZXcocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUgfHwgIWhvc3QgfHwgIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRYID0gY2xpZW50WCAtIHJ1bnRpbWUubGFzdFBvaW50ZXIueDtcbiAgICBjb25zdCBvZmZzZXRZID0gY2xpZW50WSAtIHJ1bnRpbWUubGFzdFBvaW50ZXIueTtcbiAgICBydW50aW1lLmxhc3RQb2ludGVyID0geyB4OiBjbGllbnRYLCB5OiBjbGllbnRZIH07XG5cbiAgICBob3N0LmFwcGx5U3RhdGUocHJldmlld0lkLCBJbWFnZVRyYW5zZm9ybUVuZ2luZS5tb3ZlQnkocHJldmlldy5zdGF0ZSwgeyB4OiBvZmZzZXRYLCB5OiBvZmZzZXRZIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFRDNcdTY3NUZcdTYyRDZcdTYyRkRcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgb25EcmFnRW5kKHByZXZpZXdJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KHByZXZpZXdJZCk7XG4gICAgaWYgKCFydW50aW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJ1bnRpbWUuc3RhdGVNYWNoaW5lLmVuZERyYWcoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFx1OTc1RVx1NjJENlx1NjJGRFx1NjAwMVx1N0VEM1x1Njc1Rlx1NjVGNlx1NjVFMFx1OTcwMFx1NTkwNFx1NzQwNlx1MzAwMlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU5MDRcdTc0MDZcdTdGMjlcdTY1M0VcdThGOTNcdTUxNjVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgb25ab29tKHByZXZpZXdJZDogc3RyaW5nLCByYXRpbzogbnVtYmVyLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGNvbnN0IGhvc3QgPSBydW50aW1lID8gdGhpcy5ob3N0cy5nZXQocnVudGltZS5kb2MpIDogbnVsbDtcbiAgICBjb25zdCBwcmV2aWV3ID0gaG9zdD8uZ2V0UHJldmlldyhwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSB8fCAhaG9zdCB8fCAhcHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhvc3QuYXBwbHlTdGF0ZShcbiAgICAgIHByZXZpZXdJZCxcbiAgICAgIEltYWdlVHJhbnNmb3JtRW5naW5lLnpvb21BdChwcmV2aWV3LnN0YXRlLCByYXRpbywge1xuICAgICAgICB4OiBhbmNob3JYLFxuICAgICAgICB5OiBhbmNob3JZXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogXHU1M0NDXHU1MUZCXHU1MjA3XHU2MzYyIGZpdC8xOjFcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgb25Eb3VibGVUYXAocHJldmlld0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQocHJldmlld0lkKTtcbiAgICBjb25zdCBob3N0ID0gcnVudGltZSA/IHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKSA6IG51bGw7XG4gICAgY29uc3QgcHJldmlldyA9IGhvc3Q/LmdldFByZXZpZXcocHJldmlld0lkKTtcbiAgICBpZiAoIXJ1bnRpbWUgfHwgIWhvc3QgfHwgIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dFZpZXdwb3J0KHByZXZpZXcsIHJ1bnRpbWUuZG9jLCBydW50aW1lLmFsbEl0ZW1zLmxlbmd0aCk7XG4gICAgaWYgKE1hdGguYWJzKHByZXZpZXcuc3RhdGUuem9vbVJhdGlvIC0gMSkgPCAwLjA1KSB7XG4gICAgICBob3N0LmFwcGx5U3RhdGUoXG4gICAgICAgIHByZXZpZXdJZCxcbiAgICAgICAgSW1hZ2VUcmFuc2Zvcm1FbmdpbmUuZml0VG9WaWV3cG9ydChcbiAgICAgICAgICBwcmV2aWV3LnN0YXRlLFxuICAgICAgICAgIGxheW91dC53aWR0aCxcbiAgICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICAgIGxheW91dC5yZXNlcnZlZEJvdHRvbVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhvc3QuYXBwbHlTdGF0ZShcbiAgICAgIHByZXZpZXdJZCxcbiAgICAgIEltYWdlVHJhbnNmb3JtRW5naW5lLnpvb21Ub0FjdHVhbChcbiAgICAgICAgcHJldmlldy5zdGF0ZSxcbiAgICAgICAgbGF5b3V0LndpZHRoLFxuICAgICAgICBsYXlvdXQuaGVpZ2h0LFxuICAgICAgICBsYXlvdXQucmVzZXJ2ZWRCb3R0b21cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTNGM1x1OTUyRS9cdTk1N0ZcdTYzMDlcdTYyNTNcdTVGMDBcdTgzRENcdTUzNTVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgc2hvd0NvbnRleHRNZW51KHByZXZpZXdJZDogc3RyaW5nLCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xuXG4gICAgY29uc3QgYWRkSXRlbSA9ICh0aXRsZTogc3RyaW5nLCBhY3Rpb246IFRvb2xiYXJBY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNldFRpdGxlKHRpdGxlKS5vbkNsaWNrKCgpID0+IHRoaXMuaGFuZGxlVG9vbGJhckFjdGlvbihwcmV2aWV3SWQsIGFjdGlvbikpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFkZEl0ZW0oXCJab29tIEluXCIsIFwiem9vbS1pblwiKTtcbiAgICBhZGRJdGVtKFwiWm9vbSBPdXRcIiwgXCJ6b29tLW91dFwiKTtcbiAgICBhZGRJdGVtKFwiQWN0dWFsIFNpemVcIiwgXCJ6b29tLTEwMFwiKTtcbiAgICBhZGRJdGVtKFwiRml0XCIsIFwiZml0XCIpO1xuICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XG4gICAgYWRkSXRlbShcIkNvcHlcIiwgXCJjb3B5XCIpO1xuICAgIGFkZEl0ZW0oXCJDbG9zZVwiLCBcImNsb3NlXCIpO1xuXG4gICAgbWVudS5zaG93QXRQb3NpdGlvbih7IHg6IGNsaWVudFgsIHk6IGNsaWVudFkgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU5NTJFXHU3NkQ4XHU1RkVCXHU2Mzc3XHU5NTJFXHU1OTA0XHU3NDA2XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZUtleURvd24oZG9jOiBEb2N1bWVudCwgZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5ob3N0cy5nZXQoZG9jKTtcbiAgICBjb25zdCBhY3RpdmUgPSBob3N0Py5nZXRBY3RpdmVQcmV2aWV3KCk7XG4gICAgaWYgKCFob3N0IHx8ICFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBydW50aW1lID0gdGhpcy5ydW50aW1lcy5nZXQoYWN0aXZlLmlkKTtcbiAgICBpZiAoIXJ1bnRpbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jbG9zZVByZXZpZXcoYWN0aXZlLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBcdTY1QjlcdTU0MTFcdTk1MkVcdUZGMUFcdTY4MzlcdTYzNkVcdTRFMERcdTU0MENcdTRGRUVcdTk5NzBcdTk1MkVcdTYzQTdcdTUyMzZcdTc5RkJcdTUyQThcdTYyMTZcdTUyMDdcdTU2RkVcdTMwMDJcbiAgICBpZiAoW1wiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiLCBcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIl0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgaWYgKHRoaXMubWF0Y2hNb2RpZmllcihldmVudCwgdGhpcy5nZXRTZXR0aW5ncygpLnN3aXRjaEhvdGtleSkpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zd2l0Y2hJbWFnZShhY3RpdmUuaWQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zd2l0Y2hJbWFnZShhY3RpdmUuaWQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubWF0Y2hNb2RpZmllcihldmVudCwgdGhpcy5nZXRTZXR0aW5ncygpLm1vdmVIb3RrZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubW92ZUJ5QXJyb3coYWN0aXZlLmlkLCBldmVudC5rZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdCQURcdTU5MzRcdTk1MkVcdTc5RkJcdTUyQThcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgbW92ZUJ5QXJyb3cocHJldmlld0lkOiBzdHJpbmcsIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KHByZXZpZXdJZCk7XG4gICAgY29uc3QgaG9zdCA9IHJ1bnRpbWUgPyB0aGlzLmhvc3RzLmdldChydW50aW1lLmRvYykgOiBudWxsO1xuICAgIGNvbnN0IHByZXZpZXcgPSBob3N0Py5nZXRQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgaWYgKCFydW50aW1lIHx8ICFob3N0IHx8ICFwcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3BlZWQgPSB0aGlzLmdldFNldHRpbmdzKCkubW92ZVNwZWVkO1xuICAgIGNvbnN0IG9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuICAgIGlmIChrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIG9mZnNldC54ID0gLXNwZWVkO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgb2Zmc2V0LnggPSBzcGVlZDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIG9mZnNldC55ID0gLXNwZWVkO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBvZmZzZXQueSA9IHNwZWVkO1xuICAgIH1cblxuICAgIGhvc3QuYXBwbHlTdGF0ZShwcmV2aWV3SWQsIEltYWdlVHJhbnNmb3JtRW5naW5lLm1vdmVCeShwcmV2aWV3LnN0YXRlLCBvZmZzZXQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUxNzNcdTk1RURcdTYzMDdcdTVCOUFcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY2xvc2VQcmV2aWV3KHByZXZpZXdJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcnVudGltZSA9IHRoaXMucnVudGltZXMuZ2V0KHByZXZpZXdJZCk7XG4gICAgaWYgKCFydW50aW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcnVudGltZS5kZXRhY2hJbnB1dCgpO1xuICAgIHJ1bnRpbWUucmVzdG9yZUJvcmRlcj8uKCk7XG4gICAgcnVudGltZS5zdGF0ZU1hY2hpbmUuY2xvc2UoKTtcblxuICAgIHRoaXMuaG9zdHMuZ2V0KHJ1bnRpbWUuZG9jKT8uY2xvc2VQcmV2aWV3KHByZXZpZXdJZCk7XG4gICAgdGhpcy5ydW50aW1lcy5kZWxldGUocHJldmlld0lkKTtcblxuICAgIGNvbnN0IHF1ZXVlID0gdGhpcy5waW5RdWV1ZS5nZXQocnVudGltZS5kb2MpO1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgdGhpcy5waW5RdWV1ZS5zZXQoXG4gICAgICAgIHJ1bnRpbWUuZG9jLFxuICAgICAgICBxdWV1ZS5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gcHJldmlld0lkKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU1RjUzXHU1MjREXHU2NTg3XHU2ODYzXHU2MjQwXHU2NzA5XHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNsb3NlQWxsSW5Eb2MoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlkcyA9IEFycmF5LmZyb20odGhpcy5ydW50aW1lcy52YWx1ZXMoKSlcbiAgICAgIC5maWx0ZXIoKHJ1bnRpbWUpID0+IHJ1bnRpbWUuZG9jID09PSBkb2MpXG4gICAgICAubWFwKChydW50aW1lKSA9PiBydW50aW1lLmlkKTtcblxuICAgIGlkcy5mb3JFYWNoKChpZCkgPT4gdGhpcy5jbG9zZVByZXZpZXcoaWQpKTtcbiAgICB0aGlzLmhvc3RzLmdldChkb2MpPy5jbG9zZUFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE3M1x1OTVFRFx1NjI0MFx1NjcwOVx1NjU4N1x1Njg2M1x1NzY4NFx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICBBcnJheS5mcm9tKHRoaXMucnVudGltZXMua2V5cygpKS5mb3JFYWNoKChpZCkgPT4gdGhpcy5jbG9zZVByZXZpZXcoaWQpKTtcbiAgICB0aGlzLmhvc3RzLmZvckVhY2goKGhvc3QpID0+IGhvc3QuY2xvc2VBbGwoKSk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RkMwXHU2RDNCXHU2N0QwXHU0RTJBXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGFjdGl2YXRlUHJldmlldyhwcmV2aWV3SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJ1bnRpbWUgPSB0aGlzLnJ1bnRpbWVzLmdldChwcmV2aWV3SWQpO1xuICAgIGlmICghcnVudGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBob3N0ID0gdGhpcy5ob3N0cy5nZXQocnVudGltZS5kb2MpO1xuICAgIGhvc3Q/LnNldEFjdGl2ZShwcmV2aWV3SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpbiBcdTZBMjFcdTVGMEZcdTRFMEJcdTk2NTBcdTUyMzZcdTY3MDBcdTU5MjdcdTY1NzBcdTkxQ0ZcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZW5mb3JjZVBpbkxpbWl0KGRvYzogRG9jdW1lbnQsIGhvc3Q6IE92ZXJsYXlIb3N0LCBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MpOiBib29sZWFuIHtcbiAgICBpZiAoaG9zdC5zaXplKCkgPCBzZXR0aW5ncy5waW5NYXhpbXVtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXNldHRpbmdzLnBpbkNvdmVyTW9kZSkge1xuICAgICAgbmV3IE5vdGljZShgUGluIG1heGltdW0gaXMgJHtzZXR0aW5ncy5waW5NYXhpbXVtfS5gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWV1ZSA9IHRoaXMucGluUXVldWUuZ2V0KGRvYykgPz8gW107XG4gICAgY29uc3Qgb2xkZXN0ID0gcXVldWUuc2hpZnQoKTtcbiAgICBpZiAoIW9sZGVzdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMucGluUXVldWUuc2V0KGRvYywgcXVldWUpO1xuICAgIHRoaXMuY2xvc2VQcmV2aWV3KG9sZGVzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogXHU4QkIwXHU1RjU1IFBpbiBcdTZBMjFcdTVGMEZcdTYyNTNcdTVGMDBcdTk4N0FcdTVFOEZcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcHVzaFBpblF1ZXVlKGRvYzogRG9jdW1lbnQsIHByZXZpZXdJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcXVldWUgPSB0aGlzLnBpblF1ZXVlLmdldChkb2MpID8/IFtdO1xuICAgIHF1ZXVlLnB1c2gocHJldmlld0lkKTtcbiAgICB0aGlzLnBpblF1ZXVlLnNldChkb2MsIHF1ZXVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTYyMTZcdTgzQjdcdTUzRDZcdTVCQkZcdTRFM0JcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZ2V0T3JDcmVhdGVIb3N0KGRvYzogRG9jdW1lbnQpOiBPdmVybGF5SG9zdCB7XG4gICAgbGV0IGhvc3QgPSB0aGlzLmhvc3RzLmdldChkb2MpO1xuICAgIGlmICghaG9zdCkge1xuICAgICAgaG9zdCA9IG5ldyBPdmVybGF5SG9zdCh0aGlzLmFwcCwgZG9jKTtcbiAgICAgIHRoaXMuaG9zdHMuc2V0KGRvYywgaG9zdCk7XG4gICAgfVxuICAgIHJldHVybiBob3N0O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkUwNVx1NzQwNlx1NjVFMFx1NjU0OFx1NjU4N1x1Njg2M1x1NUJCRlx1NEUzQlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhbnVwRGlzY29ubmVjdGVkSG9zdHMoKTogdm9pZCB7XG4gICAgY29uc3QgZGlzY29ubmVjdGVkOiBEb2N1bWVudFtdID0gW107XG4gICAgdGhpcy5ob3N0cy5mb3JFYWNoKChfaG9zdCwgZG9jKSA9PiB7XG4gICAgICBpZiAoIWRvYy5kZWZhdWx0VmlldyB8fCBkb2MuZGVmYXVsdFZpZXcuY2xvc2VkKSB7XG4gICAgICAgIGRpc2Nvbm5lY3RlZC5wdXNoKGRvYyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaXNjb25uZWN0ZWQuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlQWxsSW5Eb2MoZG9jKTtcbiAgICAgIHRoaXMuaG9zdHMuZ2V0KGRvYyk/LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuaG9zdHMuZGVsZXRlKGRvYyk7XG4gICAgICB0aGlzLnBpblF1ZXVlLmRlbGV0ZShkb2MpO1xuICAgICAgdGhpcy5ib3VuZERvY3MuZGVsZXRlKGRvYyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MjI0XHU2NUFEXHU4MjgyXHU3MEI5XHU2NjJGXHU1NDI2XHU2RUUxXHU4REIzXHU4OUU2XHU1M0QxXHU4OUM0XHU1MjE5XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGlzVGFyZ2V0SW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBpZiAoaW1hZ2UuY2xvc2VzdChcIi5vaXAtb3ZlcmxheS1yb290XCIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBzY29wZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgc2NvcGVNYXRjaGVzID0gaW1hZ2UubWF0Y2hlcyh0aGlzLnNlbGVjdG9yKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltJbWFnZXMgUHJldmlld10gSW52YWxpZCBzZWxlY3RvcjpcIiwgdGhpcy5zZWxlY3RvciwgZXJyb3IpO1xuICAgICAgc2NvcGVNYXRjaGVzID0gaW1hZ2UubWF0Y2hlcyhcImltZ1wiKTtcbiAgICB9XG4gICAgaWYgKCFzY29wZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzcmMgPSBpbWFnZS5jdXJyZW50U3JjIHx8IGltYWdlLnNyYztcbiAgICByZXR1cm4gQm9vbGVhbihzcmMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NEVDRVx1OUYyMFx1NjgwN1x1NEU4Qlx1NEVGNlx1NEUyRFx1ODlFM1x1Njc5MFx1NzZFRVx1NjgwN1x1NTZGRVx1NzI0N1x1MzAwMlxuICAgKiBcdTRGMThcdTUxNDhcdThENzAgdGFyZ2V0L2NvbXBvc2VkUGF0aFx1RkYwQ1x1NjcwMFx1NTQwRVx1NTZERVx1OTAwMFx1NTIzMCBlbGVtZW50RnJvbVBvaW50XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVJbWFnZUZyb21Nb3VzZUV2ZW50KGRvYzogRG9jdW1lbnQsIGV2ZW50OiBNb3VzZUV2ZW50KTogSFRNTEltYWdlRWxlbWVudCB8IG51bGwge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdChcImltZ1wiKTtcbiAgICAgIGlmIChjbG9zZXN0IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGV2ZW50LmNvbXBvc2VkUGF0aCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkge1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IGRvYy5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGlmIChoaXQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH1cbiAgICBpZiAoaGl0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY29uc3QgY2xvc2VzdCA9IGhpdC5jbG9zZXN0KFwiaW1nXCIpO1xuICAgICAgaWYgKGNsb3Nlc3QgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBjbG9zZXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIyNFx1NjVBRFx1NEU4Qlx1NEVGNlx1NjYyRlx1NTQyNlx1NkVFMVx1OERCM1x1NEZFRVx1OTk3MFx1OTUyRVx1Njc2MVx1NEVGNlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBtYXRjaE1vZGlmaWVyKGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgbW9kaWZpZXI6IEhvdGtleU1vZGlmaWVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY3RybCA9IGV2ZW50LmN0cmxLZXkgfHwgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLm1ldGFLZXk7XG4gICAgY29uc3QgYWx0ID0gZXZlbnQuYWx0S2V5O1xuICAgIGNvbnN0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXk7XG5cbiAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLk5vbmU6XG4gICAgICAgIHJldHVybiAhY3RybCAmJiAhYWx0ICYmICFzaGlmdDtcbiAgICAgIGNhc2UgSG90a2V5TW9kaWZpZXIuQ3RybDpcbiAgICAgICAgcmV0dXJuIGN0cmwgJiYgIWFsdCAmJiAhc2hpZnQ7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLkFsdDpcbiAgICAgICAgcmV0dXJuICFjdHJsICYmIGFsdCAmJiAhc2hpZnQ7XG4gICAgICBjYXNlIEhvdGtleU1vZGlmaWVyLlNoaWZ0OlxuICAgICAgICByZXR1cm4gIWN0cmwgJiYgIWFsdCAmJiBzaGlmdDtcbiAgICAgIGNhc2UgSG90a2V5TW9kaWZpZXIuQ3RybEFsdDpcbiAgICAgICAgcmV0dXJuIGN0cmwgJiYgYWx0ICYmICFzaGlmdDtcbiAgICAgIGNhc2UgSG90a2V5TW9kaWZpZXIuQ3RybFNoaWZ0OlxuICAgICAgICByZXR1cm4gY3RybCAmJiAhYWx0ICYmIHNoaWZ0O1xuICAgICAgY2FzZSBIb3RrZXlNb2RpZmllci5TaGlmdEFsdDpcbiAgICAgICAgcmV0dXJuICFjdHJsICYmIGFsdCAmJiBzaGlmdDtcbiAgICAgIGNhc2UgSG90a2V5TW9kaWZpZXIuQ3RybFNoaWZ0QWx0OlxuICAgICAgICByZXR1cm4gY3RybCAmJiBhbHQgJiYgc2hpZnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFx1NEUzQVx1N0YyOVx1NjUzRVx1NjMwOVx1OTRBRVx1OEZENFx1NTZERVx1NEUyRFx1NUZDM1x1OTUxQVx1NzBCOVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDZW50ZXJBbmNob3Ioc3RhdGU6IFRyYW5zZm9ybVN0YXRlKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogc3RhdGUubGVmdCArIHN0YXRlLndpZHRoIC8gMixcbiAgICAgIHk6IHN0YXRlLnRvcCArIHN0YXRlLmhlaWdodCAvIDJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJGQlx1NTNENlx1NUY1M1x1NTI0RFx1ODlDNlx1NTNFM1x1NUMzQVx1NUJGOFx1NUU3Nlx1NEZERFx1OEJDMVx1NjcwMFx1NUMwRlx1NTAzQ1x1RkYwQ1x1OTA3Rlx1NTE0RFx1NUYwMlx1NUUzOFx1N0E5N1x1NTNFM1x1NUMzQVx1NUJGOFx1NUJGQ1x1ODFGNFx1OEJBMVx1N0I5N1x1OTUxOVx1OEJFRlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRWaWV3cG9ydFNpemUoZG9jOiBEb2N1bWVudCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gICAgY29uc3Qgd2lkdGggPSBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvYy5ib2R5LmNsaWVudFdpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoIHx8IDE7XG4gICAgY29uc3QgaGVpZ2h0ID0gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jLmJvZHkuY2xpZW50SGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogTWF0aC5tYXgoMSwgd2lkdGgpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBoZWlnaHQpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCQTFcdTdCOTdcdTVGNTNcdTUyNERcdTk4ODRcdTg5QzhcdTk3MDBcdTg5ODFcdTk4ODRcdTc1NTlcdTc2ODRcdTVFOTVcdTkwRThcdTlBRDhcdTVFQTZcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZ2V0Qm90dG9tUmVzZXJ2ZWRIZWlnaHQocHJldmlldzogTW91bnRlZFByZXZpZXcsIGFsbEl0ZW1Db3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocHJldmlldy5zaGVsbEVsLmNsYXNzTGlzdC5jb250YWlucyhcIm9pcC1waW4tc2hlbGxcIikpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0dhbGxlcnkgPSB0aGlzLmdldFNldHRpbmdzKCkuZ2FsbGVyeS5lbmFibGVkICYmIGFsbEl0ZW1Db3VudCA+IDE7XG4gICAgcmV0dXJuIGhhc0dhbGxlcnlcbiAgICAgID8gUHJldmlld0NvbnRyb2xsZXIuTk9STUFMX0JPVFRPTV9SRVNFUlZFX1dJVEhfR0FMTEVSWVxuICAgICAgOiBQcmV2aWV3Q29udHJvbGxlci5OT1JNQUxfQk9UVE9NX1JFU0VSVkU7XG4gIH1cblxuICAvKipcbiAgICogXHU2QzQ3XHU2MDNCXHU1RTAzXHU1QzQwXHU4QkExXHU3Qjk3XHU5NzAwXHU4OTgxXHU3Njg0XHU4OUM2XHU1M0UzXHU0RkUxXHU2MDZGXHVGRjBDXHU0RjlCXHU1MjFEXHU1OUNCXHU5MDAyXHU5MTREXHU0RTBFIGZpdC8xOjEgXHU1MTcxXHU3NTI4XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGdldExheW91dFZpZXdwb3J0KFxuICAgIHByZXZpZXc6IE1vdW50ZWRQcmV2aWV3LFxuICAgIGRvYzogRG9jdW1lbnQsXG4gICAgYWxsSXRlbUNvdW50OiBudW1iZXJcbiAgKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgcmVzZXJ2ZWRCb3R0b206IG51bWJlciB9IHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnRTaXplKGRvYyk7XG4gICAgY29uc3QgcmVzZXJ2ZWRCb3R0b20gPSB0aGlzLmdldEJvdHRvbVJlc2VydmVkSGVpZ2h0KHByZXZpZXcsIGFsbEl0ZW1Db3VudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB2aWV3cG9ydC53aWR0aCxcbiAgICAgIGhlaWdodDogdmlld3BvcnQuaGVpZ2h0LFxuICAgICAgcmVzZXJ2ZWRCb3R0b21cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTkwRFx1NTIzNlx1NTZGRVx1NzI0N1x1NTQwRFx1NzlGMFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjb3B5SW1hZ2VOYW1lKHJhd05hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGltYWdlTmFtZSA9IHJhd05hbWUudHJpbSgpO1xuICAgIGlmICghaW1hZ2VOYW1lKSB7XG4gICAgICBuZXcgTm90aWNlKHQoXCJub3RpY2UuY29weU5hbWVGYWlsZWRcIiwgdGhpcy5hcHApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb3BpZWQgPSBhd2FpdCB0aGlzLmNsaXBib2FyZFNlcnZpY2UuY29weVBsYWluVGV4dChpbWFnZU5hbWUpO1xuICAgIG5ldyBOb3RpY2UodChjb3BpZWQgPyBcIm5vdGljZS5jb3B5TmFtZVN1Y2Nlc3NcIiA6IFwibm90aWNlLmNvcHlOYW1lRmFpbGVkXCIsIHRoaXMuYXBwKSk7XG4gIH1cblxuICAvKipcbiAgICogXHU3QjQ5XHU1Rjg1XHU1NkZFXHU3MjQ3XHU1MkEwXHU4RjdEXHU1QjhDXHU2MjEwXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHdhaXRGb3JJbWFnZUxvYWQoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoaW1hZ2UuY29tcGxldGUgJiYgaW1hZ2UubmF0dXJhbFdpZHRoID4gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGRvbmUgPSAocmVzdWx0OiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZCk7XG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb25Mb2FkID0gKCk6IHZvaWQgPT4gZG9uZSh0cnVlKTtcbiAgICAgIGNvbnN0IG9uRXJyb3IgPSAoKTogdm9pZCA9PiBkb25lKGZhbHNlKTtcblxuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25Mb2FkKTtcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZG9uZShmYWxzZSksIDUwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1N0VEOVx1NTM5Rlx1NTZGRVx1NTJBMFx1OEZCOVx1Njg0Nlx1OUFEOFx1NEVBRVx1RkYwQ1x1NUU3Nlx1OEZENFx1NTZERVx1NjA2Mlx1NTkwRFx1NTFGRFx1NjU3MFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseVNvdXJjZUltYWdlQm9yZGVyKHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICBpZiAoIXNldHRpbmdzLmltYWdlQm9yZGVyRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IHNvdXJjZUltYWdlLnN0eWxlO1xuICAgIGNvbnN0IHByZXYgPSB7XG4gICAgICB3aWR0aDogc3R5bGUuYm9yZGVyV2lkdGgsXG4gICAgICBzdHlsZTogc3R5bGUuYm9yZGVyU3R5bGUsXG4gICAgICBjb2xvcjogc3R5bGUuYm9yZGVyQ29sb3JcbiAgICB9O1xuXG4gICAgc3R5bGUuYm9yZGVyV2lkdGggPSBzZXR0aW5ncy5pbWFnZUJvcmRlcldpZHRoO1xuICAgIHN0eWxlLmJvcmRlclN0eWxlID0gc2V0dGluZ3MuaW1hZ2VCb3JkZXJTdHlsZTtcbiAgICBzdHlsZS5ib3JkZXJDb2xvciA9IHNldHRpbmdzLmltYWdlQm9yZGVyQ29sb3I7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3R5bGUuYm9yZGVyV2lkdGggPSBwcmV2LndpZHRoO1xuICAgICAgc3R5bGUuYm9yZGVyU3R5bGUgPSBwcmV2LnN0eWxlO1xuICAgICAgc3R5bGUuYm9yZGVyQ29sb3IgPSBwcmV2LmNvbG9yO1xuICAgIH07XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IElucHV0Q2FsbGJhY2tzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbi8qKlxuICogXHU4RjkzXHU1MTY1XHU5MDAyXHU5MTREXHU1QzQyXHVGRjFBXHU2MjhBXHU5RjIwXHU2ODA3L1x1ODlFNlx1NjQ3OFx1NEU4Qlx1NEVGNlx1N0VERlx1NEUwMFx1NjYyMFx1NUMwNFx1NEUzQVx1NjNBN1x1NTIzNlx1NUM0Mlx1NTZERVx1OEMwM1x1MzAwMlxuICovXG5leHBvcnQgY2xhc3MgSW5wdXRBZGFwdGVyIHtcbiAgLy8gMTIwcHggXHU4RkQxXHU0RjNDXHU0RTAwXHU2QjIxXHU0RjIwXHU3RURGXHU2RURBXHU4RjZFXHU1MjNCXHU1RUE2XHVGRjFCXHU3NTI4XHU0RThFXHU2MjhBXHU0RTBEXHU1NDBDXHU4QkJFXHU1OTA3XHU4RjkzXHU1MTY1XHU3RURGXHU0RTAwXHU1MjMwXHU1NDBDXHU0RTAwXHU1QzNBXHU1RUE2XHUzMDAyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdIRUVMX1NURVBfUElYRUxTID0gMTIwO1xuICAvLyBcdThGN0JcdTVGQUVcdTYzRDBcdTlBRDhcdTUzNTVcdTZCNjVcdTRFMEFcdTk2NTBcdUZGMENcdTk2MzJcdTZCNjJcdTg5RTZcdTYzQTdcdTY3N0ZcdTYyMTZcdTYwRUZcdTYwMjdcdTZFREFcdTUyQThcdTUxRkFcdTczQjBcdTdBODFcdTUxNDBcdThERjNcdTUzRDhcdTMwMDJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0hFRUxfTUFYX1NURVAgPSAxLjI1O1xuICAvLyBcdTRGMjBcdTdFREZcdTZFREFcdThGNkVcdTRFMDBcdTZCNjVcdTVCRjlcdTVFOTRcdTdFQTYgMTIlIFx1N0YyOVx1NjUzRVx1RkYwQ1x1NEZERFx1NzU1OVx1OUYyMFx1NjgwN1x1NkVEQVx1OEY2RVx1NjI0Qlx1NjExRlx1MzAwMlxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXSEVFTF9CQVNFX0ZBQ1RPUiA9IDEuMTI7XG4gIC8vIFx1ODg0Q1x1NkEyMVx1NUYwRlx1OEY2Q1x1NTBDRlx1N0QyMFx1NzY4NFx1N0VDRlx1OUE4Q1x1NTAzQ1x1RkYwQ1x1NEZCRlx1NEU4RVx1NTE3Q1x1NUJCOVx1NEUwRFx1NTQwQ1x1NkQ0Rlx1ODlDOFx1NTY2OFx1NzY4NCBkZWx0YU1vZGVcdTMwMDJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0hFRUxfTElORV9IRUlHSFRfUElYRUxTID0gMTY7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkb2M6IERvY3VtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrczogSW5wdXRDYWxsYmFja3M7XG5cbiAgcHJpdmF0ZSBkcmFnZ2luZyA9IGZhbHNlO1xuICBwcml2YXRlIHBpbmNoRGlzdGFuY2UgPSAwO1xuICBwcml2YXRlIGxhc3RUYXBBdCA9IDA7XG4gIHByaXZhdGUgbG9uZ1ByZXNzVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdThGOTNcdTUxNjVcdTkwMDJcdTkxNERcdTVDNDJcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRvYzogRG9jdW1lbnQsIGNhbGxiYWNrczogSW5wdXRDYWxsYmFja3MpIHtcbiAgICB0aGlzLmRvYyA9IGRvYztcbiAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFRDFcdTVCOUFcdTUyMzBcdTU2RkVcdTcyNDdcdTUxNDNcdTdEMjBcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBiaW5kKGltYWdlRWw6IEhUTUxJbWFnZUVsZW1lbnQpOiAoKSA9PiB2b2lkIHtcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25Gb2N1cygpO1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbkRyYWdTdGFydChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25EcmFnTW92ZShldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25Nb3VzZVVwID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRHJhZ0VuZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbldoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25Gb2N1cygpO1xuICAgICAgY29uc3QgZmFjdG9yID0gdGhpcy5jb21wdXRlV2hlZWxab29tRmFjdG9yKGV2ZW50KTtcbiAgICAgIGlmIChNYXRoLmFicyhmYWN0b3IgLSAxKSA8IDAuMDAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uV2hlZWxab29tKGZhY3RvciwgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRG91YmxlQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrcy5vbkRvdWJsZVRhcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNvbnRleHRNZW51ID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25Mb25nUHJlc3NNZW51KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblRvdWNoU3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRm9jdXMoKTtcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRHJhZ1N0YXJ0KHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgICAgICB0aGlzLnByZXBhcmVMb25nUHJlc3ModG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gICAgICAgIHRoaXMuZGV0ZWN0RG91YmxlVGFwKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLmNsZWFyTG9uZ1ByZXNzKCk7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5waW5jaERpc3RhbmNlID0gdGhpcy5tZWFzdXJlVG91Y2hEaXN0YW5jZShldmVudC50b3VjaGVzWzBdLCBldmVudC50b3VjaGVzWzFdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25Ub3VjaE1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBbZmlyc3QsIHNlY29uZF0gPSBbZXZlbnQudG91Y2hlc1swXSwgZXZlbnQudG91Y2hlc1sxXV07XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5tZWFzdXJlVG91Y2hEaXN0YW5jZShmaXJzdCwgc2Vjb25kKTtcbiAgICAgICAgaWYgKHRoaXMucGluY2hEaXN0YW5jZSA+IDApIHtcbiAgICAgICAgICBjb25zdCByYXRpbyA9IGRpc3RhbmNlIC8gdGhpcy5waW5jaERpc3RhbmNlO1xuICAgICAgICAgIGNvbnN0IGFuY2hvclggPSAoZmlyc3QuY2xpZW50WCArIHNlY29uZC5jbGllbnRYKSAvIDI7XG4gICAgICAgICAgY29uc3QgYW5jaG9yWSA9IChmaXJzdC5jbGllbnRZICsgc2Vjb25kLmNsaWVudFkpIC8gMjtcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblBpbmNoWm9vbShyYXRpbywgYW5jaG9yWCwgYW5jaG9yWSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waW5jaERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbGVhckxvbmdQcmVzcygpO1xuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRHJhZ01vdmUodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uVG91Y2hFbmQgPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLmNsZWFyTG9uZ1ByZXNzKCk7XG4gICAgICB0aGlzLnBpbmNoRGlzdGFuY2UgPSAwO1xuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkRyYWdFbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG9uTW91c2VEb3duKTtcbiAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIG9uRG91YmxlQ2xpY2spO1xuICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIG9uQ29udGV4dE1lbnUpO1xuICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Ub3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgaW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG9uVG91Y2hFbmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBvblRvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICB0aGlzLmRvYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICB0aGlzLmRvYy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJMb25nUHJlc3MoKTtcbiAgICAgIGltYWdlRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gICAgICBpbWFnZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsKTtcbiAgICAgIGltYWdlRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIG9uRG91YmxlQ2xpY2spO1xuICAgICAgaW1hZ2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgb25Db250ZXh0TWVudSk7XG4gICAgICBpbWFnZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG9uVG91Y2hTdGFydCk7XG4gICAgICBpbWFnZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Ub3VjaE1vdmUpO1xuICAgICAgaW1hZ2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgb25Ub3VjaEVuZCk7XG4gICAgICBpbWFnZUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBvblRvdWNoRW5kKTtcbiAgICAgIHRoaXMuZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgdGhpcy5kb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Nb3VzZVVwKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJDNlx1NTIyQlx1NTNDQ1x1NTFGQi9cdTUzQ0NcdTUxRkJcdTg5RTZcdTYzQTdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZGV0ZWN0RG91YmxlVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKG5vdyAtIHRoaXMubGFzdFRhcEF0IDw9IDI2MCkge1xuICAgICAgdGhpcy5jYWxsYmFja3Mub25Eb3VibGVUYXAoKTtcbiAgICB9XG4gICAgdGhpcy5sYXN0VGFwQXQgPSBub3c7XG4gIH1cblxuICAvKipcbiAgICogXHU1MUM2XHU1OTA3XHU5NTdGXHU2MzA5XHU4M0RDXHU1MzU1XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVMb25nUHJlc3MoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyTG9uZ1ByZXNzKCk7XG4gICAgdGhpcy5sb25nUHJlc3NUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTG9uZ1ByZXNzTWVudShjbGllbnRYLCBjbGllbnRZKTtcbiAgICB9LCA0NTApO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkUwNVx1NzQwNlx1OTU3Rlx1NjMwOVx1OEJBMVx1NjVGNlx1NTY2OFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhckxvbmdQcmVzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb25nUHJlc3NUaW1lciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzVGltZXIpO1xuICAgIHRoaXMubG9uZ1ByZXNzVGltZXIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJBMVx1N0I5N1x1NTNDQ1x1NjMwN1x1OERERFx1NzlCQlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBtZWFzdXJlVG91Y2hEaXN0YW5jZShmaXJzdDogVG91Y2gsIHNlY29uZDogVG91Y2gpOiBudW1iZXIge1xuICAgIGNvbnN0IGR4ID0gZmlyc3QuY2xpZW50WCAtIHNlY29uZC5jbGllbnRYO1xuICAgIGNvbnN0IGR5ID0gZmlyc3QuY2xpZW50WSAtIHNlY29uZC5jbGllbnRZO1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJBMVx1N0I5N1x1NkVEQVx1OEY2RVx1N0YyOVx1NjUzRVx1NTAwRFx1NzM4N1x1MzAwMlxuICAgKiBcdThCRjRcdTY2MEVcdUZGMUFcdTUxNDhcdTYyOEEgZGVsdGEgXHU3RURGXHU0RTAwXHU2MjEwXHU1MENGXHU3RDIwXHVGRjBDXHU1MThEXHU5NjUwXHU1MjM2XHU1MzU1XHU2QjIxXHU4RjkzXHU1MTY1XHU1RTQ1XHU1RUE2XHVGRjBDXHU2NzAwXHU1NDBFXHU2NjIwXHU1QzA0XHU0RTNBXHU1RTczXHU2RUQxXHU1MDBEXHU3Mzg3XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVXaGVlbFpvb21GYWN0b3IoZXZlbnQ6IFdoZWVsRXZlbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IHBpeGVsRGVsdGFZID0gdGhpcy5ub3JtYWxpemVXaGVlbERlbHRhWShldmVudCk7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUocGl4ZWxEZWx0YVkpIHx8IHBpeGVsRGVsdGFZID09PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBjb25zdCBub3JtYWxpemVkU3RlcCA9IHRoaXMuY2xhbXAoXG4gICAgICBwaXhlbERlbHRhWSAvIElucHV0QWRhcHRlci5XSEVFTF9TVEVQX1BJWEVMUyxcbiAgICAgIC1JbnB1dEFkYXB0ZXIuV0hFRUxfTUFYX1NURVAsXG4gICAgICBJbnB1dEFkYXB0ZXIuV0hFRUxfTUFYX1NURVBcbiAgICApO1xuXG4gICAgcmV0dXJuIE1hdGgucG93KElucHV0QWRhcHRlci5XSEVFTF9CQVNFX0ZBQ1RPUiwgLW5vcm1hbGl6ZWRTdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYyOEFcdTRFMERcdTU0MEMgZGVsdGFNb2RlIFx1N0VERlx1NEUwMFx1NjM2Mlx1N0I5N1x1NjIxMFx1NTBDRlx1N0QyMFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVXaGVlbERlbHRhWShldmVudDogV2hlZWxFdmVudCk6IG51bWJlciB7XG4gICAgaWYgKGV2ZW50LmRlbHRhTW9kZSA9PT0gV2hlZWxFdmVudC5ET01fREVMVEFfTElORSkge1xuICAgICAgcmV0dXJuIGV2ZW50LmRlbHRhWSAqIElucHV0QWRhcHRlci5XSEVFTF9MSU5FX0hFSUdIVF9QSVhFTFM7XG4gICAgfVxuICAgIGlmIChldmVudC5kZWx0YU1vZGUgPT09IFdoZWVsRXZlbnQuRE9NX0RFTFRBX1BBR0UpIHtcbiAgICAgIGNvbnN0IHBhZ2VIZWlnaHQgPVxuICAgICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHRoaXMuZG9jLmJvZHk/LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgODAwO1xuICAgICAgcmV0dXJuIGV2ZW50LmRlbHRhWSAqIHBhZ2VIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudC5kZWx0YVk7XG4gIH1cblxuICAvKipcbiAgICogXHU2NTcwXHU1MDNDXHU5NjUwXHU1RTQ1XHVGRjBDXHU5MDdGXHU1MTREXHU1MzU1XHU2QjIxXHU3RjI5XHU2NTNFXHU4REYzXHU1M0Q4XHU4RkM3XHU1OTI3XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBPZmZzZXQsIFRyYW5zZm9ybVN0YXRlLCBab29tQW5jaG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbi8qKlxuICogXHU1NkZFXHU3MjQ3XHU1M0Q4XHU2MzYyXHU1RjE1XHU2NENFXHUzMDAyXG4gKiBcdTdFQUZcdTUxRkRcdTY1NzBcdTVGMEZcdThGRDRcdTU2REVcdTY1QjBcdTcyQjZcdTYwMDFcdUZGMENcdTkwN0ZcdTUxNEQgVUkgXHU1QzQyXHU3NkY0XHU2M0E1XHU1MTk5XHU1MTY1XHU3MkI2XHU2MDAxXHU1QkZDXHU4MUY0XHU3QURFXHU2MDAxXHUzMDAyXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVRyYW5zZm9ybUVuZ2luZSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1JTl9TSVpFID0gMzA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9SQVRJTyA9IDIwO1xuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTUyMURcdTU5Q0JcdTcyQjZcdTYwMDFcdTVFNzZcdTYzMDlcdTg5QzZcdTUzRTNcdTUwNUFcdTgxRUFcdTkwMDJcdTVFOTRcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlSW5pdGlhbFN0YXRlKFxuICAgIG5hdHVyYWxXaWR0aDogbnVtYmVyLFxuICAgIG5hdHVyYWxIZWlnaHQ6IG51bWJlcixcbiAgICB2aWV3cG9ydFdpZHRoOiBudW1iZXIsXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcixcbiAgICByZXNlcnZlZEJvdHRvbSA9IDBcbiAgKTogVHJhbnNmb3JtU3RhdGUge1xuICAgIGNvbnN0IHNhZmVOYXR1cmFsV2lkdGggPSBNYXRoLm1heCgxLCBuYXR1cmFsV2lkdGgpO1xuICAgIGNvbnN0IHNhZmVOYXR1cmFsSGVpZ2h0ID0gTWF0aC5tYXgoMSwgbmF0dXJhbEhlaWdodCk7XG4gICAgY29uc3Qgc2FmZVZpZXdwb3J0V2lkdGggPSBNYXRoLm1heCgxLCB2aWV3cG9ydFdpZHRoKTtcbiAgICBjb25zdCBzYWZlVmlld3BvcnRIZWlnaHQgPSBNYXRoLm1heCgxLCB2aWV3cG9ydEhlaWdodCk7XG5cbiAgICAvLyBcdTk4ODRcdTc1NTlcdTVFOTVcdTkwRThcdTU2RkFcdTVCOUEgVUkgXHU3QTdBXHU5NUY0XHVGRjBDXHU5MDdGXHU1MTREXHU5QUQ4XHU5NTdGXHU1NkZFXHU2NUY2XHU1NDBEXHU3OUYwXHU4OEFCXHU1RTk1XHU2ODBGXHU5MDZFXHU2MzIxXHUzMDAyXG4gICAgY29uc3Qgc2FmZVJlc2VydmVkQm90dG9tID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocmVzZXJ2ZWRCb3R0b20sIHNhZmVWaWV3cG9ydEhlaWdodCAtIDEpKTtcbiAgICBjb25zdCBhdmFpbGFibGVIZWlnaHQgPSBNYXRoLm1heCgxLCBzYWZlVmlld3BvcnRIZWlnaHQgLSBzYWZlUmVzZXJ2ZWRCb3R0b20pO1xuXG4gICAgLy8gXHU5OTk2XHU1QzRGXHU5RUQ4XHU4QkE0XHU0RjdGXHU3NTI4IDgwJSBcdTUzRUZcdTg5QzZcdTUzM0FcdTU3REZcdUZGMENcdTkwN0ZcdTUxNERcdTkwNkVcdTYzMjFcdThGQzdcdTZFRTFcdTMwMDJcbiAgICBjb25zdCBtYXhXaWR0aCA9IHNhZmVWaWV3cG9ydFdpZHRoICogMC44O1xuICAgIGNvbnN0IG1heEhlaWdodCA9IGF2YWlsYWJsZUhlaWdodCAqIDAuODtcbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKG1heFdpZHRoIC8gc2FmZU5hdHVyYWxXaWR0aCwgbWF4SGVpZ2h0IC8gc2FmZU5hdHVyYWxIZWlnaHQsIDEpO1xuXG4gICAgY29uc3Qgd2lkdGggPSBzYWZlTmF0dXJhbFdpZHRoICogcmF0aW87XG4gICAgY29uc3QgaGVpZ2h0ID0gc2FmZU5hdHVyYWxIZWlnaHQgKiByYXRpbztcblxuICAgIHJldHVybiB7XG4gICAgICBuYXR1cmFsV2lkdGg6IHNhZmVOYXR1cmFsV2lkdGgsXG4gICAgICBuYXR1cmFsSGVpZ2h0OiBzYWZlTmF0dXJhbEhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbGVmdDogKHNhZmVWaWV3cG9ydFdpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgIHRvcDogKGF2YWlsYWJsZUhlaWdodCAtIGhlaWdodCkgLyAyLFxuICAgICAgem9vbVJhdGlvOiB3aWR0aCAvIHNhZmVOYXR1cmFsV2lkdGhcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjMwOVx1ODlDNlx1NTNFM1x1OTFDRFx1NjVCMFx1OEJBMVx1N0I5NyBmaXRcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZml0VG9WaWV3cG9ydChcbiAgICBjdXJyZW50OiBUcmFuc2Zvcm1TdGF0ZSxcbiAgICB2aWV3cG9ydFdpZHRoOiBudW1iZXIsXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcixcbiAgICByZXNlcnZlZEJvdHRvbSA9IDBcbiAgKTogVHJhbnNmb3JtU3RhdGUge1xuICAgIGNvbnN0IGZpdHRlZCA9IHRoaXMuY3JlYXRlSW5pdGlhbFN0YXRlKFxuICAgICAgY3VycmVudC5uYXR1cmFsV2lkdGgsXG4gICAgICBjdXJyZW50Lm5hdHVyYWxIZWlnaHQsXG4gICAgICB2aWV3cG9ydFdpZHRoLFxuICAgICAgdmlld3BvcnRIZWlnaHQsXG4gICAgICByZXNlcnZlZEJvdHRvbVxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICB3aWR0aDogZml0dGVkLndpZHRoLFxuICAgICAgaGVpZ2h0OiBmaXR0ZWQuaGVpZ2h0LFxuICAgICAgbGVmdDogZml0dGVkLmxlZnQsXG4gICAgICB0b3A6IGZpdHRlZC50b3AsXG4gICAgICB6b29tUmF0aW86IGZpdHRlZC56b29tUmF0aW9cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1N0YyOVx1NjUzRVx1NTIzMCAxMDAlXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHpvb21Ub0FjdHVhbChcbiAgICBjdXJyZW50OiBUcmFuc2Zvcm1TdGF0ZSxcbiAgICB2aWV3cG9ydFdpZHRoOiBudW1iZXIsXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcixcbiAgICByZXNlcnZlZEJvdHRvbSA9IDBcbiAgKTogVHJhbnNmb3JtU3RhdGUge1xuICAgIGNvbnN0IHNhZmVWaWV3cG9ydEhlaWdodCA9IE1hdGgubWF4KDEsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICBjb25zdCBzYWZlUmVzZXJ2ZWRCb3R0b20gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihyZXNlcnZlZEJvdHRvbSwgc2FmZVZpZXdwb3J0SGVpZ2h0IC0gMSkpO1xuICAgIGNvbnN0IGF2YWlsYWJsZUhlaWdodCA9IE1hdGgubWF4KDEsIHNhZmVWaWV3cG9ydEhlaWdodCAtIHNhZmVSZXNlcnZlZEJvdHRvbSk7XG4gICAgY29uc3Qgd2lkdGggPSBjdXJyZW50Lm5hdHVyYWxXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBjdXJyZW50Lm5hdHVyYWxIZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGxlZnQ6ICh2aWV3cG9ydFdpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgIHRvcDogKGF2YWlsYWJsZUhlaWdodCAtIGhlaWdodCkgLyAyLFxuICAgICAgem9vbVJhdGlvOiAxXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYzMDlcdTk1MUFcdTcwQjlcdTdGMjlcdTY1M0VcdUZGMENcdTRGRERcdThCQzFcdTk1MUFcdTcwQjlcdTg5QzZcdTg5QzlcdTRGNERcdTdGNkVcdTdBMzNcdTVCOUFcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgem9vbUF0KFxuICAgIGN1cnJlbnQ6IFRyYW5zZm9ybVN0YXRlLFxuICAgIHNjYWxlRmFjdG9yOiBudW1iZXIsXG4gICAgYW5jaG9yOiBab29tQW5jaG9yXG4gICk6IFRyYW5zZm9ybVN0YXRlIHtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShzY2FsZUZhY3RvcikgfHwgc2NhbGVGYWN0b3IgPD0gMCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFdpZHRoID0gdGhpcy5jbGFtcFNpemUoY3VycmVudC53aWR0aCAqIHNjYWxlRmFjdG9yLCBjdXJyZW50Lm5hdHVyYWxXaWR0aCk7XG4gICAgY29uc3QgbmV4dEhlaWdodCA9IChuZXh0V2lkdGggLyBjdXJyZW50Lm5hdHVyYWxXaWR0aCkgKiBjdXJyZW50Lm5hdHVyYWxIZWlnaHQ7XG5cbiAgICAvLyBcdTY4MzhcdTVGQzNcdTRGRUVcdTZCNjNcdUZGMUFcdTYzMDlcdTk1MUFcdTcwQjlcdTUzQ0RcdTYzQTggbGVmdC90b3BcdUZGMENcdTkwN0ZcdTUxNERcdThGREVcdTdFRURcdTdGMjlcdTY1M0VcdTZGMDJcdTc5RkJcdTMwMDJcbiAgICBjb25zdCByYXRpb1ggPSAoYW5jaG9yLnggLSBjdXJyZW50LmxlZnQpIC8gY3VycmVudC53aWR0aDtcbiAgICBjb25zdCByYXRpb1kgPSAoYW5jaG9yLnkgLSBjdXJyZW50LnRvcCkgLyBjdXJyZW50LmhlaWdodDtcbiAgICBjb25zdCBsZWZ0ID0gYW5jaG9yLnggLSByYXRpb1ggKiBuZXh0V2lkdGg7XG4gICAgY29uc3QgdG9wID0gYW5jaG9yLnkgLSByYXRpb1kgKiBuZXh0SGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmN1cnJlbnQsXG4gICAgICB3aWR0aDogbmV4dFdpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXh0SGVpZ2h0LFxuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHpvb21SYXRpbzogbmV4dFdpZHRoIC8gY3VycmVudC5uYXR1cmFsV2lkdGhcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjgzOVx1NjM2RVx1NTA0Rlx1NzlGQlx1OTFDRlx1NzlGQlx1NTJBOFx1NTZGRVx1NzI0N1x1MzAwMlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtb3ZlQnkoY3VycmVudDogVHJhbnNmb3JtU3RhdGUsIG9mZnNldDogT2Zmc2V0KTogVHJhbnNmb3JtU3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgbGVmdDogY3VycmVudC5sZWZ0ICsgb2Zmc2V0LngsXG4gICAgICB0b3A6IGN1cnJlbnQudG9wICsgb2Zmc2V0LnlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OTY1MFx1NTIzNlx1NjcwMFx1NUMwRlx1NUMzQVx1NUJGOFx1NEUwRVx1NjcwMFx1NTkyN1x1NTAwRFx1NzM4N1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2xhbXBTaXplKG5leHQ6IG51bWJlciwgbmF0dXJhbFdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5NSU5fU0laRTtcbiAgICBjb25zdCBtYXhXaWR0aCA9IG5hdHVyYWxXaWR0aCAqIHRoaXMuTUFYX1JBVElPO1xuICAgIHJldHVybiBNYXRoLm1heChtaW5XaWR0aCwgTWF0aC5taW4obWF4V2lkdGgsIG5leHQpKTtcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuLyoqXG4gKiBcdTYzRDJcdTRFRjZcdTk4ODRcdTg5QzhcdTZBMjFcdTVGMEZcdTMwMDJcbiAqL1xuZXhwb3J0IGVudW0gUHJldmlld01vZGUge1xuICBOb3JtYWwgPSBcIm5vcm1hbFwiLFxuICBQaW4gPSBcInBpblwiXG59XG5cbi8qKlxuICogXHU4RkQwXHU4ODRDXHU2NUY2XHU3MkI2XHU2MDAxXHU2NzNBXHU3MkI2XHU2MDAxXHUzMDAyXG4gKi9cbmV4cG9ydCBlbnVtIFByZXZpZXdTdGF0ZSB7XG4gIElkbGUgPSBcImlkbGVcIixcbiAgT3BlbiA9IFwib3BlblwiLFxuICBEcmFnZ2luZyA9IFwiZHJhZ2dpbmdcIixcbiAgTWVudSA9IFwibWVudVwiXG59XG5cbi8qKlxuICogXHU1NkZFXHU3MjQ3XHU3MEI5XHU1MUZCXHU4OUU2XHU1M0QxXHU4MzAzXHU1NkY0XHUzMDAyXG4gKi9cbmV4cG9ydCBlbnVtIFRyaWdnZXJTY29wZSB7XG4gIE1hcmtkb3duT25seSA9IFwibWFya2Rvd24tb25seVwiLFxuICBNYXJrZG93bkFuZENvbW1vbiA9IFwibWFya2Rvd24tYW5kLWNvbW1vblwiLFxuICBHbG9iYWwgPSBcImdsb2JhbFwiXG59XG5cbi8qKlxuICogXHU0RkVFXHU5OTcwXHU5NTJFXHU5MTREXHU3RjZFXHUzMDAyXG4gKi9cbmV4cG9ydCBlbnVtIEhvdGtleU1vZGlmaWVyIHtcbiAgTm9uZSA9IFwibm9uZVwiLFxuICBDdHJsID0gXCJjdHJsXCIsXG4gIEFsdCA9IFwiYWx0XCIsXG4gIFNoaWZ0ID0gXCJzaGlmdFwiLFxuICBDdHJsQWx0ID0gXCJjdHJsLWFsdFwiLFxuICBDdHJsU2hpZnQgPSBcImN0cmwtc2hpZnRcIixcbiAgU2hpZnRBbHQgPSBcInNoaWZ0LWFsdFwiLFxuICBDdHJsU2hpZnRBbHQgPSBcImN0cmwtc2hpZnQtYWx0XCJcbn1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdThCRURcdThBMDBcdTUwNEZcdTU5N0RcdTMwMDJcbiAqL1xuZXhwb3J0IGVudW0gVUlMYW5ndWFnZSB7XG4gIEF1dG8gPSBcImF1dG9cIixcbiAgWmggPSBcInpoXCIsXG4gIEVuID0gXCJlblwiXG59XG5cbi8qKlxuICogXHU1REU1XHU1MTc3XHU2ODBGXHU1MkE4XHU0RjVDXHUzMDAyXG4gKi9cbmV4cG9ydCB0eXBlIFRvb2xiYXJBY3Rpb24gPVxuICB8IFwiem9vbS1pblwiXG4gIHwgXCJ6b29tLW91dFwiXG4gIHwgXCJ6b29tLTEwMFwiXG4gIHwgXCJmaXRcIlxuICB8IFwiY29weVwiXG4gIHwgXCJjb3B5LW5hbWVcIlxuICB8IFwiY2xvc2VcIlxuICB8IFwibmV4dFwiXG4gIHwgXCJwcmV2XCI7XG5cbi8qKlxuICogXHU1NkZFXHU3MjQ3XHU1N0ZBXHU3ODQwXHU0RkUxXHU2MDZGXHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VJdGVtIHtcbiAgc3JjOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBmaWxlPzogVEZpbGUgfCBudWxsO1xufVxuXG4vKipcbiAqIFx1OTg4NFx1ODlDOFx1NjVGNlx1NzY4NFx1NTNEOFx1NjM2Mlx1NzJCNlx1NjAwMVx1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZm9ybVN0YXRlIHtcbiAgbmF0dXJhbFdpZHRoOiBudW1iZXI7XG4gIG5hdHVyYWxIZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIHpvb21SYXRpbzogbnVtYmVyO1xufVxuXG4vKipcbiAqIFx1NzUyOFx1NjIzN1x1NEVBNFx1NEU5Mlx1OTE0RFx1N0Y2RVx1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uUHJvZmlsZSB7XG4gIGVuYWJsZU1vYmlsZUdlc3R1cmVzOiBib29sZWFuO1xuICBlbmFibGVEb3VibGVUYXBab29tOiBib29sZWFuO1xuICBsb25nUHJlc3NNZW51TXM6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBcdTc1M0JcdTVFQ0FcdTk4OUNcdTgyNzJcdTkxNERcdTdGNkVcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHYWxsZXJ5VGhlbWUge1xuICBlbmFibGVkOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgaG92ZXJDb2xvcjogc3RyaW5nO1xuICBhY3RpdmVCb3JkZXJDb2xvcjogc3RyaW5nO1xuICBoaWdobGlnaHRBY3RpdmVCb3JkZXI6IGJvb2xlYW47XG59XG5cbi8qKlxuICogXHU2M0QyXHU0RUY2XHU4QkJFXHU3RjZFXHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGx1Z2luU2V0dGluZ3Mge1xuICBzY2hlbWFWZXJzaW9uOiBudW1iZXI7XG4gIG1vZGU6IFByZXZpZXdNb2RlO1xuICB0cmlnZ2VyU2NvcGU6IFRyaWdnZXJTY29wZTtcbiAgaW5jbHVkZUxpbmtlZEltYWdlczogYm9vbGVhbjtcbiAgbW92ZUhvdGtleTogSG90a2V5TW9kaWZpZXI7XG4gIHN3aXRjaEhvdGtleTogSG90a2V5TW9kaWZpZXI7XG4gIG1vdmVTcGVlZDogbnVtYmVyO1xuICBwaW5NYXhpbXVtOiBudW1iZXI7XG4gIHBpbkNvdmVyTW9kZTogYm9vbGVhbjtcbiAgc2hvd0ltYWdlVG9vbHRpcDogYm9vbGVhbjtcbiAgdWlMYW5ndWFnZTogVUlMYW5ndWFnZTtcbiAgaW1hZ2VCb3JkZXJFbmFibGVkOiBib29sZWFuO1xuICBpbWFnZUJvcmRlcldpZHRoOiBzdHJpbmc7XG4gIGltYWdlQm9yZGVyU3R5bGU6IHN0cmluZztcbiAgaW1hZ2VCb3JkZXJDb2xvcjogc3RyaW5nO1xuICBnYWxsZXJ5OiBHYWxsZXJ5VGhlbWU7XG4gIGludGVyYWN0aW9uOiBJbnRlcmFjdGlvblByb2ZpbGU7XG59XG5cbi8qKlxuICogXHU1NkZFXHU3MjQ3XHU2NTM2XHU5NkM2XHU3RUQzXHU2NzlDXHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2FsbGVyeVJlc3VsdCB7XG4gIGl0ZW1zOiBJbWFnZUl0ZW1bXTtcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBcdTYzQTdcdTUyMzZcdTU2NjhcdTRFOEJcdTRFRjZcdTRFMEFcdTRFMEJcdTY1ODdcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcmV2aWV3Q29udGV4dCB7XG4gIGRvYzogRG9jdW1lbnQ7XG4gIHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBpdGVtOiBJbWFnZUl0ZW07XG4gIGFsbEl0ZW1zOiBJbWFnZUl0ZW1bXTtcbn1cblxuLyoqXG4gKiBcdTYyRDZcdTYyRkRcdTUwNEZcdTc5RkJcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPZmZzZXQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBcdTdGMjlcdTY1M0VcdTk1MUFcdTcwQjlcdTMwMDJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBab29tQW5jaG9yIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbi8qKlxuICogXHU4RjkzXHU1MTY1XHU1QzQyXHU1QkY5XHU2M0E3XHU1MjM2XHU1QzQyXHU2NkI0XHU5NzMyXHU3Njg0XHU1NkRFXHU4QzAzXHUzMDAyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDYWxsYmFja3Mge1xuICBvbkZvY3VzOiAoKSA9PiB2b2lkO1xuICBvbkRyYWdTdGFydDogKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkRyYWdNb3ZlOiAoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uRHJhZ0VuZDogKCkgPT4gdm9pZDtcbiAgb25XaGVlbFpvb206IChkZWx0YTogbnVtYmVyLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcikgPT4gdm9pZDtcbiAgb25QaW5jaFpvb206IChzY2FsZTogbnVtYmVyLCBhbmNob3JYOiBudW1iZXIsIGFuY2hvclk6IG51bWJlcikgPT4gdm9pZDtcbiAgb25Eb3VibGVUYXA6ICgpID0+IHZvaWQ7XG4gIG9uTG9uZ1ByZXNzTWVudTogKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIFx1OEZEMFx1ODg0Q1x1NjVGNlx1NjMwMlx1OEY3RFx1NUJGOVx1OEM2MVx1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vdW50ZWRQcmV2aWV3IHtcbiAgaWQ6IHN0cmluZztcbiAgc2hlbGxFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGltYWdlRWw6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIGNhcHRpb25FbDogSFRNTERpdkVsZW1lbnQ7XG4gIHRvb2xiYXJFbDogSFRNTERpdkVsZW1lbnQ7XG4gIGl0ZW06IEltYWdlSXRlbTtcbiAgc3RhdGU6IFRyYW5zZm9ybVN0YXRlO1xufVxuIiwgImltcG9ydCB7IFByZXZpZXdTdGF0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1NkQ2RVx1N0E5N1x1NzJCNlx1NjAwMVx1NjczQVx1RkYwQ1x1OEQxRlx1OEQyM1x1N0VBNlx1Njc1Rlx1NzJCNlx1NjAwMVx1OEY2Q1x1NjM2Mlx1MzAwMlxuICovXG5leHBvcnQgY2xhc3MgUHJldmlld1N0YXRlTWFjaGluZSB7XG4gIHByaXZhdGUgc3RhdGU6IFByZXZpZXdTdGF0ZSA9IFByZXZpZXdTdGF0ZS5JZGxlO1xuXG4gIC8qKlxuICAgKiBcdThCRkJcdTUzRDZcdTVGNTNcdTUyNERcdTcyQjZcdTYwMDFcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBnZXRTdGF0ZSgpOiBQcmV2aWV3U3RhdGUge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NUMxRFx1OEJENVx1NjI1M1x1NUYwMFx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2l0aW9uKFtQcmV2aWV3U3RhdGUuSWRsZV0sIFByZXZpZXdTdGF0ZS5PcGVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVGMDBcdTU5Q0JcdTYyRDZcdTYyRkRcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzdGFydERyYWcoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2l0aW9uKFtQcmV2aWV3U3RhdGUuT3BlbiwgUHJldmlld1N0YXRlLk1lbnVdLCBQcmV2aWV3U3RhdGUuRHJhZ2dpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1N0VEM1x1Njc1Rlx1NjJENlx1NjJGRFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGVuZERyYWcoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2l0aW9uKFtQcmV2aWV3U3RhdGUuRHJhZ2dpbmddLCBQcmV2aWV3U3RhdGUuT3Blbik7XG4gIH1cblxuICAvKipcbiAgICogXHU2MjUzXHU1RjAwXHU4M0RDXHU1MzU1XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgb3Blbk1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2l0aW9uKFtQcmV2aWV3U3RhdGUuT3Blbl0sIFByZXZpZXdTdGF0ZS5NZW51KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUxNzNcdTk1RURcdTgzRENcdTUzNTVcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2l0aW9uKFtQcmV2aWV3U3RhdGUuTWVudV0sIFByZXZpZXdTdGF0ZS5PcGVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUxNzNcdTk1RURcdTZENkVcdTdBOTdcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gUHJldmlld1N0YXRlLklkbGU7XG4gIH1cblxuICAvKipcbiAgICogXHU1MjI0XHU2NUFEXHU2NjJGXHU1NDI2XHU1OTA0XHU0RThFXHU1M0VGXHU0RUE0XHU0RTkyXHU3MkI2XHU2MDAxXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgaXNJbnRlcmFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSAhPT0gUHJldmlld1N0YXRlLklkbGU7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTg1XHU5MEU4XHU5MDFBXHU3NTI4XHU4RjZDXHU2MzYyXHU1MUZEXHU2NTcwXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHRyYW5zaXRpb24oZnJvbTogUHJldmlld1N0YXRlW10sIHRvOiBQcmV2aWV3U3RhdGUpOiB2b2lkIHtcbiAgICBpZiAoIWZyb20uaW5jbHVkZXModGhpcy5zdGF0ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwcmV2aWV3IHN0YXRlIHRyYW5zaXRpb246ICR7dGhpcy5zdGF0ZX0gLT4gJHt0b31gKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHRvO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4uL2kxOG5cIjtcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbi8qKlxuICogXHU1OTBEXHU1MjM2XHU2NzBEXHU1MkExXHVGRjBDXHU3RURGXHU0RTAwXHU1OTA0XHU3NDA2XHU2MjEwXHU1MjlGL1x1NTkzMVx1OEQyNVx1NjNEMFx1NzkzQVx1NEUwRVx1OTY0RFx1N0VBN1x1N0I1Nlx1NzU2NVx1MzAwMlxuICovXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwOiBBcHA7XG5cbiAgLyoqXG4gICAqIFx1Njc4NFx1OTAyMFx1NTkwRFx1NTIzNlx1NjcwRFx1NTJBMVx1MzAwMlxuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwOiBBcHApIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU5MERcdTUyMzZcdTU2RkVcdTcyNDdcdUZGMUJcdTU5MzFcdThEMjVcdTY1RjZcdTk2NERcdTdFQTdcdTU5MERcdTUyMzYgVVJMXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY29weUltYWdlT3JVcmwoaW1nRWw6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBjb3BpZWRJbWFnZSA9IGF3YWl0IHRoaXMuY29weUltYWdlKGltZ0VsKTtcbiAgICBpZiAoY29waWVkSW1hZ2UpIHtcbiAgICAgIG5ldyBOb3RpY2UodChcIm5vdGljZS5jb3B5U3VjY2Vzc1wiLCB0aGlzLmFwcCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29waWVkVXJsID0gYXdhaXQgdGhpcy5jb3B5UGxhaW5UZXh0KGltZ0VsLnNyYyk7XG4gICAgaWYgKGNvcGllZFVybCkge1xuICAgICAgbmV3IE5vdGljZShgJHt0KFwibm90aWNlLmNvcHlGYWlsZWRcIiwgdGhpcy5hcHApfSBVUkwgY29waWVkIGluc3RlYWQuYCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKHQoXCJub3RpY2UuY29weUZhaWxlZFwiLCB0aGlzLmFwcCkpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTRGMThcdTUxNDhcdTVDMURcdThCRDVcdTU5MERcdTUyMzZcdTRFOENcdThGREJcdTUyMzZcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY29weUltYWdlKGltZ0VsOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHR5cGVvZiBDbGlwYm9hcmRJdGVtID09PSBcInVuZGVmaW5lZFwiIHx8ICFuYXZpZ2F0b3IuY2xpcGJvYXJkPy53cml0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgdGhpcy5yZW5kZXJJbWFnZVRvQmxvYihpbWdFbCk7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlKFtuZXcgQ2xpcGJvYXJkSXRlbSh7IFwiaW1hZ2UvcG5nXCI6IGJsb2IgfSldKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTU5MERcdTUyMzZcdTdFQUZcdTY1ODdcdTY3MkNcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBjb3B5UGxhaW5UZXh0KHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIXZhbHVlIHx8ICFuYXZpZ2F0b3IuY2xpcGJvYXJkPy53cml0ZVRleHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYyOEFcdTU2RkVcdTcyNDdcdTc1M0JcdTUyMzAgY2FudmFzIFx1NTQwRVx1NUJGQ1x1NTFGQSBQTkdcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVySW1hZ2VUb0Jsb2IoaW1nRWw6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPEJsb2I+IHtcbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHRoaXMubG9hZEltYWdlKGltZ0VsLnNyYyk7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICghY3R4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMgY29udGV4dCB1bmF2YWlsYWJsZVwiKTtcbiAgICB9XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG5cbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8QmxvYj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICBpZiAoIWJsb2IpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ2FudmFzIGJsb2IgZ2VuZXJhdGlvbiBmYWlsZWRcIikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGJsb2IpO1xuICAgICAgfSwgXCJpbWFnZS9wbmdcIik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1RjAyXHU2QjY1XHU1MkEwXHU4RjdEXHU1NkZFXHU3MjQ3XHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGxvYWRJbWFnZShzcmM6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWFnZSk7XG4gICAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIkltYWdlIGxvYWQgZmFpbGVkXCIpKTtcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICB9KTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE1hcmtkb3duVmlldywgdHlwZSBBcHAsIHR5cGUgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7XG4gIHR5cGUgR2FsbGVyeVJlc3VsdCxcbiAgdHlwZSBJbWFnZUl0ZW0sXG4gIHR5cGUgUGx1Z2luU2V0dGluZ3MsXG4gIFRyaWdnZXJTY29wZVxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdTc1M0JcdTVFQ0FcdTY3MERcdTUyQTFcdUZGMUFcdTY1MzZcdTk2QzZcdTVGNTNcdTUyNERcdTRFMEFcdTRFMEJcdTY1ODdcdTUzRUZcdTUyMDdcdTYzNjJcdTU2RkVcdTcyNDdcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbGxlcnlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBhcHA6IEFwcDtcblxuICAvKipcbiAgICogXHU2Nzg0XHU5MDIwXHU3NTNCXHU1RUNBXHU2NzBEXHU1MkExXHUzMDAyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NUJGOVx1NTkxNlx1NEUzQlx1NTE2NVx1NTNFM1x1RkYxQVx1NTE0OCBET01cdUZGMENcdTUxOEQgTWFya2Rvd24gXHU2NTg3XHU2NzJDXHU1NkRFXHU5MDAwXHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY29sbGVjdFdpdGhGYWxsYmFjayhcbiAgICBkb2M6IERvY3VtZW50LFxuICAgIHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LFxuICAgIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5nc1xuICApOiBQcm9taXNlPEdhbGxlcnlSZXN1bHQ+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuYnVpbGRTZWxlY3RvcihzZXR0aW5ncy50cmlnZ2VyU2NvcGUsIHNldHRpbmdzLmluY2x1ZGVMaW5rZWRJbWFnZXMpO1xuICAgIGNvbnN0IGJ5RG9tID0gdGhpcy5jb2xsZWN0RnJvbURvY3VtZW50KGRvYywgc291cmNlSW1hZ2UsIHNlbGVjdG9yKTtcbiAgICBpZiAoYnlEb20uaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGJ5RG9tO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbGxlY3RGcm9tQWN0aXZlTWFya2Rvd24oc291cmNlSW1hZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1N0VDNFx1ODhDNVx1ODlFNlx1NTNEMVx1OTAwOVx1NjJFOVx1NTY2OFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGJ1aWxkU2VsZWN0b3Ioc2NvcGU6IFRyaWdnZXJTY29wZSwgaW5jbHVkZUxpbmtlZEltYWdlczogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgbm9MaW5rU3VmZml4ID0gaW5jbHVkZUxpbmtlZEltYWdlcyA/IFwiXCIgOiBcIjpub3QoYSBpbWcpXCI7XG4gICAgaWYgKHNjb3BlID09PSBUcmlnZ2VyU2NvcGUuR2xvYmFsKSB7XG4gICAgICByZXR1cm4gYGltZyR7bm9MaW5rU3VmZml4fWA7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2Rvd25TZWxlY3RvcnMgPSBbXG4gICAgICBgLndvcmtzcGFjZS1sZWFmLWNvbnRlbnRbZGF0YS10eXBlPSdtYXJrZG93biddIGltZyR7bm9MaW5rU3VmZml4fWAsXG4gICAgICBgLndvcmtzcGFjZS1sZWFmLWNvbnRlbnRbZGF0YS10eXBlPSdpbWFnZSddIGltZyR7bm9MaW5rU3VmZml4fWAsXG4gICAgICBgLm1hcmtkb3duLXByZXZpZXctdmlldyBpbWcke25vTGlua1N1ZmZpeH1gLFxuICAgICAgYC5tYXJrZG93bi1zb3VyY2Utdmlldy5tb2QtY202IGltZyR7bm9MaW5rU3VmZml4fWBcbiAgICBdO1xuXG4gICAgaWYgKHNjb3BlID09PSBUcmlnZ2VyU2NvcGUuTWFya2Rvd25Pbmx5KSB7XG4gICAgICByZXR1cm4gbWFya2Rvd25TZWxlY3RvcnMuam9pbihcIixcIik7XG4gICAgfVxuXG4gICAgY29uc3QgY29tbW9uU2VsZWN0b3JzID0gW1xuICAgICAgYC5tb2RhbC1jb250ZW50IGltZyR7bm9MaW5rU3VmZml4fWAsXG4gICAgICBgLmNvbW11bml0eS1tb2RhbC1kZXRhaWxzIGltZyR7bm9MaW5rU3VmZml4fWAsXG4gICAgICBgLmNhbnZhcy1ub2RlLWNvbnRlbnQgaW1nJHtub0xpbmtTdWZmaXh9YFxuICAgIF07XG5cbiAgICByZXR1cm4gWy4uLm1hcmtkb3duU2VsZWN0b3JzLCAuLi5jb21tb25TZWxlY3RvcnNdLmpvaW4oXCIsXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NEVDRVx1NUY1M1x1NTI0RCBkb2N1bWVudCBcdTYyQkRcdTUzRDZcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBjb2xsZWN0RnJvbURvY3VtZW50KFxuICAgIGRvYzogRG9jdW1lbnQsXG4gICAgc291cmNlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsXG4gICAgc2VsZWN0b3I6IHN0cmluZ1xuICApOiBHYWxsZXJ5UmVzdWx0IHtcbiAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEltYWdlRWxlbWVudD4oc2VsZWN0b3IpKTtcbiAgICBjb25zdCBpdGVtczogSW1hZ2VJdGVtW10gPSBbXTtcblxuICAgIG5vZGVzLmZvckVhY2goKGltZywgaWR4KSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBpbWcuY3VycmVudFNyYyB8fCBpbWcuc3JjO1xuICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgYWx0OiBpbWcuYWx0IHx8IFwiXCIsXG4gICAgICAgIHRpdGxlOiBpbWcudGl0bGUgfHwgaW1nLmFsdCB8fCBcIlwiLFxuICAgICAgICBpbmRleDogaWR4LFxuICAgICAgICB0b3RhbDogMFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGl0ZW0uaW5kZXggPSBpZHg7XG4gICAgICBpdGVtLnRvdGFsID0gaXRlbXMubGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLnJlc29sdmVBY3RpdmVJbmRleChpdGVtcywgc291cmNlSW1hZ2UpO1xuICAgIHJldHVybiB7IGl0ZW1zLCBhY3RpdmVJbmRleCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTZERVx1OTAwMFx1NjVCOVx1Njg0OFx1RkYxQVx1NEVDRVx1NUY1M1x1NTI0RCBNYXJrZG93biBcdTY1ODdcdTRFRjZcdTY1ODdcdTY3MkNcdTg5RTNcdTY3OTBcdTU2RkVcdTcyNDdcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBjb2xsZWN0RnJvbUFjdGl2ZU1hcmtkb3duKHNvdXJjZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxHYWxsZXJ5UmVzdWx0PiB7XG4gICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgY29uc3QgZmlsZSA9IGFjdGl2ZVZpZXc/LmZpbGU7XG5cbiAgICBpZiAoIWFjdGl2ZVZpZXcgfHwgIWZpbGUpIHtcbiAgICAgIHJldHVybiB7IGl0ZW1zOiBbXSwgYWN0aXZlSW5kZXg6IC0xIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmF3VGV4dCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQoZmlsZSk7XG4gICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZU1hcmtkb3duSW1hZ2VzKHJhd1RleHQsIGZpbGUpO1xuICAgIHBhcnNlZC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGl0ZW0uaW5kZXggPSBpZHg7XG4gICAgICBpdGVtLnRvdGFsID0gcGFyc2VkLmxlbmd0aDtcbiAgICAgIGl0ZW0uZmlsZSA9IGZpbGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHBhcnNlZCxcbiAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnJlc29sdmVBY3RpdmVJbmRleChwYXJzZWQsIHNvdXJjZUltYWdlKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogXHU4OUUzXHU2NzkwIE1hcmtkb3duL1dpa2lMaW5rL0hUTUwgXHU1NkZFXHU3MjQ3XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgcGFyc2VNYXJrZG93bkltYWdlcyhjb250ZW50OiBzdHJpbmcsIGZpbGU6IFRGaWxlKTogSW1hZ2VJdGVtW10ge1xuICAgIGNvbnN0IGl0ZW1zOiBJbWFnZUl0ZW1bXSA9IFtdO1xuXG4gICAgY29uc3QgbWFya2Rvd25SZWdleCA9IC8hXFxbKC4qPylcXF1cXCgoLio/KVxcKS9nO1xuICAgIGNvbnN0IHdpa2lSZWdleCA9IC8hXFxbXFxbKC4qPylcXF1cXF0vZztcbiAgICBjb25zdCBodG1sUmVnZXggPSAvPGltZ1tePl0qc3JjPVtcIiddKFteXCInXSspW1wiJ11bXj5dKmFsdD1bXCInXT8oW15cIic+XSopW1wiJ10/W14+XSo+fDxpbWdbXj5dKmFsdD1bXCInXT8oW15cIic+XSopW1wiJ10/W14+XSpzcmM9W1wiJ10oW15cIiddKylbXCInXVtePl0qPi9naTtcblxuICAgIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IG51bGw7XG5cbiAgICAvLyBcdTg5RTNcdTY3OTBcdTY4MDdcdTUxQzYgTWFya2Rvd24gXHU1NkZFXHU3MjQ3XHU4QkVEXHU2Q0Q1XHUzMDAyXG4gICAgd2hpbGUgKChtYXRjaCA9IG1hcmtkb3duUmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFsdFJhdyA9IG1hdGNoWzFdIHx8IFwiXCI7XG4gICAgICBjb25zdCBzcmNSYXcgPSBtYXRjaFsyXSB8fCBcIlwiO1xuICAgICAgY29uc3QgYWx0ID0gYWx0UmF3LnNwbGl0KFwifFwiKVswXSB8fCBhbHRSYXc7XG4gICAgICBjb25zdCBzcmMgPSB0aGlzLnJlc29sdmVJbWFnZVBhdGgoc3JjUmF3LCBmaWxlKTtcbiAgICAgIGlmICghc3JjKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaXRlbXMucHVzaCh7IHNyYywgYWx0LCB0aXRsZTogYWx0LCBpbmRleDogMCwgdG90YWw6IDAsIGZpbGUgfSk7XG4gICAgfVxuXG4gICAgLy8gXHU4OUUzXHU2NzkwIE9ic2lkaWFuIFdpa2lMaW5rIFx1NTZGRVx1NzI0N1x1OEJFRFx1NkNENVx1MzAwMlxuICAgIHdoaWxlICgobWF0Y2ggPSB3aWtpUmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSAobWF0Y2hbMV0gfHwgXCJcIikudHJpbSgpO1xuICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0cyA9IHBheWxvYWQuc3BsaXQoXCJ8XCIpLm1hcCgocGFydCkgPT4gcGFydC50cmltKCkpO1xuICAgICAgY29uc3Qgc3JjUmF3ID0gcGFydHNbMF0gfHwgXCJcIjtcbiAgICAgIGNvbnN0IGFsdCA9IHBhcnRzLmxlbmd0aCA+IDEgPyBwYXJ0cy5zbGljZSgxKS5qb2luKFwifFwiKSA6IHNyY1JhdztcbiAgICAgIGNvbnN0IHNyYyA9IHRoaXMucmVzb2x2ZUltYWdlUGF0aChzcmNSYXcsIGZpbGUpO1xuICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpdGVtcy5wdXNoKHsgc3JjLCBhbHQsIHRpdGxlOiBhbHQsIGluZGV4OiAwLCB0b3RhbDogMCwgZmlsZSB9KTtcbiAgICB9XG5cbiAgICAvLyBcdTg5RTNcdTY3OTAgSFRNTCBpbWcgXHU2ODA3XHU3QjdFXHUzMDAyXG4gICAgd2hpbGUgKChtYXRjaCA9IGh0bWxSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3JjUmF3ID0gbWF0Y2hbMV0gfHwgbWF0Y2hbNF0gfHwgXCJcIjtcbiAgICAgIGNvbnN0IGFsdCA9IG1hdGNoWzJdIHx8IG1hdGNoWzNdIHx8IFwiXCI7XG4gICAgICBjb25zdCBzcmMgPSB0aGlzLnJlc29sdmVJbWFnZVBhdGgoc3JjUmF3LCBmaWxlKTtcbiAgICAgIGlmICghc3JjKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaXRlbXMucHVzaCh7IHNyYywgYWx0LCB0aXRsZTogYWx0LCBpbmRleDogMCwgdG90YWw6IDAsIGZpbGUgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1ODlFM1x1Njc5MFx1OEQ0NFx1NkU5MFx1OERFRlx1NUY4NFx1NEUzQVx1NTNFRlx1OTg4NFx1ODlDOCBVUkxcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUltYWdlUGF0aChyYXdQYXRoOiBzdHJpbmcsIGZpbGU6IFRGaWxlKTogc3RyaW5nIHtcbiAgICBpZiAoIXJhd1BhdGgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaW1tZWQgPSByYXdQYXRoLnRyaW0oKTtcblxuICAgIC8vIFx1NzZGNFx1NjNBNVx1NjUyRlx1NjMwMSBVUkwgXHU0RTBFIGRhdGEgVVJJXHUzMDAyXG4gICAgaWYgKC9eKGh0dHBzPzp8YXBwOlxcL1xcL3xkYXRhOmltYWdlXFwvfGZpbGU6XFwvXFwvKS9pLnRlc3QodHJpbW1lZCkpIHtcbiAgICAgIHJldHVybiB0cmltbWVkLnJlcGxhY2UoL15maWxlOlxcL1xcLysvLCBcImFwcDovL2xvY2FsL1wiKTtcbiAgICB9XG5cbiAgICAvLyB3aWtpTGluayBcdTYyMTYgbWFya2Rvd24gXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHU4RDcwIG1ldGFkYXRhQ2FjaGUgXHU4OUUzXHU2NzkwXHUzMDAyXG4gICAgY29uc3QgY2xlYW5QYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQuc3BsaXQoXCIjXCIpWzBdKTtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QoY2xlYW5QYXRoLCBmaWxlLnBhdGgpO1xuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hcHAudmF1bHQuZ2V0UmVzb3VyY2VQYXRoKHJlc29sdmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVCOUFcdTRGNERcdTVGNTNcdTUyNERcdTcwQjlcdTUxRkJcdTU2RkVcdTcyNDdcdTU3MjhcdTc1M0JcdTVFQ0FcdTRFMkRcdTc2ODRcdTdEMjJcdTVGMTVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUFjdGl2ZUluZGV4KGl0ZW1zOiBJbWFnZUl0ZW1bXSwgc291cmNlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBudW1iZXIge1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VTcmMgPSBzb3VyY2VJbWFnZS5jdXJyZW50U3JjIHx8IHNvdXJjZUltYWdlLnNyYztcbiAgICBjb25zdCBzb3VyY2VBbHQgPSBzb3VyY2VJbWFnZS5hbHQgfHwgXCJcIjtcblxuICAgIGNvbnN0IGV4YWN0SW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uc3JjID09PSBzb3VyY2VTcmMgJiYgaXRlbS5hbHQgPT09IHNvdXJjZUFsdCk7XG4gICAgaWYgKGV4YWN0SW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIGV4YWN0SW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgYnlTcmNJbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5zcmMgPT09IHNvdXJjZVNyYyk7XG4gICAgcmV0dXJuIGJ5U3JjSW5kZXggPj0gMCA/IGJ5U3JjSW5kZXggOiAwO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBcHAgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi4vaTE4blwiO1xuaW1wb3J0IHR5cGUge1xuICBJbWFnZUl0ZW0sXG4gIE1vdW50ZWRQcmV2aWV3LFxuICBQbHVnaW5TZXR0aW5ncyxcbiAgUHJldmlld01vZGUsXG4gIFRvb2xiYXJBY3Rpb24sXG4gIFRyYW5zZm9ybVN0YXRlXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgUHJldmlld01vZGUgYXMgTW9kZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1NjI1M1x1NUYwMFx1OTg4NFx1ODlDOFx1OTcwMFx1ODk4MVx1NzY4NFx1NTNDMlx1NjU3MFx1MzAwMlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5QcmV2aWV3T3B0aW9ucyB7XG4gIGl0ZW06IEltYWdlSXRlbTtcbiAgc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzO1xuICBtb2RlOiBQcmV2aWV3TW9kZTtcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcbiAgYWxsSXRlbXM6IEltYWdlSXRlbVtdO1xuICBvblRvb2xiYXJBY3Rpb246IChwcmV2aWV3SWQ6IHN0cmluZywgYWN0aW9uOiBUb29sYmFyQWN0aW9uKSA9PiB2b2lkO1xuICBvbkdhbGxlcnlTZWxlY3Q6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbk1hc2tDbGljazogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBcdTg5QzZcdTU2RkVcdTVDNDJcdTVCQkZcdTRFM0JcdUZGMUFcdThEMUZcdThEMjNcdTZFMzJcdTY3RDMvXHU5NTAwXHU2QkMxIERPTVx1RkYwQ1x1NEUwRFx1OEQxRlx1OEQyM1x1NEUxQVx1NTJBMVx1OTAzQlx1OEY5MVx1MzAwMlxuICovXG5leHBvcnQgY2xhc3MgT3ZlcmxheUhvc3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwcDogQXBwO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvYzogRG9jdW1lbnQ7XG5cbiAgcHJpdmF0ZSByb290RWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbWFza0VsOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGdhbGxlcnlFbDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBwcmV2aWV3cyA9IG5ldyBNYXA8c3RyaW5nLCBNb3VudGVkUHJldmlldz4oKTtcbiAgcHJpdmF0ZSBkZXRhY2hNYXNrQ2xpY2s6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGFjdGl2ZVByZXZpZXdJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFx1Njc4NFx1OTAyMFx1NUJCRlx1NEUzQlx1MzAwMlxuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIGRvYzogRG9jdW1lbnQpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLmRvYyA9IGRvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTVFNzZcdTYzMDJcdThGN0RcdTRFMDBcdTRFMkFcdTY1QjBcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBvcGVuUHJldmlldyhvcHRpb25zOiBPcGVuUHJldmlld09wdGlvbnMpOiBNb3VudGVkUHJldmlldyB7XG4gICAgdGhpcy5lbnN1cmVSb290KCk7XG4gICAgdGhpcy51cGRhdGVNYXNrKG9wdGlvbnMubW9kZSwgb3B0aW9ucy5vbk1hc2tDbGljayk7XG5cbiAgICBpZiAob3B0aW9ucy5tb2RlID09PSBNb2RlLk5vcm1hbCkge1xuICAgICAgdGhpcy5jbG9zZUFsbCgpO1xuICAgICAgdGhpcy51cGRhdGVNYXNrKG9wdGlvbnMubW9kZSwgb3B0aW9ucy5vbk1hc2tDbGljayk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlld0lkID0gdGhpcy5jcmVhdGVQcmV2aWV3SWQoKTtcbiAgICBjb25zdCBzaGVsbEVsID0gdGhpcy5jcmVhdGVTaGVsbChvcHRpb25zLm1vZGUpO1xuICAgIGNvbnN0IGltYWdlRWwgPSB0aGlzLmNyZWF0ZUltYWdlKCk7XG4gICAgY29uc3QgY2FwdGlvbkJsb2NrRWwgPSB0aGlzLmNyZWF0ZUNhcHRpb25CbG9jayhwcmV2aWV3SWQsIG9wdGlvbnMuaXRlbSwgb3B0aW9ucy5vblRvb2xiYXJBY3Rpb24pO1xuICAgIGNvbnN0IGNhcHRpb25FbCA9IGNhcHRpb25CbG9ja0VsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiLm9pcC1pbWFnZS1jYXB0aW9uXCIpO1xuICAgIGNvbnN0IHRvb2xiYXJFbCA9IHRoaXMuY3JlYXRlVG9vbGJhcihwcmV2aWV3SWQsIG9wdGlvbnMub25Ub29sYmFyQWN0aW9uKTtcblxuICAgIGltYWdlRWwuc3JjID0gb3B0aW9ucy5pdGVtLnNyYztcbiAgICBpbWFnZUVsLmFsdCA9IG9wdGlvbnMuaXRlbS5hbHQgfHwgXCJcIjtcblxuICAgIHNoZWxsRWwuYXBwZW5kQ2hpbGQoaW1hZ2VFbCk7XG4gICAgc2hlbGxFbC5hcHBlbmRDaGlsZChjYXB0aW9uQmxvY2tFbCk7XG4gICAgc2hlbGxFbC5hcHBlbmRDaGlsZCh0b29sYmFyRWwpO1xuICAgIHRoaXMucm9vdEVsPy5hcHBlbmRDaGlsZChzaGVsbEVsKTtcblxuICAgIGNvbnN0IHByZXZpZXc6IE1vdW50ZWRQcmV2aWV3ID0ge1xuICAgICAgaWQ6IHByZXZpZXdJZCxcbiAgICAgIHNoZWxsRWwsXG4gICAgICBpbWFnZUVsLFxuICAgICAgY2FwdGlvbkVsOiBjYXB0aW9uRWwgPz8gdGhpcy5jcmVhdGVGYWxsYmFja0NhcHRpb24oY2FwdGlvbkJsb2NrRWwpLFxuICAgICAgdG9vbGJhckVsLFxuICAgICAgaXRlbTogb3B0aW9ucy5pdGVtLFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgbmF0dXJhbFdpZHRoOiAxLFxuICAgICAgICBuYXR1cmFsSGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHpvb21SYXRpbzogMVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnByZXZpZXdzLnNldChwcmV2aWV3SWQsIHByZXZpZXcpO1xuICAgIHRoaXMuc2V0QWN0aXZlKHByZXZpZXdJZCk7XG4gICAgdGhpcy51cGRhdGVHYWxsZXJ5KG9wdGlvbnMuc2V0dGluZ3MsIG9wdGlvbnMuYWxsSXRlbXMsIG9wdGlvbnMuYWN0aXZlSW5kZXgsIG9wdGlvbnMub25HYWxsZXJ5U2VsZWN0KTtcbiAgICByZXR1cm4gcHJldmlldztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTVCRjlcdTU5MTZcdTUyMzdcdTY1QjBcdTc1M0JcdTVFQ0FcdUZGMENcdTc1MjhcdTRFOEVcdTUyMDdcdTU2RkVcdTU0MEVcdTY2RjRcdTY1QjBcdTZGQzBcdTZEM0JcdTYwMDFcdTMwMDJcbiAgICovXG4gIHB1YmxpYyByZW5kZXJHYWxsZXJ5KFxuICAgIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyxcbiAgICBhbGxJdGVtczogSW1hZ2VJdGVtW10sXG4gICAgYWN0aXZlSW5kZXg6IG51bWJlcixcbiAgICBvblNlbGVjdDogKGluZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVHYWxsZXJ5KHNldHRpbmdzLCBhbGxJdGVtcywgYWN0aXZlSW5kZXgsIG9uU2VsZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTY2RjRcdTY1QjBcdTk4ODRcdTg5QzhcdTZFMzJcdTY3RDNcdTcyQjZcdTYwMDFcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBhcHBseVN0YXRlKHByZXZpZXdJZDogc3RyaW5nLCBzdGF0ZTogVHJhbnNmb3JtU3RhdGUpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2aWV3ID0gdGhpcy5wcmV2aWV3cy5nZXQocHJldmlld0lkKTtcbiAgICBpZiAoIXByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aWV3LnN0YXRlID0gc3RhdGU7XG5cbiAgICBwcmV2aWV3LnNoZWxsRWwuc2V0Q3NzUHJvcHMoe1xuICAgICAgXCItLW9pcC1sZWZ0XCI6IGAke3N0YXRlLmxlZnR9cHhgLFxuICAgICAgXCItLW9pcC10b3BcIjogYCR7c3RhdGUudG9wfXB4YFxuICAgIH0pO1xuXG4gICAgcHJldmlldy5pbWFnZUVsLnN0eWxlLndpZHRoID0gYCR7c3RhdGUud2lkdGh9cHhgO1xuICAgIHByZXZpZXcuaW1hZ2VFbC5zdHlsZS5oZWlnaHQgPSBgJHtzdGF0ZS5oZWlnaHR9cHhgO1xuICAgIHByZXZpZXcuaW1hZ2VFbC5zZXRDc3NQcm9wcyh7IFwiLS1vaXAtaW1hZ2UtdHJhbnNmb3JtXCI6IFwibm9uZVwiIH0pO1xuICAgIHByZXZpZXcuY2FwdGlvbkVsLnNldFRleHQodGhpcy5yZXNvbHZlSW1hZ2VGaWxlTmFtZShwcmV2aWV3Lml0ZW0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCRkJcdTUzRDZcdTVERjJcdTYzMDJcdThGN0RcdTk4ODRcdTg5QzhcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBnZXRQcmV2aWV3KHByZXZpZXdJZDogc3RyaW5nKTogTW91bnRlZFByZXZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnByZXZpZXdzLmdldChwcmV2aWV3SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1ODNCN1x1NTNENlx1NUY1M1x1NTI0RFx1NkZDMFx1NkQzQlx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGdldEFjdGl2ZVByZXZpZXcoKTogTW91bnRlZFByZXZpZXcgfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlUHJldmlld0lkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJldmlld3MuZ2V0KHRoaXMuYWN0aXZlUHJldmlld0lkKSA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OEJCRVx1NUI5QVx1NkZDMFx1NkQzQlx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIHNldEFjdGl2ZShwcmV2aWV3SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlUHJldmlld0lkID0gcHJldmlld0lkO1xuICAgIHRoaXMucHJldmlld3MuZm9yRWFjaCgocHJldmlldywgaWQpID0+IHtcbiAgICAgIHByZXZpZXcuc2hlbGxFbC50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBpZCA9PT0gcHJldmlld0lkKTtcbiAgICAgIGlmIChpZCA9PT0gcHJldmlld0lkKSB7XG4gICAgICAgIHByZXZpZXcuc2hlbGxFbC5zdHlsZS56SW5kZXggPSBgJHsyMDAwICsgdGhpcy5wcmV2aWV3cy5zaXplfWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTczXHU5NUVEXHU2MzA3XHU1QjlBXHU5ODg0XHU4OUM4XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgY2xvc2VQcmV2aWV3KHByZXZpZXdJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlldyA9IHRoaXMucHJldmlld3MuZ2V0KHByZXZpZXdJZCk7XG4gICAgaWYgKCFwcmV2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlldy5zaGVsbEVsLnJlbW92ZSgpO1xuICAgIHRoaXMucHJldmlld3MuZGVsZXRlKHByZXZpZXdJZCk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVQcmV2aWV3SWQgPT09IHByZXZpZXdJZCkge1xuICAgICAgY29uc3QgZmFsbGJhY2sgPSBBcnJheS5mcm9tKHRoaXMucHJldmlld3Mua2V5cygpKS5wb3AoKSA/PyBudWxsO1xuICAgICAgdGhpcy5hY3RpdmVQcmV2aWV3SWQgPSBmYWxsYmFjaztcbiAgICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJldmlld3Muc2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5oaWRlTWFzaygpO1xuICAgICAgdGhpcy5yZW1vdmVHYWxsZXJ5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE3M1x1OTVFRFx1NUY1M1x1NTI0RFx1NkZDMFx1NkQzQlx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmVQcmV2aWV3SWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVByZXZpZXcodGhpcy5hY3RpdmVQcmV2aWV3SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE3M1x1OTVFRFx1NTE2OFx1OTBFOFx1OTg4NFx1ODlDOFx1MzAwMlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucHJldmlld3MuZm9yRWFjaCgocHJldmlldykgPT4gcHJldmlldy5zaGVsbEVsLnJlbW92ZSgpKTtcbiAgICB0aGlzLnByZXZpZXdzLmNsZWFyKCk7XG4gICAgdGhpcy5hY3RpdmVQcmV2aWV3SWQgPSBudWxsO1xuICAgIHRoaXMuaGlkZU1hc2soKTtcbiAgICB0aGlzLnJlbW92ZUdhbGxlcnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdThCRkJcdTUzRDZcdTVGNTNcdTUyNERcdTk4ODRcdTg5QzhcdTY1NzBcdTkxQ0ZcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucHJldmlld3Muc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTk1MDBcdTZCQzFcdTVCQkZcdTRFM0JcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VBbGwoKTtcbiAgICBpZiAodGhpcy5kZXRhY2hNYXNrQ2xpY2spIHtcbiAgICAgIHRoaXMuZGV0YWNoTWFza0NsaWNrKCk7XG4gICAgICB0aGlzLmRldGFjaE1hc2tDbGljayA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubWFza0VsPy5yZW1vdmUoKTtcbiAgICB0aGlzLnJvb3RFbD8ucmVtb3ZlKCk7XG4gICAgdGhpcy5tYXNrRWwgPSBudWxsO1xuICAgIHRoaXMucm9vdEVsID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTY4MzlcdTgyODJcdTcwQjlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZW5zdXJlUm9vdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb290RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RFbCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5yb290RWwuYWRkQ2xhc3MoXCJvaXAtb3ZlcmxheS1yb290XCIpO1xuXG4gICAgdGhpcy5tYXNrRWwgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMubWFza0VsLmFkZENsYXNzKFwib2lwLW92ZXJsYXktbWFza1wiKTtcblxuICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yb290RWwpO1xuICAgIHRoaXMucm9vdEVsLmFwcGVuZENoaWxkKHRoaXMubWFza0VsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTY4MzlcdTYzNkVcdTZBMjFcdTVGMEZcdTY2RjRcdTY1QjBcdTkwNkVcdTdGNjlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlTWFzayhtb2RlOiBQcmV2aWV3TW9kZSwgb25NYXNrQ2xpY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubWFza0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGV0YWNoTWFza0NsaWNrKSB7XG4gICAgICB0aGlzLmRldGFjaE1hc2tDbGljaygpO1xuICAgICAgdGhpcy5kZXRhY2hNYXNrQ2xpY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChtb2RlID09PSBNb2RlLk5vcm1hbCkge1xuICAgICAgdGhpcy5tYXNrRWwudG9nZ2xlQ2xhc3MoXCJpcy12aXNpYmxlXCIsIHRydWUpO1xuICAgICAgY29uc3QgaGFuZGxlciA9ICgpOiB2b2lkID0+IG9uTWFza0NsaWNrKCk7XG4gICAgICB0aGlzLm1hc2tFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgICB0aGlzLmRldGFjaE1hc2tDbGljayA9ICgpID0+IHRoaXMubWFza0VsPy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlTWFzaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1OTY5MFx1ODVDRlx1OTA2RVx1N0Y2OVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBoaWRlTWFzaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubWFza0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRldGFjaE1hc2tDbGljaykge1xuICAgICAgdGhpcy5kZXRhY2hNYXNrQ2xpY2soKTtcbiAgICAgIHRoaXMuZGV0YWNoTWFza0NsaWNrID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5tYXNrRWwudG9nZ2xlQ2xhc3MoXCJpcy12aXNpYmxlXCIsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTUzNTVcdTRFMkFcdTk4ODRcdTg5QzhcdTU5MTZcdTU4RjNcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlU2hlbGwobW9kZTogUHJldmlld01vZGUpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3Qgc2hlbGwgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoZWxsLmFkZENsYXNzKFwib2lwLXByZXZpZXctc2hlbGxcIik7XG4gICAgaWYgKG1vZGUgPT09IE1vZGUuUGluKSB7XG4gICAgICBzaGVsbC5hZGRDbGFzcyhcIm9pcC1waW4tc2hlbGxcIik7XG4gICAgfVxuICAgIHJldHVybiBzaGVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTUyMUJcdTVFRkFcdTU2RkVcdTcyNDdcdTUxNDNcdTdEMjBcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlSW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLmFkZENsYXNzKFwib2lwLXByZXZpZXctaW1hZ2VcIik7XG4gICAgaW1hZ2UuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgcmV0dXJuIGltYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxQlx1NUVGQVx1NTZGRVx1NzI0N1x1NjU4N1x1NEVGNlx1NTQwRFx1NTMzQVx1NTdERlx1RkYwOFx1NzBCOVx1NTFGQlx1NTM3M1x1NTkwRFx1NTIzNlx1NTQwRFx1NzlGMFx1RkYwOVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVDYXB0aW9uQmxvY2soXG4gICAgcHJldmlld0lkOiBzdHJpbmcsXG4gICAgaXRlbTogSW1hZ2VJdGVtLFxuICAgIG9uQWN0aW9uOiAocHJldmlld0lkOiBzdHJpbmcsIGFjdGlvbjogVG9vbGJhckFjdGlvbikgPT4gdm9pZFxuICApOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsb2NrLmFkZENsYXNzKFwib2lwLWltYWdlLWNhcHRpb24tYmxvY2tcIik7XG5cbiAgICBjb25zdCBjYXB0aW9uID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXB0aW9uLmFkZENsYXNzKFwib2lwLWltYWdlLWNhcHRpb25cIik7XG4gICAgY2FwdGlvbi5zZXRUZXh0KHRoaXMucmVzb2x2ZUltYWdlRmlsZU5hbWUoaXRlbSkpO1xuICAgIGNhcHRpb24uZGF0YXNldC5hY3Rpb24gPSBcImNvcHktbmFtZVwiO1xuICAgIGNhcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25BY3Rpb24ocHJldmlld0lkLCBcImNvcHktbmFtZVwiKTtcbiAgICB9KTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChjYXB0aW9uKTtcblxuICAgIHJldHVybiBibG9jaztcbiAgfVxuXG4gIC8qKlxuICAgKiBjYXB0aW9uIFx1NTE1Q1x1NUU5NVx1NTIxQlx1NUVGQVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVGYWxsYmFja0NhcHRpb24oYmxvY2s6IEhUTUxEaXZFbGVtZW50KTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGNhcHRpb24gPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcHRpb24uYWRkQ2xhc3MoXCJvaXAtaW1hZ2UtY2FwdGlvblwiKTtcbiAgICBibG9jay5wcmVwZW5kKGNhcHRpb24pO1xuICAgIHJldHVybiBjYXB0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTIxQlx1NUVGQVx1NURFNVx1NTE3N1x1NjgwRlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVUb29sYmFyKHByZXZpZXdJZDogc3RyaW5nLCBvbkFjdGlvbjogKHByZXZpZXdJZDogc3RyaW5nLCBhY3Rpb246IFRvb2xiYXJBY3Rpb24pID0+IHZvaWQpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgdG9vbGJhciA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9vbGJhci5hZGRDbGFzcyhcIm9pcC10b29sYmFyXCIpO1xuXG4gICAgY29uc3QgYWN0aW9uczogQXJyYXk8eyBhY3Rpb246IFRvb2xiYXJBY3Rpb247IGxhYmVsOiBzdHJpbmcgfT4gPSBbXG4gICAgICB7IGFjdGlvbjogXCJ6b29tLW91dFwiLCBsYWJlbDogXCItXCIgfSxcbiAgICAgIHsgYWN0aW9uOiBcInpvb20taW5cIiwgbGFiZWw6IFwiK1wiIH0sXG4gICAgICB7IGFjdGlvbjogXCJ6b29tLTEwMFwiLCBsYWJlbDogXCIxOjFcIiB9LFxuICAgICAgeyBhY3Rpb246IFwiZml0XCIsIGxhYmVsOiB0KFwidG9vbGJhci5maXRcIiwgdGhpcy5hcHApIH0sXG4gICAgICB7IGFjdGlvbjogXCJjb3B5XCIsIGxhYmVsOiB0KFwidG9vbGJhci5jb3B5XCIsIHRoaXMuYXBwKSB9LFxuICAgICAgeyBhY3Rpb246IFwicHJldlwiLCBsYWJlbDogXCJcdTI1QzBcIiB9LFxuICAgICAgeyBhY3Rpb246IFwibmV4dFwiLCBsYWJlbDogXCJcdTI1QjZcIiB9LFxuICAgICAgeyBhY3Rpb246IFwiY2xvc2VcIiwgbGFiZWw6IHQoXCJ0b29sYmFyLmNsb3NlXCIsIHRoaXMuYXBwKSB9XG4gICAgXTtcblxuICAgIGFjdGlvbnMuZm9yRWFjaCgoeyBhY3Rpb24sIGxhYmVsIH0pID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICBidXR0b24uYWRkQ2xhc3MoXCJvaXAtdG9vbGJhci1idG5cIik7XG4gICAgICBidXR0b24uZGF0YXNldC5hY3Rpb24gPSBhY3Rpb247XG4gICAgICBidXR0b24uc2V0VGV4dChsYWJlbCk7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25BY3Rpb24ocHJldmlld0lkLCBhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICB0b29sYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9vbGJhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTRFQ0VcdTU2RkVcdTcyNDdcdTk4NzlcdTg5RTNcdTY3OTBcdTc1MjhcdTRFOEVcdTVDNTVcdTc5M0FcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MERcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUltYWdlRmlsZU5hbWUoaXRlbTogSW1hZ2VJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCBmaWxlTmFtZUJ5U3JjID0gdGhpcy5leHRyYWN0RmlsZU5hbWVGcm9tU3JjKGl0ZW0uc3JjKTtcbiAgICBpZiAoZmlsZU5hbWVCeVNyYykge1xuICAgICAgcmV0dXJuIGZpbGVOYW1lQnlTcmM7XG4gICAgfVxuICAgIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICByZXR1cm4gaXRlbS50aXRsZTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uYWx0KSB7XG4gICAgICByZXR1cm4gaXRlbS5hbHQ7XG4gICAgfVxuICAgIHJldHVybiBpdGVtLnNyYztcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTRFQ0UgVVJML3BhdGggXHU0RTJEXHU2M0QwXHU1M0Q2XHU2NTg3XHU0RUY2XHU1NDBEXHVGRjBDXHU4MUVBXHU1MkE4XHU1M0JCXHU2Mzg5IHF1ZXJ5L2hhc2hcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZXh0cmFjdEZpbGVOYW1lRnJvbVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZVNhZmUgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHNyYyk7XG4gICAgICBjb25zdCBwYXJ0cyA9IHVybC5wYXRobmFtZS5zcGxpdChcIi9cIikuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgcmV0dXJuIGRlY29kZVNhZmUocGFydHNbcGFydHMubGVuZ3RoIC0gMV0gPz8gXCJcIik7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWQgPSBzcmMuc3BsaXQoXCIjXCIpWzBdPy5zcGxpdChcIj9cIilbMF0gPz8gXCJcIjtcbiAgICAgIGNvbnN0IHBhcnRzID0gc2FuaXRpemVkLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICByZXR1cm4gZGVjb2RlU2FmZShwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSA/PyBcIlwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXHU2NkY0XHU2NUIwXHU3NTNCXHU1RUNBXHU2NjNFXHU3OTNBXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUdhbGxlcnkoXG4gICAgc2V0dGluZ3M6IFBsdWdpblNldHRpbmdzLFxuICAgIGFsbEl0ZW1zOiBJbWFnZUl0ZW1bXSxcbiAgICBhY3RpdmVJbmRleDogbnVtYmVyLFxuICAgIG9uU2VsZWN0OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUdhbGxlcnkoKTtcblxuICAgIGlmICghc2V0dGluZ3MuZ2FsbGVyeS5lbmFibGVkIHx8IGFsbEl0ZW1zLmxlbmd0aCA8PSAxIHx8ICF0aGlzLnJvb3RFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ2FsbGVyeUVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmdhbGxlcnlFbC5hZGRDbGFzcyhcIm9pcC1nYWxsZXJ5XCIpO1xuICAgIHRoaXMuZ2FsbGVyeUVsLnNldENzc1Byb3BzKHtcbiAgICAgIFwiLS1vaXAtZ2FsbGVyeS1iZ1wiOiBzZXR0aW5ncy5nYWxsZXJ5LmJhY2tncm91bmRDb2xvcixcbiAgICAgIFwiLS1vaXAtZ2FsbGVyeS1ob3ZlclwiOiBzZXR0aW5ncy5nYWxsZXJ5LmhvdmVyQ29sb3IsXG4gICAgICBcIi0tb2lwLWdhbGxlcnktYWN0aXZlLWJvcmRlclwiOiBzZXR0aW5ncy5nYWxsZXJ5LmFjdGl2ZUJvcmRlckNvbG9yXG4gICAgfSk7XG4gICAgdGhpcy5yb290RWwuYWRkQ2xhc3MoXCJvaXAtaGFzLWdhbGxlcnlcIik7XG5cbiAgICBhbGxJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB3cmFwcGVyLmFkZENsYXNzKFwib2lwLWdhbGxlcnktaXRlbVwiKTtcbiAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25TZWxlY3QoaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltYWdlLmFkZENsYXNzKFwib2lwLWdhbGxlcnktaW1hZ2VcIik7XG4gICAgICBpbWFnZS5zcmMgPSBpdGVtLnNyYztcbiAgICAgIGltYWdlLmFsdCA9IGl0ZW0uYWx0O1xuXG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIHRoaXMuZ2FsbGVyeUVsPy5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMucm9vdEVsLmFwcGVuZENoaWxkKHRoaXMuZ2FsbGVyeUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTc5RkJcdTk2NjRcdTc1M0JcdTVFQ0FcdTgyODJcdTcwQjlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlR2FsbGVyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmdhbGxlcnlFbD8ucmVtb3ZlKCk7XG4gICAgdGhpcy5nYWxsZXJ5RWwgPSBudWxsO1xuICAgIHRoaXMucm9vdEVsPy5yZW1vdmVDbGFzcyhcIm9pcC1oYXMtZ2FsbGVyeVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTc1MUZcdTYyMTBcdTk4ODRcdTg5QzggaWRcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlUHJldmlld0lkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBwcmV2aWV3LSR7RGF0ZS5ub3coKX0tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWA7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIEltYWdlc1ByZXZpZXdQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG5cIjtcbmltcG9ydCB7XG4gIEhvdGtleU1vZGlmaWVyLFxuICBQbHVnaW5TZXR0aW5ncyxcbiAgUHJldmlld01vZGUsXG4gIFRyaWdnZXJTY29wZSxcbiAgVUlMYW5ndWFnZVxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKipcbiAqIFx1NjNEMlx1NEVGNlx1OEJCRVx1N0Y2RVx1NzI0OFx1NjcyQ1x1NTNGN1x1MzAwMlxuICovXG5leHBvcnQgY29uc3QgU0VUVElOR1NfU0NIRU1BX1ZFUlNJT04gPSAxO1xuXG4vKipcbiAqIFx1OUVEOFx1OEJBNFx1OTE0RFx1N0Y2RVx1MzAwMlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUGx1Z2luU2V0dGluZ3MgPSB7XG4gIHNjaGVtYVZlcnNpb246IFNFVFRJTkdTX1NDSEVNQV9WRVJTSU9OLFxuICBtb2RlOiBQcmV2aWV3TW9kZS5Ob3JtYWwsXG4gIHRyaWdnZXJTY29wZTogVHJpZ2dlclNjb3BlLk1hcmtkb3duT25seSxcbiAgaW5jbHVkZUxpbmtlZEltYWdlczogdHJ1ZSxcbiAgbW92ZUhvdGtleTogSG90a2V5TW9kaWZpZXIuTm9uZSxcbiAgc3dpdGNoSG90a2V5OiBIb3RrZXlNb2RpZmllci5DdHJsLFxuICBtb3ZlU3BlZWQ6IDEwLFxuICBwaW5NYXhpbXVtOiAzLFxuICBwaW5Db3Zlck1vZGU6IHRydWUsXG4gIHNob3dJbWFnZVRvb2x0aXA6IHRydWUsXG4gIHVpTGFuZ3VhZ2U6IFVJTGFuZ3VhZ2UuQXV0byxcbiAgaW1hZ2VCb3JkZXJFbmFibGVkOiBmYWxzZSxcbiAgaW1hZ2VCb3JkZXJXaWR0aDogXCJtZWRpdW1cIixcbiAgaW1hZ2VCb3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICBpbWFnZUJvcmRlckNvbG9yOiBcInZhcigtLWludGVyYWN0aXZlLWFjY2VudClcIixcbiAgZ2FsbGVyeToge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC40NSlcIixcbiAgICBob3ZlckNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgIGFjdGl2ZUJvcmRlckNvbG9yOiBcInZhcigtLWludGVyYWN0aXZlLWFjY2VudClcIixcbiAgICBoaWdobGlnaHRBY3RpdmVCb3JkZXI6IHRydWVcbiAgfSxcbiAgaW50ZXJhY3Rpb246IHtcbiAgICBlbmFibGVNb2JpbGVHZXN0dXJlczogdHJ1ZSxcbiAgICBlbmFibGVEb3VibGVUYXBab29tOiB0cnVlLFxuICAgIGxvbmdQcmVzc01lbnVNczogNDUwXG4gIH1cbn07XG5cbi8qKlxuICogXHU3MEVEXHU5NTJFXHU0RTBCXHU2MkM5XHU5MTREXHU3RjZFXHUzMDAyXG4gKi9cbmNvbnN0IEhPVEtFWV9PUFRJT05TOiBSZWNvcmQ8SG90a2V5TW9kaWZpZXIsIHN0cmluZz4gPSB7XG4gIFtIb3RrZXlNb2RpZmllci5Ob25lXTogXCJOb25lXCIsXG4gIFtIb3RrZXlNb2RpZmllci5DdHJsXTogXCJDdHJsXCIsXG4gIFtIb3RrZXlNb2RpZmllci5BbHRdOiBcIkFsdFwiLFxuICBbSG90a2V5TW9kaWZpZXIuU2hpZnRdOiBcIlNoaWZ0XCIsXG4gIFtIb3RrZXlNb2RpZmllci5DdHJsQWx0XTogXCJDdHJsICsgQWx0XCIsXG4gIFtIb3RrZXlNb2RpZmllci5DdHJsU2hpZnRdOiBcIkN0cmwgKyBTaGlmdFwiLFxuICBbSG90a2V5TW9kaWZpZXIuU2hpZnRBbHRdOiBcIlNoaWZ0ICsgQWx0XCIsXG4gIFtIb3RrZXlNb2RpZmllci5DdHJsU2hpZnRBbHRdOiBcIkN0cmwgKyBTaGlmdCArIEFsdFwiXG59O1xuXG4vKipcbiAqIFx1OEJCRVx1N0Y2RVx1OTg3NVx1NUI5RVx1NzNCMFx1MzAwMlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VzUHJldmlld1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IEltYWdlc1ByZXZpZXdQbHVnaW47XG5cbiAgLyoqXG4gICAqIFx1Njc4NFx1OTAyMFx1OEJCRVx1N0Y2RVx1OTg3NVx1MzAwMlxuICAgKi9cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogSW1hZ2VzUHJldmlld1BsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZCQ0ZcdTZCMjFcdTYyNTNcdTVGMDBcdThCQkVcdTdGNkVcdTk4NzVcdTY1RjZcdTUyMzdcdTY1QjBcdTUxODVcdTVCQjlcdTMwMDJcbiAgICovXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0KFwic2V0dGluZ3MudGl0bGVcIiwgdGhpcy5hcHApKVxuICAgICAgLnNldEhlYWRpbmcoKTtcblxuICAgIHRoaXMucmVuZGVyTGFuZ3VhZ2VTZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlck1vZGVTZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRyaWdnZXJTZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclBpblNldHRpbmcoY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVmlld1NldHRpbmcoY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVySG90a2V5U2V0dGluZyhjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJNb2JpbGVTZXR0aW5nKGNvbnRhaW5lckVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMzJcdTY3RDNcdTc1NENcdTk3NjJcdThCRURcdThBMDBcdTkxNERcdTdGNkVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyTGFuZ3VhZ2VTZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLnVpTGFuZ3VhZ2VcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oVUlMYW5ndWFnZS5BdXRvLCB0KFwibGFuZ3VhZ2UuYXV0b1wiLCB0aGlzLmFwcCkpXG4gICAgICAgICAgLmFkZE9wdGlvbihVSUxhbmd1YWdlLlpoLCB0KFwibGFuZ3VhZ2UuemhcIiwgdGhpcy5hcHApKVxuICAgICAgICAgIC5hZGRPcHRpb24oVUlMYW5ndWFnZS5FbiwgdChcImxhbmd1YWdlLmVuXCIsIHRoaXMuYXBwKSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudWlMYW5ndWFnZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51aUxhbmd1YWdlID0gdmFsdWUgYXMgVUlMYW5ndWFnZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMzJcdTY3RDNcdTZBMjFcdTVGMEZcdTkxNERcdTdGNkVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyTW9kZVNldHRpbmcoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0KFwic2V0dGluZ3MubW9kZVwiLCB0aGlzLmFwcCkpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbihQcmV2aWV3TW9kZS5Ob3JtYWwsIHQoXCJtb2RlLm5vcm1hbFwiLCB0aGlzLmFwcCkpXG4gICAgICAgICAgLmFkZE9wdGlvbihQcmV2aWV3TW9kZS5QaW4sIHQoXCJtb2RlLnBpblwiLCB0aGlzLmFwcCkpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm1vZGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kZSA9IHZhbHVlIGFzIFByZXZpZXdNb2RlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5jb250cm9sbGVyLnN5bmNNb2RlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMzJcdTY3RDNcdTg5RTZcdTUzRDFcdTgzMDNcdTU2RjRcdTRFMEVcdTk0RkVcdTYzQTVcdTU2RkVcdTcyNDdcdTkxNERcdTdGNkVcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgcmVuZGVyVHJpZ2dlclNldHRpbmcoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgdHJpZ2dlclNjb3BlU2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLnRyaWdnZXJTY29wZVwiLCB0aGlzLmFwcCkpXG4gICAgICAuc2V0RGVzYyh0KFwic2V0dGluZ3MudHJpZ2dlclNjb3BlSGludFwiLCB0aGlzLmFwcCkpO1xuXG4gICAgdHJpZ2dlclNjb3BlU2V0dGluZy5hZGREcm9wZG93bigoZHJvcGRvd24pID0+IHtcbiAgICAgIGRyb3Bkb3duXG4gICAgICAgIC5hZGRPcHRpb24oVHJpZ2dlclNjb3BlLk1hcmtkb3duT25seSwgdChcInNjb3BlLm1hcmtkb3duXCIsIHRoaXMuYXBwKSlcbiAgICAgICAgLmFkZE9wdGlvbihUcmlnZ2VyU2NvcGUuTWFya2Rvd25BbmRDb21tb24sIHQoXCJzY29wZS5jb21tb25cIiwgdGhpcy5hcHApKVxuICAgICAgICAuYWRkT3B0aW9uKFRyaWdnZXJTY29wZS5HbG9iYWwsIHQoXCJzY29wZS5nbG9iYWxcIiwgdGhpcy5hcHApKVxuICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlclNjb3BlKVxuICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudHJpZ2dlclNjb3BlID0gdmFsdWUgYXMgVHJpZ2dlclNjb3BlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLmNvbnRyb2xsZXIucmVmcmVzaFNlbGVjdG9ycygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLmluY2x1ZGVMaW5rZWRcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5pbmNsdWRlTGlua2VkSW1hZ2VzKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmluY2x1ZGVMaW5rZWRJbWFnZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uY29udHJvbGxlci5yZWZyZXNoU2VsZWN0b3JzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTZFMzJcdTY3RDMgUGluIFx1NkEyMVx1NUYwRlx1NTNDMlx1NjU3MFx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJQaW5TZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHBpbk1heGltdW1TZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldHRpbmdzLnBpbk1heGltdW1cIiwgdGhpcy5hcHApKTtcbiAgICBjb25zdCB1cGRhdGVQaW5NYXhpbXVtSGludCA9ICh2YWx1ZTogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICBwaW5NYXhpbXVtU2V0dGluZy5zZXREZXNjKFxuICAgICAgICB0KFwic2V0dGluZ3MucGluTWF4aW11bUhpbnRcIiwgdGhpcy5hcHApLnJlcGxhY2UoXCJ7Y291bnR9XCIsIFN0cmluZyh2YWx1ZSkpXG4gICAgICApO1xuICAgIH07XG4gICAgdXBkYXRlUGluTWF4aW11bUhpbnQodGhpcy5wbHVnaW4uc2V0dGluZ3MucGluTWF4aW11bSk7XG5cbiAgICBwaW5NYXhpbXVtU2V0dGluZy5hZGRTbGlkZXIoKHNsaWRlcikgPT4ge1xuICAgICAgc2xpZGVyXG4gICAgICAgIC5zZXRMaW1pdHMoMSwgNiwgMSlcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnBpbk1heGltdW0pXG4gICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5waW5NYXhpbXVtID0gdmFsdWU7XG4gICAgICAgICAgdXBkYXRlUGluTWF4aW11bUhpbnQodmFsdWUpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLnBpbkNvdmVyTW9kZVwiLCB0aGlzLmFwcCkpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnBpbkNvdmVyTW9kZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5waW5Db3Zlck1vZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RTMyXHU2N0QzXHU4OUM2XHU4OUM5XHU0RTBFXHU3NTNCXHU1RUNBXHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlbmRlclZpZXdTZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLmdhbGxlcnlcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5nYWxsZXJ5LmVuYWJsZWQpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZ2FsbGVyeS5lbmFibGVkID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgbW92ZVNwZWVkU2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXR0aW5ncy5tb3ZlU3BlZWRcIiwgdGhpcy5hcHApKTtcbiAgICBjb25zdCB1cGRhdGVNb3ZlU3BlZWRIaW50ID0gKHZhbHVlOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgIG1vdmVTcGVlZFNldHRpbmcuc2V0RGVzYyhcbiAgICAgICAgdChcInNldHRpbmdzLm1vdmVTcGVlZEhpbnRcIiwgdGhpcy5hcHApLnJlcGxhY2UoXCJ7c3BlZWR9XCIsIFN0cmluZyh2YWx1ZSkpXG4gICAgICApO1xuICAgIH07XG4gICAgdXBkYXRlTW92ZVNwZWVkSGludCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb3ZlU3BlZWQpO1xuXG4gICAgbW92ZVNwZWVkU2V0dGluZy5hZGRTbGlkZXIoKHNsaWRlcikgPT4ge1xuICAgICAgc2xpZGVyXG4gICAgICAgIC5zZXRMaW1pdHMoMSwgMzAsIDEpXG4gICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb3ZlU3BlZWQpXG4gICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb3ZlU3BlZWQgPSB2YWx1ZTtcbiAgICAgICAgICB1cGRhdGVNb3ZlU3BlZWRIaW50KHZhbHVlKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogXHU2RTMyXHU2N0QzXHU3MEVEXHU5NTJFXHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIHJlbmRlckhvdGtleVNldHRpbmcoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSh0KFwic2V0dGluZ3MubW92ZUhvdGtleVwiLCB0aGlzLmFwcCkpXG4gICAgICAuc2V0RGVzYyh0KFwic2V0dGluZ3MubW92ZUhvdGtleUhpbnRcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgICB0aGlzLmZpbGxIb3RrZXlPcHRpb25zKGRyb3Bkb3duLCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb3ZlSG90a2V5LCBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tb3ZlSG90a2V5ID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKHQoXCJzZXR0aW5ncy5zd2l0Y2hIb3RrZXlcIiwgdGhpcy5hcHApKVxuICAgICAgLnNldERlc2ModChcInNldHRpbmdzLnN3aXRjaEhvdGtleUhpbnRcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuICAgICAgICB0aGlzLmZpbGxIb3RrZXlPcHRpb25zKGRyb3Bkb3duLCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zd2l0Y2hIb3RrZXksIGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN3aXRjaEhvdGtleSA9IHZhbHVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NkUzMlx1NjdEM1x1NzlGQlx1NTJBOFx1N0FFRlx1NEVBNFx1NEU5Mlx1OTE0RFx1N0Y2RVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJNb2JpbGVTZXR0aW5nKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUodChcInNldHRpbmdzLm1vYmlsZUdlc3R1cmVcIiwgdGhpcy5hcHApKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5pbnRlcmFjdGlvbi5lbmFibGVNb2JpbGVHZXN0dXJlcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pbnRlcmFjdGlvbi5lbmFibGVNb2JpbGVHZXN0dXJlcyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTdFREZcdTRFMDBcdTU4NkJcdTUxNDVcdTcwRURcdTk1MkVcdTRFMEJcdTYyQzlcdTMwMDJcbiAgICovXG4gIHByaXZhdGUgZmlsbEhvdGtleU9wdGlvbnMoXG4gICAgZHJvcGRvd246IGltcG9ydChcIm9ic2lkaWFuXCIpLkRyb3Bkb3duQ29tcG9uZW50LFxuICAgIHZhbHVlOiBIb3RrZXlNb2RpZmllcixcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBIb3RrZXlNb2RpZmllcikgPT4gUHJvbWlzZTx2b2lkPlxuICApOiB2b2lkIHtcbiAgICBPYmplY3QudmFsdWVzKEhvdGtleU1vZGlmaWVyKS5mb3JFYWNoKChob3RrZXkpID0+IHtcbiAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihob3RrZXksIEhPVEtFWV9PUFRJT05TW2hvdGtleV0pO1xuICAgIH0pO1xuXG4gICAgZHJvcGRvd24uc2V0VmFsdWUodmFsdWUpLm9uQ2hhbmdlKGFzeW5jIChzZWxlY3RlZCkgPT4ge1xuICAgICAgYXdhaXQgb25DaGFuZ2Uoc2VsZWN0ZWQgYXMgSG90a2V5TW9kaWZpZXIpO1xuICAgIH0pO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IERFRkFVTFRfU0VUVElOR1MsIFNFVFRJTkdTX1NDSEVNQV9WRVJTSU9OIH0gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5pbXBvcnQge1xuICBIb3RrZXlNb2RpZmllcixcbiAgUGx1Z2luU2V0dGluZ3MsXG4gIFByZXZpZXdNb2RlLFxuICBUcmlnZ2VyU2NvcGUsXG4gIFVJTGFuZ3VhZ2UsXG4gIHR5cGUgR2FsbGVyeVRoZW1lLFxuICB0eXBlIEludGVyYWN0aW9uUHJvZmlsZVxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBcdThCQkVcdTdGNkVcdTVCNThcdTUwQThcdTY3MERcdTUyQTFcdTMwMDJcbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RvcmUge1xuICBwcml2YXRlIHJlYWRvbmx5IHBsdWdpbjogUGx1Z2luO1xuXG4gIC8qKlxuICAgKiBcdTY3ODRcdTkwMjBcdThCQkVcdTdGNkVcdTY3MERcdTUyQTFcdTMwMDJcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogUGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvKipcbiAgICogXHU4QkZCXHU1M0Q2XHU5MTREXHU3RjZFXHU1RTc2XHU1MDVBXHU4RkMxXHU3OUZCXHU1NDhDXHU1MTVDXHU1RTk1XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9hZCgpOiBQcm9taXNlPFBsdWdpblNldHRpbmdzPiB7XG4gICAgY29uc3QgcmF3ID0gKGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCkpIGFzIFBhcnRpYWw8UGx1Z2luU2V0dGluZ3M+IHwgbnVsbDtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUocmF3KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcdTYzMDFcdTRFNDVcdTUzMTZcdTkxNERcdTdGNkVcdTMwMDJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzYXZlKHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMubm9ybWFsaXplKHNldHRpbmdzKSk7XG4gIH1cblxuICAvKipcbiAgICogXHU1NDA4XHU1RTc2XHU5RUQ4XHU4QkE0XHU1MDNDXHU1RTc2XHU0RkVFXHU1OTBEXHU5NzVFXHU2Q0Q1XHU1QjU3XHU2QkI1XHUzMDAyXG4gICAqL1xuICBwdWJsaWMgbm9ybWFsaXplKGlucHV0OiBQYXJ0aWFsPFBsdWdpblNldHRpbmdzPiB8IG51bGwgfCB1bmRlZmluZWQpOiBQbHVnaW5TZXR0aW5ncyB7XG4gICAgY29uc3QgbWVyZ2VkOiBQbHVnaW5TZXR0aW5ncyA9IHtcbiAgICAgIC4uLkRFRkFVTFRfU0VUVElOR1MsXG4gICAgICAuLi5pbnB1dCxcbiAgICAgIHNjaGVtYVZlcnNpb246IFNFVFRJTkdTX1NDSEVNQV9WRVJTSU9OLFxuICAgICAgZ2FsbGVyeTogdGhpcy5ub3JtYWxpemVHYWxsZXJ5KGlucHV0Py5nYWxsZXJ5KSxcbiAgICAgIGludGVyYWN0aW9uOiB0aGlzLm5vcm1hbGl6ZUludGVyYWN0aW9uKGlucHV0Py5pbnRlcmFjdGlvbilcbiAgICB9O1xuXG4gICAgbWVyZ2VkLm1vZGUgPSB0aGlzLmVuc3VyZUVudW0obWVyZ2VkLm1vZGUsIE9iamVjdC52YWx1ZXMoUHJldmlld01vZGUpLCBERUZBVUxUX1NFVFRJTkdTLm1vZGUpO1xuICAgIG1lcmdlZC50cmlnZ2VyU2NvcGUgPSB0aGlzLmVuc3VyZUVudW0oXG4gICAgICBtZXJnZWQudHJpZ2dlclNjb3BlLFxuICAgICAgT2JqZWN0LnZhbHVlcyhUcmlnZ2VyU2NvcGUpLFxuICAgICAgREVGQVVMVF9TRVRUSU5HUy50cmlnZ2VyU2NvcGVcbiAgICApO1xuICAgIG1lcmdlZC5tb3ZlSG90a2V5ID0gdGhpcy5lbnN1cmVFbnVtKFxuICAgICAgbWVyZ2VkLm1vdmVIb3RrZXksXG4gICAgICBPYmplY3QudmFsdWVzKEhvdGtleU1vZGlmaWVyKSxcbiAgICAgIERFRkFVTFRfU0VUVElOR1MubW92ZUhvdGtleVxuICAgICk7XG4gICAgbWVyZ2VkLnN3aXRjaEhvdGtleSA9IHRoaXMuZW5zdXJlRW51bShcbiAgICAgIG1lcmdlZC5zd2l0Y2hIb3RrZXksXG4gICAgICBPYmplY3QudmFsdWVzKEhvdGtleU1vZGlmaWVyKSxcbiAgICAgIERFRkFVTFRfU0VUVElOR1Muc3dpdGNoSG90a2V5XG4gICAgKTtcbiAgICBtZXJnZWQudWlMYW5ndWFnZSA9IHRoaXMuZW5zdXJlRW51bShcbiAgICAgIG1lcmdlZC51aUxhbmd1YWdlLFxuICAgICAgT2JqZWN0LnZhbHVlcyhVSUxhbmd1YWdlKSxcbiAgICAgIERFRkFVTFRfU0VUVElOR1MudWlMYW5ndWFnZVxuICAgICk7XG5cbiAgICBtZXJnZWQuaW5jbHVkZUxpbmtlZEltYWdlcyA9IEJvb2xlYW4obWVyZ2VkLmluY2x1ZGVMaW5rZWRJbWFnZXMpO1xuICAgIG1lcmdlZC5waW5Db3Zlck1vZGUgPSBCb29sZWFuKG1lcmdlZC5waW5Db3Zlck1vZGUpO1xuICAgIG1lcmdlZC5zaG93SW1hZ2VUb29sdGlwID0gQm9vbGVhbihtZXJnZWQuc2hvd0ltYWdlVG9vbHRpcCk7XG4gICAgbWVyZ2VkLmltYWdlQm9yZGVyRW5hYmxlZCA9IEJvb2xlYW4obWVyZ2VkLmltYWdlQm9yZGVyRW5hYmxlZCk7XG5cbiAgICBtZXJnZWQubW92ZVNwZWVkID0gdGhpcy5jbGFtcCh0aGlzLnNhZmVOdW1iZXIobWVyZ2VkLm1vdmVTcGVlZCwgREVGQVVMVF9TRVRUSU5HUy5tb3ZlU3BlZWQpLCAxLCAzMCk7XG4gICAgbWVyZ2VkLnBpbk1heGltdW0gPSB0aGlzLmNsYW1wKHRoaXMuc2FmZU51bWJlcihtZXJnZWQucGluTWF4aW11bSwgREVGQVVMVF9TRVRUSU5HUy5waW5NYXhpbXVtKSwgMSwgNik7XG5cbiAgICBtZXJnZWQuaW1hZ2VCb3JkZXJXaWR0aCA9IHRoaXMuc2FmZVN0cmluZyhtZXJnZWQuaW1hZ2VCb3JkZXJXaWR0aCwgREVGQVVMVF9TRVRUSU5HUy5pbWFnZUJvcmRlcldpZHRoKTtcbiAgICBtZXJnZWQuaW1hZ2VCb3JkZXJTdHlsZSA9IHRoaXMuc2FmZVN0cmluZyhtZXJnZWQuaW1hZ2VCb3JkZXJTdHlsZSwgREVGQVVMVF9TRVRUSU5HUy5pbWFnZUJvcmRlclN0eWxlKTtcbiAgICBtZXJnZWQuaW1hZ2VCb3JkZXJDb2xvciA9IHRoaXMuc2FmZVN0cmluZyhtZXJnZWQuaW1hZ2VCb3JkZXJDb2xvciwgREVGQVVMVF9TRVRUSU5HUy5pbWFnZUJvcmRlckNvbG9yKTtcblxuICAgIHJldHVybiBtZXJnZWQ7XG4gIH1cblxuICAvKipcbiAgICogXHU1MTVDXHU1RTk1XHU3NTNCXHU1RUNBXHU5MTREXHU3RjZFXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbGl6ZUdhbGxlcnkoaW5wdXQ6IFBhcnRpYWw8R2FsbGVyeVRoZW1lPiB8IG51bGwgfCB1bmRlZmluZWQpOiBHYWxsZXJ5VGhlbWUge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLmdhbGxlcnksXG4gICAgICAuLi5pbnB1dCxcbiAgICAgIGVuYWJsZWQ6IEJvb2xlYW4oaW5wdXQ/LmVuYWJsZWQgPz8gREVGQVVMVF9TRVRUSU5HUy5nYWxsZXJ5LmVuYWJsZWQpLFxuICAgICAgaGlnaGxpZ2h0QWN0aXZlQm9yZGVyOiBCb29sZWFuKFxuICAgICAgICBpbnB1dD8uaGlnaGxpZ2h0QWN0aXZlQm9yZGVyID8/IERFRkFVTFRfU0VUVElOR1MuZ2FsbGVyeS5oaWdobGlnaHRBY3RpdmVCb3JkZXJcbiAgICAgICksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc2FmZVN0cmluZyhcbiAgICAgICAgaW5wdXQ/LmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgREVGQVVMVF9TRVRUSU5HUy5nYWxsZXJ5LmJhY2tncm91bmRDb2xvclxuICAgICAgKSxcbiAgICAgIGhvdmVyQ29sb3I6IHRoaXMuc2FmZVN0cmluZyhpbnB1dD8uaG92ZXJDb2xvciwgREVGQVVMVF9TRVRUSU5HUy5nYWxsZXJ5LmhvdmVyQ29sb3IpLFxuICAgICAgYWN0aXZlQm9yZGVyQ29sb3I6IHRoaXMuc2FmZVN0cmluZyhcbiAgICAgICAgaW5wdXQ/LmFjdGl2ZUJvcmRlckNvbG9yLFxuICAgICAgICBERUZBVUxUX1NFVFRJTkdTLmdhbGxlcnkuYWN0aXZlQm9yZGVyQ29sb3JcbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NTE1Q1x1NUU5NVx1NEVBNFx1NEU5Mlx1OTE0RFx1N0Y2RVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVJbnRlcmFjdGlvbihcbiAgICBpbnB1dDogUGFydGlhbDxJbnRlcmFjdGlvblByb2ZpbGU+IHwgbnVsbCB8IHVuZGVmaW5lZFxuICApOiBJbnRlcmFjdGlvblByb2ZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLmludGVyYWN0aW9uLFxuICAgICAgLi4uaW5wdXQsXG4gICAgICBlbmFibGVNb2JpbGVHZXN0dXJlczogQm9vbGVhbihcbiAgICAgICAgaW5wdXQ/LmVuYWJsZU1vYmlsZUdlc3R1cmVzID8/IERFRkFVTFRfU0VUVElOR1MuaW50ZXJhY3Rpb24uZW5hYmxlTW9iaWxlR2VzdHVyZXNcbiAgICAgICksXG4gICAgICBlbmFibGVEb3VibGVUYXBab29tOiBCb29sZWFuKFxuICAgICAgICBpbnB1dD8uZW5hYmxlRG91YmxlVGFwWm9vbSA/PyBERUZBVUxUX1NFVFRJTkdTLmludGVyYWN0aW9uLmVuYWJsZURvdWJsZVRhcFpvb21cbiAgICAgICksXG4gICAgICBsb25nUHJlc3NNZW51TXM6IHRoaXMuY2xhbXAoXG4gICAgICAgIHRoaXMuc2FmZU51bWJlcihpbnB1dD8ubG9uZ1ByZXNzTWVudU1zLCBERUZBVUxUX1NFVFRJTkdTLmludGVyYWN0aW9uLmxvbmdQcmVzc01lbnVNcyksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwMFxuICAgICAgKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogXHU2ODIxXHU5QThDXHU2NzlBXHU0RTNFXHU1MDNDXHUzMDAyXG4gICAqL1xuICBwcml2YXRlIGVuc3VyZUVudW08VCBleHRlbmRzIHN0cmluZz4oXG4gICAgdmFsdWU6IHVua25vd24sXG4gICAgdmFsaWRWYWx1ZXM6IHJlYWRvbmx5IFRbXSxcbiAgICBmYWxsYmFjazogVFxuICApOiBUIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiAodmFsaWRWYWx1ZXMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKSA/ICh2YWx1ZSBhcyBUKSA6IGZhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NUI4OVx1NTE2OFx1OEJGQlx1NTNENlx1NUI1N1x1N0IyNlx1NEUzMlx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBzYWZlU3RyaW5nKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLmxlbmd0aCA+IDAgPyB2YWx1ZSA6IGZhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NUI4OVx1NTE2OFx1OEJGQlx1NTNENlx1NjU3MFx1NUI1N1x1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBzYWZlTnVtYmVyKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFx1NjU3MFx1NTAzQ1x1ODhDMVx1NTI2QVx1MzAwMlxuICAgKi9cbiAgcHJpdmF0ZSBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUEsbUJBQStCOzs7QUMyRC9CLElBQU0sVUFBc0Q7QUFBQSxFQUMxRCxJQUFJO0FBQUEsSUFDRixrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxJQUN2Qix5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a0IsS0FBSyxHQUFHO0FBQUEsTUFDbEMsVUFBVSxZQUFZO0FBQ3BCLGNBQU0sT0FBTyxLQUFLLFdBQVcsV0FBVztBQUN4QyxjQUFNLEtBQUssYUFBYTtBQUN4QixZQUFJLHdCQUFPLGlDQUE4QixFQUFFLGVBQWUsS0FBSyxHQUFHLElBQUksRUFBRSxZQUFZLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFDL0Y7QUFBQSxJQUNGLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU0sRUFBRSxpQkFBaUIsS0FBSyxHQUFHO0FBQUEsTUFDakMsVUFBVSxNQUFNO0FBQ2QsYUFBSyxXQUFXLG1CQUFtQjtBQUFBLE1BQ3JDO0FBQUEsSUFDRixDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNLEVBQUUsZ0JBQWdCLEtBQUssR0FBRztBQUFBLE1BQ2hDLFVBQVUsTUFBTTtBQUNkLGFBQUssV0FBVyxrQkFBa0I7QUFBQSxNQUNwQztBQUFBLElBQ0YsQ0FBQztBQUVELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTSxFQUFFLGdCQUFnQixLQUFLLEdBQUc7QUFBQSxNQUNoQyxVQUFVLE1BQU07QUFDZCxhQUFLLFdBQVcsc0JBQXNCO0FBQUEsTUFDeEM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiUHJldmlld01vZGUiLCAiVHJpZ2dlclNjb3BlIiwgIkhvdGtleU1vZGlmaWVyIiwgIlVJTGFuZ3VhZ2UiLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiJdCn0K

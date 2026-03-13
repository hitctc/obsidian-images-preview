import type { InputCallbacks } from "../types";

/**
 * 输入适配层：把鼠标/触摸事件统一映射为控制层回调。
 */
export class InputAdapter {
  // 120px 近似一次传统滚轮刻度；用于把不同设备输入统一到同一尺度。
  private static readonly WHEEL_STEP_PIXELS = 120;
  // 轻微提高单步上限，防止触控板或惯性滚动出现突兀跳变。
  private static readonly WHEEL_MAX_STEP = 1.25;
  // 传统滚轮一步对应约 12% 缩放，保留鼠标滚轮手感。
  private static readonly WHEEL_BASE_FACTOR = 1.12;
  // 行模式转像素的经验值，便于兼容不同浏览器的 deltaMode。
  private static readonly WHEEL_LINE_HEIGHT_PIXELS = 16;

  private readonly doc: Document;
  private readonly callbacks: InputCallbacks;

  private dragging = false;
  private pinchDistance = 0;
  private lastTapAt = 0;
  private longPressTimer: number | null = null;

  /**
   * 构造输入适配层。
   */
  constructor(doc: Document, callbacks: InputCallbacks) {
    this.doc = doc;
    this.callbacks = callbacks;
  }

  /**
   * 绑定到图片元素。
   */
  public bind(imageEl: HTMLImageElement): () => void {
    const onMouseDown = (event: MouseEvent): void => {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      this.callbacks.onFocus();
      this.dragging = true;
      this.callbacks.onDragStart(event.clientX, event.clientY);
    };

    const onMouseMove = (event: MouseEvent): void => {
      if (!this.dragging) {
        return;
      }
      event.preventDefault();
      this.callbacks.onDragMove(event.clientX, event.clientY);
    };

    const onMouseUp = (): void => {
      if (!this.dragging) {
        return;
      }
      this.dragging = false;
      this.callbacks.onDragEnd();
    };

    const onWheel = (event: WheelEvent): void => {
      event.preventDefault();
      this.callbacks.onFocus();
      const factor = this.computeWheelZoomFactor(event);
      if (Math.abs(factor - 1) < 0.001) {
        return;
      }
      this.callbacks.onWheelZoom(factor, event.clientX, event.clientY);
    };

    const onDoubleClick = (): void => {
      this.callbacks.onDoubleTap();
    };

    const onContextMenu = (event: MouseEvent): void => {
      event.preventDefault();
      this.callbacks.onLongPressMenu(event.clientX, event.clientY);
    };

    const onTouchStart = (event: TouchEvent): void => {
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

    const onTouchMove = (event: TouchEvent): void => {
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

    const onTouchEnd = (): void => {
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
  private detectDoubleTap(): void {
    const now = Date.now();
    if (now - this.lastTapAt <= 260) {
      this.callbacks.onDoubleTap();
    }
    this.lastTapAt = now;
  }

  /**
   * 准备长按菜单。
   */
  private prepareLongPress(clientX: number, clientY: number): void {
    this.clearLongPress();
    this.longPressTimer = window.setTimeout(() => {
      this.callbacks.onLongPressMenu(clientX, clientY);
    }, 450);
  }

  /**
   * 清理长按计时器。
   */
  private clearLongPress(): void {
    if (this.longPressTimer === null) {
      return;
    }
    window.clearTimeout(this.longPressTimer);
    this.longPressTimer = null;
  }

  /**
   * 计算双指距离。
   */
  private measureTouchDistance(first: Touch, second: Touch): number {
    const dx = first.clientX - second.clientX;
    const dy = first.clientY - second.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * 计算滚轮缩放倍率。
   * 说明：先把 delta 统一成像素，再限制单次输入幅度，最后映射为平滑倍率。
   */
  private computeWheelZoomFactor(event: WheelEvent): number {
    const pixelDeltaY = this.normalizeWheelDeltaY(event);
    if (!Number.isFinite(pixelDeltaY) || pixelDeltaY === 0) {
      return 1;
    }

    const normalizedStep = this.clamp(
      pixelDeltaY / InputAdapter.WHEEL_STEP_PIXELS,
      -InputAdapter.WHEEL_MAX_STEP,
      InputAdapter.WHEEL_MAX_STEP
    );

    return Math.pow(InputAdapter.WHEEL_BASE_FACTOR, -normalizedStep);
  }

  /**
   * 把不同 deltaMode 统一换算成像素。
   */
  private normalizeWheelDeltaY(event: WheelEvent): number {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
      return event.deltaY * InputAdapter.WHEEL_LINE_HEIGHT_PIXELS;
    }
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      const pageHeight =
        this.doc.documentElement.clientHeight || this.doc.body?.clientHeight || window.innerHeight || 800;
      return event.deltaY * pageHeight;
    }
    return event.deltaY;
  }

  /**
   * 数值限幅，避免单次缩放跳变过大。
   */
  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}

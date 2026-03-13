import type { Offset, TransformState, ZoomAnchor } from "../types";

/**
 * 图片变换引擎。
 * 纯函数式返回新状态，避免 UI 层直接写入状态导致竞态。
 */
export class ImageTransformEngine {
  private static readonly MIN_SIZE = 30;
  private static readonly MAX_RATIO = 20;

  /**
   * 创建初始状态并按视口做自适应。
   */
  public static createInitialState(
    naturalWidth: number,
    naturalHeight: number,
    viewportWidth: number,
    viewportHeight: number,
    reservedBottom = 0
  ): TransformState {
    const safeNaturalWidth = Math.max(1, naturalWidth);
    const safeNaturalHeight = Math.max(1, naturalHeight);
    const safeViewportWidth = Math.max(1, viewportWidth);
    const safeViewportHeight = Math.max(1, viewportHeight);

    // 预留底部固定 UI 空间，避免高长图时名称被底栏遮挡。
    const safeReservedBottom = Math.max(0, Math.min(reservedBottom, safeViewportHeight - 1));
    const availableHeight = Math.max(1, safeViewportHeight - safeReservedBottom);

    // 首屏默认使用 80% 可视区域，避免遮挡过满。
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
  public static fitToViewport(
    current: TransformState,
    viewportWidth: number,
    viewportHeight: number,
    reservedBottom = 0
  ): TransformState {
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
  public static zoomToActual(
    current: TransformState,
    viewportWidth: number,
    viewportHeight: number,
    reservedBottom = 0
  ): TransformState {
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
  public static zoomAt(
    current: TransformState,
    scaleFactor: number,
    anchor: ZoomAnchor
  ): TransformState {
    if (!Number.isFinite(scaleFactor) || scaleFactor <= 0) {
      return current;
    }

    const nextWidth = this.clampSize(current.width * scaleFactor, current.naturalWidth);
    const nextHeight = (nextWidth / current.naturalWidth) * current.naturalHeight;

    // 核心修正：按锚点反推 left/top，避免连续缩放漂移。
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
  public static moveBy(current: TransformState, offset: Offset): TransformState {
    return {
      ...current,
      left: current.left + offset.x,
      top: current.top + offset.y
    };
  }

  /**
   * 限制最小尺寸与最大倍率。
   */
  private static clampSize(next: number, naturalWidth: number): number {
    const minWidth = this.MIN_SIZE;
    const maxWidth = naturalWidth * this.MAX_RATIO;
    return Math.max(minWidth, Math.min(maxWidth, next));
  }
}

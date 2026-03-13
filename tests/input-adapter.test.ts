import { describe, expect, it, vi } from "vitest";
import { InputAdapter } from "../src/input/input-adapter";
import type { InputCallbacks } from "../src/types";

/**
 * 构造输入回调 mock，便于复用断言。
 */
function createCallbacks(): InputCallbacks {
  return {
    onFocus: vi.fn(),
    onDragStart: vi.fn(),
    onDragMove: vi.fn(),
    onDragEnd: vi.fn(),
    onWheelZoom: vi.fn(),
    onPinchZoom: vi.fn(),
    onDoubleTap: vi.fn(),
    onLongPressMenu: vi.fn()
  };
}

/**
 * 绑定适配器并返回测试上下文。
 */
function setupAdapter(): {
  imageEl: HTMLImageElement;
  callbacks: InputCallbacks;
  unbind: () => void;
} {
  const imageEl = document.createElement("img");
  document.body.appendChild(imageEl);
  const callbacks = createCallbacks();
  const adapter = new InputAdapter(document, callbacks);
  const unbind = adapter.bind(imageEl);
  return { imageEl, callbacks, unbind };
}

/**
 * 派发 wheel 事件并提取缩放倍率。
 */
function dispatchWheelAndGetFactor(
  imageEl: HTMLImageElement,
  callbacks: InputCallbacks,
  options: WheelEventInit
): number {
  const event = new WheelEvent("wheel", { clientX: 32, clientY: 48, cancelable: true, ...options });
  imageEl.dispatchEvent(event);
  const wheelCalls = (callbacks.onWheelZoom as ReturnType<typeof vi.fn>).mock.calls;
  const [factor] = wheelCalls[wheelCalls.length - 1] as [number, number, number];
  return factor;
}

describe("InputAdapter wheel zoom", () => {
  it("uses tiny zoom increments for small trackpad-like deltas", () => {
    const { imageEl, callbacks, unbind } = setupAdapter();
    const factor = dispatchWheelAndGetFactor(imageEl, callbacks, { deltaY: -6 });

    expect((callbacks.onFocus as ReturnType<typeof vi.fn>).mock.calls.length).toBe(1);
    expect((callbacks.onWheelZoom as ReturnType<typeof vi.fn>).mock.calls.length).toBe(1);
    expect(factor).toBeGreaterThan(1);
    expect(factor).toBeLessThan(1.01);

    unbind();
    imageEl.remove();
  });

  it("keeps one wheel notch close to the classic zoom amplitude", () => {
    const { imageEl, callbacks, unbind } = setupAdapter();
    const factor = dispatchWheelAndGetFactor(imageEl, callbacks, { deltaY: 120 });

    expect(factor).toBeCloseTo(Math.pow(1.12, -1), 6);

    unbind();
    imageEl.remove();
  });

  it("clamps extreme delta spikes to avoid sudden jumps", () => {
    const { imageEl, callbacks, unbind } = setupAdapter();
    const factor = dispatchWheelAndGetFactor(imageEl, callbacks, { deltaY: 1200 });

    expect(factor).toBeCloseTo(Math.pow(1.12, -1.25), 6);

    unbind();
    imageEl.remove();
  });

  it("normalizes line-mode wheel delta before computing zoom", () => {
    const { imageEl, callbacks, unbind } = setupAdapter();
    const factor = dispatchWheelAndGetFactor(imageEl, callbacks, {
      deltaY: -3,
      deltaMode: WheelEvent.DOM_DELTA_LINE
    });

    expect(factor).toBeCloseTo(Math.pow(1.12, 0.4), 6);

    unbind();
    imageEl.remove();
  });
});

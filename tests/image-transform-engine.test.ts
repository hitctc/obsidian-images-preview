import { describe, expect, it } from "vitest";
import { ImageTransformEngine } from "../src/core/image-transform-engine";

describe("ImageTransformEngine", () => {
  it("keeps anchor stable while zooming", () => {
    const state = ImageTransformEngine.createInitialState(1000, 500, 1200, 800);
    const anchor = { x: state.left + state.width / 2, y: state.top + state.height / 2 };
    const zoomed = ImageTransformEngine.zoomAt(state, 1.2, anchor);

    const prevAnchorX = (anchor.x - state.left) / state.width;
    const nextAnchorX = (anchor.x - zoomed.left) / zoomed.width;

    expect(Math.abs(prevAnchorX - nextAnchorX)).toBeLessThan(0.001);
    expect(zoomed.zoomRatio).toBeGreaterThan(state.zoomRatio);
  });

  it("clamps minimal size", () => {
    const state = ImageTransformEngine.createInitialState(200, 200, 300, 300);
    let current = state;
    for (let i = 0; i < 20; i++) {
      current = ImageTransformEngine.zoomAt(current, 0.6, { x: 100, y: 100 });
    }

    expect(current.width).toBeGreaterThanOrEqual(30);
    expect(current.height).toBeGreaterThanOrEqual(30);
  });

  it("reserves bottom area for fixed footer ui on tall images", () => {
    const noReserve = ImageTransformEngine.createInitialState(1200, 3600, 1200, 800, 0);
    const withReserve = ImageTransformEngine.createInitialState(1200, 3600, 1200, 800, 200);

    expect(withReserve.height).toBeLessThan(noReserve.height);
    expect(withReserve.top + withReserve.height).toBeLessThan(noReserve.top + noReserve.height);
    expect(withReserve.top + withReserve.height).toBeLessThanOrEqual(800 - 200);
  });
});

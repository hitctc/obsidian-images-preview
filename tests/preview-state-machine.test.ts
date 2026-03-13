import { describe, expect, it } from "vitest";
import { PreviewStateMachine } from "../src/core/preview-state-machine";
import { PreviewState } from "../src/types";

describe("PreviewStateMachine", () => {
  it("runs normal lifecycle", () => {
    const machine = new PreviewStateMachine();
    machine.open();
    machine.startDrag();
    machine.endDrag();
    machine.close();

    expect(machine.getState()).toBe(PreviewState.Idle);
  });

  it("throws on invalid transition", () => {
    const machine = new PreviewStateMachine();
    expect(() => machine.startDrag()).toThrowError();
  });
});

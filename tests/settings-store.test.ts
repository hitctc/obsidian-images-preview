import { describe, expect, it, vi } from "vitest";
import { SettingsStore } from "../src/services/settings-store";
import { PreviewMode, TriggerScope, UILanguage } from "../src/types";

describe("SettingsStore", () => {
  it("normalizes invalid data and merges defaults", () => {
    const plugin = {
      loadData: vi.fn(),
      saveData: vi.fn()
    };

    const store = new SettingsStore(plugin as never);
    const normalized = store.normalize({
      mode: "bad-mode" as PreviewMode,
      triggerScope: TriggerScope.Global,
      moveSpeed: 999,
      pinMaximum: -2,
      uiLanguage: "de" as UILanguage,
      gallery: {
        enabled: true,
        backgroundColor: "",
        hoverColor: "x",
        activeBorderColor: "",
        highlightActiveBorder: true
      }
    });

    expect(normalized.mode).toBe(PreviewMode.Normal);
    expect(normalized.triggerScope).toBe(TriggerScope.Global);
    expect(normalized.moveSpeed).toBe(30);
    expect(normalized.pinMaximum).toBe(1);
    expect(normalized.uiLanguage).toBe(UILanguage.Auto);
    expect(normalized.gallery.backgroundColor.length).toBeGreaterThan(0);
  });

  it("saves normalized settings", async () => {
    const plugin = {
      loadData: vi.fn(),
      saveData: vi.fn().mockResolvedValue(undefined)
    };

    const store = new SettingsStore(plugin as never);
    await store.save({
      ...(store.normalize(undefined)),
      moveSpeed: 100
    });

    expect(plugin.saveData).toHaveBeenCalledOnce();
    const payload = plugin.saveData.mock.calls[0][0];
    expect(payload.moveSpeed).toBe(30);
  });
});

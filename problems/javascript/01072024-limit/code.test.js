import { describe, expect, it, vi } from "vitest";
import limit from "./code";

describe("limit", () => {
  it("stops invoking after the configured count", () => {
    const callback = vi.fn((value) => value * 2);
    const limited = limit(callback, 2);
    expect(limited(2)).toBe(4);
    expect(limited(3)).toBe(6);
    expect(limited(10)).toBe(6);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("preserves this", () => {
    const object = { multiplier: 3, run: limit(function (n) { return this.multiplier * n; }, 1) };
    expect(object.run(4)).toBe(12);
  });
});

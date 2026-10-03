import { describe, expect, it, vi } from "vitest";
import "./code";

describe("Array.prototype.myReduce", () => {
  it("reduces with and without an initial value", () => {
    expect([1, 2, 3].myReduce((sum, value) => sum + value, 0)).toBe(6);
    expect([1, 2, 3].myReduce((sum, value) => sum + value)).toBe(6);
    expect([].myReduce(() => 1, undefined)).toBeUndefined();
  });

  it("skips sparse slots and supplies index and array", () => {
    const callback = vi.fn((sum, value) => sum + value);
    const input = [, 2, , 4];
    expect(input.myReduce(callback, 0)).toBe(6);
    expect(callback.mock.calls.map((call) => call[2])).toEqual([1, 3]);
    expect(callback.mock.calls[0][3]).toBe(input);
  });

  it("throws for an empty input without an initial value", () => {
    expect(() => [].myReduce(() => 0)).toThrow(TypeError);
  });
});

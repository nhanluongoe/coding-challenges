import { describe, expect, it } from "vitest";
import deepEqual from "./code";

describe("deepEqual", () => {
  it("compares nested arrays and objects regardless of key insertion order", () => {
    expect(deepEqual({ a: 1, b: { c: [2] } }, { b: { c: [2] }, a: 1 })).toBe(
      true,
    );
    expect(deepEqual([{ id: 1 }], [{ id: 2 }])).toBe(false);
  });

  it("handles null, arrays, and Object.is primitive semantics", () => {
    expect(deepEqual(null, {})).toBe(false);
    expect(deepEqual([], {})).toBe(false);
    expect(deepEqual(Number.NaN, Number.NaN)).toBe(true);
    expect(deepEqual(-0, 0)).toBe(false);
  });
});

import { describe, expect, it, vi } from "vitest";
import "./code";

describe("Array.prototype.myFilter", () => {
  it("filters with value, index, array, and thisArg", () => {
    const context = { divisor: 2 };
    const callback = vi.fn(function (value, index, array) { return value % this.divisor === 0 && index < array.length; });
    expect([1, 2, 3, 4].myFilter(callback, context)).toEqual([2, 4]);
    expect(callback).toHaveBeenCalledTimes(4);
  });

  it("skips sparse slots and uses the original cached length", () => {
    const values = [1, , 2];
    expect(values.myFilter((value, index, array) => { array.push(4); return value > 0; })).toEqual([1, 2]);
  });
});

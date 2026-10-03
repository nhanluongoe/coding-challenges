import { describe, expect, it } from "vitest";
import "./code";

describe("Array.prototype.myConcat", () => {
  it("combines arrays and values without mutating the receiver", () => {
    const input = [1, 2];
    expect(input.myConcat([3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
    expect(input).toEqual([1, 2]);
  });

  it("only flattens one level", () => {
    expect([].myConcat([[1]], [2])).toEqual([[1], 2]);
  });
});

import { describe, expect, it } from "vitest";
import getMaxProfit from "./code";

describe("getMaxProfit", () => {
  it.each([[[1, 5, 3, 2], 4], [[7, 2, 8, 9], 7], [[9, 7, 4, 1], -2], [[1, 1], 0]])("calculates %#", (prices, expected) => {
    expect(getMaxProfit(prices)).toBe(expected);
  });

  it("requires at least two prices", () => {
    expect(() => getMaxProfit([])).toThrow();
    expect(() => getMaxProfit([1])).toThrow();
  });
});

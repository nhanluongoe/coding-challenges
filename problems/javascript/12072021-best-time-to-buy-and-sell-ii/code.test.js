import { describe, expect, it } from "vitest";
import maxProfit from "./code";

describe("maxProfit with multiple transactions", () => {
  it.each([[[7, 1, 5, 3, 6, 4], 7], [[1, 2, 3, 4, 5], 4], [[7, 6, 4, 3, 1], 0], [[], 0]])("calculates %#", (prices, expected) => {
    expect(maxProfit(prices)).toBe(expected);
  });
});

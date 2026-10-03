import { describe, expect, it } from "vitest";
import maxProfit from "./code";

describe("maxProfit", () => {
  it.each([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
    [[2, 4, 1], 2],
    [[], 0],
  ])("calculates %#", (prices, expected) => {
    expect(maxProfit(prices)).toBe(expected);
  });
});

import { describe, expect, it } from "vitest";
import findSubarrays from "./code";

describe("findSubarrays", () => {
  it("returns every contiguous subarray below the product target", () => {
    expect(findSubarrays([2, 5, 3, 10], 30)).toEqual([
      [2],
      [5],
      [2, 5],
      [3],
      [5, 3],
      [10],
    ]);
  });

  it("handles empty input and targets at or below one", () => {
    expect(findSubarrays([], 10)).toEqual([]);
    expect(findSubarrays([1, 2], 1)).toEqual([]);
  });
});

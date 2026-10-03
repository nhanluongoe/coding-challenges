import { describe, expect, it } from "vitest";
import findAverageOfSubarrays from "./code";

describe("findAverageOfSubarrays", () => {
  it("calculates each fixed-size window", () => {
    expect(findAverageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)).toEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
  });

  it("returns no windows when k exceeds the input", () => {
    expect(findAverageOfSubarrays([1, 2], 3)).toEqual([]);
  });
});

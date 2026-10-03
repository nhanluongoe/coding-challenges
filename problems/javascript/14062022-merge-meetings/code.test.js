import { describe, expect, it } from "vitest";
import mergeRanges from "./code";

describe("mergeRanges", () => {
  it("merges overlapping and touching ranges after sorting", () => {
    const input = [
      { startTime: 5, endTime: 8 },
      { startTime: 1, endTime: 4 },
      { startTime: 3, endTime: 5 },
      { startTime: 10, endTime: 12 },
    ];
    expect(mergeRanges(input)).toEqual([
      { startTime: 1, endTime: 8 },
      { startTime: 10, endTime: 12 },
    ]);
    expect(input[0]).toEqual({ startTime: 5, endTime: 8 });
  });

  it("handles empty and contained ranges", () => {
    expect(mergeRanges([])).toEqual([]);
    expect(mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 3 }])).toEqual([{ startTime: 1, endTime: 8 }]);
  });
});

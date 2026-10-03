import { describe, expect, it } from "vitest";
import searchTriplets from "./code";

describe("searchTriplets", () => {
  it("returns unique zero-sum triplets", () => {
    expect(searchTriplets([-3, 0, 1, 2, -1, 1, -2])).toEqual([
      [-3, 1, 2],
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, 0, 1],
    ]);
  });

  it("handles duplicates and no matches without mutating input", () => {
    const input = [-1, 0, 1, 2, -1, -4];
    expect(searchTriplets(input)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(input).toEqual([-1, 0, 1, 2, -1, -4]);
    expect(searchTriplets([1, 2])).toEqual([]);
  });
});

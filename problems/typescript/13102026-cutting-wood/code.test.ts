import { describe, expect, it } from "vitest";

import findHighestWoodcutterHeight from "./code";

describe("findHighestWoodcutterHeight", () => {
  it("returns the highest setting from the example", () => {
    expect(findHighestWoodcutterHeight([2, 6, 3, 8], 7)).toBe(3);
  });

  it("handles a single tree", () => {
    expect(findHighestWoodcutterHeight([10], 4)).toBe(6);
  });

  it("returns the tallest tree height when no wood is needed", () => {
    expect(findHighestWoodcutterHeight([2, 8, 5], 0)).toBe(8);
  });

  it("returns zero when all available wood is required", () => {
    expect(findHighestWoodcutterHeight([1, 2], 3)).toBe(0);
  });

  it("finds a setting that yields exactly the required wood", () => {
    expect(findHighestWoodcutterHeight([4, 7, 9], 6)).toBe(5);
  });

  it("handles trees with equal heights", () => {
    expect(findHighestWoodcutterHeight([5, 5, 5], 6)).toBe(3);
  });

  it("does not require the tree heights to be sorted", () => {
    expect(findHighestWoodcutterHeight([9, 2, 7, 4], 7)).toBe(4);
  });

  it("returns one below the tallest tree when one meter is needed", () => {
    expect(findHighestWoodcutterHeight([3, 10, 6], 1)).toBe(9);
  });
});

import { describe, expect, it } from "vitest";
import searchInsert from "./code";

describe("searchInsert", () => {
  it.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0],
    [[], 2, 0],
  ])("finds insertion point %#", (values, target, expected) =>
    expect(searchInsert(values, target)).toBe(expected));
});

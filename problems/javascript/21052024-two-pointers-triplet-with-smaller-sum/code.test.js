import { describe, expect, it } from "vitest";
import searchTriplets from "./code";

describe("searchTriplets", () => {
  it.each([
    [[-1, 0, 2, 3], 3, 2],
    [[-1, 4, 2, 1, 3], 5, 4],
    [[], 3, 0],
  ])("counts %#", (values, target, expected) => {
    const copy = [...values];
    expect(searchTriplets(values, target)).toBe(expected);
    expect(values).toEqual(copy);
  });
});

import { describe, expect, it } from "vitest";
import searchTriplet from "./code";

describe("searchTriplet", () => {
  it.each([
    [[-2, 0, 1, 2], 2, 1],
    [[-3, -1, 1, 2], 1, 0],
    [[1, 0, 1, 1], 100, 3],
    [[-1, 2, 1, -4], 1, 2],
  ])("finds closest %#", (values, target, expected) => {
    const original = [...values];
    expect(searchTriplet(values, target)).toBe(expected);
    expect(values).toEqual(original);
  });

  it("prefers the smaller sum on equal distance", () => {
    expect(searchTriplet([-2, 0, 2, 4], 3)).toBe(2);
  });
});

import { describe, expect, it } from "vitest";
import canFillFlight, { canTwoMoviesFillFlight2 } from "./code";

describe.each([
  canFillFlight,
  canTwoMoviesFillFlight2,
])("movie implementation %#", (implementation) => {
  it.each([
    [[2, 4], 6, true],
    [[3, 8], 6, false],
    [[3, 8, 3], 6, true],
    [[4, 3, 2], 5, true],
    [[], 2, false],
  ])("checks %#", (lengths, flight, expected) =>
    expect(implementation(lengths, flight)).toBe(expected));
});

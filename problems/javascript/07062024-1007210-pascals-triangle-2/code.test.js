import { describe, expect, it } from "vitest";
import getRow from "./code";

describe("getRow", () => {
  it.each([
    [0, [1]],
    [1, [1, 1]],
    [3, [1, 3, 3, 1]],
    [5, [1, 5, 10, 10, 5, 1]],
  ])("returns row %i", (row, expected) => {
    expect(getRow(row)).toEqual(expected);
  });
});

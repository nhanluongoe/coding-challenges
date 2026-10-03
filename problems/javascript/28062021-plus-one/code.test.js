import { describe, expect, it } from "vitest";
import plusOne from "./code";

describe("plusOne", () => {
  it.each([[[1, 2, 3], [1, 2, 4]], [[4, 3, 2, 1], [4, 3, 2, 2]], [[9], [1, 0]], [[9, 9], [1, 0, 0]], [[0], [1]]])("increments %#", (digits, expected) => {
    expect(plusOne(digits)).toEqual(expected);
  });
});

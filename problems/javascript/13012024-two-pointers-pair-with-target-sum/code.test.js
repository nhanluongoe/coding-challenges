import { describe, expect, it } from "vitest";
import search from "./code";

describe("search", () => {
  it.each([
    [[2, 5, 9, 11], 11, [0, 2]],
    [[1, 2, 3, 4, 6], 6, [1, 3]],
    [[-3, -1, 2, 4], 1, [0, 3]],
    [[1], 2, [-1, -1]],
  ])("finds pair indices %#", (values, target, expected) => {
    expect(search(values, target)).toEqual(expected);
  });
});

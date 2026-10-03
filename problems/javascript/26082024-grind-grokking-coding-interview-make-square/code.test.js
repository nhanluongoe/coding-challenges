import { describe, expect, it } from "vitest";
import makeSquare from "./code";

describe("makeSquare", () => {
  it.each([[[-2, -1, 0, 2, 3], [0, 1, 4, 4, 9]], [[-3, -1, 0, 1, 2], [0, 1, 1, 4, 9]], [[], []]])("squares %#", (values, expected) => {
    expect(makeSquare(values)).toEqual(expected);
  });
});

import { describe, expect, it } from "vitest";
import productsExceptSelf from "./code";

describe("productsExceptSelf", () => {
  it.each([
    [[1, 2, 3], [6, 3, 2]],
    [[6, 2, 0, 3], [0, 0, 36, 0]],
    [[4, 0, 9, 1, 0], [0, 0, 0, 0, 0]],
    [[-3, 8, 4], [32, -12, -24]],
  ])("calculates %#", (values, expected) => expect(productsExceptSelf(values)).toEqual(expected));

  it("requires two values", () => expect(() => productsExceptSelf([1])).toThrow());
});

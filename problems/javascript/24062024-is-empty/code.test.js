import { describe, expect, it } from "vitest";
import isEmpty from "./code";

describe("isEmpty", () => {
  it.each([
    [null, true], [undefined, true], [true, true], [1, true], ["", true], [[], true], [{}, true],
    ["a", false], [[1], false], [{ a: 1 }, false], [new Map([[1, 2]]), false], [new Set(), true],
  ])("checks %#", (value, expected) => expect(isEmpty(value)).toBe(expected));
});

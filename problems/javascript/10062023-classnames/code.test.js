import { describe, expect, it } from "vitest";
import classNames from "./code";

describe("classNames", () => {
  it("combines strings, numbers, objects, and nested arrays", () => {
    expect(
      classNames("a", 1, { b: true, c: false }, ["d", [{ e: true }]]),
    ).toBe("a 1 b d e");
  });

  it("ignores falsy and empty nested values without extra spaces", () => {
    expect(classNames(null, false, "a", [], [null], 0, undefined)).toBe("a");
  });
});

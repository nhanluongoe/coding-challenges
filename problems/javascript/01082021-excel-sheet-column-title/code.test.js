import { describe, expect, it } from "vitest";
import convertToTitle from "./code";

describe("convertToTitle", () => {
  it.each([[1, "A"], [26, "Z"], [27, "AA"], [701, "ZY"], [702, "ZZ"]])("converts %i", (value, expected) => {
    expect(convertToTitle(value)).toBe(expected);
  });
});

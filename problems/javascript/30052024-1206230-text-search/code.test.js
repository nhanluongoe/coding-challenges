import { describe, expect, it } from "vitest";
import textSearch from "./code";

describe("textSearch", () => {
  it("highlights case-insensitive, non-overlapping matches", () => {
    expect(textSearch("The Quick Brown Fox and fox", "fox")).toBe(
      "The Quick Brown <b>Fox</b> and <b>fox</b>",
    );
    expect(textSearch("aaaa", "aa")).toBe("<b>aaaa</b>");
    expect(textSearch("aaa", "aa")).toBe("<b>aa</b>a");
  });

  it("returns the original for blank input or query", () => {
    expect(textSearch("hello", " ")).toBe("hello");
    expect(textSearch(" ", "x")).toBe(" ");
  });
});

import { describe, expect, it } from "vitest";
import listFormat from "./code";

describe("listFormat", () => {
  it.each([
    [undefined, undefined, ""],
    [[], undefined, ""],
    [["Bob"], undefined, "Bob"],
    [["Bob", "Alice"], undefined, "Bob and Alice"],
    [["Bob", "Ben", "", "John"], undefined, "Bob, Ben and John"],
  ])("formats %#", (items, options, expected) => {
    expect(listFormat(items, options)).toBe(expected);
  });

  it("supports sorting, uniqueness, and limits without mutating input", () => {
    const items = ["Tim", "Bob", "Tim", "Ada"];
    expect(listFormat(items, { sorted: true, unique: true, length: 2 })).toBe(
      "Ada, Bob and 1 other",
    );
    expect(items).toEqual(["Tim", "Bob", "Tim", "Ada"]);
  });
});

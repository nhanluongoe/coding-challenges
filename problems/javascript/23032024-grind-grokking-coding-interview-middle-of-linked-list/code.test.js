import { describe, expect, it } from "vitest";
import findMiddle, { Node } from "./code";

function list(...values) {
  return values.reduceRight((next, value) => new Node(value, next), null);
}

describe("findMiddleOfLinkedList", () => {
  it.each([[[1], 1], [[1, 2, 3, 4, 5], 3], [[1, 2, 3, 4, 5, 6], 4], [[], undefined]])("finds %#", (values, expected) => {
    expect(findMiddle(list(...values))).toBe(expected);
  });
});

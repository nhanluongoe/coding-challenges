import { describe, expect, it } from "vitest";
import getIntersectionNode from "./code";

describe("getIntersectionNode", () => {
  it("returns the shared node by identity", () => {
    const shared = { val: 8, next: { val: 10, next: null } };
    const first = { val: 3, next: { val: 7, next: shared } };
    const second = { val: 99, next: shared };
    expect(getIntersectionNode(first, second)).toBe(shared);
  });

  it("returns null for disjoint or empty lists", () => {
    expect(getIntersectionNode({ val: 1, next: null }, { val: 1, next: null })).toBeNull();
    expect(getIntersectionNode(null, null)).toBeNull();
  });
});

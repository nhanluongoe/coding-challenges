import { describe, expect, it } from "vitest";
import preorderTraversal from "./code";

describe("preorderTraversal", () => {
  it("traverses root, left, right", () => {
    const tree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };
    expect(preorderTraversal(tree)).toEqual([1, 2, 3]);
  });

  it("handles an empty tree", () => expect(preorderTraversal(null)).toEqual([]));
});

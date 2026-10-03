import { describe, expect, it } from "vitest";
import isSymmetric from "./code";

describe("isSymmetric", () => {
  it("detects symmetric and asymmetric trees", () => {
    const symmetric = {
      val: 1,
      left: { val: 2, left: null, right: { val: 3 } },
      right: { val: 2, left: { val: 3 }, right: null },
    };
    const asymmetric = { val: 1, left: { val: 2 }, right: { val: 3 } };
    expect(isSymmetric(symmetric)).toBe(true);
    expect(isSymmetric(asymmetric)).toBe(false);
  });

  it("handles an empty tree", () => {
    expect(isSymmetric(null)).toBe(true);
  });
});

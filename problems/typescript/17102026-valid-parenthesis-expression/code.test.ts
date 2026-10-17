import { describe, expect, it } from "vitest";

import isValidParenthesisExpression from "./code";

describe("isValidParenthesisExpression", () => {
  it("returns true for the valid example", () => {
    expect(isValidParenthesisExpression("([]{})")).toBe(true);
  });

  it("returns false when brackets close in the wrong order", () => {
    expect(isValidParenthesisExpression("([]{)}")).toBe(false);
  });

  it("returns true for adjacent pairs", () => {
    expect(isValidParenthesisExpression("()[]{}")).toBe(true);
  });

  it("returns true for deeply nested pairs", () => {
    expect(isValidParenthesisExpression("{[()]}")).toBe(true);
  });

  it("returns false when a closing bracket appears first", () => {
    expect(isValidParenthesisExpression("]()")).toBe(false);
  });

  it("returns false when an opening bracket is not closed", () => {
    expect(isValidParenthesisExpression("(()")).toBe(false);
  });

  it("returns false for a mismatched pair", () => {
    expect(isValidParenthesisExpression("(]")).toBe(false);
  });

  it("treats an empty expression as valid", () => {
    expect(isValidParenthesisExpression("")).toBe(true);
  });
});


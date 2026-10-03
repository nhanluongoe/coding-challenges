import { describe, expect, it } from "vitest";
import MinStack from "./code";

describe("MinStack", () => {
  it("tracks the minimum through pushes and pops", () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  it("returns undefined when empty", () => {
    const stack = new MinStack();
    expect(stack.top()).toBeUndefined();
    expect(stack.getMin()).toBeUndefined();
  });
});

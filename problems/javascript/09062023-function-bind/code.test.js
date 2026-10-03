import { describe, expect, it } from "vitest";
import "./code";

describe("Function.prototype.myBind", () => {
  it("binds context and partial arguments", () => {
    function add(a, b) { return this.base + a + b; }
    const bound = add.myBind({ base: 10 }, 2);
    expect(bound(3)).toBe(15);
  });

  it("does not alter the original function", () => {
    function value() { return this.value; }
    expect(value.myBind({ value: 1 })()).toBe(1);
    expect(value.call({ value: 2 })).toBe(2);
  });
});

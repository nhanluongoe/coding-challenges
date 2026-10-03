import { describe, expect, it } from "vitest";
import curry from "./code";

describe("curry", () => {
  const join = (a, b, c) => `${a}:${b}:${c}`;

  it("supports single, grouped, empty, and falsy arguments", () => {
    const curried = curry(join);
    expect(curried("a")("b")("c")).toBe("a:b:c");
    expect(curried("a", "b")("c")).toBe("a:b:c");
    expect(curried("a")()(0, false)).toBe("a:0:false");
  });

  it("preserves this on invocation", () => {
    const object = { prefix: "x", run: curry(function (a, b) { return `${this.prefix}${a}${b}`; }) };
    expect(object.run("a", "b")).toBe("xab");
  });
});

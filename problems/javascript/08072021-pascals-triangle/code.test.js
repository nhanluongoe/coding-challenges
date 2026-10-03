import { describe, expect, it } from "vitest";
import generate from "./code";

describe("generate", () => {
  it("builds Pascal's triangle", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  it("handles zero rows", () => expect(generate(0)).toEqual([]));
});

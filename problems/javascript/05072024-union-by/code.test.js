import { describe, expect, it } from "vitest";
import unionBy from "./code";

describe("unionBy", () => {
  it("keeps the first value for each iteratee result", () => {
    expect(unionBy(Math.floor, [2.1], [1.2, 2.3])).toEqual([2.1, 1.2]);
    expect(
      unionBy(
        (item) => item.id,
        [{ id: 1, value: "first" }],
        [{ id: 1, value: "second" }],
      ),
    ).toEqual([{ id: 1, value: "first" }]);
  });

  it("handles empty and mixed-value arrays", () => {
    expect(unionBy((value) => value, [], [])).toEqual([]);
    expect(unionBy((value) => value, [null, 1], [null, "1"])).toEqual([
      null,
      1,
      "1",
    ]);
  });
});

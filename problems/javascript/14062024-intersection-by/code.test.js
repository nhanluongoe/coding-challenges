import { describe, expect, it } from "vitest";
import intersectionBy from "./code";

describe("intersectionBy", () => {
  it("returns unique first-array values present in every array", () => {
    expect(intersectionBy(Math.floor, [2.1, 1.2, 2.3], [2.4, 3.1], [2.9])).toEqual([2.1]);
  });

  it("supports object projections and empty inputs", () => {
    expect(intersectionBy((item) => item.id, [{ id: 1 }, { id: 2 }], [{ id: 2 }])).toEqual([{ id: 2 }]);
    expect(intersectionBy(String)).toEqual([]);
    expect(intersectionBy(String, [], [1])).toEqual([]);
  });
});

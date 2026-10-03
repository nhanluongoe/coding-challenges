import { describe, expect, it } from "vitest";
import intersectionWith from "./code";

describe("intersectionWith", () => {
  const comparator = (left, right) => left.x === right.x && left.y === right.y;

  it("intersects objects and removes equivalent duplicates", () => {
    const first = [{ x: 1, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 3 }];
    const second = [{ y: 2, x: 1 }];
    expect(intersectionWith(comparator, first, second)).toEqual([{ x: 1, y: 2 }]);
  });

  it("handles no arrays and empty arrays", () => {
    expect(intersectionWith(Object.is)).toEqual([]);
    expect(intersectionWith(Object.is, [], [1])).toEqual([]);
  });
});

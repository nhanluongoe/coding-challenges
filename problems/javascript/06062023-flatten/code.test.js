import { describe, expect, it } from "vitest";
import flatten, { flatten2, flatten3 } from "./code";

describe.each([
  flatten,
  flatten2,
  flatten3,
])("flatten implementation %#", (implementation) => {
  it("deeply flattens arrays", () => {
    expect(implementation([1, [2, [3, [4]]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty and already-flat arrays", () => {
    expect(implementation([])).toEqual([]);
    expect(implementation([1, 2])).toEqual([1, 2]);
  });
});

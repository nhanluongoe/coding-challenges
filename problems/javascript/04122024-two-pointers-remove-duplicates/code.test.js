import { describe, expect, it } from "vitest";
import remove from "./code";

describe("remove", () => {
  it.each([
    [[2, 3, 3, 3, 6, 9, 9], 4, [2, 3, 6, 9]],
    [[2, 2, 2, 11], 2, [2, 11]],
    [[], 0, []],
  ])("compacts unique values %#", (values, length, unique) => {
    expect(remove(values)).toBe(length);
    expect(values.slice(0, length)).toEqual(unique);
  });
});

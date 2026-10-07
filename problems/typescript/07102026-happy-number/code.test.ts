import { describe, expect, it } from "vitest";

import isHappyNumber from "./code";

describe("isHappyNumber", () => {
  it.each([
    { n: 23, description: "the example" },
    { n: 1, description: "one" },
    { n: 10, description: "a number one step from one" },
    { n: 19, description: "a number with a longer sequence" },
    { n: 100, description: "a number containing zeros" },
  ])("returns true for $description ($n)", ({ n }) => {
    expect(isHappyNumber(n)).toBe(true);
  });

  it.each([
    { n: 2, description: "a number that enters a cycle" },
    { n: 4, description: "a number inside the unhappy cycle" },
    { n: 20, description: "an unhappy number containing zero" },
  ])("returns false for $description ($n)", ({ n }) => {
    expect(isHappyNumber(n)).toBe(false);
  });
});

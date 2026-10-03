import { describe, expect, it } from "vitest";
import sortScores from "./code";

describe("sortScores", () => {
  it.each([
    [[], 100, []], [[55], 100, [55]], [[30, 60], 100, [60, 30]],
    [[20, 10, 30, 30, 10, 20], 30, [30, 30, 20, 20, 10, 10]],
  ])("sorts %#", (scores, maximum, expected) => expect(sortScores(scores, maximum)).toEqual(expected));
});

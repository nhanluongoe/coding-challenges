import { describe, expect, it } from "vitest";

import mergeRanges, { type Meeting } from "./code";

describe("mergeRanges", () => {
  it.each([
    {
      description: "overlapping meetings",
      meetings: [
        { startTime: 1, endTime: 3 },
        { startTime: 2, endTime: 4 },
      ],
      expected: [{ startTime: 1, endTime: 4 }],
    },
    {
      description: "touching meetings",
      meetings: [
        { startTime: 5, endTime: 6 },
        { startTime: 6, endTime: 8 },
      ],
      expected: [{ startTime: 5, endTime: 8 }],
    },
    {
      description: "contained meetings",
      meetings: [
        { startTime: 1, endTime: 8 },
        { startTime: 2, endTime: 5 },
      ],
      expected: [{ startTime: 1, endTime: 8 }],
    },
    {
      description: "unsorted meetings",
      meetings: [
        { startTime: 5, endTime: 8 },
        { startTime: 1, endTime: 4 },
        { startTime: 6, endTime: 8 },
      ],
      expected: [
        { startTime: 1, endTime: 4 },
        { startTime: 5, endTime: 8 },
      ],
    },
    {
      description: "several merge groups",
      meetings: [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 5 },
        { startTime: 4, endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9, endTime: 10 },
      ],
      expected: [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 12 },
      ],
    },
  ] satisfies Array<{
    description: string;
    meetings: Meeting[];
    expected: Meeting[];
  }>)("merges $description", ({ meetings, expected }) => {
    expect(mergeRanges(meetings)).toEqual(expected);
  });

  it("handles an empty list", () => {
    expect(mergeRanges([])).toEqual([]);
  });

  it("does not mutate the input", () => {
    const meetings = [
      { startTime: 5, endTime: 8 },
      { startTime: 1, endTime: 6 },
    ];

    mergeRanges(meetings);

    expect(meetings).toEqual([
      { startTime: 5, endTime: 8 },
      { startTime: 1, endTime: 6 },
    ]);
  });
});

import { describe, expect, it } from "vitest";

import zeroStriping from "./code";

describe("zeroStriping", () => {
  it("zeroes the rows and columns from the example", () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 0, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 0],
    ];

    zeroStriping(matrix);

    expect(matrix).toEqual([
      [1, 0, 3, 4, 0],
      [0, 0, 0, 0, 0],
      [11, 0, 13, 14, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it("leaves a matrix without zeros unchanged", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];

    zeroStriping(matrix);

    expect(matrix).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("handles a zero in the center", () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];

    zeroStriping(matrix);

    expect(matrix).toEqual([
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ]);
  });

  it("handles a zero in the first row and first column", () => {
    const matrix = [
      [0, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    zeroStriping(matrix);

    expect(matrix).toEqual([
      [0, 0, 0],
      [0, 5, 6],
      [0, 8, 9],
    ]);
  });

  it("handles a matrix containing only zeros", () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];

    zeroStriping(matrix);

    expect(matrix).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });

  it("modifies the original matrix instead of returning a new one", () => {
    const matrix = [
      [1, 0, 3],
      [4, 5, 6],
    ];

    const result = zeroStriping(matrix);

    expect(result).toBeUndefined();
    expect(matrix).toEqual([
      [0, 0, 0],
      [4, 0, 6],
    ]);
  });
});

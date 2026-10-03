import { describe, expect, it } from "vitest";

import verifySudokuBoard from "./code";

describe("verifySudokuBoard", () => {
  it("returns true for a valid partially completed board", () => {
    const board = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];

    expect(verifySudokuBoard(board)).toBe(true);
  });

  it("returns false for the example with a duplicate in a row", () => {
    const board = [
      [3, 0, 6, 0, 5, 8, 4, 0, 0],
      [5, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 8, 7, 0, 0, 0, 0, 3, 1],
      [1, 0, 2, 5, 0, 0, 3, 2, 0],
      [9, 0, 0, 8, 6, 3, 0, 0, 5],
      [0, 5, 0, 0, 9, 0, 6, 0, 0],
      [0, 3, 0, 0, 0, 8, 2, 5, 0],
      [0, 1, 0, 0, 0, 0, 0, 7, 4],
      [0, 0, 5, 2, 0, 6, 0, 0, 0],
    ];

    expect(verifySudokuBoard(board)).toBe(false);
  });

  it("returns false for a duplicate in a column", () => {
    const board = emptyBoard();
    board[0][4] = 7;
    board[8][4] = 7;

    expect(verifySudokuBoard(board)).toBe(false);
  });

  it("returns false for a duplicate in a 3 x 3 subgrid", () => {
    const board = emptyBoard();
    board[0][0] = 4;
    board[2][2] = 4;

    expect(verifySudokuBoard(board)).toBe(false);
  });

  it("returns true for a completely empty board", () => {
    expect(verifySudokuBoard(emptyBoard())).toBe(true);
  });

  it("returns true for a valid completed board", () => {
    const board = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    expect(verifySudokuBoard(board)).toBe(true);
  });
});

function emptyBoard(): number[][] {
  return Array.from({ length: 9 }, () => Array<number>(9).fill(0));
}

---
solvedAt: "2026-10-03"
---
# Verify Sudoku Board

- Language: typescript
- Original path: `typescript/03102026-verify-sudoku-board/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given a partially completed `9 x 9` Sudoku board, determine whether its current state follows the rules of the game:

- Each row must contain unique numbers from `1` to `9`, or empty cells represented by `0`.
- Each column must contain unique numbers from `1` to `9`, or empty cells represented by `0`.
- Each of the nine `3 x 3` subgrids must contain unique numbers from `1` to `9`, or empty cells represented by `0`.

Only determine whether the board's current state is valid. You do not need to determine whether the board can be solved.

## Example

```text
Input:
[
  [3, 0, 6, 0, 5, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [1, 0, 2, 5, 0, 0, 3, 2, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [0, 3, 0, 0, 0, 8, 2, 5, 0],
  [0, 1, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 0, 0, 0]
]

Output: false
```

The fourth row contains two `2`s, so the board is invalid.

# Constraints

- The board has exactly `9` rows and `9` columns.
- Every cell contains an integer in the range `[0, 9]`.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- A completely empty board.
- A duplicate value in a row or column.
- A duplicate value within a `3 x 3` subgrid.
- Zeros appearing multiple times, since empty cells do not count as duplicates.

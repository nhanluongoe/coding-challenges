---
solvedAt: "2026-10-04"
---
# Zero Striping

- Language: typescript
- Original path: `typescript/04102026-zero-striping/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

For every zero in an `m x n` matrix, set its entire row and column to zero in place.

## Example

```text
Input:
[
  [1,  2,  3,  4,  5],
  [6,  0,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 0]
]

Matrix after zero striping:
[
  [1,  0, 3,  4, 0],
  [0,  0, 0,  0, 0],
  [11, 0, 13, 14, 0],
  [0,  0, 0,  0, 0]
]
```

# Constraints

- The matrix has `m` rows and `n` columns.
- The matrix must be modified in place.
- Only zeros from the original matrix determine which rows and columns are zeroed.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- The matrix contains no zeros.
- A zero appears in the first row or first column.
- The matrix contains multiple zeros.
- Every value is zero.
- The matrix has only one row or one column.

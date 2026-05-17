---
solvedAt: "2024-06-07"
---
# Pascals Triangle 2

- Language: javascript
- Original path: `javascript/1007210-pascals-triangle-2.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Generate Pascal's Triangle rows or return the requested row.

## Examples

- `numRows = 1` -> `[[1]]`.
- `numRows = 3` -> `[[1], [1, 1], [1, 2, 1]]`.
- `rowIndex = 0` -> `[1]` for row-specific variants.

# Solutions

Build each row from the previous row, using `1` at both ends and adjacent sums in the middle.

# Edge cases

- Zero or one requested row.
- Requested row index zero.
- Large row index.

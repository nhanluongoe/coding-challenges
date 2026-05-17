---
solvedAt: "2024-06-07"
---
# Pascals Triangle 2

- Language: javascript
- Original path: `javascript/1007210-pascals-triangle-2.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Generate Pascal's Triangle data. For the full-triangle variant, return the first `numRows` rows where each row starts and ends with `1` and each interior value is the sum of the two values above it. For the row-specific variant, return only the row at the requested zero-based index. The output should use arrays of numbers in triangle order.

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

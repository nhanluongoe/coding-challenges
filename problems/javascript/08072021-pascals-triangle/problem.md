---
solvedAt: "2021-07-08"
---
# Pascals Triangle

- Language: javascript
- Original path: `javascript/080721-pascals-triangle.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Generate Pascal's Triangle rows or return the requested row.

# Solutions

Build each row from the previous row, using `1` at both ends and adjacent sums in the middle.

# Edge cases

- Zero or one requested row.
- Requested row index zero.
- Large row index.

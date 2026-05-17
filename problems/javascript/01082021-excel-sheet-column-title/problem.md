---
solvedAt: "2021-08-01"
---
# Excel Sheet Column Title

- Language: javascript
- Original path: `javascript/010821-excel-sheet-column-title.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Convert a positive column number to its spreadsheet-style column title.

## Examples

- `1` -> `"A"`.
- `26` -> `"Z"`.
- `27` -> `"AA"`.

# Solutions

Repeatedly convert to a zero-based modulo-26 digit and prepend the matching uppercase letter.

# Edge cases

- Column numbers at letter boundaries such as 26 and 27.
- Large column numbers.
- Single-letter columns.

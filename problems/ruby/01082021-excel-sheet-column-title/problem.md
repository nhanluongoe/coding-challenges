---
solvedAt: "2021-08-01"
---
# Excel Sheet Column Title

- Language: ruby
- Original path: `ruby/010821-excel-sheet-column-title.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given a positive integer column number, convert it to the spreadsheet column title format used by Excel. The mapping is one-indexed: `1` maps to `A`, `26` maps to `Z`, and `27` maps to `AA`. Because there is no zero digit in this alphabetic numbering system, boundary values around multiples of 26 require special handling.

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

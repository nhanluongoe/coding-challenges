---
solvedAt: "2021-07-16"
---
# Single Number

- Language: javascript
- Original path: `javascript/160721-single-number.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Find the value that appears once when every other value appears twice.

## Examples

- `[2, 2, 1]` -> `1`.
- `[4, 1, 2, 1, 2]` -> `4`.
- `[0]` -> `0`.

# Solutions

XOR all values; duplicate pairs cancel out and the single value remains.

# Edge cases

- Single-element array.
- Negative numbers.
- The unique value is zero.

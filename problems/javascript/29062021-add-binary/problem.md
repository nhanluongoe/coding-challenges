---
solvedAt: "2021-06-29"
---
# Add Binary

- Language: javascript
- Original path: `javascript/290621-add-binary.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given two binary strings, add them and return the sum as a binary string. The strings may have different lengths, and the addition should proceed from right to left with a carry just like manual arithmetic. The result should not contain unnecessary leading zeros except when the sum itself is zero.

## Examples

- `"11" + "1"` -> `"100"`.
- `"0" + "0"` -> `"0"`.
- `"1010" + "1011"` -> `"10101"`.

# Solutions

Walk both strings from right to left, adding bits and carry just like manual addition.

# Edge cases

- Different string lengths.
- Final carry remains.
- Inputs containing only zero.

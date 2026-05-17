---
solvedAt: "2021-06-29"
---
# Add Binary

- Language: javascript
- Original path: `javascript/290621-add-binary.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Add two binary strings and return the binary sum as a string.

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

---
solvedAt: "2024-07-23"
---
# Binary Gap

- Language: javascript
- Original path: `javascript/codility-training/binary-gap.ts`
- Source: Codility-style
- Solution: `code.ts`

# Problems

Given a positive integer, inspect its binary representation and find the longest consecutive run of zeros that is surrounded by ones on both sides. Zeros before the first one or after the final one do not count because they are not closed gaps. The function should return the length of the longest valid gap, or zero when no such gap exists.

## Examples

- `9` (`1001`) -> `2`.
- `15` (`1111`) -> `0`.
- `20` (`10100`) -> `1` because trailing zeros do not close a gap.

# Solutions

Convert or scan bits, counting zeros only after the first one and resetting the best count at each closing one.

# Edge cases

- No closed gap.
- Trailing zeros.
- Multiple gaps with different lengths.

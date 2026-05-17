---
solvedAt: "2024-10-30"
---
# Binary Gap

- Language: java
- Original path: `java/BinaryGap.java`
- Source: Algorithm practice
- Solution: `BinaryGap.java`

# Problems

Given a positive integer, find the longest run of zeros surrounded by ones in its binary representation.

## Examples

- `9` (`1001`) -> `2`.
- `15` (`1111`) -> `0`.
- `20` (`10100`) -> `1` because trailing zeros do not close a gap.

# Solutions

Convert or scan bits, counting zeros only after the first one and resetting the best count at each closing one.
Time complexity: O(logn) + O(n) => O(n)
Space complexity: O(1)

# Edge cases

- No closed gap.
- Trailing zeros.
- Multiple gaps with different lengths.

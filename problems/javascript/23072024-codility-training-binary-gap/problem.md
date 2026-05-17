---
solvedAt: "2024-07-23"
---
# Binary Gap

- Language: javascript
- Original path: `javascript/codility-training/binary-gap.ts`
- Source: Codility-style
- Solution: `code.ts`

# Problems

Given a positive integer, find the longest run of zeros surrounded by ones in its binary representation.

# Solutions

Convert or scan bits, counting zeros only after the first one and resetting the best count at each closing one.

# Edge cases

- No closed gap.
- Trailing zeros.
- Multiple gaps with different lengths.

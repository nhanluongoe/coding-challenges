---
solvedAt: "2024-07-06"
---
# Max Triplet Product

- Language: javascript
- Original path: `javascript/codility-training/max-triplet-product.ts`
- Source: Codility-style
- Solution: `code.ts`

# Problems

Given integers, find the maximum product obtainable from any three numbers.

# Solutions

Track the largest and smallest values/products while scanning, because two negative numbers can produce the best positive product.

# Edge cases

- Negative numbers.
- Zeros.
- Exactly three values.

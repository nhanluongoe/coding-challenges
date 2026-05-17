---
solvedAt: "2022-05-20"
---
# Highest Product of Three

- Language: javascript
- Original path: `javascript/200522-highest-product-of-three.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given integers, find the maximum product obtainable from any three numbers.

# Solutions

Track the largest and smallest values/products while scanning, because two negative numbers can produce the best positive product.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Negative numbers.
- Zeros.
- Exactly three values.

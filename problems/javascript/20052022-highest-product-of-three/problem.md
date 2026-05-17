---
solvedAt: "2022-05-20"
---
# Highest Product of Three

- Language: javascript
- Original path: `javascript/200522-highest-product-of-three.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given an array of integers, find the largest product obtainable by multiplying any three distinct numbers from the array. The best product is not always formed by the three largest positive values because two negative numbers can create a large positive product. The implementation should consider positive values, negative values, and zero. Inputs should contain at least three numbers unless the surrounding code explicitly handles invalid input.

## Examples

- `[1, 2, 3]` -> `6`.
- `[-10, -10, 1, 3, 2]` -> `300`.
- `[0, 0, 2, 3]` -> `0`.

# Solutions

Track the largest and smallest values/products while scanning, because two negative numbers can produce the best positive product.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Negative numbers.
- Zeros.
- Exactly three values.

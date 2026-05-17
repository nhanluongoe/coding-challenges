---
solvedAt: "2022-05-21"
---
# Product of Other Numbers

- Language: javascript
- Original path: `javascript/210522-product-of-other-number.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

For each index, return the product of all numbers in the input except the number at that index.

# Solutions

Build prefix products from the left and suffix products from the right, multiplying them without using division.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- One or more zeros.
- Negative numbers.
- Arrays with fewer than two numbers.

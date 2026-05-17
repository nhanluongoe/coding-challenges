---
solvedAt: "2024-02-24"
---
# Subarray Product Less Than K

- Language: javascript
- Original path: `javascript/two-pointers/subarray-product-less-than-k.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Find all contiguous subarrays whose product is less than a target value.

# Solutions

Use a sliding window product, shrinking from the left whenever the product reaches or exceeds the target.
Time complexity: O(n^3)
Space complexity: O(n) for temp array

# Edge cases

- Target less than or equal to one.
- Single-element matches.
- Products that require repeated shrinking.

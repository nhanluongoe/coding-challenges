---
solvedAt: "2024-02-24"
---
# Subarray Product Less Than K

- Language: javascript
- Original path: `javascript/two-pointers/subarray-product-less-than-k.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given an array of positive numbers and a target product, find every contiguous subarray whose product is strictly less than the target. A subarray must consist of neighboring elements in their original order. Because products grow and shrink predictably for positive values, the solution should maintain a moving window rather than recomputing products for every range. Return the count or list required by the existing solution.

## Examples

- `[2, 5, 3, 10]`, target `30` -> subarrays such as `[2]`, `[5]`, `[2, 5]`, `[3]`, `[5, 3]`, `[10]`.
- Target `1` -> no positive-product subarrays.
- Single value below target -> that one-item subarray is valid.

# Solutions

Use a sliding window product, shrinking from the left whenever the product reaches or exceeds the target.
Time complexity: O(n^3)
Space complexity: O(n) for temp array

# Edge cases

- Target less than or equal to one.
- Single-element matches.
- Products that require repeated shrinking.

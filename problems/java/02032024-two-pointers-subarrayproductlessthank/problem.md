---
solvedAt: "2024-03-02"
---
# Subarray Product Less Than K

- Language: java
- Original path: `java/two-pointers/SubarrayProductLessThanK.java`
- Source: Algorithm practice
- Solution: `SubarrayProductLessThanK.java`

# Problems

Find all contiguous subarrays whose product is less than a target value.

## Examples

- `[2, 5, 3, 10]`, target `30` -> subarrays such as `[2]`, `[5]`, `[2, 5]`, `[3]`, `[5, 3]`, `[10]`.
- Target `1` -> no positive-product subarrays.
- Single value below target -> that one-item subarray is valid.

# Solutions

Use a sliding window product, shrinking from the left whenever the product reaches or exceeds the target.
Time complexity: O(n^3)
Space complexity: O(n) for the temp list

# Edge cases

- Target less than or equal to one.
- Single-element matches.
- Products that require repeated shrinking.

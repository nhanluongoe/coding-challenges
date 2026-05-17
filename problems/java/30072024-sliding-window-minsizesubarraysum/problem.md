---
solvedAt: "2024-07-30"
---
# Minimum Size Subarray Sum

- Language: java
- Original path: `java/sliding-window/MinSizeSubArraySum.java`
- Source: Algorithm practice
- Solution: `MinSizeSubArraySum.java`

# Problems

Given an array of positive numbers and a target sum, find the length of the shortest contiguous subarray whose sum is at least the target. The subarray must use adjacent values and cannot skip over elements. If more than one valid subarray exists, return the smallest length. If no subarray reaches the target, return the problem's no-result value, often `0`.

## Examples

- `[2, 1, 5, 2, 3, 2]`, target `7` -> length `2` from `[5, 2]`.
- `[1, 1, 1]`, target `5` -> `0` or no result.
- `[10]`, target `8` -> length `1`.

# Solutions

Maintain a growing sliding-window sum and shrink from the left while the window still satisfies the target.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- No valid subarray.
- A single element satisfies the target.
- The whole array is required.

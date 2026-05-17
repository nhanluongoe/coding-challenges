---
solvedAt: "2024-07-30"
---
# Minimum Size Subarray Sum

- Language: java
- Original path: `java/sliding-window/MinSizeSubArraySum.java`
- Source: Algorithm practice
- Solution: `MinSizeSubArraySum.java`

# Problems

Find the shortest contiguous subarray whose sum is at least the requested target.

# Solutions

Maintain a growing sliding-window sum and shrink from the left while the window still satisfies the target.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- No valid subarray.
- A single element satisfies the target.
- The whole array is required.

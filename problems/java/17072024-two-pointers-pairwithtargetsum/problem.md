---
solvedAt: "2024-07-17"
---
# Pair with Target Sum

- Language: java
- Original path: `java/two-pointers/PairWithTargetSum.java`
- Source: JavaScript utility
- Solution: `PairWithTargetSum.java`

# Problems

Given a sorted array and a target value, return the indices or values that form a pair whose sum equals the target.

## Examples

- `[1, 2, 3, 4]`, target `6` -> pair `2 + 4`.
- `[1, 3]`, target `4` -> pair at the two ends.
- `[1, 2, 3]`, target `10` -> no pair found.

# Solutions

Use two pointers from both ends of the sorted array, moving the left pointer when the sum is too small and the right pointer when it is too large.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- No matching pair.
- Duplicate values that can form the same sum.
- The pair appears at the beginning or end of the array.

---
solvedAt: "2024-10-22"
---
# Partition Set With Minimum Difference

- Language: java
- Original path: `java/0-1-knapsack/PartitionSetWithMinimumDiff.java`
- Source: Algorithm practice
- Solution: `PartitionSetWithMinimumDiff.java`

# Problems

Search a sorted or specially ordered collection for the requested target, range, boundary, or closest value.

## Examples

- `[1, 3, 8, 10]`, target `8` -> found at index `2`.
- `[1, 3, 8, 10]`, target `7` -> boundary-style variants return closest or ceiling index `2`.
- One-element input -> either index `0` or not found based on the target.

# Solutions

Use binary search, adjusting the boundaries according to whether the target lies left or right of the midpoint.
Time complexity: O(2^n), "n" is the total number
Space complexity: O(n)

# Edge cases

- Target smaller than the first item or larger than the last.
- Duplicate target values.
- One-element input.

---
solvedAt: "2024-10-22"
---
# Partition Set With Minimum Difference

- Language: java
- Original path: `java/0-1-knapsack/PartitionSetWithMinimumDiff.java`
- Source: Algorithm practice
- Solution: `PartitionSetWithMinimumDiff.java`

# Problems

Given a set of positive numbers, partition it into two subsets so the absolute difference between their sums is as small as possible. Every number must belong to exactly one of the two subsets. Return the minimum achievable difference, not necessarily the subsets themselves. The solution should consider subset sums up to half of the total sum because the other subset is implied.

## Examples

- `[1, 2, 3, 9]` -> minimum difference `3`.
- `[1, 2, 7, 1, 5]` -> minimum difference `0`.
- Single number -> difference equals that number.

# Solutions

Use dynamic programming to find reachable subset sums up to half of the total sum, then choose the reachable sum that minimizes `total - 2 * sum`.

# Edge cases

- Single-element input.
- Total sum can be split evenly.
- Large sums that affect DP table size.

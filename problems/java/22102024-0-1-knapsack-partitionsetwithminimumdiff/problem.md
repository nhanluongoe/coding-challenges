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

# Solutions

Use binary search, adjusting the boundaries according to whether the target lies left or right of the midpoint.
Time complexity: O(2^n), "n" is the total number
Space complexity: O(n)

# Edge cases

- Target smaller than the first item or larger than the last.
- Duplicate target values.
- One-element input.

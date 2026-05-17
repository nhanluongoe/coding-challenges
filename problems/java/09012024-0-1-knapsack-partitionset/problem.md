---
solvedAt: "2024-01-09"
---
# Partition Set

- Language: java
- Original path: `java/0-1-knapsack/PartitionSet.java`
- Source: Algorithm practice
- Solution: `PartitionSet.java`

# Problems

Decide or optimize a subset selection under capacity, target-sum, or equal-partition constraints.

## Examples

- Numbers `[1, 2, 3, 7]`, target `6` -> subset `[1, 2, 3]` exists.
- Odd total sum for equal partition -> `false`.
- Capacity `0` -> maximum profit `0`.

# Solutions

Use dynamic programming over items and reachable sums/capacities, carrying forward include/exclude decisions.
Time complexity: O(2^n), "n" is the total number
Space complexity: O(n)

# Edge cases

- Target sum is zero.
- Total sum is odd for equal partition.
- Items larger than the capacity or target.

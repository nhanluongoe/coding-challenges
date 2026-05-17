---
solvedAt: "2024-01-17"
---
# Cyclic Sort

- Language: java
- Original path: `java/cyclic-sort/CyclicSort.java`
- Source: Algorithm practice
- Solution: `CyclicSort.java`

# Problems

Rearrange values that belong to a fixed numeric range to discover missing, duplicate, or misplaced numbers.

## Examples

- `[3, 1, 5, 4, 2]` -> sorted as `[1, 2, 3, 4, 5]` for cyclic sort.
- `[4, 0, 3, 1]` -> missing number `2`.
- `[3, 4, 4, 5, 5]` -> duplicates `[4, 5]` when finding all duplicates.

# Solutions

Use cyclic sort: repeatedly swap each value into its correct index, then scan for positions that still contain the wrong value.
Time complexity: O(n)

# Edge cases

- Values already in order.
- Duplicate values block placement.
- Missing value is at the beginning or end of the range.

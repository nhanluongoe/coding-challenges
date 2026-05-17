---
solvedAt: "2024-10-18"
---
# Find All Duplicates

- Language: java
- Original path: `java/cyclic-sort/FindAllDuplicates.java`
- Source: Algorithm practice
- Solution: `FindAllDuplicates.java`

# Problems

Rearrange values that belong to a fixed numeric range to discover missing, duplicate, or misplaced numbers.

# Solutions

Use cyclic sort: repeatedly swap each value into its correct index, then scan for positions that still contain the wrong value.
Time complexity: O(n)
Space complexity: O(1), the space used for output doesn't count

# Edge cases

- Values already in order.
- Duplicate values block placement.
- Missing value is at the beginning or end of the range.

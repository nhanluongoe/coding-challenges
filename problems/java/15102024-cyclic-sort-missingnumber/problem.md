---
solvedAt: "2024-10-15"
---
# Missing Number

- Language: java
- Original path: `java/cyclic-sort/MissingNumber.java`
- Source: Algorithm practice
- Solution: `MissingNumber.java`

# Problems

Rearrange values that belong to a fixed numeric range to discover missing, duplicate, or misplaced numbers.

# Solutions

Use cyclic sort: repeatedly swap each value into its correct index, then scan for positions that still contain the wrong value.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Values already in order.
- Duplicate values block placement.
- Missing value is at the beginning or end of the range.

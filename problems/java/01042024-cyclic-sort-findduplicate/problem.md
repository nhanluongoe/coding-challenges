---
solvedAt: "2024-04-01"
---
# Find Duplicate

- Language: java
- Original path: `java/cyclic-sort/FindDuplicate.java`
- Source: Algorithm practice
- Solution: `FindDuplicate.java`

# Problems

Given an array containing numbers from a constrained range, find a value that appears more than once. The important detail is that the value range and array length guarantee or imply a duplicate. Depending on the solution, this can be solved by tracking seen values, rearranging values into their expected positions, or treating the array as a cycle. Return the duplicate value, not merely whether one exists.

## Examples

- `[1, 3, 4, 2, 2]` -> `2`.
- `[1, 1]` -> `1`.
- `[3, 1, 3, 4, 2]` -> `3`.

# Solutions

Place each value at its matching index with cyclic sort; the value that cannot be placed uniquely is the duplicate.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Duplicate appears more than twice.
- Smallest or largest allowed value is duplicated.
- Input has the minimum valid length.

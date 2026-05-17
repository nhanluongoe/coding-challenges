---
solvedAt: "2022-05-25"
---
# Find Duplicate

- Language: go
- Original path: `go/250522-find-duplication.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Given an array containing numbers from a constrained range, find a value that appears more than once. The important detail is that the value range and array length guarantee or imply a duplicate. Depending on the solution, this can be solved by tracking seen values, rearranging values into their expected positions, or treating the array as a cycle. Return the duplicate value, not merely whether one exists.

## Examples

- `[1, 3, 4, 2, 2]` -> `2`.
- `[1, 1]` -> `1`.
- `[3, 1, 3, 4, 2]` -> `3`.

# Solutions

Use either a seen set or a cycle-detection/counting approach depending on the space constraint.
Time complexity: O(nlogn)
Space complexity: O(1)

# Edge cases

- Duplicate appears more than twice.
- Smallest or largest allowed value is duplicated.
- Input has the minimum valid length.

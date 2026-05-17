---
solvedAt: "2022-05-25"
---
# Find Duplicate

- Language: go
- Original path: `go/250522-find-duplication.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Find a repeated value in an array whose values are constrained to a known range.

# Solutions

Use either a seen set or a cycle-detection/counting approach depending on the space constraint.
Time complexity: O(nlogn)
Space complexity: O(1)

# Edge cases

- Duplicate appears more than twice.
- Smallest or largest allowed value is duplicated.
- Input has the minimum valid length.

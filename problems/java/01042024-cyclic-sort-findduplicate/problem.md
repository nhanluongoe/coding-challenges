---
solvedAt: "2024-04-01"
---
# Find Duplicate

- Language: java
- Original path: `java/cyclic-sort/FindDuplicate.java`
- Source: Algorithm practice
- Solution: `FindDuplicate.java`

# Problems

Find a repeated value in an array whose values are constrained to a known range.

# Solutions

Place each value at its matching index with cyclic sort; the value that cannot be placed uniquely is the duplicate.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Duplicate appears more than twice.
- Smallest or largest allowed value is duplicated.
- Input has the minimum valid length.

---
solvedAt: "2024-04-13"
---
# Ceiling of a Number

- Language: java
- Original path: `java/modified-binary-search/CeilingOfANumber.java`
- Source: Algorithm practice
- Solution: `CeilingOfANumber.java`

# Problems

Search a sorted or specially ordered collection for the requested target, range, boundary, or closest value.

# Solutions

Use binary search, adjusting the boundaries according to whether the target lies left or right of the midpoint.
Time complexity: O(logn)
Space complexity: O(1)

# Edge cases

- Target smaller than the first item or larger than the last.
- Duplicate target values.
- One-element input.

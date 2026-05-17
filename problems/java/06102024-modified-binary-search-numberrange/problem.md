---
solvedAt: "2024-10-06"
---
# Number Range

- Language: java
- Original path: `java/modified-binary-search/NumberRange.java`
- Source: Algorithm practice
- Solution: `NumberRange.java`

# Problems

Search a sorted or specially ordered collection for the requested target, range, boundary, or closest value.

## Examples

- `[1, 3, 8, 10]`, target `8` -> found at index `2`.
- `[1, 3, 8, 10]`, target `7` -> boundary-style variants return closest or ceiling index `2`.
- One-element input -> either index `0` or not found based on the target.

# Solutions

Use binary search, adjusting the boundaries according to whether the target lies left or right of the midpoint.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Target smaller than the first item or larger than the last.
- Duplicate target values.
- One-element input.

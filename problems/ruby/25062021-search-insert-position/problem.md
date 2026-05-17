---
solvedAt: "2021-06-25"
---
# Search Insert Position

- Language: ruby
- Original path: `ruby/250621-search-insert-position.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given a sorted or specially ordered collection, locate a target value or the boundary position related to that target. Depending on the variant, return the exact index, insertion index, ceiling, closest value, first and last occurrence, or maximum point in a bitonic array. The solution should repeatedly discard half of the remaining search space whenever the ordering rules make that safe.

## Examples

- `nums = [1, 3, 5, 6]`, target `5` -> index `2`.
- `nums = [1, 3, 5, 6]`, target `2` -> insertion index `1`.
- `nums = [1, 3, 5, 6]`, target `7` -> insertion index `4`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.

---
solvedAt: "2024-04-23"
---
# Happy Number

- Language: java
- Original path: `java/fast-slow-pointers/HappyNumber.java`
- Source: Algorithm practice
- Solution: `HappyNumber.java`

# Problems

Given a positive integer, determine whether repeatedly replacing the number with the sum of the squares of its digits eventually reaches `1`. If the process reaches `1`, the number is happy. If it falls into a cycle that never reaches `1`, the number is not happy. Return a boolean result.

## Examples

- `23` -> `true`.
- `12` -> `false`.
- `1` -> `true`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(logn)
Space complexity: O(1)

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.

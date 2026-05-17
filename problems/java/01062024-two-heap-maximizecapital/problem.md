---
solvedAt: "2024-06-01"
---
# Maximize Capital

- Language: java
- Original path: `java/two-heap/MaximizeCapital.java`
- Source: Algorithm practice
- Solution: `MaximizeCapital.java`

# Problems

Implement `class MaximizeCapital` for the Maximize Capital challenge using the behavior implied by the existing solution and tests.

## Examples

- Capital `[0, 1, 2]`, profits `[1, 2, 3]`, choose `2`, initial `1` -> final capital `6`.
- No affordable project -> capital stays unchanged.
- `numberOfProjects = 0` -> initial capital is returned.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(n*logn + k*logn), 'n' is the number of total projects, k is the numbers
Space complexity: o(n)

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.

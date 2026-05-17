---
solvedAt: "2024-06-01"
---
# Maximize Capital

- Language: java
- Original path: `java/two-heap/MaximizeCapital.java`
- Source: Algorithm practice
- Solution: `MaximizeCapital.java`

# Problems

Given project capital requirements, project profits, a maximum number of projects, and an initial capital amount, choose projects to maximize final capital. A project can only be selected when the available capital meets its requirement. After selecting a project, its profit is added to available capital and can unlock more projects. Return the highest capital reachable after selecting at most the allowed number of projects.

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

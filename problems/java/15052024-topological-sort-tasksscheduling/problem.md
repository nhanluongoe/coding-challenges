---
solvedAt: "2024-05-15"
---
# Tasks Scheduling

- Language: java
- Original path: `java/topological-sort/TasksScheduling.java`
- Source: Algorithm practice
- Solution: `TasksScheduling.java`

# Problems

Given dependency rules, determine whether an ordering exists and return one or all valid orderings as required.

## Examples

- Tasks `3`, prerequisites `[[0, 1], [1, 2]]` -> order `[0, 1, 2]`.
- A dependency cycle -> no valid ordering.
- Disconnected tasks can appear anywhere that respects dependencies.

# Solutions

Build a graph and in-degree counts, then apply Kahn's BFS topological sort; branch recursively when all possible orders are needed.
Time complexity: O(V + E), "V" is the number of tasks, "E" is the number of
Space complexity: O(V + E)

# Edge cases

- Cycle in dependencies.
- Disconnected tasks.
- Multiple valid orders.

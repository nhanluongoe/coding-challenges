---
solvedAt: "2024-06-01"
---
# Task Scheduling Order

- Language: java
- Original path: `java/topological-sort/TaskSchedulingOrder.java`
- Source: Algorithm practice
- Solution: `TaskSchedulingOrder.java`

# Problems

Given items with dependency rules, determine an ordering that respects every prerequisite. Each dependency means one item must appear before another. If the dependency graph contains a cycle, no valid ordering exists. Some variants ask whether scheduling is possible, one valid order, all valid orders, or an inferred character ordering from sorted words.

## Examples

- Tasks `3`, prerequisites `[[0, 1], [1, 2]]` -> order `[0, 1, 2]`.
- A dependency cycle -> no valid ordering.
- Disconnected tasks can appear anywhere that respects dependencies.

# Solutions

Build a graph and in-degree counts, then apply Kahn's BFS topological sort; branch recursively when all possible orders are needed.
Time complexity: O(E + V), "E" is the number of prerequisites and "V" is the
Space complexity: O(E + V)

# Edge cases

- Cycle in dependencies.
- Disconnected tasks.
- Multiple valid orders.

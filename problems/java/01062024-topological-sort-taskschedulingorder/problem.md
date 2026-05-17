---
solvedAt: "2024-06-01"
---
# Task Scheduling Order

- Language: java
- Original path: `java/topological-sort/TaskSchedulingOrder.java`
- Source: Algorithm practice
- Solution: `TaskSchedulingOrder.java`

# Problems

Given dependency rules, determine whether an ordering exists and return one or all valid orderings as required.

# Solutions

Build a graph and in-degree counts, then apply Kahn's BFS topological sort; branch recursively when all possible orders are needed.
Time complexity: O(E + V), "E" is the number of prerequisites and "V" is the
Space complexity: O(E + V)

# Edge cases

- Cycle in dependencies.
- Disconnected tasks.
- Multiple valid orders.

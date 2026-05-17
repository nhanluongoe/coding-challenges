---
solvedAt: "2024-02-10"
---
# Topological Sort

- Language: java
- Original path: `java/topological-sort/TopologicalSort.java`
- Source: Algorithm practice
- Solution: `TopologicalSort.java`

# Problems

Given dependency rules, determine whether an ordering exists and return one or all valid orderings as required.

# Solutions

Build a graph and in-degree counts, then apply Kahn's BFS topological sort; branch recursively when all possible orders are needed.
Time complexity: O(V + E), V is the number of vertices, E is the number of
Space complexity: O(V + E)

# Edge cases

- Cycle in dependencies.
- Disconnected tasks.
- Multiple valid orders.

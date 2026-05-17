---
solvedAt: "2024-05-02"
---
# Alien Dictionary

- Language: java
- Original path: `java/topological-sort/AlienDictionary.java`
- Source: Algorithm practice
- Solution: `AlienDictionary.java`

# Problems

Given dependency rules, determine whether an ordering exists and return one or all valid orderings as required.

## Examples

- Tasks `3`, prerequisites `[[0, 1], [1, 2]]` -> order `[0, 1, 2]`.
- A dependency cycle -> no valid ordering.
- Disconnected tasks can appear anywhere that respects dependencies.

# Solutions

Build a graph and in-degree counts, then apply Kahn's BFS topological sort; branch recursively when all possible orders are needed.
Time complexity: O(V+E + E*L), "V" is the number of distinct characters, "E"
Space complexity: O(V+E)

# Edge cases

- Cycle in dependencies.
- Disconnected tasks.
- Multiple valid orders.

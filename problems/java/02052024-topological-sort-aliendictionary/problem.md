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

# Solutions

Build a graph and in-degree counts, then apply Kahn's BFS topological sort; branch recursively when all possible orders are needed.
Time complexity: O(V+E + E*L), "V" is the number of distinct characters, "E"
Space complexity: O(V+E)

# Edge cases

- Cycle in dependencies.
- Disconnected tasks.
- Multiple valid orders.

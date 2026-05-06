---
solvedAt: "2024-02-10"
---

# Topological Sort Topologicalsort

- Language: java
- Original path: `java/topological-sort/TopologicalSort.java`
- Solution: `TopologicalSort.java`

## Notes

### Note 1

Problem statement: Topological Sort of a directed graph (a graph with
unidirectional edges) is a linear ordering of its vertices such that for
every directed edge (U, V) from vertex U to vertex V, U comes before V in the
ordering.

Given a directed graph, find the topological ordering of its vertices.

### Note 2

Time complexity: O(V + E), V is the number of vertices, E is the number of
edges
Space complexity: O(V + E)

### Note 3

1. initialize the graph

### Note 4

2. build the graph

### Note 5

3. find all sources

### Note 6

4. sort

### Note 7

add source to the sorted list

### Note 8

get all of its children from the graph

### Note 9

decrease their 'in-degree' by one

### Note 10

if 'in-degree' of a child becomes 0, it becomes a source

### Note 11

add it to the queue

### Note 12

topological sort is not possible as the graph has a cycle

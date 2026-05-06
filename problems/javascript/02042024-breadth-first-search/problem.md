---
solvedAt: "2024-04-02"
---

# Breadth First Search

- Language: javascript
- Original path: `javascript/020424-breadth-first-search.js`
- Solution: `code.js`

## Notes

### Note 1

Auxiliary classes

### Note 2

A Queue class with O(1) enqueue and dequeue operations.

Example usage:
const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.dequeue(); //'a'
q.isEmpty(); // False

### Note 3

@param {Record<string, Array<string>} graph The adjacency list representing the graph.
@param {string} source The source node to start traversal from. Has to be a valid node if graph is non-empty.
@return {Array<string>} A BFS-traversed order of nodes.

### Note 4

Test cases

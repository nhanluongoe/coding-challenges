---
solvedAt: "2024-04-02"
---
# Breadth First Search

- Language: javascript
- Original path: `javascript/020424-breadth-first-search.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement `function breadthFirstSearch(graph, source)` for the Breadth First Search challenge using the behavior implied by the existing solution and tests.

## Examples

- Graph `{ A: [B, C], B: [D], C: [], D: [] }`, source `A` -> visit `A, B, C, D`.
- Source with no neighbors -> visit only the source.
- Disconnected nodes not reachable from the source -> not visited.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.

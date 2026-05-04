/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
export default function depthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  const visited = new Set();
  const stack = [source];
  while (stack.length) {
    const travelNode = stack.pop();
    visited.add(travelNode);
    const neighbors = graph[travelNode];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      if (visited.has(neighbors[i])) continue;
      stack.push(neighbors[i]);
    }
  }

  return Array.from(visited);
}

// Test cases
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};
console.log(depthFirstSearch(graph, 'A')); // ['A', 'B', 'D', 'E', 'F', 'C']

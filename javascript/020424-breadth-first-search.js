/*  Auxiliary classes */

/**
 * A Queue class with O(1) enqueue and dequeue operations.
 *
 * Example usage:
 * const q = new Queue();
 * q.enqueue('a');
 * q.enqueue('b');
 * q.dequeue(); //'a'
 * q.isEmpty(); // False
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty() || !this.head) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return removedNode.value;
  }
}

/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. Has to be a valid node if graph is non-empty.
 * @return {Array<string>} A BFS-traversed order of nodes.
 */
function breadthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) {
    return [];
  }
  const queue = new Queue();
  queue.enqueue(source);
  const visited = new Set();
  while (!queue.isEmpty()) {
    const travelNode = queue.dequeue();
    visited.add(travelNode);

    graph[travelNode].forEach((neighbor) => {
      if (visited.has(neighbor)) return;
      queue.enqueue(neighbor);
    });
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
console.log(breadthFirstSearch(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']

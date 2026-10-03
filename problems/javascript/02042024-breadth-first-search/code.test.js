import { describe, expect, it } from "vitest";
import breadthFirstSearch, { Queue } from "./code";

const graph = { A: ["B", "C"], B: ["A", "D"], C: ["A"], D: ["B"] };

describe("breadthFirstSearch", () => {
  it("visits nodes breadth-first without duplicates", () => {
    expect(breadthFirstSearch(graph, "A")).toEqual(["A", "B", "C", "D"]);
  });

  it("handles an empty graph", () => {
    expect(breadthFirstSearch({}, "A")).toEqual([]);
  });

  it("supports FIFO queue operations", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeNull();
  });
});

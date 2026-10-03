import { describe, expect, it } from "vitest";
import Queue from "./code";

describe("Queue", () => {
  it("provides FIFO operations and endpoint inspection", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.enqueue("a")).toBe(1);
    expect(queue.enqueue("b")).toBe(2);
    expect(queue.front()).toBe("a");
    expect(queue.back()).toBe("b");
    expect(queue.dequeue()).toBe("a");
    expect(queue.length()).toBe(1);
  });

  it("returns undefined for empty operations", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.front()).toBeUndefined();
  });
});

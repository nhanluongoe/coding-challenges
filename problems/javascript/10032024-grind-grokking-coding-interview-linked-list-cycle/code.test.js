import { describe, expect, it } from "vitest";
import hasCycle, { Node } from "./code";

describe("hasCycle", () => {
  it("detects a cycle", () => {
    const head = new Node(1, new Node(2, new Node(3)));
    head.next.next.next = head.next;
    expect(hasCycle(head)).toBe(true);
  });

  it("handles acyclic, single-node, and empty lists", () => {
    expect(hasCycle(new Node(1, new Node(2)))).toBe(false);
    expect(hasCycle(new Node(1))).toBe(false);
    expect(hasCycle(null)).toBe(false);
  });
});

import { describe, expect, it } from "vitest";

import findLinkedListMidpoint, { ListNode } from "./code";

describe("findLinkedListMidpoint", () => {
  it("returns the middle node for an odd-length list", () => {
    const nodes = createLinkedList([1, 2, 4, 7, 3]);

    expect(findLinkedListMidpoint(nodes[0])).toBe(nodes[2]);
  });

  it("returns the second middle node for an even-length list", () => {
    const nodes = createLinkedList([1, 2, 4, 7]);

    expect(findLinkedListMidpoint(nodes[0])).toBe(nodes[2]);
  });

  it("returns the only node in a single-node list", () => {
    const node = new ListNode(1);

    expect(findLinkedListMidpoint(node)).toBe(node);
  });

  it("returns the second node in a two-node list", () => {
    const nodes = createLinkedList([1, 2]);

    expect(findLinkedListMidpoint(nodes[0])).toBe(nodes[1]);
  });

  it("finds the second middle node in a longer even-length list", () => {
    const nodes = createLinkedList([1, 2, 3, 4, 5, 6]);

    expect(findLinkedListMidpoint(nodes[0])).toBe(nodes[3]);
  });

  it("does not modify the linked list", () => {
    const nodes = createLinkedList([1, 2, 3]);

    findLinkedListMidpoint(nodes[0]);

    expect(nodes[0].next).toBe(nodes[1]);
    expect(nodes[1].next).toBe(nodes[2]);
    expect(nodes[2].next).toBeNull();
  });
});

function createLinkedList(values: number[]): ListNode[] {
  const nodes = values.map((value) => new ListNode(value));

  for (let index = 0; index < nodes.length - 1; index++) {
    nodes[index].next = nodes[index + 1];
  }

  return nodes;
}

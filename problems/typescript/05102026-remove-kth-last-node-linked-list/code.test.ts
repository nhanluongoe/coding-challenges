import { describe, expect, it } from "vitest";

import removeKthLastNode, { ListNode } from "./code";

describe("removeKthLastNode", () => {
  it("removes the second-to-last node from the example", () => {
    const head = createLinkedList([1, 2, 4, 7, 3]);

    const result = removeKthLastNode(head, 2);

    expect(toArray(result)).toEqual([1, 2, 4, 3]);
  });

  it("removes the tail when k is 1", () => {
    const head = createLinkedList([1, 2, 3]);

    const result = removeKthLastNode(head, 1);

    expect(toArray(result)).toEqual([1, 2]);
  });

  it("removes the head when k equals the list length", () => {
    const head = createLinkedList([1, 2, 3]);

    const result = removeKthLastNode(head, 3);

    expect(toArray(result)).toEqual([2, 3]);
  });

  it("returns null when removing the only node", () => {
    const head = new ListNode(1);

    expect(removeKthLastNode(head, 1)).toBeNull();
  });

  it("removes the correct node when values are duplicated", () => {
    const head = createLinkedList([1, 2, 2, 3]);

    const result = removeKthLastNode(head, 3);

    expect(toArray(result)).toEqual([1, 2, 3]);
  });

  it("reuses the remaining original nodes", () => {
    const first = new ListNode(1);
    const second = new ListNode(2);
    const third = new ListNode(3);
    first.next = second;
    second.next = third;

    const result = removeKthLastNode(first, 2);

    expect(result).toBe(first);
    expect(first.next).toBe(third);
    expect(third.next).toBeNull();
  });

  it.each([0, -1, 1.5])("rejects an invalid k value: %s", (k) => {
    expect(() => removeKthLastNode(new ListNode(1), k)).toThrow(RangeError);
  });

  it("rejects a k value greater than the list length", () => {
    const head = createLinkedList([1, 2]);

    expect(() => removeKthLastNode(head, 3)).toThrow(RangeError);
  });
});

function createLinkedList(values: number[]): ListNode {
  const head = new ListNode(values[0]);
  let tail = head;

  for (let index = 1; index < values.length; index++) {
    tail.next = new ListNode(values[index]);
    tail = tail.next;
  }

  return head;
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  return values;
}

import { describe, expect, it } from "vitest";

import reverseLinkedList, { ListNode } from "./code";

describe("reverseLinkedList", () => {
  it("reverses the example linked list", () => {
    const head = createLinkedList([1, 2, 4, 7, 3]);

    const reversedHead = reverseLinkedList(head);

    expect(toArray(reversedHead)).toEqual([3, 7, 4, 2, 1]);
  });

  it("returns null for an empty linked list", () => {
    expect(reverseLinkedList(null)).toBeNull();
  });

  it("leaves a single-node linked list unchanged", () => {
    const head = new ListNode(5);

    const reversedHead = reverseLinkedList(head);

    expect(reversedHead).toBe(head);
    expect(toArray(reversedHead)).toEqual([5]);
  });

  it("reverses a two-node linked list", () => {
    const head = createLinkedList([1, 2]);

    const reversedHead = reverseLinkedList(head);

    expect(toArray(reversedHead)).toEqual([2, 1]);
  });

  it("reverses a linked list containing duplicate values", () => {
    const head = createLinkedList([1, 2, 2, 3]);

    const reversedHead = reverseLinkedList(head);

    expect(toArray(reversedHead)).toEqual([3, 2, 2, 1]);
  });

  it("reuses the original nodes", () => {
    const first = new ListNode(1);
    const second = new ListNode(2);
    const third = new ListNode(3);
    first.next = second;
    second.next = third;

    const reversedHead = reverseLinkedList(first);

    expect(reversedHead).toBe(third);
    expect(third.next).toBe(second);
    expect(second.next).toBe(first);
    expect(first.next).toBeNull();
  });
});

function createLinkedList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const value of values) {
    const node = new ListNode(value);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
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

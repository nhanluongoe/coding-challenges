import { describe, expect, it } from "vitest";

import findLinkedListIntersection, { ListNode } from "./code";

describe("findLinkedListIntersection", () => {
  it("returns the intersection node from the example", () => {
    const intersection = createLinkedList([8, 7, 2]);
    const headA = createLinkedList([1, 3, 4], intersection);
    const headB = createLinkedList([6, 4], intersection);

    expect(findLinkedListIntersection(headA, headB)).toBe(intersection);
  });

  it("returns null when the lists do not intersect", () => {
    const headA = createLinkedList([1, 2, 3]);
    const headB = createLinkedList([4, 5, 6]);

    expect(findLinkedListIntersection(headA, headB)).toBeNull();
  });

  it("does not treat equal values as an intersection", () => {
    const headA = createLinkedList([1, 2, 3]);
    const headB = createLinkedList([1, 2, 3]);

    expect(findLinkedListIntersection(headA, headB)).toBeNull();
  });

  it("returns the shared head when both lists are the same", () => {
    const sharedHead = createLinkedList([1, 2, 3]);

    expect(findLinkedListIntersection(sharedHead, sharedHead)).toBe(sharedHead);
  });

  it("finds an intersection at the tail", () => {
    const sharedTail = new ListNode(9);
    const headA = createLinkedList([1, 2], sharedTail);
    const headB = createLinkedList([3, 4, 5], sharedTail);

    expect(findLinkedListIntersection(headA, headB)).toBe(sharedTail);
  });

  it("returns null when one list is empty", () => {
    const head = createLinkedList([1, 2, 3]);

    expect(findLinkedListIntersection(head, null)).toBeNull();
    expect(findLinkedListIntersection(null, head)).toBeNull();
  });

  it("returns null when both lists are empty", () => {
    expect(findLinkedListIntersection(null, null)).toBeNull();
  });
});

function createLinkedList(
  values: number[],
  tail: ListNode | null = null,
): ListNode {
  const head = new ListNode(values[0]);
  let current = head;

  for (let index = 1; index < values.length; index++) {
    current.next = new ListNode(values[index]);
    current = current.next;
  }

  current.next = tail;
  return head;
}

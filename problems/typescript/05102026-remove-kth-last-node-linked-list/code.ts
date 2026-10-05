export class ListNode {
  constructor(
    public readonly value: number,
    public next: ListNode | null = null,
  ) {}
}

export default function removeKthLastNode(
  head: ListNode,
  k: number,
): ListNode | null {
  if (!Number.isInteger(k) || k < 1) {
    throw new RangeError("k must be a positive integer");
  }

  const dummyHead = new ListNode(0, head);
  let fast = dummyHead;

  for (let step = 0; step < k; step++) {
    if (fast.next === null) {
      throw new RangeError("k cannot exceed the linked-list length");
    }

    fast = fast.next;
  }

  let previous = dummyHead;

  while (fast.next !== null) {
    if (previous.next === null) {
      throw new Error("Unexpected end of linked list");
    }

    fast = fast.next;
    previous = previous.next;
  }

  const nodeToRemove = previous.next;

  if (nodeToRemove === null) {
    throw new Error("Unexpected end of linked list");
  }

  previous.next = nodeToRemove.next;
  nodeToRemove.next = null;

  return dummyHead.next;
}

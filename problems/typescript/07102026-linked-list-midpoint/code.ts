export class ListNode {
  constructor(
    public readonly value: number,
    public next: ListNode | null = null,
  ) {}
}

export default function findLinkedListMidpoint(head: ListNode): ListNode {
  let midpoint = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    const nextMidpoint = midpoint.next;

    if (nextMidpoint === null) {
      throw Error("Linked list error");
    }

    midpoint = nextMidpoint;
    fast = fast.next.next;
  }

  return midpoint;
}

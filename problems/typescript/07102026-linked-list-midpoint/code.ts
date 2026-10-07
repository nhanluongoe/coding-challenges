export class ListNode {
  constructor(
    public readonly value: number,
    public next: ListNode | null = null,
  ) {}
}

export default function findLinkedListMidpoint(head: ListNode): ListNode {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

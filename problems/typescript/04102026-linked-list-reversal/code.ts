export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

export default function reverseLinkedList(
  head: ListNode | null,
): ListNode | null {
  let prevNode = null;
  let currentNode: ListNode | null = head;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}

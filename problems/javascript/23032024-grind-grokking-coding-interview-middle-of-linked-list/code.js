export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default function findMiddleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow?.value;
}

/**
 * Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
 */

export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default function hasCycle(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

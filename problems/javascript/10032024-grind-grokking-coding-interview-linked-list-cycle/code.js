/**
 * Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
//            |              |
//            - - - - - - - -

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(hasCycle(head)); // should be false

head.next.next.next.next.next = head.next.next;
console.log(hasCycle(head)); // should be true

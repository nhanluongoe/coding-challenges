/**
 * Singly linked list definition
 */
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  push(val) {
    let newNode = new ListNode(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
  }

  print() {
    let walker = this.head
    while (walker) {
      console.log(walker.val)
      walker = walker.next
    }
  }
}

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */

const deleteDuplicates = (head) => {
  let firstWalker = head

  while (firstWalker) {
    let secondWalker = firstWalker
    while (secondWalker.val === secondWalker.next?.val) {
      secondWalker = secondWalker.next
    }
    firstWalker.next = secondWalker.next
    firstWalker = firstWalker.next
  }

  return head
}

const list = new SinglyLinkedList()

const values = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5]
values.forEach((num) => list.push(num))

deleteDuplicates(list.head)

list.print()

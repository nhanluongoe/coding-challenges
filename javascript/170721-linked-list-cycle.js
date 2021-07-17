/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head) => {
  let travellerOne = head
  let travellerTwo = head

  while (travellerOne && travellerTwo && travellerTwo.next) {
    travellerOne = travellerOne.next
    travellerTwo = travellerTwo.next.next

    if (travellerOne === travellerTwo) return true
  }

  return false
}

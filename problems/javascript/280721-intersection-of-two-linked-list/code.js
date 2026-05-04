/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  const visitedNodeA = []

  let traveller = headA
  while (traveller) {
    visitedNodeA.push(traveller)
    traveller = traveller.next
  }

  traveller = headB
  while (traveller) {
    if (visitedNodeA.includes(traveller)) return traveller
    traveller = traveller.next
  }

  return null
}

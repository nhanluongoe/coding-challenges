# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# https://leetcode.com/problems/intersection-of-two-linked-lists/
#
# @param {ListNode} headA
# @param {ListNode} headB
# @return {ListNode}
def getIntersectionNode(headA, headB)
  visited_node = {}

  traveller = headA
  while traveller
    visited_node[traveller] = true
    traveller = traveller.next
  end

  traveller = headB
  while traveller
    return traveller if visited_node[traveller]
    traveller = traveller.next
  end

  nil
end

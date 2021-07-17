# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# https://leetcode.com/problems/linked-list-cycle/
#
# @param {ListNode} head
# @return {Boolean}

def hasCycle(head)
  traveller_one = head
  traveller_two = head

  while traveller_one && traveller_two && traveller_two.next
    traveller_one = traveller_one.next
    traveller_two = traveller_two.next.next

    return true if traveller_one == traveller_two
  end

  false
end

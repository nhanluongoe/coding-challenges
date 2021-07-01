# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

class SinglyLinkedList
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  def push(val)
    if !@head
      @head = ListNode.new(val)
      @tail = @head
    else
      @tail.next = ListNode.new(val)
      @tail = @tail.next
    end
  end

  def print
    walker = @head
    while walker
      puts walker.val
      walker = walker.next
    end
  end
end

# https://leetcode.com/problems/remove-duplicates-from-sorted-list/
#
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
  first_walker = head

  while first_walker
    second_walker = first_walker
    while second_walker.next && second_walker.val == second_walker.next.val
      second_walker = second_walker.next
    end
    first_walker.next = second_walker.next
    first_walker = first_walker.next
  end

  head
end

list = SinglyLinkedList.new

[1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5].each do |num|
  list.push(num)
end

delete_duplicates(list.head)

list.print

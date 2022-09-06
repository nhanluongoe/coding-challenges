import java.util.*;

class ListNode {
  int value;
  ListNode next;

  public ListNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given the head of a Singly LinkedList, reverse the
 * LinkedList. Write a function to return the new head of the reversed
 * LinkedList.
 */
public class ReverseLinkedList {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static ListNode reverse(ListNode head) {
    ListNode current = head;
    ListNode previous = null;
    ListNode next = null;

    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return previous;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    ListNode result = reverse(head);
    while (result != null) {
      System.out.print(result.value + " ");
      result = result.next;
    }
  }
}

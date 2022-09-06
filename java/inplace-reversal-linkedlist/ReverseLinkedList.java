import java.util.*;

class ListNode {
  int value;
  ListNode next;

  public ListNode(int value) {
    this.value = value;
  }
}

public class ReverseLinkedList {
  public static ListNode reverse(ListNode head) {

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

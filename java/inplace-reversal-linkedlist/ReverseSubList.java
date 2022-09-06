class ListNode {
  int value = 0;
  ListNode next;

  public ListNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given the head of a LinkedList and two positions ‘p’ and
 * ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
 */
public class ReverseSubList {
  public static ListNode reverse(ListNode head, int p, int q) {

    return head;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    ListNode result = reverse(head, 2, 4);
    while (result != null) {
      System.out.print(result.value + " ");
      result = result.next;
    }
  }
}
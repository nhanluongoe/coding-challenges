class ListNode {
  int value = 0;
  ListNode next;

  ListNode(int value) {
    this.value = value;
  }
}

public class MiddleOfLinkedList {
  public static ListNode findMiddle(ListNode head) {

  }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    System.out.println(findMiddle(head).value);

    head.next.next.next.next.next = new ListNode(6);
    System.out.println(findMiddle(head).value);

    head.next.next.next.next.next.next = new ListNode(7);
    System.out.println(findMiddle(head).value);
  }  
}

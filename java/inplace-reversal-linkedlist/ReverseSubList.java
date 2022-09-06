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
    if (p == q) return head;

    ListNode current = head, previous = null;
    // skipping (p - 1) first nodes, current will point to "p-th" node
    for (int i = 0; current != null && i < p - 1; i++) {
      previous = current;
      current = current.next;
    }

    ListNode LastNodeOfFirstPart = previous;
    ListNode LastNodeOfSubList = current;
    ListNode next = null;
    // reverse node between p and q
    for (int i = 0; i < q - p + 1; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    // connect to the first part
    if (LastNodeOfFirstPart != null) {
      LastNodeOfFirstPart.next = previous;
    } else {
      head = previous;
    }

    // connect to the second second part 
    LastNodeOfSubList.next = current;


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
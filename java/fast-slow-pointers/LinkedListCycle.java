class ListNode {
  int value = 0;
  ListNode next;

  public ListNode(int value) {
    this.value = value;
  }
}

public class LinkedListCycle {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static boolean hasCycle(ListNode node) {
    ListNode fast = node;
    ListNode slow = node;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow)
        return true;
    }

    return false;
  }

  // public static int findCycleLength(ListNode head) {
  //   ListNode fast = head;
  //   ListNode slow = head;
    
  //   while(fast.next != null && slow != null) {
  //     fast = fast.next.next;
  //     slow = slow.next;
  //     if (fast == slow) {
  //       int length = 0;
  //       ListNode current = slow.next;
  //       while (current != slow) {
  //         length++;
  //         current = current.next;
  //       }
  //       return length;
  //     }
  //   }

  //   return 0; // no cycle found
  // }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);

    System.out.println(hasCycle(head));

    head.next.next.next.next.next.next = head.next.next;
    System.out.println(hasCycle(head));
    // System.out.println("Cyclic length: " + findCycleLength(head));

    head.next.next.next.next.next.next = head.next.next.next;
    System.out.println(hasCycle(head));
    // System.out.println("Cyclic length: " + findCycleLength(head));
  }
}

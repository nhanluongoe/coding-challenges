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

  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static int findCycleLength(ListNode head) {
    ListNode fast = head;
    ListNode slow = head;
    
    while(fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        int length = 1;
        ListNode current = slow.next;
        while (current != slow) {
          length++;
          current = current.next;
        }
        return length;
      }
    }

    return 0; // no cycle found
  }

  /**
   * Time complexity: O(n + n) => O(n)
   * Space complexity: O(1)
   */
  public static ListNode findCycleStart(ListNode head) {
    ListNode pointer1 = head;
    ListNode pointer2 = head;

    int cycleLength = findCycleLength(head);
    for (int i = 0; i < cycleLength; i++) {
      pointer2 = pointer2.next;
    }

    while (pointer1 != pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    return pointer1;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    System.out.println(hasCycle(head));
    System.out.println("Cyclic length: " + findCycleLength(head));

    head.next.next.next.next.next.next = head.next.next;
    System.out.println(hasCycle(head));
    System.out.println("Cyclic length: " + findCycleLength(head));
    System.out.println("Linkedlist cycle start: " + findCycleStart(head).value);

    head.next.next.next.next.next.next = head.next.next.next;
    System.out.println(hasCycle(head));
    System.out.println("Cyclic length: " + findCycleLength(head));
    System.out.println("Linkedlist cycle start: " + findCycleStart(head).value);


    head.next.next.next.next.next.next = head;
    System.out.println("Linkedlist cycle start: " + findCycleStart(head).value);
  }
}

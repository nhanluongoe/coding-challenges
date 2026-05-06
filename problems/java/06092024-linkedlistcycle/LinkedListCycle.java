public class LinkedListCycle {
  public static class LinkedListNode {
    int value;
    LinkedListNode next;

    public LinkedListNode(int value) {
      this.value = value;
    }
  }

  public static LinkedListNode append (LinkedListNode head, int value) {
    LinkedListNode current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new LinkedListNode(value);
    return current.next;
  }

  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static boolean containCycle(LinkedListNode head) {
    if (head == null) {
      return false;
    }

    LinkedListNode runner1 = head;
    LinkedListNode runner2 = head;
    while(runner1.next != null && runner2.next.next != null) {
      runner1 = runner1.next;
      runner2 = runner2.next.next;

      if (runner1 == runner2) {
        return true;
      }
    }
    return false;
  }

  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(1);
    append(head, 2);
    append(head, 3);
    LinkedListNode tail = append(head, 4);
    tail.next = head;
    System.out.println(containCycle(head)); // expect true

    LinkedListNode head2 = new LinkedListNode(1);
    append(head2, 2);
    append(head2, 3);
    append(head2, 4);
    System.out.println(containCycle(head2)); // expect false

    LinkedListNode head3 = new LinkedListNode(1);
    System.out.println(containCycle(head3)); // expect false
  }
}
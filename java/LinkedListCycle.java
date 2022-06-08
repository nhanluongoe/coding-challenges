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

  public static boolean containCycle(LinkedListNode head) {
    return true;
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
  }
}
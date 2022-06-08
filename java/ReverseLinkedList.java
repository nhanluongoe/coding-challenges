public class ReverseLinkedList {
  public static class LinkedListNode {
    int value;
    LinkedListNode next;

    public LinkedListNode(int value) {
      this.value = value;
    }
  }

  public static LinkedListNode append(LinkedListNode head, int value) {
    LinkedListNode current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new LinkedListNode(value);
    return current.next;
  }

  public static LinkedListNode reverse(LinkedListNode head) {
    if (head == null) return head;

    LinkedListNode previous = null;
    LinkedListNode current = head;

    while (current.next != null) {
      LinkedListNode next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    current.next = previous;

    return current;
  }

  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(1);
    append(head, 2);
    append(head, 3);
    append(head, 4);

    LinkedListNode newHead = reverse(head);
    System.out.println(newHead.value); // expect 4
    System.out.println(newHead.next.value); // expect 3


  }
}
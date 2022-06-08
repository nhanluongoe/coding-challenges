public class ReverseLinkedList {
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


  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(1);
    append(head, 2);
    append(head, 3);
    LinkedListNode tail = append(head, 4);
    tail.next = head;

    LinkedListNode head2 = new LinkedListNode(1);
    append(head2, 2);
    append(head2, 3);
    append(head2, 4);

    LinkedListNode head3 = new LinkedListNode(1);
  }
}
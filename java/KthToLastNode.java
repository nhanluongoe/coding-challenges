public class KthToLastNode {
  public static class LinkedListNode {

      public int value;
      public LinkedListNode next;

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

  public static LinkedListNode kthToLastNode(int k, LinkedListNode head) {
      int length = 0;
      LinkedListNode current = head;
      while (current != null) {
        current=current.next;
        length++;
      }

      if (k > 4 || k == 0) {
        throw new IllegalArgumentException("K is greater than length");
      }

      current = head;
      for (int i = 0; i < length - k; i++) {
        current = current.next;
      }
      
      return current;
  }

  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(1);
    append(head, 2);
    append(head, 3);
    append(head, 4);


    System.out.println(kthToLastNode(2, head).value); //expect 3

  }
}
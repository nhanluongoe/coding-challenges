public class DeleteNode {

  public static class LinkedListNode {

    public int value;
    public LinkedListNode next;

    public LinkedListNode(int value) {
      this.value = value;
    }
  }

  public static void deleteNode(LinkedListNode nodeToDelete) {
    if (nodeToDelete.next != null) {
      nodeToDelete.value = nodeToDelete.next.value;
      nodeToDelete.next = nodeToDelete.next.next;
    } else {
      throw new IllegalArgumentException("Cannot delete the last node with this implementation");
    }
  }

  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(1);
    head.next = new LinkedListNode(2);
    head.next.next = new LinkedListNode(3);
    head.next.next.next = new LinkedListNode(4);

    deleteNode(head);
    LinkedListNode node = head;
    System.out.println(node.value); // expect 2
    node = node.next;
    System.out.println(node.value); // expect 3
  }

}

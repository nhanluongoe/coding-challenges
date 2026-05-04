public class DeleteNode {

  public static class LinkedListNode {

    public int value;
    public LinkedListNode next;

    public LinkedListNode(int value) {
      this.value = value;
    }
  }

  /**
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
  public static void deleteNode(LinkedListNode nodeToDelete) {
    if (nodeToDelete.next != null) {
      nodeToDelete.value = nodeToDelete.next.value;
      nodeToDelete.next = nodeToDelete.next.next;
    } else {
      throw new IllegalArgumentException("Cannot delete the last node with this implementation");
    }
  }

  public static LinkedListNode append(final LinkedListNode head, int value) {
    LinkedListNode currentNode = head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new LinkedListNode(value);
    return currentNode.next;
  }

  public static void main(String[] args) {
    LinkedListNode head = new LinkedListNode(1);
    append(head, 2);
    append(head, 3);
    append(head, 4);

    deleteNode(head);
    LinkedListNode node = head;
    System.out.println(node.value); // expect 2
    node = node.next;
    System.out.println(node.value); // expect 3
  }

}

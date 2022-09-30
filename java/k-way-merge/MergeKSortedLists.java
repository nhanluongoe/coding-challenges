import java.util.*;

class ListNode {
  int value;
  ListNode next;

  public ListNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given an array of ‘K’ sorted LinkedLists, merge them into
 * one sorted list.
 */
public class MergeKSortedLists {
  public static ListNode merge(ListNode[] lists) {
    PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.value - b.value);
    for (ListNode root : lists)
      minHeap.offer(root);

    ListNode resultHead = null, resultTail = null;
    while (!minHeap.isEmpty()) {
      ListNode node = minHeap.poll();
      if (resultHead == null) {
        resultHead = node;
        resultTail = node;
      } else {
        resultTail.next = node;
        resultTail = resultTail.next;
      }

      if (node.next != null) {
        minHeap.offer(node.next);
      }
    }

    return resultHead;
  }

  public static void main(String[] args) {
    ListNode l1 = new ListNode(2);
    l1.next = new ListNode(6);
    l1.next.next = new ListNode(8);

    ListNode l2 = new ListNode(3);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(7);

    ListNode l3 = new ListNode(1);
    l3.next = new ListNode(3);
    l3.next.next = new ListNode(4);

    ListNode result = merge(new ListNode[] { l1, l2, l3 });
    System.out.println("Result: ");
    while (result != null) {
      System.out.print(result.value + " ");
      result = result.next;
    }
  }
}

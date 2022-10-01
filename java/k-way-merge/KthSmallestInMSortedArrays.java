import java.util.*;

class Node {
  int arrayIndex;
  int elementIndex;

  public Node(int arrayIndex, int elementIndex) {
    this.arrayIndex = arrayIndex;
    this.elementIndex = elementIndex;
  }
}

/**
 * Problem statement: Given ‘M’ sorted arrays, find the K’th smallest number
 * among all the arrays.
 */
public class KthSmallestInMSortedArrays {
  /**
   * Time complexity: O(n*logk), n is total numbers in arrays
   * Space complexity: O(k)
   */
  public static int findKthSmallest(List<Integer[]> lists, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    for (Integer[] arr : lists) {
      for (Integer num : arr) {
        if (maxHeap.size() >= k) {
          if (maxHeap.peek() > num) {
            maxHeap.poll();
            maxHeap.offer(num);
          }
        } else {
          maxHeap.offer(num);
        }
      }
    }

    return maxHeap.peek();
  }

  /**
   * Time complexity: O(k*logm), m is the total number of input arrays
   * Space complexity: O(m)
   */
  public static int findKthSmallestBetter(List<Integer[]> lists, int k) {
    PriorityQueue<Node> minHeap = new PriorityQueue<>(
        (a, b) -> lists.get(a.arrayIndex)[a.elementIndex] - lists.get(b.arrayIndex)[b.elementIndex]);

    for (int i = 0; i < lists.size(); i++)
      if (lists.get(i) != null)
        minHeap.offer(new Node(i, 0));

    int elementCount = 0, result = -1;
    while (!minHeap.isEmpty()) {
      Node node = minHeap.poll();
      result = lists.get(node.arrayIndex)[node.elementIndex];

      if (++elementCount == k)
        break;

      node.elementIndex++;
      if (node.elementIndex < lists.get(node.arrayIndex).length)
        minHeap.offer(node);
    }

    return result;
  }

  public static void main(String[] args) {
    Integer[] l1 = new Integer[] { 2, 6, 8 };
    Integer[] l2 = new Integer[] { 3, 6, 7 };
    Integer[] l3 = new Integer[] { 1, 3, 4 };
    List<Integer[]> lists = new ArrayList<>();
    lists.add(l1);
    lists.add(l2);
    lists.add(l3);
    int result = findKthSmallestBetter(lists, 5);
    System.out.println("Kth smallest number is: " + result);
  }
}

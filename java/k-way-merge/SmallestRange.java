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
 * Problem statement: Given ‘M’ sorted arrays, find the smallest range that
 * includes at least one number from each of the ‘M’ lists.
 */
public class SmallestRange {
  /**
   * Time complexity: O(N*logM), "N" is the total number of all input arrays
   * Space complexity: O(M)
   */
  public static int[] findSmallestRange(List<Integer[]> lists) {
    PriorityQueue<Node> minHeap = new PriorityQueue<>(
        (a, b) -> lists.get(a.arrayIndex)[a.elementIndex] - lists.get(b.arrayIndex)[b.elementIndex]);

    int max = Integer.MIN_VALUE;
    for (int i = 0; i < lists.size(); i++)
      if (lists.get(i) != null) {
        minHeap.offer(new Node(i, 0));
        max = Math.max(max, lists.get(i)[0]);
      }

    int start = 0, end = Integer.MAX_VALUE;
    while (minHeap.size() == lists.size()) {
      Node node = minHeap.poll();
      if (end - start > max - lists.get(node.arrayIndex)[node.elementIndex]) {
        start = lists.get(node.arrayIndex)[node.elementIndex];
        end = max;
      }
      node.elementIndex++;
      if (node.elementIndex < lists.get(node.arrayIndex).length) {
        minHeap.offer(node);
        max = Math.max(max, lists.get(node.arrayIndex)[node.elementIndex]);
      }
    }

    return new int[] { start, end };
  }

  public static void main(String[] args) {
    Integer[] l1 = new Integer[] { 1, 5, 8 };
    Integer[] l2 = new Integer[] { 4, 12 };
    Integer[] l3 = new Integer[] { 7, 8, 10 };
    List<Integer[]> lists = new ArrayList<>();
    lists.add(l1);
    lists.add(l2);
    lists.add(l3);
    int[] result = findSmallestRange(lists);
    System.out.print("Smallest range is: [" + result[0] + ", " + result[1] + "]");
  }
}

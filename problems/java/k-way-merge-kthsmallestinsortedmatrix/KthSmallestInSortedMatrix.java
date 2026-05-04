import java.util.*;

class Node {
  int rowIndex;
  int columnIndex;

  public Node(int rowIndex, int columnIndex) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }
}

/**
 * Problem statement: Given an N * N matrix where each row and column is
 * sorted in ascending order, find the Kth smallest element in the matrix.
 */
public class KthSmallestInSortedMatrix {
  /**
   * Time complexity:O(k*logn)
   * Space complexity: O(n)
   */
  public static int findKthSmallest(int[][] matrix, int k) {
    PriorityQueue<Node> minHeap = new PriorityQueue<>(
        (a, b) -> matrix[a.rowIndex][a.columnIndex] - matrix[b.rowIndex][b.columnIndex]);

    for (int i = 0; i < matrix[0].length; i++)
      minHeap.offer(new Node(i, 0));

    int count = 0, result = 0;
    while (!minHeap.isEmpty()) {
      Node node = minHeap.poll();
      result = matrix[node.rowIndex][node.columnIndex];

      if (++count == k)
        break;

      node.columnIndex++;
      if (node.columnIndex < matrix[node.rowIndex].length)
        minHeap.offer(node);
    }

    return result;
  }

  public static void main(String[] args) {
    int matrix[][] = { { 2, 6, 8 }, { 3, 7, 10 }, { 5, 8, 11 } };
    int result = findKthSmallest(matrix, 5);
    System.out.println("Kth smallest number is: " + result);
  }
}

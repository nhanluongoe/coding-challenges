import java.util.*;

public class KthSmallestInSortedMatrix {
  /**
   * Problem statement: Given an N * NN∗N matrix where each row and column is
   * sorted in ascending order, find the Kth smallest element in the matrix.
   */
  public static int findKthSmallest(int[][] matrix, int k) {

    return -1;
  }

  public static void main(String[] args) {
    int matrix[][] = { { 2, 6, 8 }, { 3, 7, 10 }, { 5, 8, 11 } };
    int result = findKthSmallest(matrix, 5);
    System.out.println("Kth smallest number is: " + result);
  }
}

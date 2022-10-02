import java.util.*;

public class KthSmallestInSortedMatrix {
  public static int findKthSmallest(int[][] matrix, int k) {

    return -1;
  }

  public static void main(String[] args) {
    int matrix[][] = { { 2, 6, 8 }, { 3, 7, 10 }, { 5, 8, 11 } };
    int result = findKthSmallest(matrix, 5);
    System.out.println("Kth smallest number is: " + result);
  }
}

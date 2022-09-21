import java.util.*;

/**
 * Problem statement: Given an unsorted array of numbers, find Kth smallest
 * number in it.
 * 
 * Please note that it is the Kth smallest number in the sorted order, not the
 * Kth distinct element.
 */
public class KthSmallestNumber {
  public static int findKthSmallestNumber(int[] nums, int k) {

    return -1;
  }

  public static void main(String[] args) {
    int result = findKthSmallestNumber(new int[] { 1, 5, 12, 2, 11, 5 }, 3);
    System.out.println("Kth smallest number is: " + result);

    result = findKthSmallestNumber(new int[] { 1, 5, 12, 2, 11, 5 }, 4);
    System.out.println("Kth smallest number is: " + result);

    result = findKthSmallestNumber(new int[] { 5, 12, 11, -1, 12 }, 3);
    System.out.println("Kth smallest number is: " + result);
  }
}

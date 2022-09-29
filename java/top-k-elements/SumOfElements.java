import java.util.*;

/**
 * Problem statement: Given an array, find the sum of all numbers between the
 * K1’th and K2’th smallest elements of that array.
 */
public class SumOfElements {
  public static int findSumOfElements(int[] nums, int k1, int k2) {

    return -1;
  }

  public static void main(String[] args) {
    int result = findSumOfElements(new int[] { 1, 3, 12, 5, 15, 11 }, 3, 6);
    System.out.println(result);

    result = findSumOfElements(new int[] { 3, 5, 8, 7 }, 1, 4);
    System.out.println(result);
  }
}

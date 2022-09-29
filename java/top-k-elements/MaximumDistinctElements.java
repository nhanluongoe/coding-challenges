import java.util.*;

/**
 * Problem statement: Given an array of numbers and a number ‘K’, we need to
 * remove ‘K’ numbers from the array such that we are left with maximum distinct
 * numbers.
 */
public class MaximumDistinctElements {
  public static int findMaximumDistinctElements(int[] nums, int k) {

    return -1;
  }

  public static void main(String[] args) {
    int result = findMaximumDistinctElements(new int[] { 7, 3, 5, 8, 5, 3, 3 }, 2);
    System.out.println(result);

    result = findMaximumDistinctElements(new int[] { 3, 5, 12, 11, 12 }, 3);
    System.out.println(result);

    result = findMaximumDistinctElements(new int[] { 1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5 }, 2);
    System.out.println(result);
  }
}

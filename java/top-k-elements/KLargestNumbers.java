import java.util.*;

/**
 * Problem statement: Given an unsorted array of numbers, find the ‘K’ largest
 * numbers in it.
 */
public class KLargestNumbers {
  public static List<Integer> findKLargestNumbers(int[] nums, int k) {

    return new ArrayList<>();
  }

  public static void main(String[] args) {
    List<Integer> result = findKLargestNumbers(new int[]{3, 1, 5, 12, 2, 11}, 3);
    System.out.println("Here are the top K numbers: " + result);

    result = findKLargestNumbers(new int[]{5, 12, 11, -1, 12}, 3);
    System.out.println("Here are the top K numbers: " + result);
  }
}

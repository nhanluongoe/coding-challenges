import java.util.*;

/**
 * Problem statement: Given an unsorted array of numbers, find the top ‘K’
 * frequently occurring numbers in it.
 */
public class TopKFrequentNumbers {
  public static List<Integer> findTopKFrequentNumbers(int[] nums, int k) {
    List<Integer> topNumbers = new ArrayList<>();

    return topNumbers;
  }

  public static void main(String[] args) {
    List<Integer> result = findTopKFrequentNumbers(new int[] { 1, 3, 5, 12, 11, 12, 11 }, 2);
    System.out.println("Here are the K frequent numbers: " + result);

    result = findTopKFrequentNumbers(new int[] { 5, 12, 11, 3, 11 }, 2);
    System.out.println("Here are the K frequent numbers: " + result);
  }
}

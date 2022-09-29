import java.util.*;

/**
 * Problem statement: Given an array of numbers and a number ‘K’, we need to
 * remove ‘K’ numbers from the array such that we are left with maximum distinct
 * numbers.
 */
public class MaximumDistinctElements {
  public static int findMaximumDistinctElements(int[] nums, int k) {
    Map<Integer, Integer> numberFrequencies = new HashMap<>();
    for (int num : nums) {
      numberFrequencies.put(num, numberFrequencies.getOrDefault(num, 0) + 1);
    }

    PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());
    int maxDistinctElements = 0;
    for (Map.Entry<Integer, Integer> entry : numberFrequencies.entrySet()) {
      if (entry.getValue() > 1)
        minHeap.offer(entry);
      else
        maxDistinctElements++;
    }

    while (!minHeap.isEmpty() && k > 0) {
      k -= minHeap.poll().getValue() - 1;
      if (k >= 0)
        maxDistinctElements++;
    }

    if (k > 0)
      maxDistinctElements -= k;

    return maxDistinctElements;

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

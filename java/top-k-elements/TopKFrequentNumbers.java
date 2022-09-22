import java.util.*;

/**
 * Problem statement: Given an unsorted array of numbers, find the top ‘K’
 * frequently occurring numbers in it.
 */
public class TopKFrequentNumbers {
  /**
   * Time complexity: O(n + n*logk)
   * Space complexity: O(n)
   */
  public static List<Integer> findTopKFrequentNumbers(int[] nums, int k) {
    Map<Integer, Integer> numberFrequencyMap = new HashMap<>();
    for (int num : nums) { // take O(n)
      numberFrequencyMap.put(num, numberFrequencyMap.getOrDefault(num, 0) + 1);
    }

    PriorityQueue<Map.Entry<Integer, Integer>> minHeap = new PriorityQueue<>((a, b) -> a.getValue() - b.getValue());
    for (Map.Entry<Integer, Integer> entry : numberFrequencyMap.entrySet()) { // take O(n)
      minHeap.offer(entry); // take O(logk)
      if (minHeap.size() > k)
        minHeap.poll(); // take O(logk)
    }

    List<Integer> topNumbers = new ArrayList<>(k);
    while (!minHeap.isEmpty()) { // take O(k)
      topNumbers.add(minHeap.poll().getKey()); // take O(1) for ArrayList add and log(k) for Heap poll
    }

    return topNumbers;
  }

  public static void main(String[] args) {
    List<Integer> result = findTopKFrequentNumbers(new int[] { 1, 3, 5, 12, 11, 12, 11 }, 2);
    System.out.println("Here are the K frequent numbers: " + result);

    result = findTopKFrequentNumbers(new int[] { 5, 12, 11, 3, 11 }, 2);
    System.out.println("Here are the K frequent numbers: " + result);
  }
}

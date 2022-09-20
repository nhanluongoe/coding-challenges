import java.util.*;

/**
 * Problem statement: Given an unsorted array of numbers, find the ‘K’ largest
 * numbers in it.
 * 
 * Can we do better than O(n*logn) by sorting the array first?
 */
public class KLargestNumbers {
  /**
   * Time complexity: O(k*logk + (n-k)*logk)
   * Space complexity: O(k)
   */
  public static List<Integer> findKLargestNumbers(int[] nums, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> a - b);

    // will take O(k * logk)
    for (int i = 0; i < k; i++)
      minHeap.offer(nums[i]);

    // will take O((n - k) * logk)
    for (int i = k; i < nums.length; i++) {
      int num = nums[i];
      if (num > minHeap.peek()) { // retrieve smallest element from min heap will be O(1)
        minHeap.poll(); // delete element will take O(logk)
        minHeap.offer(num); // insert element will take o(lolk)
      }
    }

    return new ArrayList<>(minHeap);
  }

  public static void main(String[] args) {
    List<Integer> result = findKLargestNumbers(new int[] { 3, 1, 5, 12, 2, 11 }, 3);
    System.out.println("Here are the top K numbers: " + result);

    result = findKLargestNumbers(new int[] { 5, 12, 11, -1, 12 }, 3);
    System.out.println("Here are the top K numbers: " + result);
  }
}

import java.util.*;

/**
 * Problem statement: Given an unsorted array of numbers, find Kth smallest
 * number in it.
 * 
 * Please note that it is the Kth smallest number in the sorted order, not the
 * Kth distinct element.
 */
public class KthSmallestNumber {
  /**
   * Time complexity: O(k*logk + (n - k)*logk)
   * Space complexity: O(k)
   */
  public static int findKthSmallestNumber(int[] nums, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

    for (int i = 0; i < k; i++) {
      maxHeap.offer(nums[i]);
    }

    for (int i = k; i < nums.length; i++) {
      if (nums[i] < maxHeap.peek()) {
        maxHeap.poll();
        maxHeap.offer(nums[i]);
      }
    }

    return maxHeap.peek();
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

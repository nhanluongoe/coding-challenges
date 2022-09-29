import java.util.*;

/**
 * Problem statement: Given an array, find the sum of all numbers between the
 * K1’th and K2’th smallest elements of that array.
 */
public class SumOfElements {
  /**
   * Time complexity: O(k1*logk1 + (n-k1)*logk1 + k2*logk2 + (n-k2)*logk2 + n)
   * Space complexity: O(k1 + k2)
   */
  public static int findSumOfElements(int[] nums, int k1, int k2) {
    int k1thSmallestNumber = findKthSmallestNumber(nums, k1);
    int k2thSmallestNumber = findKthSmallestNumber(nums, k2);

    int sum = 0;
    for (int num : nums) {
      if (num < k2thSmallestNumber && num > k1thSmallestNumber)
        sum += num;
    }

    return sum;
  }

  public static int findKthSmallestNumber(int[] nums, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

    for (int i = 0; i < k; i++) {
      maxHeap.offer(nums[i]);
    }

    for (int i = k; i < nums.length; i++) {
      if (maxHeap.peek() > nums[i]) {
        maxHeap.poll();
        maxHeap.offer(nums[i]);
      }
    }

    return maxHeap.peek();
  }

  public static int findSumOfElementsBetter(int[] nums, int k1, int k2) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> a - b);

    for (int num : nums)
      minHeap.offer(num);

    for (int i = 0; i < k1; i++)
      minHeap.poll();

    int sum = 0;
    for (int i = 0; i < k2 - k1 - 1; i++)
      sum += minHeap.poll();

    return sum;
  }

  public static void main(String[] args) {
    int result = findSumOfElementsBetter(new int[] { 1, 3, 12, 5, 15, 11 }, 3, 6);
    System.out.println(result);

    result = findSumOfElementsBetter(new int[] { 3, 5, 8, 7 }, 1, 4);
    System.out.println(result);
  }
}

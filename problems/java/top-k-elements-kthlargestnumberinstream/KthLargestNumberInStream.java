import java.util.*;

/**
 * Problem statement: Design a class to efficiently find the Kth largest element
 * in a stream of numbers.
 * 
 * The class should have the following two things:
 * 
 * The constructor of the class should accept an integer array containing
 * initial numbers from the stream and an integer ‘K’.
 * The class should expose a function add(int num) which will store the given
 * number and return the Kth largest number.
 */
public class KthLargestNumberInStream {
  PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> a - b);

  public KthLargestNumberInStream(int[] nums, int k) {
    for (int i = 0; i < k; i++) {
      minHeap.offer(nums[i]);
    }

    for (int i = k; i < nums.length; i++) {
      if (nums[i] > minHeap.peek())
        add(nums[i]);
    }
  }

  /**
   * Time complexity: O(logk)
   * Space complexity: O(k)
   */
  public int add(int num) {
    if (num > minHeap.peek()) {
      minHeap.poll();
      minHeap.offer(num);
    }

    return minHeap.peek();
  }

  public static void main(String[] args) {
    int[] input = { 3, 1, 5, 12, 2, 11 };

    KthLargestNumberInStream kthLargestNumberInStream = new KthLargestNumberInStream(input, 4);
    System.out.println("4th largest number is: " + kthLargestNumberInStream.add(6));
    System.out.println("4th largest number is: " + kthLargestNumberInStream.add(13));
    System.out.println("4th largest number is: " + kthLargestNumberInStream.add(4));
  }
}

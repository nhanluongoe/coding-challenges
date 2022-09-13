import java.util.*;

/**
 * Problem statement: Given an array of numbers and a number ‘k’, find the
 * median of all the ‘k’ sized sub-arrays (or windows) of the array.
 */
public class SlidingWindowMedian {
  PriorityQueue<Integer> maxHeap;
  PriorityQueue<Integer> minHeap;

  public SlidingWindowMedian() {
    this.maxHeap = new PriorityQueue<>((a, b) -> b - a);
    this.minHeap = new PriorityQueue<>((a, b) -> a - b);
  }

  /**
   * Time complexity: O(n*logk)
   * Space complexity: O(k)
   */
  public double[] findSlidingWindowMedian(int[] nums, int k) {
    double[] result = new double[nums.length - k + 1];

    for (int i = 0; i < nums.length - k + 1; i++) {
      for (int j = i; j < i + k; j++) {
        insert(nums[j]);
      }
      result[i] = findMedian();
      maxHeap.clear();
      minHeap.clear();
    }

    return result;
  }

  public void insert(int num) {
    if (this.maxHeap.isEmpty() || num <= maxHeap.peek())
      this.maxHeap.offer(num);
    else
      this.minHeap.offer(num);

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.offer(this.maxHeap.poll());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.offer(this.minHeap.poll());
    }
  }

  public double findMedian() {
    if (this.maxHeap.size() == this.minHeap.size())
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    return this.maxHeap.peek();
  }

  public double[] findSlidingWindowMedian1(int[] nums, int k) {
    double[] result = new double[nums.length - k + 1];
    for (int i = 0; i < nums.length; i++) {
      if (this.maxHeap.isEmpty() || this.maxHeap.peek() >= nums[i])
        this.maxHeap.offer(nums[i]);
      else
        this.minHeap.offer(nums[i]);
      rebalanceHeap();

      if (i - k + 1 >= 0) {
        if (this.maxHeap.size() == this.minHeap.size())
          result[i - k + 1] = (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
        else
          result[i - k + 1] = this.maxHeap.peek();

        int elementToBeRemoved = nums[i - k + 1];
        if (elementToBeRemoved <= this.maxHeap.peek())
          this.maxHeap.remove(elementToBeRemoved);
        else
          this.minHeap.remove(elementToBeRemoved);

        rebalanceHeap();

      }

    }

    return result;
  }

  public void rebalanceHeap() {
    if (this.maxHeap.size() > this.minHeap.size() + 1)
      this.minHeap.offer(this.maxHeap.poll());
    else if (this.minHeap.size() > this.maxHeap.size())
      this.maxHeap.offer(this.minHeap.poll());

  }

  public static void main(String[] args) {
    SlidingWindowMedian slidingWindowMedian = new SlidingWindowMedian();
    double[] result = slidingWindowMedian.findSlidingWindowMedian(new int[] { 1, 2, -1, 3, 5 }, 2);
    System.out.print("Sliding win medians are: ");
    for (double num : result)
      System.out.print(num + " ");
    System.out.println();

    slidingWindowMedian = new SlidingWindowMedian();
    result = slidingWindowMedian.findSlidingWindowMedian1(new int[] { 1, 2, -1, 3, 5 }, 3);
    System.out.print("Sliding win medians are: ");
    for (double num : result)
      System.out.print(num + " ");
    System.out.println();
  }

}

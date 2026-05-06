import java.util.*;

/**
 * Design a class to calculate the median of a number stream. The class should
 * have the following two methods:
 * 1. insertNum(int num): stores the number in the class
 * 2. findMedian(): returns the median of all numbers inserted in the class
 * If the count of numbers inserted in the class is even, the median will be
 * the average of the middle two numbers.
 */
public class MedianOfAStream {
  PriorityQueue<Integer> maxHeap;
  PriorityQueue<Integer> minHeap;

  public MedianOfAStream() {
    this.maxHeap = new PriorityQueue<>((a, b) -> b - a);
    this.minHeap = new PriorityQueue<>((a, b) -> a - b);
  }

  public void insertNum(int num) {
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
      this.maxHeap.add(num);
    } else {
      this.minHeap.add(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.add(this.maxHeap.poll());
    } else if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.add(this.minHeap.poll());
    }
  }

  /**
   * Time complexity: O(logn)
   * Space complexity: O(n)
   */
  public double findMedian() {
    if (this.maxHeap.size() == this.minHeap.size())
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    return this.maxHeap.peek();
  }

  public static void main(String[] args) {
    MedianOfAStream medianOfAStream = new MedianOfAStream();
    medianOfAStream.insertNum(3);
    medianOfAStream.insertNum(1);
    System.out.println("Median of the stream: " + medianOfAStream.findMedian());
    medianOfAStream.insertNum(5);
    System.out.println("Median of the stream: " + medianOfAStream.findMedian());
    medianOfAStream.insertNum(4);
    System.out.println("Median of the stream: " + medianOfAStream.findMedian());
  }
}

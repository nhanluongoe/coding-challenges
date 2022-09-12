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
  public void insertNum(int num) {

  }

  public double findMedian() {

    return -1;
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

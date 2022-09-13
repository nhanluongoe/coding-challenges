import java.util.*;

/**
 * Problem statement: Given an array of numbers and a number ‘k’, find the
 * median of all the ‘k’ sized sub-arrays (or windows) of the array.
 */
public class SlidingWindowMedian {
  public double[] findSlidingWindowMedian(int[] nums, int k) {
    double[] result = new double[nums.length - k + 1];

    return result;
  }

  public static void main(String[] args) {
    SlidingWindowMedian slidingWindowMedian = new SlidingWindowMedian();
    double[] result = slidingWindowMedian.findSlidingWindowMedian(new int[] { 1, 2, -1, 3, 5 }, 2);
    System.out.print("Sliding win medians are: ");
    for (double num : result)
      System.out.print(num + " ");
    System.out.println();

    slidingWindowMedian = new SlidingWindowMedian();
    result = slidingWindowMedian.findSlidingWindowMedian(new int[] { 1, 2, -1, 3, 5 }, 3);
    System.out.print("Sliding win medians are: ");
    for (double num : result)
      System.out.print(num + " ");
    System.out.println();
  }

}

import java.util.Arrays;

/**
 * Constraint: input array is sorted
 */
public class PairWithTargetSum {

  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static int[] search(int[] arr, int targetSum) {
    int startIndex = 0, endIndex = arr.length - 1;

    while (startIndex < endIndex) {
      int currentSum = arr[startIndex] + arr[endIndex];
      if (currentSum == targetSum)
        return new int[] { startIndex, endIndex };

      if (currentSum > targetSum)
        endIndex--;
      else
        startIndex++;
    }

    return new int[] { -1, -1 }; // not found
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(PairWithTargetSum.search(new int[] { 1, 2, 3, 4, 6 }, 6)));
    System.out.println(Arrays.toString(PairWithTargetSum.search(new int[] { 2, 5, 9, 11 }, 11)));
  }
}

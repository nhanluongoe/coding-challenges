/**
 * Problem statement: Find the maximum value in a given Bitonic array. An array
 * is considered bitonic if it is monotonically increasing and then
 * monotonically decreasing. Monotonically increasing or decreasing means that
 * for any index i in the array arr[i] != arr[i+1].
 */
public class MaxInBitonicArray {
  /**
   * Time complexity: O(logn)
   * Space complexity: O(1)
   */
  public static int findMax(int[] arr) {
    int start = 0, end = arr.length - 1;
    while (start < end) {
      int middle = start + (end - start) / 2;
      if (arr[middle] < arr[middle + 1]) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }

    return arr[start];
  }

  public static void main(String[] args) {
    System.out.println(findMax(new int[] { 1, 3, 8, 12, 4, 2 }));
    System.out.println(findMax(new int[] { 3, 8, 3, 1 }));
    System.out.println(findMax(new int[] { 1, 3, 8, 12 }));
    System.out.println(findMax(new int[] { 10, 9, 8 }));
  }
}

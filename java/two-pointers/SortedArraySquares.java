import java.util.Arrays;

/**
 * Constraint: input array is sorted
 */
public class SortedArraySquares {
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  public static int[] makeSquares(int[] arr) {
    int[] resultArray = new int[arr.length];
    int higherSquareIndex = arr.length - 1;
    int left = 0, right = arr.length - 1;
    while (left <= right) {
      int leftSquare = arr[left] * arr[left];
      int rightSquare = arr[right] * arr[right];

      if (leftSquare >= rightSquare) {
        resultArray[higherSquareIndex--] = leftSquare;
        left++;
      } else {
        resultArray[higherSquareIndex--] = rightSquare;
        right--;
      }
    }

    return resultArray;
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(makeSquares(new int[] { -2, -1, 0, 2, 3 })));
    System.out.println(Arrays.toString(makeSquares(new int[] { -3, -1, 0, 1, 2 })));
  }
}

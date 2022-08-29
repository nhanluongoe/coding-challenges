import java.util.Arrays;

public class PairWithTargetSum {

  public static int[] search(int[] arr, int targetSum) {
    int startIndex = 0, endIndex = arr.length - 1;

    while (arr[startIndex] + arr[endIndex] != targetSum) {
      if (arr[startIndex] + arr[endIndex] > targetSum) {
        endIndex--;
        continue;
      }

      if (arr[startIndex] + arr[endIndex] < targetSum) {
        startIndex++;
        continue;
      }
    }

    return new int[] { startIndex, endIndex };
  }

  public static void main(String[] args) {
    System.out.println(new int[]{1, 2, 3});
    System.out.println(Arrays.toString(PairWithTargetSum.search(new int[] { 1, 2, 3, 4, 6 }, 6)));
    System.out.println(Arrays.toString(PairWithTargetSum.search(new int[] { 2, 5, 9, 11 }, 11)));
  }
}

import java.util.Arrays;

/**
 * Constraint: If there're more than one such triplets, return the triplet with smallest sum
 */
public class TripletSumCloseToTarget {
  public static int searchTriplet(int[] arr, int targetSum) {
    Arrays.sort(arr);
    int minDiff = Integer.MAX_VALUE;
    for (int i = 0; i < arr.length - 2; i++) {
      int left = i + 1, right = arr.length - 1;

      while (left < right) {
        int targetDiff = targetSum - (arr[i] + arr[left] + arr[right]);
        if (targetDiff == 0) return targetSum - targetDiff;

        if (Math.abs(targetDiff) < minDiff) {
          minDiff = Math.abs(targetDiff);
        }

        if (targetDiff > 0) left++;
        else right--;
      }
    }

    return targetSum - minDiff;
  }
  
  public static void main(String[] args) {
    System.out.println(searchTriplet(new int[]{-2, 0, 1, 2}, 2)); // -2, 1, 2 => 1
    System.out.println(searchTriplet(new int[]{-3, -1, 1, 2}, 1)); // -3, 1, 2 => 0
    System.out.println(searchTriplet(new int[]{1, 0, 1, 1}, 100)); // 1, 1, 1 => 3
  }
}

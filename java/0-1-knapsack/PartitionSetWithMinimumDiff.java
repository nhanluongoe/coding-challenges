/**
 * Problem statement: Given a set of positive numbers, partition the set into
 * two subsets with minimum difference between their subset sums.
 */
public class PartitionSetWithMinimumDiff {
  /**
   * Time complexity: O(2^n), "n" is the total number
   * Space complexity: O(n)
   */
  public static int canPartition(int[] nums) {
    return canPartitionRecursive(nums, 0, 0, 0);
  }

  public static int canPartitionRecursive(int[] nums, int sum1, int sum2, int currentIndex) {
    // base check
    if (currentIndex == nums.length)
      return Math.abs(sum1 - sum2);

    // the current number is either added to sum1 or sum2
    // add the current number to first set
    int diff1 = canPartitionRecursive(nums, sum1 + nums[currentIndex], sum2, currentIndex + 1);

    // add the current number to second set
    int diff2 = canPartitionRecursive(nums, sum1, sum2 + nums[currentIndex], currentIndex + 1);

    // return the smaller diff
    return Math.min(diff1, diff2);
  }

  public static void main(String[] args) {
    System.out.println(canPartition(new int[] { 1, 2, 3, 9 }));
    System.out.println(canPartition(new int[] { 1, 2, 7, 1, 5 }));
    System.out.println(canPartition(new int[] { 1, 3, 100, 4 }));
  }
}

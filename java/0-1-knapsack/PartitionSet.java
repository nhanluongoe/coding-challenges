/**
 * Problem statement: Given a set of positive numbers, find if we can partition
 * it into two subsets such that the sum of elements in both subsets is equal.
 */
public class PartitionSet {
  /**
   * Time complexity: O(2^n), "n" is the total number
   * Space complexity: O(n)
   */
  public static boolean canPartition(int[] nums) {
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }

    if (sum % 2 != 0)
      return false;

    return canPartitionRecursive(nums, sum / 2, 0);
  }

  public static boolean canPartitionRecursive(int[] nums, int sum, int currentIndex) {
    if (sum == 0)
      return true;

    if (nums.length == 0 || currentIndex >= nums.length)
      return false;

    if (nums[currentIndex] <= sum) {
      if (canPartitionRecursive(nums, sum - nums[currentIndex], currentIndex + 1))
        return true;
    }

    return canPartitionRecursive(nums, sum, currentIndex + 1);
  }

  /**
   * Time complexity: O(n*s), "n" is the total numbers, "s" is the total sum of
   * all the numbers
   * Space complexity: O(n*s)
   */
  public static boolean canPartitionDP(int[] nums) {
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }

    if (sum % 2 != 0)
      return false;

    Boolean[][] dp = new Boolean[nums.length][sum / 2 + 1];
    return canPartitionRecursiveDP(nums, sum / 2, 0, dp);
  }

  public static boolean canPartitionRecursiveDP(int[] nums, int sum, int currentIndex, Boolean[][] dp) {
    if (sum == 0)
      return true;

    if (nums.length == 0 || currentIndex >= nums.length)
      return false;

    if (dp[currentIndex][sum] != null)
      return dp[currentIndex][sum];

    if (nums[currentIndex] <= sum) {
      if (canPartitionRecursiveDP(nums, sum - nums[currentIndex], currentIndex + 1, dp)) {
        dp[currentIndex][sum] = true;
        return dp[currentIndex][sum];
      }
    }

    dp[currentIndex][sum] = canPartitionRecursiveDP(nums, sum, currentIndex + 1, dp);
    return dp[currentIndex][sum];
  }

  public static void main(String[] args) {
    System.out.println(canPartition(new int[] { 1, 2, 3, 4 }));
    System.out.println(canPartition(new int[] { 1, 1, 3, 4, 7 }));
    System.out.println(canPartition(new int[] { 2, 3, 4, 6 }));

    System.out.println(canPartitionDP(new int[] { 1, 2, 3, 4 }));
    System.out.println(canPartitionDP(new int[] { 1, 1, 3, 4, 7 }));
    System.out.println(canPartitionDP(new int[] { 2, 3, 4, 6 }));
  }
}

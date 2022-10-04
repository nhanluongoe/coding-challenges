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

  /**
   * Time complexity: O(n*s), "n" is the total numbers, "s" is total sum of all
   * the numbers
   * Space complexity: O(n*s)
   */
  public static boolean canPartitionDPOnly(int[] nums) {
    int sum = 0;
    for (int num : nums) {
      sum += num;
    }
    if (sum % 2 != 0)
      return false;

    Boolean[][] dp = new Boolean[nums.length][sum / 2 + 1];

    for (int i = 0; i < nums.length; i++)
      dp[i][0] = true;

    for (int s = 1; s <= sum / 2; s++) {
      if (s == nums[0])
        dp[0][s] = true;
      else
        dp[0][s] = false;
    }

    for (int i = 1; i < nums.length; i++) {
      for (int s = 1; s <= sum / 2; s++) {
        if (dp[i - 1][s])
          dp[i][s] = dp[i - 1][s];
        else if (nums[i] <= s)
          dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }

    return dp[nums.length - 1][sum / 2];
  }

  public static void main(String[] args) {
    System.out.println(canPartition(new int[] { 1, 2, 3, 4 }));
    System.out.println(canPartition(new int[] { 1, 1, 3, 4, 7 }));
    System.out.println(canPartition(new int[] { 2, 3, 4, 6 }));

    System.out.println();
    System.out.println(canPartitionDP(new int[] { 1, 2, 3, 4 }));
    System.out.println(canPartitionDP(new int[] { 1, 1, 3, 4, 7 }));
    System.out.println(canPartitionDP(new int[] { 2, 3, 4, 6 }));

    System.out.println();
    System.out.println(canPartitionDPOnly(new int[] { 1, 2, 3, 4 }));
    System.out.println(canPartitionDPOnly(new int[] { 1, 1, 3, 4, 7 }));
    System.out.println(canPartitionDPOnly(new int[] { 2, 3, 4, 6 }));
  }
}

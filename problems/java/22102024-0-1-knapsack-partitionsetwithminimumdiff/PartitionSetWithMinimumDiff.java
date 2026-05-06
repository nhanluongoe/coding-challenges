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

  public static int canPartitionDPTopDown(int[] nums) {
    int sum = 0;
    for (int num : nums)
      sum += num;

    Integer[][] dp = new Integer[nums.length][sum + 1];

    int result = canPartitionDPTopDownRecursive(nums, 0, 0, 0, dp);

    return result;
  }

  public static int canPartitionDPTopDownRecursive(int[] nums, int sum1, int sum2, int currentIndex, Integer[][] dp) {
    // base check
    if (currentIndex == nums.length)
      return Math.abs(sum1 - sum2);

    // return if this sub-problem is already processed
    if (dp[currentIndex][sum1] != null) {
      return dp[currentIndex][sum1];
    }

    // process the sub-problem
    int diff1 = canPartitionDPTopDownRecursive(nums, sum1 + nums[currentIndex],
        sum2, currentIndex + 1, dp);
    int diff2 = canPartitionDPTopDownRecursive(nums, sum1, sum2 +
        nums[currentIndex], currentIndex + 1, dp);
    dp[currentIndex][sum1] = Math.min(diff1, diff2);

    return dp[currentIndex][sum1];
  }

  /**
   * Time complexity: O(n*s), "n" is total numbers, "s" is the total sum of all
   * numbers
   * Space complexity: O(n*s)
   */
  public static int canPartitionDPBottomUp(int[] nums) {
    int sum = 0;
    for (int i = 0; i < nums.length; i++)
      sum += nums[i];

    boolean[][] dp = new boolean[nums.length][sum / 2 + 1];

    // populate the sum = 0 column, as we can always '0' sum with an empty set
    for (int i = 0; i < nums.length; i++)
      dp[i][0] = true;

    // with the first number, we can form a subset only when the required sum is
    // equal to that number
    for (int s = 1; s <= sum / 2; s++)
      dp[0][s] = (s == nums[0] ? true : false);

    // process all subsets for all sums
    for (int i = 1; i < nums.length; i++) {
      for (int s = 1; s <= sum / 2; s++) {
        // if we can get the sum 's' without the number at index 'i'
        if (dp[i - 1][s])
          dp[i][s] = dp[i - 1][s];
        // else we include the number at index 'i', then see if we can find a subset to
        // get the remaining sum
        else if (nums[i] <= s)
          dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }

    int sum1 = 0;
    // find the largest index in the last row in dp which is true
    for (int s = sum / 2; s >= 0; s--) {
      if (dp[nums.length - 1][s]) {
        sum1 = s;
        break;
      }
    }

    int sum2 = sum - sum1;
    return Math.abs(sum2 - sum1);
  }

  public static void main(String[] args) {
    System.out.println(canPartition(new int[] { 1, 2, 3, 9 }));
    System.out.println(canPartition(new int[] { 1, 2, 7, 1, 5 }));
    System.out.println(canPartition(new int[] { 1, 3, 100, 4 }));
    System.out.println();
    System.out.println(canPartitionDPTopDown(new int[] { 1, 2, 3, 9 }));
    System.out.println(canPartitionDPTopDown(new int[] { 1, 2, 7, 1, 5 }));
    System.out.println(canPartitionDPTopDown(new int[] { 1, 3, 100, 4 }));
    System.out.println();
    System.out.println(canPartitionDPBottomUp(new int[] { 1, 2, 3, 9 }));
    System.out.println(canPartitionDPBottomUp(new int[] { 1, 2, 7, 1, 5 }));
    System.out.println(canPartitionDPBottomUp(new int[] { 1, 3, 100, 4 }));
  }
}

public class SubsetSum {

  public static boolean subsetExists(int[] nums, int sum) {
    return subsetExistsRecursive(nums, sum, 0);
  }

  /**
   * Time complexity: O(2^n), "n" is the total number
   * Space complexity: O(n)
   */
  public static boolean subsetExistsRecursive(int[] nums, int sum, int currentIndex) {
    // base check
    if (sum == 0)
      return true;

    if (currentIndex >= nums.length || nums.length == 0)
      return false;

    // pick number at current index if current index <= sum
    if (nums[currentIndex] <= sum) {
      if (subsetExistsRecursive(nums, sum - nums[currentIndex], currentIndex + 1))
        return true;
    }

    // don't pick number at current index
    return subsetExistsRecursive(nums, sum, currentIndex + 1);
  }

  /**
   * Time complexity: O(n*s), "n" is the total number, "s" is the total sum of all
   * the numbers
   * Space complexity: O(n*s)
   */
  public static boolean subsetExistsDPBottomUp(int[] nums, int sum) {
    boolean[][] dp = new boolean[nums.length][sum + 1];

    // all subsets can make up a sum of "0"
    for (int i = 0; i < nums.length; i++)
      dp[i][0] = true;

    // for the first subset, only the number equal to sum can make up the sum
    for (int s = 1; s <= sum; s++)
      dp[0][s] = (nums[0] == s ? true : false);

    for (int i = 1; i < nums.length; i++) {
      for (int s = 1; s <= sum; s++) {
        // don't pick the number at the index
        if (dp[i - 1][s]) {
          dp[i][s] = dp[i - 1][s];
          // pick the number at the index if its value is less than or qual to the sum
          // then find a subset to get the remaining sum
        } else if (nums[i] <= s) {
          dp[i][s] = dp[i - 1][s - nums[i]];
        }
      }
    }

    return dp[nums.length - 1][sum];
  }

  public static void main(String[] args) {
    System.out.println(subsetExists(new int[] { 1, 2, 3, 7 }, 6));
    System.out.println(subsetExists(new int[] { 1, 2, 7, 1, 5 }, 10));
    System.out.println(subsetExists(new int[] { 1, 3, 4, 8 }, 6));
    System.out.println();
    System.out.println(subsetExistsDPBottomUp(new int[] { 1, 2, 3, 7 }, 6));
    System.out.println(subsetExistsDPBottomUp(new int[] { 1, 2, 7, 1, 5 }, 10));
    System.out.println(subsetExistsDPBottomUp(new int[] { 1, 3, 4, 8 }, 6));
  }
}

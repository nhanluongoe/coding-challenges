/**
 * Problem statement: Given a set of positive numbers, find if we can partition
 * it into two subsets such that the sum of elements in both subsets is equal.
 */
public class PartitionSet {
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

  public static void main(String[] args) {
    System.out.println(canPartition(new int[] { 1, 2, 3, 4 }));
    System.out.println(canPartition(new int[] { 1, 1, 3, 4, 7 }));
    System.out.println(canPartition(new int[] { 2, 3, 4, 6 }));
  }
}

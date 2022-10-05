public class SubsetSum {

  public static boolean subsetExists(int[] nums, int sum) {
    return subsetExistsRecursive(nums, sum, 0);
  }

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

  public static void main(String[] args) {
    System.out.println(subsetExists(new int[] { 1, 2, 3, 7 }, 6));
    System.out.println(subsetExists(new int[] { 1, 2, 7, 1, 5 }, 10));
    System.out.println(subsetExists(new int[] { 1, 3, 4, 8 }, 6));
  }
}

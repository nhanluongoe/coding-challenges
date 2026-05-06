import java.util.*;

/**
 * Problem statement: Given a set of numbers that might contain duplicates, find
 * all of its distinct subsets.
 */
public class SubsetWithDuplicates {
  /**
   * Time complexity: O(2^n)
   * Space complexity: O(2^n)
   */
  public static List<List<Integer>> findSubsets(int[] nums) {
    // sort the array to handle duplicates
    Arrays.sort(nums);
    List<List<Integer>> subsets = new ArrayList<>();
    // add an empty set to the list
    subsets.add(new ArrayList<>());
    /// int startIndex = 0, endIndex = 0;
    for (int i = 0; i < nums.length; i++) {
      // add current number to all existing subsets
      int n = subsets.size();
      int startIndex = 0;
      /// startIndex = 0;
      // if current and the previous elements are same, create new subsets only from the subsets added
      // in the previous step
      if (i > 0 && nums[i] == nums[i - 1])
        startIndex = (int) Math.pow(2, i - 1);
        /// startIndex = endIndex + 1;
      /// endIndex = subsets.size() - 1;
      /// for (int j = startIndex, j <= endIndex; j++) {
      for (int j = startIndex; j < n; j++) {
        // create new subset from the existing subset and and the current number to it
        List<Integer> set = new ArrayList<>(subsets.get(j));
        set.add(nums[i]);
        subsets.add(set);
      }

    }

    return subsets;
  }

  public static void main(String[] args) {
    List<List<Integer>> result = findSubsets(new int[] { 1, 3, 3 });
    System.out.println("Here is the list of subsets: " + result);

    result = findSubsets(new int[] { 1, 5, 3, 3 });
    System.out.println("Here is the list of subsets: " + result);
  }
}
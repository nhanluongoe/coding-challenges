import java.util.*;

/**
 * Problem statement: Given a set of numbers that might contain duplicates, find
 * all of its distinct subsets.
 */
public class SubsetWithDuplicates {
  public static List<List<Integer>> findSubsets(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> subsets = new ArrayList<>();
    subsets.add(new ArrayList<>());
    for (int i = 0; i < nums.length; i++) {
      int n = subsets.size();
      int startIndex = 0;
      if (i > 0 && nums[i] == nums[i - 1])
        startIndex = (int) Math.pow(2, i - 1);
      for (int j = startIndex; j < n; j++) {
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
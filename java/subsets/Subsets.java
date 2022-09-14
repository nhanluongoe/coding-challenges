import java.util.*;

/**
 * Problem statement: Given a set with distinct elements, find all of its
 * distinct subsets.
 */
public class Subsets {
  /**
   * Time complexity: O(2^n)
   * Space complexity: O(2^n)
   */
  public static List<List<Integer>> findSubsets(int[] nums) {
    List<List<Integer>> subsets = new ArrayList<>();
    subsets.add(new ArrayList<>());
    for (int num : nums) {
      int n = subsets.size();
      for (int i = 0; i < n; i++) {
        List<Integer> set = new ArrayList<>(subsets.get(i));
        set.add(num);
        subsets.add(set);
      }
    }
    
    return subsets;
  }

  public static void main(String[] args) {
    List<List<Integer>> result = findSubsets(new int[] { 1, 3 });
    System.out.println("Here is the list of subsets: " + result);

    result = findSubsets(new int[] { 1, 5, 3 });
    System.out.println("Here is the list of subsets: " + result);
  }
}

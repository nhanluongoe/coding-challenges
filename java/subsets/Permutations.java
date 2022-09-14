import java.util.*;

/**
 * Problem statement: Given a set of distinct numbers, find all of its
 * permutations.
 */
public class Permutations {
  /**
   * Time complexity: O(n * n!), "n!" permutations, take O(n) to insert a number
   * into a permutation
   * Space complexity: O(n * n!), "n!" permutations, each permutation contains "n"
   * elements
   */
  public static List<List<Integer>> findPermutations(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Queue<List<Integer>> permutations = new LinkedList<>();
    permutations.offer(new ArrayList<>());
    for (int num : nums) {
      int n = permutations.size();
      for (int i = 0; i < n; i++) {
        List<Integer> oldPermutations = permutations.poll();
        for (int j = 0; j <= oldPermutations.size(); j++) {
          List<Integer> newPermutations = new ArrayList<>(oldPermutations);
          newPermutations.add(j, num);
          if (newPermutations.size() == nums.length)
            result.add(newPermutations);
          else
            permutations.offer(newPermutations);
        }
      }
    }

    return result;
  }

  public static void main(String[] args) {
    List<List<Integer>> result = findPermutations(new int[] { 1, 3, 5 });
    System.out.println("Permutations are: " + result);
  }
}

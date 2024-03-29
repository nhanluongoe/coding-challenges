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
    // add an empty set to permutations to the queue
    permutations.offer(new ArrayList<>());
    for (int num : nums) {
      int n = permutations.size();
      // for each permutation in the queue
      for (int i = 0; i < n; i++) {
        // retrieve the old permutation of the queue
        List<Integer> oldPermutation = permutations.poll();
        // create new permutation from old permutation and add the current number to it
        // at every position
        for (int j = 0; j <= oldPermutation.size(); j++) {
          List<Integer> newPermutation = new ArrayList<>(oldPermutation);
          newPermutation.add(j, num);
          // if the set has enough elements => add to result
          if (newPermutation.size() == nums.length)
            result.add(newPermutation);
          // else add permutation to the queue
          else
            permutations.offer(newPermutation);
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

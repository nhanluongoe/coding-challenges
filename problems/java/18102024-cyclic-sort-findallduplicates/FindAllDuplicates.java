import java.util.*;

/**
 * Problem statement: We are given an unsorted array containing ‘n’ numbers
 * taken from the range 1 to ‘n’. The array has some duplicates, find all the
 * duplicate numbers without using any extra space.
 */
public class FindAllDuplicates {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1), the space used for output doesn't count
   */
  public static List<Integer> findNumbers(int[] nums) {
    List<Integer> result = new ArrayList<>();

    int i = 0;
    while (i < nums.length) {
      if (nums[i] != nums[nums[i] - 1])
        swap(nums, i, nums[i] - 1);
      else
        i++;
    }

    for (int j = 0; j < nums.length; j++) {
      if (nums[j] != j + 1)
        result.add(nums[j]);
    }

    return result;
  }

  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  public static void main(String[] args) {
    System.out.println((findNumbers(new int[] { 3, 4, 4, 5, 5 })));
    System.out.println((findNumbers(new int[] { 5, 4, 7, 2, 3, 5, 3 })));
  }
}

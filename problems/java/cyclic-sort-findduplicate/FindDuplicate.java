import java.util.*;

/**
 * Problem statement: We are given an unsorted array containing ‘n+1’ numbers
 * taken from the range 1 to ‘n’. The array has only one duplicate but it can be
 * repeated multiple times. Find that duplicate number without using any extra
 * space. You are, however, allowed to modify the input array.
 */
public class FindDuplicate {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static int findNumber(int[] nums) {
    int i = 0;
    while (i < nums.length) {
      int j = nums[i] - 1;
      if (nums[i] != nums[j]) {
        swap(nums, i, j);
      } else {
        i++;
      }
    }

    for (int j = 0; j < nums.length; j++) {
      if (nums[j] != j + 1) return nums[j];
    }

    return nums.length;
  }

  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  public static void main(String[] args) {
    System.out.println(findNumber(new int[] {1, 4, 4, 3, 2}));
    System.out.println(findNumber(new int[] {2, 1, 3, 3, 5, 4}));
    System.out.println(findNumber(new int[] {2, 4, 1, 4, 4}));
  }
}

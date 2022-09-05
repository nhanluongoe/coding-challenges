import java.util.*;

/**
 * Problem statement: We are given an array containing ‘n’ distinct numbers
 * taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of
 * the total ‘n+1’ numbers, find the missing number.
 */
public class MissingNumber {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static int findMissingNumber(int[] nums) {
    sort(nums);

    int i = 0;
    while(i < nums.length) {
      if (nums[i] != i) return i;
      i++;
    }

    return i + 1;
  }

  public static void sort(int[] nums) {
    int i = 0;
    while (i < nums.length) {
      int j = nums[i]; 
      if (nums[i] < nums.length && nums[i] != nums[j]) {
        swap(nums, i, j);
      } else {
        i++;
      }
    }
  }

  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  public static void main(String[] args) {
    int[] arr1 = { 4, 0, 3, 1 };
    System.out.println("Missing number: " + findMissingNumber(arr1));

    int[] arr2 = { 8, 3, 5, 2, 4, 6, 0, 1 };
    System.out.println("Missing number: " + findMissingNumber(arr2));
  }
}

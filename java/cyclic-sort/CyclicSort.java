import java.util.*;

/**
 * Constraints: O(n) time and without any extra space
 */
public class CyclicSort {
  /**
   * Time complexity: O(n)
   * Space compolexity: O(1)
   */
  public static void sort(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) {
        swap(nums, i, nums[i] - 1);
      }
    }
  }  

  /**
   * Time complexity: O(n + n+1) => O(n)
   * Space compolexity: O(1)
   */
  public static void sort2(int[] nums) {
    int i = 0;
    while (i < nums.length) {
      int j = nums[i] - 1;
      if (nums[i] != i + 1) {
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
    int[] arr1 = {3, 1, 5, 4, 2};
    sort2(arr1);
    System.out.println("After sorting: " + Arrays.toString(arr1));

    int[] arr2 = {1, 5, 6, 4, 3, 2};
    sort2(arr2);
    System.out.println("After sorting: " + Arrays.toString(arr2));

    int[] arr3 = {2, 6, 4, 3, 1, 5};
    sort2(arr3);
    System.out.println("After sorting: " + Arrays.toString(arr3));
  }
}

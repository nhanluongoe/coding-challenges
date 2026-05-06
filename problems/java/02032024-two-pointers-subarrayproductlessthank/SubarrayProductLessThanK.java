import java.util.*;

/**
 * Constraint: subarray must be contiguous
 * Time complexity: O(n^3)
 * Space complexity: O(n) for the temp list
 */
public class SubarrayProductLessThanK {
  public static List<List<Integer>> findSubarrays(int[] arr, int target) {
    List<List<Integer>> subarrays = new ArrayList<>();
    int product = 1, left = 0;

    for (int right = 0; right < arr.length; right++) {
      product *= arr[right];
      while (product >= target && left < arr.length) product /= arr[left++];
      /**
       * 1. Since the product of all numbers from left to right is smaller than target
       * therefore all subarrays from left to right will have product less than target too
       * 2. To avoid duplicates, start with a subarray containing only arr[right] and then extend
       * it to the left
       */
      List<Integer> tempList = new LinkedList<>();
      for (int i = right; i >= left; i--) {
        tempList.add(0, arr[i]);
        subarrays.add(new ArrayList<>(tempList));
      }
    }
    
    return subarrays;
  }
  
  public static void main(String[] args) {
    List<List<Integer>> result1 = findSubarrays(new int[]{2, 5, 3, 10}, 30); // 2, 3, 5, 10
    for (List<Integer> subarr : result1) {
      System.out.println(subarr);
    }
  }
}

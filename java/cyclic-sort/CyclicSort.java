import java.util.*;

/**
 * Constraints: O(n) time and without any extra space
 */
public class CyclicSort {
  public static void sort(int[] arr) {

  }  

  public static void main(String[] args) {
    int[] arr1 = {3, 1, 5, 4, 2};
    sort(arr1);
    System.out.println("After sorting: " + Arrays.toString(arr1));

    int[] arr2 = {1, 5, 6, 4, 3, 2};
    sort(arr2);
    System.out.println("After sorting: " + Arrays.toString(arr2));

    int[] arr3 = {2, 6, 4, 3, 1, 5};
    sort(arr3);
    System.out.println("After sorting: " + Arrays.toString(arr3));
  }
}

import java.util.*;

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
public class DutchFlag {
  public static void sort(int[] arr) {
    int low = 0, high = arr.length - 1;

    for (int i = 0; i <= high;) {
      int currentNum = arr[i];
      if (currentNum == 0) {
        swap(arr, i, low);
        low++;
        i++;
      } else if (currentNum == 1) {
        i++;
      } else {
        swap(arr, i, high);
        high--;
      }
    }

  }
  
  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  public static void main(String[] args) {
    int[] result1 = new int[]{2, 2, 0, 1, 2, 0};
    sort(result1);
    System.out.println(Arrays.toString(result1));    

    int[] result2 = new int[]{1, 0, 2, 1, 0};
    sort(result2);
    System.out.println(Arrays.toString(result2));
  }
}

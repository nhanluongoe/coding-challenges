/**
 * Problem statement: Given an array of numbers sorted in ascending order, find
 * the range of a given number ‘key’. The range of the ‘key’ will be the first
 * and last position of the ‘key’ in the array.
 * 
 * Write a function to return the range of the ‘key’. If the ‘key’ is not
 * present return [-1, -1].
 */
public class NumberRange {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static int[] findRange(int[] arr, int key) {
    int[] result = { -1, -1 };

    int n = arr.length;
    int start = 0, end = n - 1;
    while (start <= end) {
      int middle = start + (end - start) / 2;
      if (arr[middle] < key) {
        start = middle + 1;
      } else if (arr[middle] > key) {
        end = middle - 1;
      } else {
        int i = middle, j = middle;
        while (arr[i] == key)
          i--;
        while (arr[j] == key)
          j++;

        return new int[] { ++i, --j };
      }
    }

    return result;
  }

  public static int[] findRangeBetter(int[] arr, int key) {
    int[] result = { -1, -1 };
    result[0] = search(arr, key, false);
    if (result[0] != -1) {
      result[1] = search(arr, key, true);
    }

    return result;
  }

  public static int search(int[] arr, int key, boolean findMaxIndex) {
    int n = arr.length;
    int keyIndex = -1;
    int start = 0, end = n - 1;
    while (start <= end) {
      int middle = start + (end - start) / 2;
      if (arr[middle] < key) {
        start = middle + 1;
      } else if (arr[middle] > key) {
        end = middle - 1;
      } else {
        keyIndex = middle;
        if (findMaxIndex) {
          start = middle + 1;
        } else {
          end = middle - 1;
        }
      }

    }

    return keyIndex;
  }

  public static void main(String[] args) {
    int[] result = findRangeBetter(new int[] { 4, 6, 6, 6, 9 }, 6);
    System.out.println("Range: [" + result[0] + ", " + result[1] + "]");
    result = findRangeBetter(new int[] { 1, 3, 8, 10, 15 }, 10);
    System.out.println("Range: [" + result[0] + ", " + result[1] + "]");
    result = findRangeBetter(new int[] { 1, 3, 8, 10, 15 }, 12);
    System.out.println("Range: [" + result[0] + ", " + result[1] + "]");
  }
}

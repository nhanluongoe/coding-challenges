/**
 * Problem statement: Given an array of numbers sorted in ascending order, find
 * the range of a given number ‘key’. The range of the ‘key’ will be the first
 * and last position of the ‘key’ in the array.
 * 
 * Write a function to return the range of the ‘key’. If the ‘key’ is not
 * present return [-1, -1].
 */
public class NumberRange {
  public static int[] findRange(int[] arr, int key) {
    int[] result = {-1, -1};

    return result;
  }

  public static void main(String[] args) {
    int[ ] result = findRange(new int[] {4, 6, 6, 6, 9}, 6);
    System.out.println("Range: [" + result[0] + ", " + result[1] + "]");
    result = findRange(new int[] {1, 3, 8, 10, 15}, 10);
    System.out.println("Range: [" + result[0] + ", " + result[1] + "]");
    result = findRange(new int[] {1, 3, 8, 10, 15}, 12);
    System.out.println("Range: [" + result[0] + ", " + result[1] + "]");
  }
}

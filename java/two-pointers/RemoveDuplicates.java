/**
 * Constraint: not use any extra space
 */
public class RemoveDuplicates {
  public static int remove(int[] arr) {
    int nextNonDuplicate = 1;

    for (int i = 1; i < arr.length; i++) {
      if (arr[i - 1] != arr[i]) {
        arr[nextNonDuplicate] = arr[i];
        nextNonDuplicate++;
      }
    }

    return nextNonDuplicate;
  }

  public static void main(String[] args) {
    System.out.println(remove(new int[]{2, 3, 3, 3, 6, 9, 9}));
    System.out.println(remove(new int[]{2, 2, 2, 11})); 
  }
}

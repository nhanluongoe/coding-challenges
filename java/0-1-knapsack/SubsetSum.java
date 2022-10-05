public class SubsetSum {

  public static boolean subsetExists(int[] nums, int sum) {

    return false;
  }

  // public boolean subsetExistsRecursive(int[] nums, int sum) {

  // }

  public static void main(String[] args) {
    System.out.println(subsetExists(new int[] { 1, 2, 3, 7 }, 6));
    System.out.println(subsetExists(new int[] { 1, 2, 7, 1, 5 }, 10));
    System.out.println(subsetExists(new int[] { 1, 3, 4, 8 }, 6));
  }
}

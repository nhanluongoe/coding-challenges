import java.util.Arrays;

public class TripletWithSmallerSum {
  public static int searchTriplets(int[] arr, int target) {
    Arrays.sort(arr);

    int result = 0;
    for (int i = 0; i < arr.length - 2; i++) {
      int left = i + 1, right = arr.length - 1;

      while (left < right) {
        int currentSum = arr[i] + arr[left] + arr[right];

        if (currentSum < target) {
          result += right - left;
          left++;
        } else {
          right--;
        }
      }
    }

    return result;
  }  
  public static void main(String[] args) {
    System.out.println(searchTriplets(new int[]{-1, 0, 2, 3}, 3)); // [-1, 0, 3], [-1, 0, 2]
    System.out.println(searchTriplets(new int[]{-1, 4, 2, 1, 3}, 5)); // [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
  }
}
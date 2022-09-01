import java.util.List;

public class SubarrayProductLessThanK {
  public static List<List<Integer>> findSubarrays(int[] arr, int target) {

    
  }
  
  public static void main(String[] args) {
    List<List<Integer>> result1 = findSubarrays(new int[]{2, 5, 3, 10}, 30);
    for (List<Integer> subarr : result1) {
      System.out.println(Arrays.toString(subarr));
    }
  }
}

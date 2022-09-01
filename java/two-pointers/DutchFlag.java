import java.util.*;

public class DutchFlag {
  public static void sort(int[] arr) {

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

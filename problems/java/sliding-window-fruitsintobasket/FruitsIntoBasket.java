import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class FruitsIntoBasket {
  public static int pickFruits(String[] rows) {
    int start = 0;
    int maxFruits = 0;

    Map<String, Integer> basket = new HashMap<>();
    for (int end = 0; end < rows.length; end++) {
      String currentFruit = rows[end];
      basket.put(currentFruit, basket.getOrDefault(currentFruit, 0) + 1);

      while (basket.size() > 2) {
        String leftFruit = rows[start];
        basket.put(leftFruit, basket.get(leftFruit) - 1);
        if (basket.get(leftFruit) == 0) {
          basket.remove(leftFruit);
        }
        start += 1;
      }

      maxFruits = Math.max(maxFruits, end - start + 1);
    }

    return maxFruits;
  }

  public static void main(String[] args) {
    String[] rows1 = new String[] { "A", "B", "C", "A", "C" };
    int result1 = pickFruits(rows1);
    System.out.println(result1); // expects 3 ["A", "C", "A"]

    String[] rows2 = new String[] { "A", "B", "C", "B", "B", "C" };
    int result2 = pickFruits(rows2);
    System.out.println(result2); // expects 5 ["B", "C", "B", "B", "C"]
  }
}

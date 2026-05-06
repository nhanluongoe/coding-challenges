import java.util.*;

/**
 * Problem statement: Given a string, find if its letters can be rearranged in
 * such a way that no two same characters come next to each other.
 */
public class RearrangeString {
  /**
   * Time complexity: O(n*logn)
   * Space complexity: O(n)
   */
  public static String rearrangeString(String str) {
    Map<Character, Integer> charFrequency = new HashMap<>();
    for (char ch : str.toCharArray())
      charFrequency.put(ch, charFrequency.getOrDefault(ch, 0) + 1);

    PriorityQueue<Map.Entry<Character, Integer>> maxHeap = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
    for (Map.Entry<Character, Integer> entry : charFrequency.entrySet())
      maxHeap.offer(entry);

    StringBuilder result = new StringBuilder(str.length());
    Map.Entry<Character, Integer> previousEntry = null;
    while (!maxHeap.isEmpty()) {
      Map.Entry<Character, Integer> entry = maxHeap.poll();
      if (previousEntry != null && previousEntry.getValue() > 0)
        maxHeap.offer(previousEntry);
      result.append(entry.getKey());
      entry.setValue(entry.getValue() - 1);
      previousEntry = entry;
    }

    return result.length() == str.length() ? result.toString() : "";
  }

  public static void main(String[] args) {
    System.out.println(rearrangeString("aappp"));
    System.out.println(rearrangeString("Programming"));
    System.out.println(rearrangeString("aapa"));
  }
}

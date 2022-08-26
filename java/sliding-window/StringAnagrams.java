import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StringAnagrams {
  public static List<Integer> findStringAnagrams(String str, String pattern) {
    Map<Character, Integer> charFreqMap = new HashMap<>();
    for (Character ch : pattern.toCharArray()) {
      charFreqMap.put(ch, charFreqMap.getOrDefault(ch, 0) + 1);
    }

    int windowStart = 0, numberOfMatch = 0;
    List<Integer> result = new ArrayList<>();

    for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
      char rightChar = str.charAt(windowEnd);

      if (charFreqMap.containsKey(rightChar)) {
        charFreqMap.put(rightChar, charFreqMap.get(rightChar) - 1);
        if (charFreqMap.get(rightChar) == 0) {
          numberOfMatch++;
        }
      }

      if (numberOfMatch == charFreqMap.size()) {
        result.add(windowStart);
      }

      if (windowEnd >= pattern.length() - 1) {
        char leftChar = str.charAt(windowStart);
        if (charFreqMap.containsKey(leftChar)) {
          if (charFreqMap.get(leftChar) == 0) {
            numberOfMatch--;
          }
          charFreqMap.put(leftChar, charFreqMap.get(leftChar) + 1);
        }
        windowStart++;
      }
    }

    return result;
  }

  public static void main(String[] args) {
    System.out.println(StringAnagrams.findStringAnagrams("ppqp", "pq")); // [1, 2]
    System.out.println(StringAnagrams.findStringAnagrams("abbcabc", "abc")); // [2, 3, 4]
  }

}

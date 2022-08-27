import java.util.HashMap;
import java.util.Map;

class MinimumWindowSubstring {
  public static String findSubstring(String str, String pattern) {
    Map<Character, Integer> charFreqMap = new HashMap<>();
    for (char ch : pattern.toCharArray()) {
      charFreqMap.put(ch, charFreqMap.getOrDefault(ch, 0) + 1);
    }

    int windowStart = 0, numberOfMatch = 0, minLength = str.length() + 1, subStrStart = 0;
    for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
      char rightChar = str.charAt(windowEnd);
      if (charFreqMap.containsKey(rightChar)) {
        charFreqMap.put(rightChar, charFreqMap.get(rightChar) - 1);
        if (charFreqMap.get(rightChar) >= 0)
          numberOfMatch++;
      }

      while (numberOfMatch == pattern.length()) {
        if (minLength > windowEnd - windowStart + 1) {
          minLength = windowEnd - windowStart + 1;
          subStrStart = windowStart;
        }

        char leftChar = str.charAt(windowStart++);
        if (charFreqMap.containsKey(leftChar)) {
          if (charFreqMap.get(leftChar) == 0)
            numberOfMatch--;
          charFreqMap.put(leftChar, charFreqMap.get(leftChar) + 1);
        }
      }
    }

    return minLength > str.length() ? "" : str.substring(subStrStart, subStrStart + minLength);
  }

  public static void main(String[] args) {
    System.out.println(MinimumWindowSubstring.findSubstring("aabdec", "abc"));
    System.out.println(MinimumWindowSubstring.findSubstring("aabdec", "abac"));
    System.out.println(MinimumWindowSubstring.findSubstring("abdbca", "abc"));
    System.out.println(MinimumWindowSubstring.findSubstring("adcad", "abc"));
  }
}
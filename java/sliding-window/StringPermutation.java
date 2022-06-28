import java.util.*;

public class StringPermutation {
  public static boolean findPermutation(String string, String pattern) {
    int windowStart = 0, numberOfMatched = 0;
    Map<Character, Integer> charFreqMap = new HashMap<>();
    for (Character character : pattern.toCharArray()) {
      charFreqMap.put(character, charFreqMap.getOrDefault(character, 0) + 1);
    }

    for (int windowEnd = 0; windowEnd < string.length(); windowEnd++) {
      char rightChar = string.charAt(windowEnd);

      if (charFreqMap.containsKey(rightChar)) {
        charFreqMap.put(rightChar, charFreqMap.get(rightChar) - 1);
        if (charFreqMap.get(rightChar) == 0)
          numberOfMatched++;
      }

      if (numberOfMatched == charFreqMap.size())
        return true;

      if (windowEnd  >= pattern.length() - 1) {
        char leftChar = string.charAt(windowStart);
        if (charFreqMap.containsKey(leftChar)) {
          if (charFreqMap.get(leftChar) == 0)
            numberOfMatched--;
          charFreqMap.put(leftChar, charFreqMap.get(leftChar) + 1);
        }
        windowStart++;
      }
    }

    return false;
  }

  public static void main(String[] args) {
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("oidbcaf", "abc")); // true, The string contains "bca" which is a
                                                                // permutation of
                                                                // the given pattern.
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("odicf", "dc")); // false, No permutation
    // of the pattern is present in the
    // given
    // string as a substring.
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("bcdxabcdy", "bcdyabcdx")); // true, Both
    // the string and the pattern are a
    // permutation of each other.
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("aaacbff", "abc")); // true, The string
    // contains "acb" which is a permutation
    // of the
    // given pattern.
  }
}

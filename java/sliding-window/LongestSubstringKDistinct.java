import java.util.*;

public class LongestSubstringKDistinct {
  
  public static int findLongestSubstringKDistinct(int K, String string) {
    int windowStartIndex = 0;
    int maxLength = Integer.MIN_VALUE;
    Set<Character> set = new HashSet();

    for (int windowEndIndex = 0; windowEndIndex < string.length(); windowEndIndex++) {
      set.add(string.charAt(windowEndIndex));

      while (set.size() > K) {

        set.remove(string.charAt(windowStartIndex));
        windowStartIndex += 1;
      }
    }

    return 0;
  }

  public void main(String[] args) {
    String s1 = "araaci";
    int result = findLongestSubstringKDistinct(2, s1);

    System.out.println(result);
  }
}

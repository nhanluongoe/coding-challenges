import java.util.*;

public class StringPermutation {
  public static boolean findPermutation(String string, String pattern) {

    return false;
  }

  public static void main(String[] args) {
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("oidbcaf", "abc")); // true, The string contains "bca" which is a permutation of
                                                                // the given pattern.
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("odicf", "dc")); // false, No permutation of the pattern is present in the given
                                                             // string as a substring.
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("bcdxabcdy", "bcdyabcdx")); // true, Both the string and the pattern are a
                                                                        // permutation of each other.
    System.out.println("Permutation exist: "
        + StringPermutation.findPermutation("aaacb", "abc")); // true, The string contains "acb" which is a permutation of the
                                                              // given pattern.
  }
}

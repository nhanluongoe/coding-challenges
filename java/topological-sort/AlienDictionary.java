import java.util.*;

/**
 * Problem statement: There is a dictionary containing words from an alien
 * language for which we don’t know the ordering of the characters. Write a
 * method to find the correct order of characters in the alien language.
 */
public class AlienDictionary {
  public static String findOrder(String[] words) {

    return "";
  }

  public static void main(String[] args) {
    String result = AlienDictionary.findOrder(new String[] { "ba", "bc", "ac", "cab" });
    System.out.println(result);

    result = AlienDictionary.findOrder(new String[] { "cab", "aaa", "aab" });
    System.out.println(result);

    result = AlienDictionary.findOrder(new String[] { "ywx", "wz", "xww", "xz", "zyy", "zwz" });
    System.out.println(result);
  }
}

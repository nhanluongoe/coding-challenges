import java.util.*;

/**
 * Problem statement: There is a dictionary containing words from an alien
 * language for which we don’t know the ordering of the characters. Write a
 * method to find the correct order of characters in the alien language.
 */
public class AlienDictionary {
  /**
   * Time complexity: O(V+E + E*L), "V" is the number of distinct characters, "E"
   * is the
   * number of words, "L" is the longest word in all words
   * Space complexity: O(V+E)
   */
  public static String findOrder(String[] words) {
    if (words == null || words.length == 0)
      return "";

    // initialize the graph
    Map<Character, Integer> inDegree = new HashMap<>();
    Map<Character, List<Character>> graph = new HashMap<>();
    for (String word : words) {
      for (char ch : word.toCharArray()) {
        inDegree.put(ch, 0);
        graph.put(ch, new ArrayList<>());
      }
    }

    // build the graph
    for (int i = 0; i < words.length - 1; i++) {
      String currentWord = words[i];
      String nextWord = words[i + 1];
      int smallerLength = Math.min(currentWord.length(), nextWord.length());
      for (int j = 0; j < smallerLength; j++) {
        char parent = currentWord.charAt(j);
        char child = nextWord.charAt(j);
        if (parent != child) {
          inDegree.put(child, inDegree.get(child) + 1);
          graph.get(parent).add(child);
          break; // only get the first different character
        }
      }
    }

    // find all sources
    Queue<Character> sources = new LinkedList<>();
    for (Map.Entry<Character, Integer> entry : inDegree.entrySet()) {
      if (entry.getValue() == 0)
        sources.offer(entry.getKey());
    }

    // sort
    StringBuilder sb = new StringBuilder();
    while (!sources.isEmpty()) {
      char source = sources.poll();
      sb.append(source);
      List<Character> children = graph.get(source);
      for (char child : children) {
        inDegree.put(child, inDegree.get(child) - 1);
        if (inDegree.get(child) == 0)
          sources.offer(child);
      }
    }

    // if sb doesn't contain all characters, there is a cyclic dependency between
    // characters => will not be able to find correct ordering of characters
    if (sb.length() != inDegree.size())
      return "";

    return sb.toString();
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WordConcatenation {
  public static List<Integer> findWordConcatenation(String str, String[] words) {
    Map<String, Integer> wordFrequencyMap = new HashMap<>();
    for (String word : words) {
      wordFrequencyMap.put(word, wordFrequencyMap.getOrDefault(word, 0) + 1);
    }

    List<Integer> resultIndices = new ArrayList<>();
    int wordsCount = words.length;
    int wordLength = words[0].length();
    for (int i = 0; i <= str.length() - wordsCount * wordLength; i++) {
      Map<String, Integer> wordsSeen = new HashMap<>();
      for (int j = 0; j < wordsCount; j++) {
        int nextWordIndex = i + j * wordLength;
        String word = str.substring(nextWordIndex, nextWordIndex + wordLength);

        if (!wordFrequencyMap.containsKey(word))
          break;

        wordsSeen.put(word, wordsSeen.getOrDefault(word, 0) + 1);

        if (wordsSeen.get(word) > wordFrequencyMap.get(word))
          break;

        if (j + 1 == wordsCount)
          resultIndices.add(i);
      }
    }

    return resultIndices;
  }

  public static void main(String[] args) {
    List<Integer> result = WordConcatenation.findWordConcatenation(
        "catfoxcat", new String[] { "cat", "fox" });
    System.out.println(result);
    result = WordConcatenation.findWordConcatenation(
        "catcatfoxfox", new String[] { "cat", "fox" });
    System.out.println(result);
  }
}
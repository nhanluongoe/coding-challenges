import java.util.*;

class Combination {
  private String combination;
  private int numOfClosedParentheses;
  private int numOfOpenParentheses;

  public Combination() {
    combination = "";
  }

  public Combination(String combination, int numOfOpenParentheses, int numOfClosedParentheses) {
    this.combination = combination;
    this.numOfOpenParentheses = numOfOpenParentheses;
    this.numOfClosedParentheses = numOfClosedParentheses;
  }

  public int getNumOfClosedParentheses() {
    return numOfClosedParentheses;
  }

  public void setNumOfClosedParentheses(int numOfClosedParentheses) {
    this.numOfClosedParentheses = numOfClosedParentheses;
  }

  public int getNumOfOpenParentheses() {
    return numOfOpenParentheses;
  }

  public void setNumOfOpenParentheses(int numOfOpenParentheses) {
    this.numOfOpenParentheses = numOfOpenParentheses;
  }

  public String getCombination() {
    return combination;
  }

  public void setCombination(String combination) {
    this.combination = combination;
  }
}

/**
 * Problem statement: For a given number ‘N’, write a function to generate all
 * combination of ‘N’ pairs of balanced parentheses.
 */
public class GenerateParentheses {
  public static List<String> generateValidParentheses(int num) {
    List<String> result = new ArrayList<>();
    if (num == 0)
      return result;

    Queue<Combination> combinations = new LinkedList<>();
    combinations.offer(new Combination());
    for (int i = 0; i < 2 * num; i++) {
      int n = combinations.size();
      for (int j = 0; j < n; j++) {
        Combination currentCombination = combinations.poll();
        if (currentCombination.getCombination().isEmpty()) {
          Combination newCombination = new Combination("(", 1, 0);
          combinations.offer(newCombination);
        } else {
          if (currentCombination.getNumOfOpenParentheses() < num) {
            Combination newCombination = new Combination(currentCombination.getCombination() + "(",
                currentCombination.getNumOfOpenParentheses() + 1, currentCombination.getNumOfClosedParentheses());
            if (newCombination.getCombination().length() == 2 * num)
              result.add(newCombination.getCombination());
            else
              combinations.offer(newCombination);
          }
          if (currentCombination.getNumOfClosedParentheses() < currentCombination.getNumOfOpenParentheses()) {
            Combination newCombination = new Combination(currentCombination.getCombination() + ")",
                currentCombination.getNumOfOpenParentheses(), currentCombination.getNumOfClosedParentheses() + 1);
            if (newCombination.getCombination().length() == 2 * num)
              result.add(newCombination.getCombination());
            else
              combinations.offer(newCombination);
          }
        }
      }
    }

    return result;
  }

  public static void main(String[] args) {
    List<String> result = generateValidParentheses(2);
    System.out.println("All combinations of balanced parentheses are: " + result);

    result = generateValidParentheses(3);
    System.out.println("All combinations of balanced parentheses are: " + result);
  }
}

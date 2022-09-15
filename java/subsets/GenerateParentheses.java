import java.util.*;

class Combination {
  private String combination;
  private int numOfClosedParentheses;
  private int numOfOpenParentheses;

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
  /**
   * Time complexity: ?
   * Space complexity: O(N * 2^n), since can't have more than 2^n combinations
   */
  public static List<String> generateValidParentheses(int num) {
    List<String> result = new ArrayList<>();
    if (num == 0)
      return result;

    Queue<Combination> combinations = new LinkedList<>();
    combinations.offer(new Combination("", 0, 0));
    while (!combinations.isEmpty()) {
      Combination currentCombination = combinations.poll();
      if (currentCombination.getNumOfOpenParentheses() == num
          && currentCombination.getNumOfClosedParentheses() == num) {
        result.add(currentCombination.getCombination());
      } else {
        if (currentCombination.getNumOfOpenParentheses() < num) {
          Combination newCombination = new Combination(currentCombination.getCombination() + "(",
              currentCombination.getNumOfOpenParentheses() + 1, currentCombination.getNumOfClosedParentheses());
          combinations.offer(newCombination);
        }
        if (currentCombination.getNumOfClosedParentheses() < currentCombination.getNumOfOpenParentheses()) {
          Combination newCombination = new Combination(currentCombination.getCombination() + ")",
              currentCombination.getNumOfOpenParentheses(), currentCombination.getNumOfClosedParentheses() + 1);
          combinations.offer(newCombination);
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

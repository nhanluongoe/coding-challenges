/**
 * Problem statement: Given an array of lowercase letters sorted in ascending
 * order, find the smallest letter in the given array greater than a given
 * ‘key’.
 * 
 * Assume the given array is a circular list, which means that the last letter
 * is assumed to be connected with the first letter. This also means that the
 * smallest letter in the given array is greater than the last letter of the
 * array and is also the first letter of the array.
 * 
 * Write a function to return the next letter of the given ‘key’.
 */
public class NextLetter {
  public static char searchNextLetter(char[] letters, char key) {

    return letters[0];
  }

  public static void main(String[] args) {
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'f'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'b'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'm'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'h'));
  }
}

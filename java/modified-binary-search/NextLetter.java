public class NextLetter {
  public static char searchNextLetter(char[] letters, char key) {

    return letters[0];
  }
  
  public static void main(String[] args) {
    System.out.println(searchNextLetter(new char[]{'a', 'c', 'f', 'h'}, 'f'));
    System.out.println(searchNextLetter(new char[]{'a', 'c', 'f', 'h'}, 'b'));
    System.out.println(searchNextLetter(new char[]{'a', 'c', 'f', 'h'}, 'm'));
    System.out.println(searchNextLetter(new char[]{'a', 'c', 'f', 'h'}, 'h'));
  }
}

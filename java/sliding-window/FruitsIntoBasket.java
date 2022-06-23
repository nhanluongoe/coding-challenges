public class FruitsIntoBasket {
  public static int pickFruits(String[] rows) {

    
  }  

  public static void main(String[] args) {
    String[] rows1 = new String[] {"A", "B", "C", "A", "C"};
    int result1 = pickFruits(rows1);
    System.out.println(result1); // expects 3 ["A", "C", "A"]

    String[] rows2 = new String[] {"A", "B", "C", "B", "B", "C"};
    int result2 = pickFruits(rows2);
    System.out.println(result2);  // expects 5 ["B", "C", "B", "B", "C"]
  }  
}

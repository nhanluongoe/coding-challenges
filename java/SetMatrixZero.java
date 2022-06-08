import java.util.*;

public class SetMatrixZero {

  public static void setZeroes(int[][] matrix) {
    List<Integer> zeroX = new ArrayList<>();
    List<Integer> zeroY = new ArrayList<>();

    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix[0].length; j++) {
        int currentElement = matrix[i][j];
        if (currentElement == 0) {
          zeroX.add(i);
          zeroY.add(j);
        }
      }
    }

    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix[0].length; j++) {
        if (zeroX.contains(i) || zeroY.contains(j)) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  public static void print(int[][] matrix) {
    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix[0].length; j++) {
        System.out.print(matrix[i][j] + " ");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    int[][] matrix = { { 0, 1, 2, 0 }, { 3, 4, 5, 2 }, { 1, 3, 1, 5 } };
    setZeroes(matrix);

    print(matrix);
  }
}

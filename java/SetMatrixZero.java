import java.util.*;

public class SetMatrixZero {

  public void setZeroes(int[][] matrix) {
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
        if (zeroX.contains(i)) {
          matrix[i][j] = 0;
        }
        if (zeroY.contains(j)) {
          matrix[i][j] = 0;
        }
      }
    }
  }


}

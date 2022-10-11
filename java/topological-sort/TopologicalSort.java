import java.util.*;

/**
 * Problem statement: Topological Sort of a directed graph (a graph with
 * unidirectional edges) is a linear ordering of its vertices such that for
 * every directed edge (U, V) from vertex U to vertex V, U comes before V in the
 * ordering.
 * 
 * Given a directed graph, find the topological ordering of its vertices.
 */
public class TopologicalSort {
  public static List<Integer> sort(int vertices, int[][] edges) {
    List<Integer> sortedOrder = new ArrayList<>();

    return sortedOrder;
  }

  public static void main(String[] args) {
    List<Integer> result = TopologicalSort.sort(4, new int[][]{new int[]{3, 2}, new int[]{3, 0}, new int[]{2, 0}, new int[]{2, 1}})
    System.out.println(result);
    List<Integer> result = TopologicalSort.sort(5, new int[][]{new int[]{4, 2}, new int[]{4, 3}, new int[]{2, 1}, new int[]{3, 1}, new int[]{2, 0}})
    System.out.println(result);
    List<Integer> result = TopologicalSort.sort(7, new int[][]{new int[]{6, 4}, new int[]{6, 2}, new int[]{5, 3}, new int[]{5, 4}, new int[]{3, 0}, new int[]{3, 1}, new int[]{3, 2}, new int[]{4, 1}})
    System.out.println(result);
  }
}

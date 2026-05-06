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
  /**
   * Time complexity: O(V + E), V is the number of vertices, E is the number of
   * edges
   * Space complexity: O(V + E)
   */
  public static List<Integer> sort(int vertices, int[][] edges) {
    List<Integer> sortedOrder = new ArrayList<>();
    if (vertices <= 0)
      return sortedOrder;

    // 1. initialize the graph
    Map<Integer, Integer> inDegree = new HashMap<>();
    Map<Integer, List<Integer>> graph = new HashMap<>();
    for (int i = 0; i < vertices; i++) {
      inDegree.put(i, 0);
      graph.put(i, new ArrayList<>());
    }

    // 2. build the graph
    for (int i = 0; i < edges.length; i++) {
      int parent = edges[i][0];
      int child = edges[i][1];
      inDegree.put(child, inDegree.get(child) + 1);
      graph.get(parent).add(child);
    }

    // 3. find all sources
    Queue<Integer> sources = new LinkedList<>();
    for (Map.Entry<Integer, Integer> entry : inDegree.entrySet()) {
      if (entry.getValue() == 0)
        sources.offer(entry.getKey());
    }

    // 4. sort
    while (!sources.isEmpty()) {
      // add source to the sorted list
      Integer source = sources.poll();
      sortedOrder.add(source);

      // get all of its children from the graph
      List<Integer> children = graph.get(source);

      // decrease their 'in-degree' by one
      for (Integer child : children) {
        inDegree.put(child, inDegree.get(child) - 1);
        // if 'in-degree' of a child becomes 0, it becomes a source
        // add it to the queue
        if (inDegree.get(child) == 0)
          sources.offer(child);
      }

    }

    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.size() != vertices)
      return new ArrayList<>();

    return sortedOrder;
  }

  public static void main(String[] args) {
    List<Integer> result = TopologicalSort.sort(4,
        new int[][] { new int[] { 3, 2 }, new int[] { 3, 0 }, new int[] { 2, 0 }, new int[] { 2, 1 } });
    System.out.println(result);
    result = TopologicalSort.sort(5, new int[][] { new int[] { 4, 2 }, new int[] { 4, 3 }, new int[] { 2, 1 },
        new int[] { 3, 1 }, new int[] { 2, 0 } });
    System.out.println(result);
    result = TopologicalSort.sort(7, new int[][] { new int[] { 6, 4 }, new int[] { 6, 2 }, new int[] { 5, 3 },
        new int[] { 5, 4 }, new int[] { 3, 0 }, new int[] { 3, 1 }, new int[] { 3, 2 }, new int[] { 4, 1 } });
    System.out.println(result);
  }
}

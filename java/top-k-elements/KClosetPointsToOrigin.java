import java.util.*;

class Point {
  int x;
  int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int distFromOrigin() {
    return (x * x) + (y * y);
  }
}

/**
 * Problem statement: Given an array of points in the a 2D2D plane, find ‘K’
 * closest points to the origin.
 */
public class KClosetPointsToOrigin {
  public static List<Point> findClosestPoints(Point[] points, int k) {
    ArrayList<Point> result = new ArrayList<>();

    return result;
  }

  public static void main(String[] args) {
    Point[] points = new Point[] { new Point(1, 3), new Point(3, 4), new Point(2, -1) };
    List<Point> result = findClosestPoints(points, 2);
    System.out.println("Here are the k points closest the origin: ");
    for (Point p : result) {
      System.out.print("[ " + p.x + ", " + p.y + "] ");
    }
  }
}

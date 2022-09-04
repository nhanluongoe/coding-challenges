import java.util.*;

class Interval {
  int start;
  int end;

  public Interval(int start, int end) {
    this.start = start;
    this.end = end;
  }
}

public class MergeIntervals {
  public static List<Interval> merge(List<Interval> input) {

  }


  public static void main(String[] args) {
    List<Interval> input = new ArrayList<>();
    input.add(new Interval(1, 4));
    input.add(new Interval(2, 5));
    input.add(new Interval(7, 9));
    System.out.println("Merged intervals: ");
    for (Interval interval : merge(input)) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(6,7));
    input.add(new Interval(2,4));
    input.add(new Interval(5,9));
    System.out.println("Merged intervals: ");
    for (Interval interval : merge(input)) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(1, 4));
    input.add(new Interval(2, 6));
    input.add(new Interval(3,5));
    System.out.println("Merged intervals: ");
    for (Interval interval : merge(input)) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

  }
}

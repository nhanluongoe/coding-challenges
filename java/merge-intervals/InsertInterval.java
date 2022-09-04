import java.util.*;

class Interval {
  int start;
  int end;

  public Interval(int start, int end) {
    this.start = start;
    this.end = end;
  }
}

public class InsertInterval {
  public static List<Interval> insert(List<Interval> intervals, Interval newInterval) {

  }

  public static void main(String[] args) {

    List<Interval> input = new ArrayList<>();
    input.add(new Interval(1, 3));
    input.add(new Interval(5, 7));
    input.add(new Interval(8, 12));
    System.out.println("Merged intervals: ");
    for (Interval interval : insert(input, new Interval(4, 6))) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(6, 7));
    input.add(new Interval(2, 4));
    input.add(new Interval(5, 9));
    System.out.println("Merged intervals: ");
    for (Interval interval : insert(input, new Interval(4, 10))) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(2, 3));
    input.add(new Interval(5, 7));
    System.out.println("Merged intervals: ");
    for (Interval interval : insert(input, new Interval(1, 4))) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

  }  
}

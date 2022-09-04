import java.util.*;

class Interval {
  int start;
  int end; 

  public Interval(int start,int end) {
    this.start = start;
    this.end = end;
  }
}
public class ConflictingAppointments {
  /**
   * Time complexity: O(n*logn)
   * Space complexity: O(n)
   */
  public static boolean canAttendAllAppointments(Interval[] intervals) {
    Arrays.sort(intervals, (interval1, interval2) -> Integer.compare(interval1.start, interval2.start));
    for (int i = 0; i < intervals.length - 1; i++) {
      Interval currentInterval = intervals[i];
      Interval nextInterval = intervals[i + 1];
      if (currentInterval.end > nextInterval.start) return false;
    }

    return true;
  }

  public static void main(String[] args) {
    Interval[] intervals = {new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)};
    System.out.println("Can attend all appointments: " + canAttendAllAppointments(intervals));

    Interval[] intervals1 = {new Interval(6, 7), new Interval(2, 4), new Interval(8, 12)};
    System.out.println("Can attend all appointments: " + canAttendAllAppointments(intervals1));

    Interval[] intervals2 = {new Interval(4, 5), new Interval(2, 3), new Interval(3, 6)};
    System.out.println("Can attend all appointments: " + canAttendAllAppointments(intervals2));
  }
  
}

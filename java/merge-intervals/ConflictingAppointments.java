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
  public static boolean canAttendAllAppointments(Interval[] intervals) {

    return false;
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

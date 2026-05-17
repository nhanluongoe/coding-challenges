---
solvedAt: "2024-08-06"
---
# Conflicting Appointments

- Language: java
- Original path: `java/merge-intervals/ConflictingAppointments.java`
- Source: Algorithm practice
- Solution: `ConflictingAppointments.java`

# Problems

Given appointments with start and end times, determine whether any appointments overlap.

## Examples

- `[[1, 3], [3, 5]]` -> no conflict.
- `[[1, 4], [2, 5]]` -> conflict.
- Zero or one appointment -> no conflict.

# Solutions

Sort appointments by start time and compare each interval with the previous end time.
Time complexity: O(n*logn)
Space complexity: O(n)

# Edge cases

- Back-to-back appointments.
- Unsorted input.
- Zero or one appointment.

---
solvedAt: "2024-08-06"
---
# Conflicting Appointments

- Language: java
- Original path: `java/merge-intervals/ConflictingAppointments.java`
- Source: Algorithm practice
- Solution: `ConflictingAppointments.java`

# Problems

Given a list of appointment intervals, determine whether a person can attend all of them. Two appointments conflict if their time ranges overlap in a way that requires being in two places at once. Appointments may not be sorted initially, so compare them in chronological order. Back-to-back appointments should be treated according to the interval boundary convention, usually as non-conflicting when one ends exactly as the next starts.

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

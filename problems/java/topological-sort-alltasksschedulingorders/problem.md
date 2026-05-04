# Topological Sort Alltasksschedulingorders

- Language: java
- Original path: `java/topological-sort/AllTasksSchedulingOrders.java`
- Solution: `AllTasksSchedulingOrders.java`

## Notes

### Note 1

Problem statement: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task
can have some prerequisite tasks which need to be completed before it can be
scheduled. Given the number of tasks and a list of prerequisite pairs, write
a method to print all possible ordering of tasks meeting all prerequisites.

### Note 2

Time complexity: O(V! * E), "V" is the number of tasks, "E" is the number of
prerequisites
Space complexity: O(V! * E)

### Note 3

1. initialize graph

### Note 4

2. build graph

### Note 5

3. find all sources

### Note 6

recursive call to print other orderings from the remaining sources

### Note 7

backtrack to remove vertex from sorted order and add all of its children back

### Note 8

for the earlier call

# Topological Sort Tasksscheduling

- Language: java
- Original path: `java/topological-sort/TasksScheduling.java`
- Solution: `TasksScheduling.java`

## Notes

### Note 1

Problem statement: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task
can have some prerequisite tasks which need to be completed before it can be
scheduled. Given the number of tasks and a list of prerequisite pairs, find
out if it is possible to schedule all the tasks.

### Note 2

Time complexity: O(V + E), "V" is the number of tasks, "E" is the number of
prerequisites
Space complexity: O(V + E)

### Note 3

this problem can be transferred into topological sort problem

### Note 4

if there exists a topological sort => it is possible to schedule tasks

### Note 5

1. initialize graph

### Note 6

2. build the graph

### Note 7

3. find all sources

### Note 8

4. sort

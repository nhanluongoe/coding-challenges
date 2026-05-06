---
solvedAt: "2024-06-01"
---

# Two Heap Maximizecapital

- Language: java
- Original path: `java/two-heap/MaximizeCapital.java`
- Solution: `MaximizeCapital.java`

## Notes

### Note 1

Problem statement: Given a set of investment projects with their respective
profits, we need to find the most profitable projects. We are given an
initial capital and are allowed to invest only in a fixed number of projects.
Our goal is to choose projects that give us the maximum profit.

We can start an investment project only when we have the required capital.
Once a project is selected, we can assume that its profit has become our
capital.

### Note 2

Time complexity: O(n*logn + k*logn), 'n' is the number of total projects, k is the numbers
of projects selected
Space complexity: o(n)

### Note 3

These heaps will store the index from original array

### Note 4

Add all profits to min heap, O(n*logn)

### Note 5

find totals of 'numberOfProjects' best projects, O(k*logn)

### Note 6

find all the projects that can be selected within available capacity

### Note 7

insert them into max heap

### Note 8

terminate if there's no project that can be selected within available capacity

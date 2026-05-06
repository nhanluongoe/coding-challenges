---
solvedAt: "2024-03-24"
---

# Subsets Permutations

- Language: java
- Original path: `java/subsets/Permutations.java`
- Solution: `Permutations.java`

## Notes

### Note 1

Problem statement: Given a set of distinct numbers, find all of its
permutations.

### Note 2

Time complexity: O(n * n!), "n!" permutations, take O(n) to insert a number
into a permutation
Space complexity: O(n * n!), "n!" permutations, each permutation contains "n"
elements

### Note 3

add an empty set to permutations to the queue

### Note 4

for each permutation in the queue

### Note 5

retrieve the old permutation of the queue

### Note 6

create new permutation from old permutation and add the current number to it

### Note 7

at every position

### Note 8

if the set has enough elements => add to result

### Note 9

else add permutation to the queue

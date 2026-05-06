---
solvedAt: "2024-07-01"
---

# Subsets Subsetwithduplicates

- Language: java
- Original path: `java/subsets/SubsetWithDuplicates.java`
- Solution: `SubsetWithDuplicates.java`

## Notes

### Note 1

Problem statement: Given a set of numbers that might contain duplicates, find
all of its distinct subsets.

### Note 2

Time complexity: O(2^n)
Space complexity: O(2^n)

### Note 3

sort the array to handle duplicates

### Note 4

add an empty set to the list

### Note 5

/ int startIndex = 0, endIndex = 0;

### Note 6

add current number to all existing subsets

### Note 7

/ startIndex = 0;

### Note 8

if current and the previous elements are same, create new subsets only from the subsets added

### Note 9

in the previous step

### Note 10

/ startIndex = endIndex + 1;

### Note 11

/ endIndex = subsets.size() - 1;

### Note 12

/ for (int j = startIndex, j <= endIndex; j++) {

### Note 13

create new subset from the existing subset and and the current number to it

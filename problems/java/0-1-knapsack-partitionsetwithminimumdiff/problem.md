# 0 1 Knapsack Partitionsetwithminimumdiff

- Language: java
- Original path: `java/0-1-knapsack/PartitionSetWithMinimumDiff.java`
- Solution: `PartitionSetWithMinimumDiff.java`

## Notes

### Note 1

Problem statement: Given a set of positive numbers, partition the set into
two subsets with minimum difference between their subset sums.

### Note 2

Time complexity: O(2^n), "n" is the total number
Space complexity: O(n)

### Note 3

Time complexity: O(n*s), "n" is total numbers, "s" is the total sum of all
numbers
Space complexity: O(n*s)

### Note 4

base check

### Note 5

the current number is either added to sum1 or sum2

### Note 6

add the current number to first set

### Note 7

add the current number to second set

### Note 8

return the smaller diff

### Note 9

base check

### Note 10

return if this sub-problem is already processed

### Note 11

process the sub-problem

### Note 12

populate the sum = 0 column, as we can always '0' sum with an empty set

### Note 13

with the first number, we can form a subset only when the required sum is

### Note 14

equal to that number

### Note 15

process all subsets for all sums

### Note 16

if we can get the sum 's' without the number at index 'i'

### Note 17

else we include the number at index 'i', then see if we can find a subset to

### Note 18

get the remaining sum

### Note 19

find the largest index in the last row in dp which is true

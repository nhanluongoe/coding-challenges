# 0 1 Knapsack Subsetsum

- Language: java
- Original path: `java/0-1-knapsack/SubsetSum.java`
- Solution: `SubsetSum.java`

## Notes

### Note 1

Time complexity: O(2^n), "n" is the total number
Space complexity: O(n)

### Note 2

Time complexity: O(n*s), "n" is the total number, "s" is the total sum of all
the numbers
Space complexity: O(n*s)

### Note 3

base check

### Note 4

pick number at current index if current index <= sum

### Note 5

don't pick number at current index

### Note 6

all subsets can make up a sum of "0"

### Note 7

for the first subset, only the number equal to sum can make up the sum

### Note 8

don't pick the number at the index

### Note 9

pick the number at the index if its value is less than or qual to the sum

### Note 10

then find a subset to get the remaining sum

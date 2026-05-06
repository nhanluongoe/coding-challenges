---
solvedAt: "2024-08-05"
---

# Modified Binary Search Searchinfinitesortedarray

- Language: java
- Original path: `java/modified-binary-search/SearchInfiniteSortedArray.java`
- Solution: `SearchInfiniteSortedArray.java`

## Notes

### Note 1

Problem statement: Given an infinite sorted array (or an array with unknown
size), find if a given number ‘key’ is present in the array. Write a function
to return the index of the ‘key’ if it is present in the array, otherwise
return -1.

Since it is not possible to define an array with infinite (unknown) size, you
will be provided with an interface ArrayReader to read elements of the array.
ArrayReader.get(index) will return the number at index; if the array’s size
is smaller than the index, it will return Integer.MAX_VALUE.

### Note 2

Time complexity: O(logn)
Space complexity: O(1)

### Note 3

reader = new ArrayReader(new int[] { 1, 3, 8, 10, 15 });

### Note 4

System.out.println(search(reader, 15));

### Note 5

System.out.println(search(reader, 200));

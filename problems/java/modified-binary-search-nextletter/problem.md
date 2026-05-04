# Modified Binary Search Nextletter

- Language: java
- Original path: `java/modified-binary-search/NextLetter.java`
- Solution: `NextLetter.java`

## Notes

### Note 1

Problem statement: Given an array of lowercase letters sorted in ascending
order, find the smallest letter in the given array greater than a given
‘key’.

Assume the given array is a circular list, which means that the last letter
is assumed to be connected with the first letter. This also means that the
smallest letter in the given array is greater than the last letter of the
array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

### Note 2

Time complexity: O(logn)
Space complexity: O(1)

### Note 3

Because the array is considered circular, so if the key is either smaller

### Note 4

than the first letter or greater than the last letter of the given array,

### Note 5

then the result will be the first letter of the array

### Note 6

only find the letter greater than the key, so just increase "stat" when found

### Note 7

the letter equal to the key

### Note 8

imagine the last letter of the given array is equal to key, the result will

### Note 9

be the first letter of the given array

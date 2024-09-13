/**
 * Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
 */

function removeDuplicates(arr) {
  let nextNonDuplicate = 1; // this is the index of the slot that we're going to put the next non-duplicated in

  let next = 1; // this is the traveler. It's initialized 1 because the first element in the array always be counted.
  while (next < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[next]) {
      arr[nextNonDuplicate] = arr[next];
      nextNonDuplicate += 1;
    }
    next += 1;
  }

  return nextNonDuplicate;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));

/**
 * Constraint: input array is sorted
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function remove(arr) {
  let nextNonDuplicate = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      arr[nextNonDuplicate++] = arr[i];
    }
  }

  return nextNonDuplicate;
}

console.log(remove([2, 3, 3, 3, 6, 9, 9 ]))
console.log(remove([2, 2, 2, 11 ]));
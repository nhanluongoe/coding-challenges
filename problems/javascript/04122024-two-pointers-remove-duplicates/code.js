/**
 * Constraint: input array is sorted
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export default function remove(arr) {
  if (arr.length === 0) return 0;

  let nextNonDuplicate = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      arr[nextNonDuplicate++] = arr[i];
    }
  }

  return nextNonDuplicate;
}

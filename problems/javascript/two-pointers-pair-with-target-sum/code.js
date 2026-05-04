/**
 * Constraint: input array is sorted
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function search(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const currentSum = arr[left] + arr[right]
    if (currentSum === target) return [left, right]

    if (currentSum > target) right--
    else left++
  }

  return [-1, -1] // not found
}

console.log(search([2, 5, 9, 11], 11))
console.log(search([1, 2, 3, 4, 6], 6))

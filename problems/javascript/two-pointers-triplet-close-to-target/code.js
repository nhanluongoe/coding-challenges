/**
 * Constraint: If there're more than one such triplets, return the triplet with smallest sum
 * Time complexity: O(n*logn + n^2) => O(n^2)
 * Space complexity: O(n) required for sorting
 */
function searchTriplet(arr, target) {
  let minDiff = Number.MAX_SAFE_INTEGER
  arr.sort()

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1
    let right = arr.length - 1

    while (left < right) {
      const targetDiff = target - (arr[i] + arr[left] + arr[right])

      if (targetDiff === 0) return target - targetDiff

      if (Math.abs(targetDiff) < minDiff) minDiff = Math.abs(targetDiff)

      if (targetDiff < 0) right--
      else left++
    }
  }

  return target - minDiff
}

console.log(searchTriplet([-2, 0, 1, 2], 2)) // -2, 1, 2 => 1
console.log(searchTriplet([-3, -1, 1, 2], 1)) // -3, 1, 2 => 0
console.log(searchTriplet([1, 0, 1, 1], 100)) // 1, 1, 1 => 3

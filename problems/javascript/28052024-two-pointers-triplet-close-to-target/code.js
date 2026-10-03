/**
 * Constraint: If there're more than one such triplets, return the triplet with smallest sum
 * Time complexity: O(n*logn + n^2) => O(n^2)
 * Space complexity: O(n) required for sorting
 */
export default function searchTriplet(arr, target) {
  let closestDifference = Infinity
  arr = [...arr].sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1
    let right = arr.length - 1

    while (left < right) {
      const targetDiff = target - (arr[i] + arr[left] + arr[right])

      if (targetDiff === 0) return target

      if (
        Math.abs(targetDiff) < Math.abs(closestDifference) ||
        (Math.abs(targetDiff) === Math.abs(closestDifference) &&
          targetDiff > closestDifference)
      ) {
        closestDifference = targetDiff
      }

      if (targetDiff < 0) right--
      else left++
    }
  }

  return target - closestDifference
}

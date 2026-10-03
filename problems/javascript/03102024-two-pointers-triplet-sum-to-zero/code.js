/**
 * Time complexity: O(n*logn + n^2) => O(n^2)
 * Space complexity: O(n) required for sorting
 */
export default function searchTriplets(arr) {
  const triplets = []

  arr = [...arr].sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue

    let left = i + 1
    let right = arr.length - 1
    const target = -arr[i]

    while (left < right) {
      const currentSum = arr[left] + arr[right]
      if (currentSum === target) {
        triplets.push([arr[i], arr[left], arr[right]])
        left++
        right--
        while (left < right && arr[left] === arr[left - 1]) left++
        while (left < right && arr[right] === arr[right + 1]) right++
      } else if (currentSum < target) left++
      else right--
    }
  }

  return triplets
}

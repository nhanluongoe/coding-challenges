/**
 * Time complexity: O(n^3)
 * Space complexity: O(n) for temp array
 */
export default function findSubarrays(arr, target) {
  if (target <= 1) return [];

  const subarrays = [];
  let product = 1;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left <= right) {
      product /= arr[left++];
    }
    const temp = [];
    for (let i = right; i >= left; i--) {
      temp.unshift(arr[i]);
      subarrays.push([...temp]);
    }
  }
  return subarrays;
}

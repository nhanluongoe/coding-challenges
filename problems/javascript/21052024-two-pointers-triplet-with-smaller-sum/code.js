export default function searchTriplets(arr, target) {
  let result = 0;

  arr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum < target) {
        result += right - left;
        left++;
      } else right--;
    }
  }

  return result;
}

export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 6, 9, 11], 6)); // 3
console.log(binarySearch([1, 2, 3, 12, 16, 14], 5)); // -1
console.log(binarySearch([1, 2, 3, 10, 11, 20], 20)); // 5
console.log(binarySearch([1, 2, 3, 10, 11, 20], 9)); // -1

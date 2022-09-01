function searchTriplets(arr, target) {
  let result = 0;  

  arr.sort();
  for (let i = 0; i < arr.length-2; i++) {
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

console.log(searchTriplets([-1, 0, 2, 3], 3)) // [-1, 0, 3], [-1, 0, 2]
console.log(searchTriplets([-1, 4, 2, 1, 3], 5)) // [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

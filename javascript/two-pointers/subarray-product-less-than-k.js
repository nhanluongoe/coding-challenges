function findSubarrays(arr, target) {
  const subarrays = []
  let product = 1;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while(product >= target && left <= right) {
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

console.log(findSubarrays([2, 5, 3, 10], 30))
console.log(findSubarrays([8, 2, 6, 5], 50))
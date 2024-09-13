function findAverageOfSubarrays(array, k) {
  let start = 0;
  let sum = 0;
  const result = [];

  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    if (end - start >= k - 1) {
      result.push(sum / k);
      sum -= array[start];
      start += 1;
    }
  }

  return result;
}

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

console.log(findAverageOfSubarrays(arr, k));

export default function findAverageOfSubarrays(array, k) {
  let start = 0;
  let sum = 0;
  const result = [];

  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    if (end >= k - 1) {
      result.push(sum / k);
      sum -= array[start];
      start += 1;
    }
  }

  return result;
}

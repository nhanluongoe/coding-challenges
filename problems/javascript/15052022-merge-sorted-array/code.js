/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function mergeArrays(myArray, alicesArray) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < myArray.length && j < alicesArray.length) {
    if (myArray[i] > alicesArray[j]) {
      result.push(alicesArray[j]);
      j++;
    } else {
      result.push(myArray[i]);
      i++;
    }
  }

  while (i < myArray.length) result.push(myArray[i++]);
  while (j < alicesArray.length) result.push(alicesArray[j++]);

  return result;
}

/**
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */
export function mergeArrays2(myArray, alicesArray) {
  const result = myArray.concat(alicesArray);
  result.sort((a, b) => a - b);
  return result;
}

export default mergeArrays;

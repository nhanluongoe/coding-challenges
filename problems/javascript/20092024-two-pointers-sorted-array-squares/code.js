/**
 * Constraint: input array is sorted
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export default function sortArraySquares(arr) {
  let left = 0;
  let right = arr.length - 1;
  let higherSquareIndex = arr.length - 1;
  const resultArray = new Array(arr.length);

  while (left <= right) {
    const leftSquare = arr[left] * arr[left]
    const rightSquare = arr[right] * arr[right]

    if (leftSquare >= rightSquare) {
      resultArray[higherSquareIndex--] = leftSquare;
      left++;
    } else {
      resultArray[higherSquareIndex--] = rightSquare;
      right--;
    }
  }

  return resultArray;
}

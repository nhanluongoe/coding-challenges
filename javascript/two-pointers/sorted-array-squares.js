/**
 * Constraint: input array is sorted
 */
function sortArraySquares(arr) {
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

console.log(sortArraySquares([-2, -1, 0, 2, 3]))
console.log(sortArraySquares([-3, -1, 0, 1, 2 ]))
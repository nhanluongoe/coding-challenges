/**
 * Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
 */

function makeSquare(arr) {
  let left = 0;
  let right = arr.length - 1;
  const squares = Array(arr.length);
  let higherIndex = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] ** 2;
    const rightSquare = arr[right] ** 2;

    if (leftSquare < rightSquare) {
      squares[higherIndex] = rightSquare;
      right -= 1;
    } else {
      squares[higherIndex] = leftSquare;
      left += 1;
    }

    higherIndex -= 1;
  }

  return squares;
}

console.log(makeSquare([-2, -1, 0, 2, 3]));

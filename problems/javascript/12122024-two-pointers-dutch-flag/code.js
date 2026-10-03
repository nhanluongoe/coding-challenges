/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export default function dutchFlagSort(arr) {
  let low = 0; 
  let high = arr.length - 1;

  for (let i = 0; i <= high;) {
    const currentNumber = arr[i];
    if (currentNumber === 0) {
      swap(arr, low, i);
      low++;
      i++;
    } else if (currentNumber === 1) {
      i++;
    } else {
      swap(arr, high, i);
      high--;
    }
  }

}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

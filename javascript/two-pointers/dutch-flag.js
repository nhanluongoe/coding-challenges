/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function dutchFlagSort(arr) {
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

const arr1 = [1, 0, 2, 1, 0];
dutchFlagSort(arr1);
console.log(arr1);

const arr2 = [2, 2, 0, 1, 2, 0];
dutchFlagSort(arr2);
console.log(arr2);
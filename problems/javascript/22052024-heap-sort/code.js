// Implement a function that performs a heap sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified in-place.

export default function heapSort(arr) {
  const size = arr.length;

  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(arr, size, i);
  }

  for (let i = size - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, size, parent) {
  let largest = parent;
  const leftChild = largest * 2 + 1;
  const rightChild = largest * 2 + 2;

  if (leftChild < size && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < size && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (parent !== largest) {
    [arr[parent], arr[largest]] = [arr[largest], arr[parent]];
    heapify(arr, size, largest);
  }
}

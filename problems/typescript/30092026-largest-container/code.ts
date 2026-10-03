export default function largestContainer(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let maxContainer = 0;

  while (left < right) {
    const leftHeight = heights[left];
    const rightHeight = heights[right];
    const currentContainer = Math.min(leftHeight, rightHeight) * (right - left);
    maxContainer = Math.max(maxContainer, currentContainer);

    // the volume is determined by the height now
    // we seek the next lager volume by moving the pointer
    // with the shorter height inward
    if (leftHeight > rightHeight) right--;
    else if (rightHeight > leftHeight) left++;
    // if left and height pointer have the same height
    //, moving either one always makes the volume smaller
    // so moving two at once
    else {
      left++;
      right--;
    }
  }
  return maxContainer;
}

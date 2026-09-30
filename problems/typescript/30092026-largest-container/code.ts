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

// Tests

const testCases = [
  {
    description: "sample input",
    heights: [2, 7, 8, 3, 7, 6],
    expected: 24,
  },
  {
    description: "classic example",
    heights: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    expected: 49,
  },
  {
    description: "two lines",
    heights: [1, 1],
    expected: 1,
  },
  {
    description: "increasing heights",
    heights: [1, 2, 3, 4, 5],
    expected: 6,
  },
  {
    description: "zero-height lines",
    heights: [0, 0],
    expected: 0,
  },
];

testCases.forEach(({ description, heights, expected }) => {
  const actual = largestContainer(heights);
  assertEquals(actual, expected, description);
});

function assertEquals(actual: number, expected: number, description: string) {
  if (actual !== expected) {
    console.log(`${description} ... FAIL: ${actual} !== ${expected}`);
  } else {
    console.log(`${description} ... PASS`);
  }
}

export default function pairSum(nums: number[], target: number): number[] {
  const visitedNumbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const remaining = target - currentNumber;
    const remainingIndex = visitedNumbers.get(remaining);
    if (remainingIndex != null) return [remainingIndex, i];
    visitedNumbers.set(currentNumber, i);
  }

  return [];
}

// Tests

const testCases = [
  {
    description: "sample input",
    nums: [-1, 3, 4, 2],
    target: 3,
    expected: [0, 2],
  },
  {
    description: "pair at the start",
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
  },
  {
    description: "duplicate values at different indices",
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
  },
  {
    description: "negative numbers",
    nums: [-5, -2, 4, 8],
    target: 2,
    expected: [1, 2],
  },
  {
    description: "zero values",
    nums: [0, 4, 3, 0],
    target: 0,
    expected: [0, 3],
  },
  {
    description: "no matching pair",
    nums: [1, 2, 3],
    target: 7,
    expected: [],
  },
];

testCases.forEach(({ description, nums, target, expected }) => {
  const actual = pairSum(nums, target);
  assertArrayEquals(actual, expected, description);
});

function assertArrayEquals(
  actual: number[],
  expected: number[],
  description: string
) {
  const sortedActual = [...actual].sort((a, b) => a - b);
  const sortedExpected = [...expected].sort((a, b) => a - b);

  if (JSON.stringify(sortedActual) !== JSON.stringify(sortedExpected)) {
    console.log(
      `${description} ... FAIL: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`
    );
  } else {
    console.log(`${description} ... PASS`);
  }
}

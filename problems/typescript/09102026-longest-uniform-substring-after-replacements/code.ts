export default function findLongestUniformSubstringLength(
  s: string,
  k: number,
): number {
  let highestFrequency = 0;
  const frequencyMap = new Map();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const currentChar = s[right];
    frequencyMap.set(currentChar, (frequencyMap.get(currentChar) ?? 0) + 1);
    highestFrequency = Math.max(
      highestFrequency,
      frequencyMap.get(currentChar),
    );
    const windowLength = right - left + 1;
    if (windowLength - highestFrequency > k) {
      const leftChar = s[left];
      frequencyMap.set(leftChar, frequencyMap.get(leftChar) - 1);
      left += 1;
    }
    maxLength = right - left + 1;
    right += 1;
  }
  return maxLength;
}

// note 1: find longest uniform string by replacing all characters except the highest freqeuncy character
// note 2: once a window is valid and we're finding the longest substring so no need to shrink the window, only need to slide the window

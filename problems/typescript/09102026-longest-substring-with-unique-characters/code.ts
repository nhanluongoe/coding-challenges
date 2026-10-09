export default function findLongestUniqueSubstringLength(s: string): number {
  let left = 0;
  let right = 0;
  const charSet = new Set();
  let maxLength = 0;
  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    charSet.add(s[right]);
    right += 1;
  }
  return maxLength;
}

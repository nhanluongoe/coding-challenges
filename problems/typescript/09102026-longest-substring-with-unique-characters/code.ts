export default function findLongestUniqueSubstringLength(s: string): number {
  let left = 0;
  let right = 0;
  const charSet = new Set();
  let count = 0;
  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
      count -= 1;
    }
    charSet.add(s[right]);
    count += 1;
    right += 1;
  }
  return count;
}

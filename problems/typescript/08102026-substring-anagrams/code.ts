export default function countSubstringAnagrams(s: string, t: string): number {
  if (t.length > s.length) return 0;
  let count = 0;
  let left = 0;
  let right = 0;
  const windowMap = new Map<string, number>();
  const expectedMap = new Map<string, number>();
  for (const c of t) {
    expectedMap.set(c, (expectedMap.get(c) ?? 0) + 1);
  }

  while (right < s.length) {
    windowMap.set(s[right], (windowMap.get(s[right]) ?? 0) + 1);
    if (right - left + 1 === t.length) {
      if (isMapEqual(windowMap, expectedMap)) count += 1;
      windowMap.set(s[left], windowMap.get(s[left])! - 1);
      left += 1;
    }
    right += 1;
  }
  return count;
}

function isMapEqual<K, V>(mapA: Map<K, V>, mapB: Map<K, V>) {
  for (const [k, v] of mapA) {
    if (v !== (mapB.get(k) ?? 0)) return false;
  }
  return true;
}

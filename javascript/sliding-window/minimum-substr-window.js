function findSubString(string, pattern) {
  const charFreqMap = new Map()
  pattern
    .split('')
    .forEach((ch) => charFreqMap.set(ch, (charFreqMap.get(ch) ?? 0) + 1))

  let windowStart = 0
  let subStrStart = 0
  let minLength = string.length + 1
  let matched = 0

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    const rightChar = string[windowEnd]
    if (charFreqMap.has(rightChar)) {
      charFreqMap.set(rightChar, charFreqMap.get(rightChar) - 1)
      if (charFreqMap.get(rightChar) >= 0) matched++
    }

    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1
        subStrStart = windowStart
      }

      const leftChar = string[windowStart++]
      if (charFreqMap.has(leftChar)) {
        if (charFreqMap.get(leftChar) === 0) matched--
        charFreqMap.set(leftChar, charFreqMap.get(leftChar) + 1)
      }
    }
  }

  return minLength > string.length
    ? 'no result'
    : string.substring(subStrStart, subStrStart + minLength)
}

console.log(findSubString('aabdec', 'abc'))
console.log(findSubString('aabdec', 'abac'))
console.log(findSubString('abdbca', 'abc'))
console.log(findSubString('adcad', 'abc'))

/**
 * Time complexity: O(n * m * l), where n is number of characters in given string
 * m is total numbers of words, l is the length of a word
 * Space complexity: O(m + n)
 */
function findWordConcatenation(str, words) {
  const wordFrequencyMap = new Map()
  words.forEach((word) =>
    wordFrequencyMap.set(word, (wordFrequencyMap.get(word) ?? 0) + 1)
  )

  const resultIndices = []
  const wordsCount = words.length
  const wordLength = words[0].length
  for (let i = 0; i <= str.length - wordsCount * wordLength; i++) {
    const wordsSeen = new Map()
    for (let j = 0; j < wordsCount; j++) {
      const nextWordIndex = i + j * wordLength
      const word = str.substring(nextWordIndex, nextWordIndex + wordLength)
      if (!wordFrequencyMap.has(word)) break

      wordsSeen.set(word, (wordsSeen.get(word) ?? 0) + 1)

      if (wordsSeen.get(word) > wordFrequencyMap.get(word)) break

      if (j + 1 === wordsCount) resultIndices.push(i)
    }
  }

  return resultIndices
}

console.log(findWordConcatenation('catfoxcat', ['cat', 'fox']))
console.log(findWordConcatenation('catcatfoxfox', ['cat', 'fox']))

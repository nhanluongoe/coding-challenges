class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map()
    this.populateWordsToCounts(inputString)
  }

  populateWordsToCounts(inputString) {
    // Count the frequency of each word
  }
}

function splitWords(inputString) {
  const word = []

  let currentWordStartIndex = 0
  let currentWordLength = 0
  for (let i = 0; i < inputString.length; i++) {
    const currentCharacter = inputString[i]
    if (isLetter(currentCharacter)) {
      if (currentWordLength === 0) currentWordStartIndex = i
      currentWordLength++
    } else {
      const currentWord = inputString.slice(
        currentWordStartIndex,
        currentWordStartIndex + currentWordLength
      )
      word.push(currentWord)
      currentWordLength = 0
    }
  }

  return word
}

const wordToMap = new Map()
function addWordToMap(word) {
  if (wordToMap.has(word)) wordToMap.set(word, wordToMap.get(word) + 1)
  else wordToMap.set(word, 1)
}

console.log(splitWords("simple Alice's game, sentence!"))

function isLetter(character) {
  return (
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'".indexOf(
      character
    ) >= 0
  )
}

// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = 'simple sentence'
let actual = new WordCloudData('I like cake').wordsToCounts
let expected = new Map([
  ['I', 1],
  ['like', 1],
  ['cake', 1],
])
assert(isMapsEqual(actual, expected), desc)

desc = 'longer sentence'
actual = new WordCloudData(
  'Chocolate cake for dinner and pound cake for dessert'
).wordsToCounts
expected = new Map([
  ['and', 1],
  ['pound', 1],
  ['for', 2],
  ['dessert', 1],
  ['Chocolate', 1],
  ['dinner', 1],
  ['cake', 2],
])
assert(isMapsEqual(actual, expected), desc)

desc = 'punctuation'
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts
expected = new Map([
  ['cake', 1],
  ['Strawberry', 1],
  ['short', 1],
  ['Yum', 1],
])
assert(isMapsEqual(actual, expected), desc)

desc = 'hyphenated Words'
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts
expected = new Map([
  ['cake', 1],
  ['Dessert', 1],
  ['mille-feuille', 1],
])
assert(isMapsEqual(actual, expected), desc)

desc = 'ellipses between words'
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts
expected = new Map([
  ['mmm', 2],
  ['decisions', 2],
])
assert(isMapsEqual(actual, expected), desc)

desc = 'apostrophes'
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts
expected = new Map([
  ['Bakery', 1],
  ['Cakes', 1],
  ["Allie's", 1],
  ["Sasha's", 1],
])
assert(isMapsEqual(actual, expected), desc)

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key)

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false
    }
  }
  return true
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL`)
  }
}

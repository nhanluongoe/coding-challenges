function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor
}

/**
 * In-place shuffle
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function shuffle(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const randomPickIndex = getRandom(i, array.length - 1)
    if (i !== randomPickIndex) {
      const temp = array[i]
      array[i] = array[randomPickIndex]
      array[randomPickIndex] = temp
    }
  }
}

/**
 * Out-place shuffle
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function outPlaceShuffle(array) {
  const occurrences = new Map()
  const res = []

  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    if (!occurrences.has(current)) occurrences.set(current, 1)
    else occurrences.set(current, occurrences.get(current) + 1)
  }

  const min = Math.min(...array)
  const max = Math.max(...array)
  for (let i = 0; i < array.length; i++) {
    const random = getRandom(min, max)
    if (occurrences.has(random) && occurrences.get(random) > 0) {
      occurrences.set(random, occurrences.get(random) - 1)
      res.push(random)
    } else {
      i--
    }
  }

  return res
}

const sample = [1, 2, 3, 4, 5, 5]
console.log('Initial array: ', sample)
console.log('Out-place shuffled array: ', outPlaceShuffle(sample))
shuffle(sample)
console.log('In-place shuffled array: ', sample)

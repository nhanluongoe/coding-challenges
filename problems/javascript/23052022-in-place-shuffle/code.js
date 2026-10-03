export function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor
}

/**
 * In-place shuffle
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function shuffle(array) {
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
export function outPlaceShuffle(array) {
  const result = [...array]
  shuffle(result)
  return result
}

export default shuffle

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export default function reverse(arrayOfChars) {
  for (let i = 0; i < ~~arrayOfChars.length / 2; i++) {
    [arrayOfChars[i], arrayOfChars[arrayOfChars.length - 1 - i]] = [
      arrayOfChars[arrayOfChars.length - 1 - i],
      arrayOfChars[i],
    ]
  }
}

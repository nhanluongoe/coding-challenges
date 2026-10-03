/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export default function reverseWords(message) {
  // First reverse the whole message
  reverseString(message, 0, message.length - 1)

  // Second reverse each word of the message
  let currentWordStartIdx = 0
  for (let i = 0; i < message.length; i++) {
    // the end of the ech word will be with ' ' or at the end of message
    // end with ' '
    if (message[i] === ' ') {
      reverseString(message, currentWordStartIdx, i - 1)
      currentWordStartIdx = i + 1
    }

    // end at the end of message
    if (i === message.length - 1) {
      reverseString(message, currentWordStartIdx, i)
    }
  }
}

function reverseString(str, leftIdx, rightIdx) {
  while (leftIdx < rightIdx) {
    [str[leftIdx], str[rightIdx]] = [str[rightIdx], str[leftIdx]]
    leftIdx++
    rightIdx--
  }
}

/**
 * https://leetcode.com/problems/length-of-last-word/submissions/
 *
 */

const lengthOfLastWord = (s) => {
  return (
    s
      .split(/\s+/)
      .filter((word) => word)
      .slice(-1)[0]?.length || 0
  )
}

console.log(lengthOfLastWord(' '))
console.log(lengthOfLastWord(' hello world  '))
console.log(lengthOfLastWord(' abc dee aaa   aaadddd'))

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

export default lengthOfLastWord

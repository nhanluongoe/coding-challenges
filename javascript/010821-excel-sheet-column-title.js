/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 *
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let ans = ''

  while (columnNumber > 0) {
    columnNumber -= 1
    const rem = columnNumber % 26
    columnNumber = Math.floor(columnNumber / 26)
    const char = String.fromCharCode('A'.charCodeAt(0) + rem)

    ans = char + ans
  }

  return ans
}

console.log(convertToTitle(701))

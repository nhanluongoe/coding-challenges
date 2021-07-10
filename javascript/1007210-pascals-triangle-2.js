/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 *
 * @param {number} rowIndex
 * @return {number[]}
 */

const getRow = (rowIndex) => {
  const res = []
  let prevRow

  const numRows = rowIndex + 1
  for (let i = 1; i <= numRows; i++) {
    const curRow = new Array(i).fill(1)

    if (prevRow) {
      for (let j = 1; j < i - 1; j++) {
        curRow[j] = prevRow[j - 1] + prevRow[j]
      }
    }

    prevRow = curRow
    res.push(curRow)
  }

  return res[rowIndex]
}

console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))

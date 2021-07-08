/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = (numRows) => {
  const res = [];
  let prevRow;

  for (let i = 1; i <= numRows; i++) {
    const curRow = new Array(i).fill(1);

    if (prevRow) {
      for (let j = 1; j < i - 1; j++) {
        curRow[j] = prevRow[j - 1] + prevRow[j];
      }
    }

    res.push(curRow);
    prevRow = curRow;
  }

  return res;
};

console.log(generate(3));
console.log(generate(4));
console.log(generate(5));

/**
 * https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
  const longerLength = Math.max(a.length, b.length)

  a = a
    .padStart(longerLength, '0')
    .split('')
    .reverse()
    .map((elem) => +elem)
  b = b
    .padStart(longerLength, '0')
    .split('')
    .reverse()
    .map((elem) => +elem)

  let res = []
  let c = 0

  a.forEach((elem, idx) => {
    let elemOne = elem
    let elemTwo = b[idx]

    switch (elemOne + elemTwo + c) {
      case 0: {
        res.push('0')
        c = 0
        break
      }
      case 1: {
        res.push('1')
        c = 0
        break
      }
      case 2: {
        res.push('0')
        c = 1
        break
      }
      default: {
        res.push('1')
        c = 1
      }
    }
  })

  if (c === 1) res.push('1')

  return res.reverse().join('')
}

console.log(addBinary('1010', '1011'))
console.log(addBinary('1001', '1000110010011'))
console.log(
  addBinary(
    '1010101010101011100001101010110000011110001010010101010101010101010101010010101010101000101001011',
    '111111111111111110000000000000000000011111111111111010101010111111111100000000000000000000000001'
  )
)

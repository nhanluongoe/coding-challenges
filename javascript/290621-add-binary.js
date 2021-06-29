/**
 * https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
  const longerLength = Math.max(a.length, b.length);

  a = a
    .padStart(longerLength, "0")
    .split("")
    .reverse()
    .map((elem) => +elem);
  b = b
    .padStart(longerLength, "0")
    .split("")
    .reverse()
    .map((elem) => +elem);

  let res = [];
  let c = 0;

  a.forEach((elem, idx) => {
    let elemOne = elem;
    let elemTwo = b[idx];

    switch (elemOne + elemTwo + c) {
      case 0: {
        res.push("0");
        c = 0;
        break;
      }
      case 1: {
        res.push("1");
        c = 0;
        break;
      }
      case 2: {
        res.push("0");
        c = 1;
        break;
      }
      default: {
        res.push("1");
        c = 1;
      }
    }
  });

  if (c === 1) res.push("1");

  return res.reverse().join("");
};

console.log(addBinary("1010", "1011"));

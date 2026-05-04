/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (nextArg) {
      return curried.apply(this, nextArg ? [...args, nextArg] : args);
    };
  };
}

function multiplyThree(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThree = curry(multiplyThree);
console.log(curriedMultiplyThree(4)(5)()(6)); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120

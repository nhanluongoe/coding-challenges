/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const len = this.length;
  const noInitialValue = initialValue === undefined;

  if (len === 0 && noInitialValue) {
    throw new TypeError('Reduce of an empty array with no initial value');
  }

  let result = noInitialValue ? this[0] : initialValue;
  const startIndex = noInitialValue ? 1 : 0;

  for (let i = startIndex; i < len; i++) {
    const item = this[i];
    if (Object.hasOwn(this, i)) {
      result = callbackFn.call(undefined, result, item, i, this);
    }
  }

  return result;
};

console.log([1, 2].myReduce((a, b) => a + b, 0)); // 3
console.log([1, 2, 3].myReduce((a, b) => a + b)); // 6
console.log([1, 2, 3].myReduce((a, b, i) => a + b + i)); // 9
console.log([1, 2, 3].myReduce((a, b, i, arr) => a + b + arr[i])); // 11

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const len = this.length;
  const noInitialValue = arguments.length < 2;

  let startIndex = 0;
  if (noInitialValue) {
    while (startIndex < len && !Object.hasOwn(this, startIndex)) startIndex++;
  }

  if (startIndex === len && noInitialValue) {
    throw new TypeError('Reduce of an empty array with no initial value');
  }

  let result = noInitialValue ? this[startIndex++] : initialValue;

  for (let i = startIndex; i < len; i++) {
    const item = this[i];
    if (Object.hasOwn(this, i)) {
      result = callbackFn.call(undefined, result, item, i, this);
    }
  }

  return result;
};

export default Array.prototype.myReduce;

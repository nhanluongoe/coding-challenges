Array.prototype.myFilter = function (callbackFn, thisArg) {
  const res = [];

  // cache the length of the array to avoid the array being modified
  const len = this.length;

  for (let i = 0; i < len; i++) {
    const item = this[i];
    // ignore the index if value is not defined (spare array ex: [1, 2,, 3])
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, item, i, this)) {
      res.push(item);
    }
  }

  return res;
};

const isEven = (element) => element % 2 === 0;
const isOdd = (element) => element % 2 === 1;
const isEvenIndex = (_, index) => index % 2 === 0;
const isOddIndex = (_, index) => index % 2 === 1;
const isSquareEven = (_, index, array) =>
  (array[index] * array[index]) % 2 === 0;
const isSquareOdd = (_, index, array) =>
  (array[index] * array[index]) % 2 === 1;
const isThisProductEven = function (element) {
  return (element * this) % 2 === 0;
};
const isThisProductEvenArrowFn = (element) => (element * this) % 2 === 0;

describe('Array.prototype.myFilter', () => {
  test('empty array', () => {
    expect([].myFilter(isEven)).toStrictEqual([]);
    expect([].myFilter(isOdd)).toStrictEqual([]);
  });

  test('one value', () => {
    expect([1].myFilter(isEven)).toStrictEqual([]);
    expect([1].myFilter(isOdd)).toStrictEqual([1]);
  });

  test('two values', () => {
    expect([1, 10].myFilter(isEven)).toStrictEqual([10]);
    expect([1, 10].myFilter(isOdd)).toStrictEqual([1]);
  });

  test('multiple values', () => {
    expect([1, 2, 3, 5, 7, 8, 9].myFilter(isEven)).toStrictEqual([2, 8]);
    expect([1, 2, 3, 5, 7, 8, 9].myFilter(isOdd)).toStrictEqual([
      1, 3, 5, 7, 9,
    ]);
  });

  test('reducer uses index argument when provided', () => {
    expect([1, 2, 3].myFilter(isEvenIndex)).toStrictEqual([1, 3]);
    expect([-1, -3, 4, 99].myFilter(isOddIndex)).toStrictEqual([-3, 99]);
  });

  test('reducer uses array argument when provided', () => {
    expect([1, 2, 3, 4].myFilter(isSquareEven)).toStrictEqual([2, 4]);
    expect([-3, 4, 1, 5].myFilter(isSquareOdd)).toStrictEqual([-3, 1, 5]);
  });

  test('uses this argument', () => {
    expect([1, 2, 3, 4].myFilter(isThisProductEven)).toStrictEqual([]);
    expect([1, 2, 3, 4].myFilter(isThisProductEven, 10)).toStrictEqual([
      1, 2, 3, 4,
    ]);
    expect([1, 2, 3, 4].myFilter(isThisProductEven, 9)).toStrictEqual([2, 4]);
    expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn)).toStrictEqual([]);
    expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 10)).toStrictEqual(
      []
    );
    expect([1, 2, 3, 4].myFilter(isThisProductEvenArrowFn, 9)).toStrictEqual(
      []
    );
  });

  test('sparse arrays', () => {
    expect([, , ,].myFilter(isEven)).toStrictEqual([]);
    // Sparse arrays have `undefined` as the values. Use === undefined to
    // include them even after filtering.
    expect([, , ,].myFilter((val) => val === undefined)).toStrictEqual([]);
    expect([1, 2, , 4].myFilter(isEven)).toStrictEqual([2, 4]);
    expect([1, , 2, , 4, 7, 9].myFilter(isOdd)).toStrictEqual([1, 7, 9]);
  });
});

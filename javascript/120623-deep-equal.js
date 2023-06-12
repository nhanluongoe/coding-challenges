/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    if (valueA.length !== valueB.length) {
      return false;
    }

    for (let i = 0; i < valueA.length; i++) {
      if (!deepEqual(valueA[i], valueB[i])) {
        return false;
      }
    }

    return true;
  }

  if (
    (Array.isArray(valueA) && !Array.isArray(valueB)) ||
    (!Array.isArray(valueA) && Array.isArray(valueB))
  ) {
    return false;
  }

  if (typeof valueA === 'object' && typeof valueB === 'object') {
    if (!valueA && !valueB) {
      return valueA === valueB;
    }

    return (
      deepEqual(Object.keys(valueA), Object.keys(valueB)) &&
      deepEqual(Object.values(valueA), Object.values(valueB))
    );
  }

  return Object.is(valueA, valueB);
}

const v1 = 'foo';
const v2 = 'foo';
console.log(deepEqual(v1, v2)); // true

const v4 = { id: 1 };
const v3 = { id: 1 };
console.log(deepEqual(v3, v4)); // true

const v5 = [1, 2, 3];
const v6 = [1, 2, 3];
console.log(deepEqual(v5, v6)); // true

const v7 = [{ id: '1' }];
const v8 = [{ id: '2' }];
console.log(deepEqual(v7, v8)); // false

console.log(deepEqual(0, 0)); // true
console.log(deepEqual(-0, +0)); // false
console.log(deepEqual(undefined, null)); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual(undefined, undefined)); // true

console.log(deepEqual([], [])); // true
console.log(deepEqual([], {})); // false

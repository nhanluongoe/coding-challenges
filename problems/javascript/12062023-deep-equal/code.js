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
    if (valueA === null || valueB === null) return valueA === valueB;

    const keysA = Object.keys(valueA);
    const keysB = Object.keys(valueB);
    if (keysA.length !== keysB.length) return false;

    return keysA.every(
      (key) => Object.hasOwn(valueB, key) && deepEqual(valueA[key], valueB[key]),
    );
  }

  return Object.is(valueA, valueB);
}

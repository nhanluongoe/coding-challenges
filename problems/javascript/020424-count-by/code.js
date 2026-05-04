/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
  const result = {};
  array.forEach((item) => {
    const k = iteratee(item);
    result[k] = result[k] ? result[k] + 1 : 1;
  });
  return result;
}

// Test cases
countBy([6.1, 4.2, 6.3], Math.floor); // => { '4': 1, '6': 2 }

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n); // => { '3': 2, '5': 1 }

countBy([], (o) => o); // => {}

countBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => { undefined: 2 }

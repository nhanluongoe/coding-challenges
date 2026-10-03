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

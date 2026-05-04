/**
 * @param {Function} iteratee - The iteratee function to apply to each value.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */

// First attempt
// function intersectionBy(iteratee, ...arrays) {
//   const intersection = [];
//
//   const [firstArray, ...restArrays] = arrays;
//
//   for (const item of firstArray) {
//     let intersected = true;
//     for (const arr of restArrays) {
//       if (!arr.map(iteratee).includes(iteratee(item))) {
//         intersected = false;
//       }
//     }
//     if (intersected && !intersection.map(iteratee).includes(iteratee(item))) {
//       intersection.push(item);
//     }
//   }
//
//   return intersection;
// }

// Refactor
function intersectionBy(iteratee, ...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  // Map with iteratee
  const mappedArrays = arrays.map((arr) => arr.map(iteratee));
  let intersectedValues = mappedArrays[0].filter((value) =>
    mappedArrays.every((arr) => arr.includes(value))
  );

  // Remove duplicated values
  intersectedValues = intersectedValues.filter(
    (val, idx, self) => idx === self.indexOf(val)
  );

  // Revert back to original values
  return intersectedValues.map((val) => {
    const index = mappedArrays[0].indexOf(val);
    return arrays[0][index];
  });
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const iteratee = String;
console.log(intersectionBy(iteratee, arr1, arr2, arr3));

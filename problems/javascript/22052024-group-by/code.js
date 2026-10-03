// Implement a function groupBy(array, iteratee) that takes a array and an iteratee function, and groups the values in the array based on the iteratee.
export default function groupBy(array, iteratee) {
  const group = {};

  for (const elem of array) {
    const key = iteratee(elem);
    if (group[key]) {
      group[key].push(elem);
    } else {
      group[key] = [elem];
    }
  }

  return group;
}

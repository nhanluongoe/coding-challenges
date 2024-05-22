// Implement a function groupBy(array, iteratee) that takes a array and an iteratee function, and groups the values in the array based on the iteratee.
function groupBy(array, iteratee) {
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

console.log(groupBy([], Math.ceil));
// => {}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

console.log(groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));
// => { '3': [{ n: 3 }, { n: 3 }], '5': { n: 5 } }

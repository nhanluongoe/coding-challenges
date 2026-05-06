function intersectionWith(comparator, ...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  return arrays[0].filter((value) =>
    arrays.every((array) => array.some((elem) => comparator(value, elem)))
  );
}

const arr1 = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
];
const arr2 = [
  { y: 2, x: 1 },
  { x: 3, y: 4 },
];

const result = intersectionWith(
  (a, b) => a.x === b.x && a.y === b.y,
  arr1,
  arr2
); // => [{ x: 1, y: 2 }]
console.log(result);

const actual = intersectionWith((x, y) => true, [], [1, 2, 3], [4, 5, 6]);
console.log(actual);

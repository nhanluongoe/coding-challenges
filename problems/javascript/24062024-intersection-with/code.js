export default function intersectionWith(comparator, ...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  return arrays[0].filter(
    (value, index, firstArray) =>
      firstArray.findIndex((item) => comparator(value, item)) === index &&
      arrays.every((array) => array.some((elem) => comparator(value, elem))),
  );
}

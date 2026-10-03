export default function unionBy(iteratee, ...arrays) {
  const result = [];
  const comparision = new Set();

  arrays.forEach((array) => {
    array.forEach((val) => {
      if (!comparision.has(iteratee(val))) {
        result.push(val);
      }
      comparision.add(iteratee(val));
    });
  });

  return result;
}

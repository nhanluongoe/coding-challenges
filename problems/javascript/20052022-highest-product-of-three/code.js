/** Time complexity: O(n), space complexity: O(1). */
export default function highestProductOf3(values) {
  if (values.length < 3) throw new Error("Require at least 3 numbers!");

  let maxProduct = values[0] * values[1] * values[2];
  let highestProductOf2 = values[0] * values[1];
  let lowestProductOf2 = values[0] * values[1];
  let highest = Math.max(values[0], values[1]);
  let lowest = Math.min(values[0], values[1]);

  for (let index = 2; index < values.length; index++) {
    const current = values[index];
    maxProduct = Math.max(
      maxProduct,
      highestProductOf2 * current,
      lowestProductOf2 * current,
    );
    highestProductOf2 = Math.max(
      highestProductOf2,
      highest * current,
      lowest * current,
    );
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      highest * current,
      lowest * current,
    );
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return maxProduct;
}

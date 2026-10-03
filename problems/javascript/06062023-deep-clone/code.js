export default function deepClone(value) {
  // Solution 1: Easiest but flawed
  // - JSON doesn't support non-symbo-keyed properties
  // - JSON has some suprising behaviors such as converting Date obj to ISO string
  // return JSON.parse(JSON.stringify(value));

  // Solution 2: More correct way
  if (typeof value !== "object" || value === null) return value;

  if (Array.isArray(value)) {
    return value.map((elem) => deepClone(elem));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, deepClone(val)]),
  );
}

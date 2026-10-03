export default function limit(func, n) {
  let count = 0;
  let result;

  return function (...args) {
    if (count < n) {
      result = func.apply(this, args);
      count += 1;
    }
    return result;
  };
}

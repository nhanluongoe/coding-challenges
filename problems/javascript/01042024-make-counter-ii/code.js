export default function makeCounter(initialValue = 0) {
  let value = initialValue;
  return {
    get: () => value,
    increment: () => ++value,
    decrement: () => --value,
    reset: () => (value = initialValue),
  };
}

export default function makeCounter(initialValue = 0) {
  let value = initialValue;
  return {
    get: () => value,
    increment: () => ++value,
    decrement: () => --value,
    reset: () => (value = initialValue),
  };
}

const counter = makeCounter(10);
counter.increment();
counter.get(); // 11
counter.decrement();
counter.get(); // 10

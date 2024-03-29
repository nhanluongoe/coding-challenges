function cancellableSetInterval(callback, delay, ...args) {
  const intervalId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(intervalId);
  };
}

// give it a try
const cancel1 = cancellableSetInterval(() => {
  console.log('Hello, World!');
}, 1000);
setTimeout(() => {
  cancel1();
}, 3000);

const cancel2 = cancellableSetInterval(
  (name) => {
    console.log(`Hello, ${name}!`);
  },
  1000,
  'Alice'
);
setTimeout(() => {
  cancel2();
}, 5000);

const cancel3 = cancellableSetInterval(
  (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  },
  1000,
  'Alice',
  30
);
setTimeout(() => {
  cancel3();
}, 7000);

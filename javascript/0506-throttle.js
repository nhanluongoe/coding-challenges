// Implement a throttle function
function throttle(fn, delay) {
  let wait = false;

  return (...args) => {
    if (wait) return;

    fn(...args)
    wait = true;
    
    setTimeout(() => {
      wait = false;
    }, delay)
  }
}

// Test
function greet(name) {
  console.info(`Hello ${name}!`)
}

const throttledGreet = throttle(greet, 2000)

throttledGreet('Harry')
setTimeout(() => throttledGreet('Ignored'), 1100);
setTimeout(() => throttledGreet('Peter'), 2100);

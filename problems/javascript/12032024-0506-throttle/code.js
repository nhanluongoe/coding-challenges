// Implement a throttle function
export default function throttle(fn, delay) {
  let wait = false;

  return function (...args) {
    if (wait) return;

    fn.apply(this, args);
    wait = true;
    
    setTimeout(() => {
      wait = false;
    }, delay)
  }
}

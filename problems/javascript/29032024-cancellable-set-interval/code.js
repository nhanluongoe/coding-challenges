export function cancellableSetInterval(callback, delay, ...args) {
  const intervalId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(intervalId);
  };
}

export function cancellableSetTimeout(callback, delay, ...args) {
  const timeoutId = setTimeout(callback, delay, ...args);

  return () => {
    clearTimeout(timeoutId);
  };
}

export default cancellableSetInterval;

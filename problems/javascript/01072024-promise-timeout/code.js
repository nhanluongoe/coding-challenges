export default function promiseTimeout(promise, duration) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject('Promise timeout');
    }, duration);
  });

  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

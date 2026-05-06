/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    // reject with empty error when empty iterable is passed
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }
    
    let pending = iterable.length;
    const errors = new Array(iterable.length);


    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((val) => {
          // resolve as soon as an element is fulliled
          resolve(val);
        })
        .catch((err) => {
          // store the err to return an array of errors later
          errors[index] = err
          pending -= 1;

          if (pending === 0) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}

promiseAny([2])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

const p0 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(1);
  }, 200);
});
const p1 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(2);
  }, 100);
});
const p2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(3);
  }, 10);
});

promiseAny([p0, p1, p2])
  .then((val) => val)
  .catch((err) => console.log(err));

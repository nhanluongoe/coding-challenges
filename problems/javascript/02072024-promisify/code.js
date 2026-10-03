/**
 * @callback func
 * @returns Function
 */
export function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

export function enhancedPromisify(func) {
  // Allow to override return value
  if (func[Symbol.for('util.promisify.custom')]) {
    return func[Symbol.for('util.promisify.custom')];
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

export default promisify;

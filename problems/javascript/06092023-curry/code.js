/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

/**
 * @param {any} thisArg
 * @param {...*} boundArgs
 */
Function.prototype.myBind = function (thisArg, ...boundArgs) {
  const originalMethod = this;

  if (typeof originalMethod !== 'function') {
    throw new TypeError('myBind must be called on a function');
  }

  return function (...args) {
    // Using Reflect to avoid there's a property "call" or "apply" in ...
    // the originalMethod so we can't use originalMethod.apply(...) or originalMethod.call(...)
    return Reflect.apply(originalMethod, thisArg, [...boundArgs, ...args]);
  };
};

export default Function.prototype.myBind;

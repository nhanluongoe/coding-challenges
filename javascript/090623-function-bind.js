/**
 * @param {any} thisArg
 * @param {...*} boundArgs
 */
Function.prototype.myBind = function (thisArg, ...boundArgs) {
  // throw 'Not implemented!';
  const originalMethod = this;

  if (typeof originalMethod !== 'function') {
    throw new TypeError('myBind must be called on a function');
  }

  return function (...args) {
    return Reflect.apply(originalMethod, thisArg, [...boundArgs, ...args]);
  };
};

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.myBind(module);
console.log(boundGetX());
// Expected output: 42

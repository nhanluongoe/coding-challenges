Array.prototype.myFilter = function (callbackFn, thisArg) {
  const res = [];

  // cache the length of the array to avoid the array being modified
  const len = this.length;

  for (let i = 0; i < len; i++) {
    const item = this[i];
    // ignore the index if value is not defined (spare array ex: [1, 2,, 3])
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, item, i, this)) {
      res.push(item);
    }
  }

  return res;
};

export default Array.prototype.myFilter;

Array.prototype.myConcat = function (...items) {
  let result = this;
  for (const item of items) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result = [...result, item];
    }
  }
  return result;
};

export default Array.prototype.myConcat;

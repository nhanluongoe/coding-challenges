Array.prototype.myConcat = function(...items) {
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

[1, 2, 3].myConcat([4, 5], 6); // [1, 2, 3, 4, 5, 6]
[].myConcat([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]

/**
 * Flatten the given array
 * @param {Array<*|Array>} value
 * @return {Array}
 */

export function flatten(value) {
  // First solution: Iterative
  const res = [];
  const copy = value.slice();

  while (copy.length) {
    const item = copy.shift();
    
    if (Array.isArray(item)) {
      copy.unshift(...item)
    } else {
      res.push(item);
    }
  }

  return res;
}

export function flatten2(value) {
  // Second solution: Iterative using some()
  let copy = value.slice();
  
  while(copy.some(Array.isArray)) {
    copy = [].concat(...copy)
  }
  
  return copy;
}

export function flatten3(value) {
  // Thid solution: Using reduce()
  return value.reduce((arr, elem) => arr.concat(Array.isArray(elem) ? flatten3(elem) : elem), []);
}

export default flatten;

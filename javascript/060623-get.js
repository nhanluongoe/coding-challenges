/**
 * @param {Object} object
 * @param {string|Array<string>} path
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(object, path, defaultValue) {
  const props = Array.isArray(path) ? path : path.split('.');

  let res = object;

  for (const prop of props) {
    if (typeof res === 'object' && res !== null && prop in res) {
      res = res[prop];
    } else {
      return defaultValue;
    }
  }

  return res;
}

// Test

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(jane, 'profile.name.firstName', 'unknown')); // 'unknown'

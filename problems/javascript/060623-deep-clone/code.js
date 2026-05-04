function deepClone(value) {
  // Solution 1: Easiest but flawed
  // - JSON doesn't support non-symbo-keyed properties
  // - JSON has some suprising behaviors such as converting Date obj to ISO string
  // return JSON.parse(JSON.stringify(value));

  // Solution 2: More correct way
  if (typeof value !== 'object' || value === null) return value;

  if (Array.isArray(value)) {
    return value.map(elem => deepClone(elem));
  }

  return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, deepClone(val)]))
}


// Test

const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
console.log(clonedObj1.user.role); // 'guest'
console.log(obj1.user.role); // Should still be 'admin'.

const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
console.log(obj2.foo[0].bar); // 'bax'
console.log(clonedObj2.foo[0].bar); // Should still be 'baz'.


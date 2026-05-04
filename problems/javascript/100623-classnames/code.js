/**
 * @param {...(string|Object|Array<string|Object>)} args
 * @return {string}
 */

export default function classNames(...args) {
  const classes = [];

  args.forEach(arg => {
    if (!arg) {
      return;
    }

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg);
      return;
    }

    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    if (typeof arg === 'object') {
      for (const [key, val] of Object.entries(arg)) {
        if (val) {
          classes.push(key);
        }
      }
    } 
  })

  return classes.join(' ');
}

console.log(classNames([])); // ''
console.log(classNames('foo')); // 'foo'
console.log(classNames('foo', 'bar')); // 'foo bar'
console.log(classNames('foo', { bar: true })); // 'foo bar'
console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
// classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ); // 'foo bar baz quux'
// classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // 'bar 1'

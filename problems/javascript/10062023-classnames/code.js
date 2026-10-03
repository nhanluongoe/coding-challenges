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
      const nestedClasses = classNames(...arg);
      if (nestedClasses) classes.push(nestedClasses);
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

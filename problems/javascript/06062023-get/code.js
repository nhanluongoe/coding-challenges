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

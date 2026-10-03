/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
export default function promiseMerge(p1, p2) {
  return Promise.all([p1, p2]).then(([v1, v2]) => {
    try {
      if (typeof v1 === "number" && typeof v2 === "number") {
        return v1 + v2;
      }

      if (typeof v1 === "string" && typeof v2 === "string") {
        return v1 + v2;
      }

      if (Array.isArray(v1) && Array.isArray(v2)) {
        return [...v1, ...v2];
      }

      if (isPlainObject(v1) && isPlainObject(v2)) {
        return { ...v1, ...v2 };
      }

      throw "Unsupported data types";
    } catch {
      throw "Unsupported data types";
    }
  });
}

function isPlainObject(value) {
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

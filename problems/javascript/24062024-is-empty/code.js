export default function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (Array.isArray(value) || typeof value === "string") {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return Object.keys(value).length === 0;
}

export default function camelCaseKeys(object: Object): Object {
  if (Array.isArray(object)) {
    return object.map(camelCaseKeys);
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(object)) {
    const camelCaseKey = toCamelCase(key);
    result[camelCaseKey] = camelCaseKeys(val);
  }
  return result;
}

function toCamelCase(input: string): string {
  const result = input
    .split('_')
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return capitalize(word);
    })
    .join('');
  return result;
}

function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

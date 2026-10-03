// Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.
//
// The function should support a few options as the second parameter:
//
// sorted: Sorts the items by alphabetical order.
// length: Show only the first length items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
// unique: Remove duplicate items.

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
  if (!items || items.length === 0) {
    return '';
  }

  if (items.length === 1) {
    return items[0];
  }

  let clonedItems = [...items].filter(Boolean);

  if (options?.sorted) {
    clonedItems.sort((a, b) => a.localeCompare(b));
  }

  if (options?.unique) {
    clonedItems = Array.from(new Set(clonedItems));
  }

  if (
    options?.length &&
    options.length > 0 &&
    options.length < clonedItems.length
  ) {
    const remaining = clonedItems.length - options.length;
    const firstPart = clonedItems.slice(0, options.length).join(', ');
    const secondPart = `${remaining} other${remaining > 1 ? 's' : ''}`;

    return [firstPart, secondPart].join(' and ');
  }

  const firstPart = clonedItems.slice(0, clonedItems.length - 1).join(', ');
  const secondPart = clonedItems[clonedItems.length - 1];

  return [firstPart, secondPart].join(' and ');
}

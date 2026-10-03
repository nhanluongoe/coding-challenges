/**
 * @param {string} string
 * @param {string} query
 * @return {string}
 */
export default function textSearch(string, query) {
  if (string.trim() === "" || query.trim() === "") {
    return string;
  }

  // Phase 1: create an array that maps the characters that should be bolded
  const boldChars = Array.from({ length: string.length }, () => 0);
  for (let i = 0; i < string.length; ) {
    const substring = string.slice(i, i + query.length);
    if (substring.toLowerCase() === query.toLowerCase()) {
      boldChars.fill(1, i, i + query.length);
      i += query.length;
    } else {
      i += 1;
    }
  }

  // Phase 2: insert <b> and </b> tag
  let highlightString = "";
  for (let i = 0; i < boldChars.length; i++) {
    const shouldAddOpenTag = boldChars[i] === 1 && boldChars[i - 1] !== 1;
    const shouldAddCloseTag = boldChars[i] === 1 && boldChars[i + 1] !== 1;

    let char = string[i];
    if (shouldAddOpenTag) {
      char = "<b>" + char;
    }

    if (shouldAddCloseTag) {
      char = char + "</b>";
    }

    highlightString += char;
  }

  return highlightString;
}

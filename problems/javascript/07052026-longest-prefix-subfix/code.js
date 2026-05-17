function longestPrefixSuffix(input) {
  if (input.length < 2) return "";

  const prefixLengths = new Array(input.length).fill(0);
  let prefixIndex = 0;
  let currentIndex = 1;

  while (currentIndex < input.length) {
    if (input[currentIndex] === input[prefixIndex]) {
      prefixIndex += 1;
      prefixLengths[currentIndex] = prefixIndex;
      currentIndex += 1;
    } else if (prefixIndex > 0) {
      prefixIndex = prefixLengths[prefixIndex - 1];
    } else {
      currentIndex += 1;
    }
  }

  return input.slice(0, prefixLengths[input.length - 1]);
}

console.log(longestPrefixSuffix("ababab")); // "abab"
console.log(longestPrefixSuffix("level")); // "l"
console.log(longestPrefixSuffix("abcd")); // ""

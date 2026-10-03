/** Time complexity: O(n), space complexity: O(n). */
export default function hasPalindromePermutation(theString) {
  const unpairedCharacters = new Set();

  for (const character of theString) {
    if (unpairedCharacters.has(character)) unpairedCharacters.delete(character);
    else unpairedCharacters.add(character);
  }

  return unpairedCharacters.size <= 1;
}

export const hasPalindromePermutation2 = hasPalindromePermutation;

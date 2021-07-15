/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 */

const reverseStr = (s) => {
  return s.split('').reverse().join('')
}

const isPalindrome = (s) => {
  const filteredStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  return filteredStr === reverseStr(filteredStr)
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome("This is absolutely not a palindrome, isn't it?"))

/**
 * @param {string} s
 * @return {boolean}
 */

// my approach  space complexity 0(n)
var isPalindrome = function (s) {
  if (s === " ") return true
  let validString = s.toLowerCase().split("").
    filter(alphabhet =>
      (alphabhet.charCodeAt() >= 97 &&
        alphabhet.charCodeAt() <= 122) ||
      (alphabhet.charCodeAt() >= 48 &&
        alphabhet.charCodeAt() <= 57)).join('')

  for (let i = 0; i < validString.length / 2; i++) {
    if (validString[i] !== validString[validString.length - i - 1]) {
      return false
    }
  }
  return true
};

//two pointer approach  space complexity 0(1)
var isPalindrome2 = function (s) {
  // replace all char with "" except a - z and 0 - 9
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Two-pointer approach
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("1a2"))
console.log(isPalindrome2("1a2"))
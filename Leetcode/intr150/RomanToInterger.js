/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Define a mapping of Roman numerals to their integer values
  const romanMap = {
    "I": 1, "V": 5, "X": 10, "L": 50,
    "C": 100, "D": 500, "M": 1000
  };

  let n = s.length; // Get the length of the input string
  let total = 0; // Variable to store the final integer result

  // Loop through the Roman numeral string from left to right
  for (let i = 0; i < n; i++) {
    let curr = romanMap[s[i]];     // Get the integer value of the current character
    let next = romanMap[s[i + 1]]; // Get the integer value of the next character (if exists)

    // If the current value is less than the next, subtract it (e.g., IV -> 4, IX -> 9)
    if (curr < next) {
      total -= curr;
    } else {
      // Otherwise, simply add the value
      total += curr;
    }
  }

  return total; // Return the final converted integer value
};

console.log(romanToInt("MCMXCIV"));

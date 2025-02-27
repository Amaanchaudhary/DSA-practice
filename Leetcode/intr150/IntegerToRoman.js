/**
 * Function to convert an integer to a Roman numeral.
 * @param {number} num - The input integer (1 <= num <= 3999).
 * @return {string} - The Roman numeral representation of the number.
 */

var intToRoman = function (num) {
    // List of Roman numeral symbols in descending order
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "III", "II", "I"];

    // Corresponding integer values for each Roman numeral
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 3, 2, 1];

    // Initialize an empty string to store the resulting Roman numeral
    let roman = "";

    // Loop through each Roman numeral value from largest to smallest
    for (let i = 0; i < values.length; i++) {
        // While the number is greater than or equal to the current value,
        // append the corresponding symbol and subtract the value from num.
        while (num >= values[i]) {
            roman += symbols[i]; // Add the Roman numeral to the result
            num -= values[i];    // Reduce the number by the corresponding value
        }
    }

    // Return the final Roman numeral string
    return roman;
};

// Example Usage:
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"

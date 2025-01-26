var addBinary = function(a, b) {
    let carry = 0;  // Variable to store carry from addition
    let result = ''; // Stores the final binary sum as a string
    let i = a.length - 1; // Pointer to traverse string `a` from right to left
    let j = b.length - 1; // Pointer to traverse string `b` from right to left

    // Iterate while there are digits left in `a` or `b`
    while (i >= 0 || j >= 0) {
        // Convert characters to numbers, default to 0 if index is out of bounds
        let sum = Number(a[i] || 0) + Number(b[j] || 0) + carry;

        // Append the remainder (sum % 2) to result (this is the current binary digit)
        result = (sum % 2) + result;

        // Update carry: if sum is 2 or 3, carry becomes 1; otherwise, it's 0
        carry = sum > 1 ? 1 : 0;

        // Move to the next digit (left side)
        i--;
        j--;
    }

    // If there is a leftover carry, prepend '1' to the result
    return carry ? `1${result}` : result;
};

console.log(addBinary("111", "11"));

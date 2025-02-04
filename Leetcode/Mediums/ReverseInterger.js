/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const bit = (2 ** 31) - 1; // 2147483647
    let temp = Math.abs(x); // Get absolute value
    let result = 0;

    while (temp !== 0) {
        result = result * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    if (result > bit || result < -bit) return 0; // Single condition check

    return x < 0 ? -result : result; // Restore negative sign if needed

};

console.log(reverse(210));

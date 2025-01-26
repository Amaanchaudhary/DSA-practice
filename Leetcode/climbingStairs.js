/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n; // If n is 1 or 2, return n directly (base cases)

    let prev1 = 1; // Ways to reach step 1
    let prev2 = 2; // Ways to reach step 2
    let current;   // Placeholder for computed result

    // Start from step 3 up to n
    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2; // Sum of previous two steps (Fibonacci relation)
        prev1 = prev2; // Move prev1 forward (shift)
        prev2 = current; // Move prev2 forward (shift)
    }

    return current; // Return the total ways to reach step n
};

console.log(climbStairs(10));

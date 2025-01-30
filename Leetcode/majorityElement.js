/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    let candidate = null;  // Variable to store the potential majority element
    let count = 0;  // Count to track candidate strength

    for (let num of nums) {
        if (count === 0) {  
            candidate = num; // Set a new candidate when count is 0
        }
        if (candidate === num) {
            count++;  // Increase count if current number matches the candidate
        } else {
            count--;  // Decrease count if current number is different
        }
    }

    return candidate;  // The candidate is the majority element
};

// Example Usage:
console.log(majorityElement([3,2,3])); // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Output: 2

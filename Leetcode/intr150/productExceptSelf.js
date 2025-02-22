var productExceptSelf = function (nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);  // Final result array

    // **********Approach 1  O(n)-time and O(n)-space
    // let prefix = new Array(n).fill(1);  // Prefix product array
    // let suffix = new Array(n).fill(1);  // Suffix product array

    // // Step 1: Compute prefix products
    // for (let i = 1; i < n; i++) {
    //     prefix[i] = prefix[i - 1] * nums[i - 1];
    // }

    // // Step 2: Compute suffix products
    // for (let i = n - 2; i >= 0; i--) {
    //     suffix[i] = suffix[i + 1] * nums[i + 1];
    // }

    // // Step 3: Compute final result by multiplying prefix and suffix
    // for (let i = 0; i < n; i++) {
    //     answer[i] = prefix[i] * suffix[i];
    // }


    // **********Approach 2  O(n)-time and O(1)-space
    
    // Step 1: Compute prefix product and store in answer
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];  // Update prefix product
    }

    // Step 2: Compute suffix product and multiply with answer
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;  // Multiply with suffix product
        suffix *= nums[i];  // Update suffix product
    }

    return answer;
};



// Example Usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
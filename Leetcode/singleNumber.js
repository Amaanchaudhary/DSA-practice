var singleNumber = function (nums) {
    let result = 0;

    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Apply XOR between result and the current number
        result ^= nums[i];
    }

    // The result now holds the single number that appears only once
    return result;
};

console.log(singleNumber([1,2,3,2,1]));

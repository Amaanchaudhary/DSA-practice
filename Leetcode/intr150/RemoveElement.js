
var removeElement = function(nums, val) {
    // Counter to keep track of the position to place non-val elements
    let k = 0; 
    
    // Loop through the array
    for (let i in nums) {
        // If the current element is not equal to val
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Place it at the index k
            k++; // Increment k for the next non-val element
        }
    }
    
    return k; // Return the number of elements not equal to val
};



console.log(removeElement([2], 1))
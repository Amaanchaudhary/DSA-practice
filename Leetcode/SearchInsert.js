
var searchInsert = function (nums, target) {
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If target is found or needs to be inserted before current element
        if (target <= nums[i]) {
            return i; // Return the index
        }
    }
    // If target is greater than all elements, insert at the end
    return nums.length;
};


console.log(searchInsert([1, 3, 40, 43], 4))
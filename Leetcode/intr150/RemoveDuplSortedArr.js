
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Start from index 1, assuming first element is unique

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { 
            nums[k] = nums[i]; // Store unique element
            k++;
        }
    }
    return k;
};


console.log(removeDuplicates([1, 1, 2, 2, 2]));

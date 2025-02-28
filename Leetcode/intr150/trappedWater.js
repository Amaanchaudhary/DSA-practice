/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0; // Edge case: empty array

    let left = 0, right = height.length - 1; // Two pointers
    let leftMax = 0, rightMax = 0; // Track max heights
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // Left bar is smaller, process left pointer
            if (height[left] >= leftMax) {
                leftMax = height[left]; // Update max left height
            } else {
                trappedWater += leftMax - height[left]; // Calculate trapped water
            }
            left++; // Move left pointer
        } else {
            // Right bar is smaller, process right pointer
            if (height[right] >= rightMax) {
                rightMax = height[right]; // Update max right height
            } else {
                trappedWater += rightMax - height[right]; // Calculate trapped water
            }
            right--; // Move right pointer
        }
    }

    return trappedWater;
};

// Example Usage:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9

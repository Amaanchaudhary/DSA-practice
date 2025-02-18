function canJump(nums) {
    let maxReach = 0; // The farthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // If we reach an unreachable index, return false
        maxReach = Math.max(maxReach, i + nums[i]); // Update maxReach
        if (maxReach >= nums.length - 1) return true; // If we can reach last index, return true
    }

    return true; // If we finish the loop, we can reach the last index
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Output: true
console.log(canJump([3,2,1,0,4])); // Output: false

// Key Takeaways
// Keep track of the farthest reachable index (maxReach).
// If we ever reach an index beyond maxReach, return false.
// If maxReach reaches or exceeds the last index, return true.
// Time Complexity: O(n) – We iterate through the array once.
// Space Complexity: O(1) – We use only a single variable (maxReach).
//-------------------------
// Concept of Greedy Algorithm
// The greedy approach means that at each step, we make the best possible choice (maximize maxReach) without worrying about future steps.

// We start at index 0 and try to jump as far as possible.
// We keep updating maxReach to the farthest possible index.
// If at any point, we reach or exceed the last index, we return true.
// If we reach an index that is beyond maxReach, it means we are stuck, and we return false.






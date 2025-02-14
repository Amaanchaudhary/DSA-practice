// Solved using Boyer's Moree Voting Algorithm
function MajorityElement(nums) {
    let candidate = nums[0]
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
        }

        count += candidate === nums[i] ? 1 : -1
    }

    return candidate
}


console.log(MajorityElement([1, 2, 1, 4, 2, 2, 1, 1, 1]));

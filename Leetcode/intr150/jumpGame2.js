
// It's guaranteed that you can reach nums[n - 1].

function Jump(nums){
    let jump = 0;
    let currEnd = 0;
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        maxReach = Math.max(maxReach, i + nums[i])
        
        if(i === currEnd){
            jump++;
            currEnd = maxReach;
        }

        if(currEnd >= nums.length - 1) break;
    }

    return jump
}

// console.log(Jump([2,3,1,1,4]));
// console.log(Jump([1,2,1,1,1]));
// console.log(Jump([2,3,1,1,4]));
console.log(Jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]));
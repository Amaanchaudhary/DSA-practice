
var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0
    let k = 1
    let i = 1
    while(i < nums.length){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i]
            k++
        }
        i++
    }
    return k
};

console.log(removeDuplicates([1,1,2,2,2]));

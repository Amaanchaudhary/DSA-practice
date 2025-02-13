
var removeDuplicates2 = function (nums) {
    if(nums.length <= 2) return nums.length
    let k = 2;

    for(let i = 2; i < nums.length ; i++){
        if(nums[i] !== nums[k-2]){
            nums[k] = nums[i]
            k++
        }
    }
    return { k , nums}
};


console.log(removeDuplicates2([1, 1, 1, 2, 2, 2 , 4, 4]));

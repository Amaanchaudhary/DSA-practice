// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).



var nums = [3, 2, 2, 3] , val = 3

const removeElements = (nums , val) => {
    var k
    for(var i = 0 ; i < nums.length ; i++){
        if(nums[i] == val){
            nums.splice(i , 1 )
            i--
        }
    }
    return k = nums.length
}


console.log(removeElements(nums , val ))
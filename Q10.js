// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Do not return anything, modify nums1 in-place instead.

var nums1 = [2, 0], m = 1
var nums2 = [1], n = 1

var merge = (nums1, nums2, m, n) => {
    
    var i = m - 1
    var j = n - 1
    var k = m + n -1

    while(j >= 0){
        if(i >= 0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            k--
            i--
        }
        else{
            nums1[k] = nums2[j]
            k--
            j--
        }
    }

    return nums1
}

console.log(merge(nums1, nums2, m, n))
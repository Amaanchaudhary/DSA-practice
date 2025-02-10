var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Last valid element in nums1
    let j = n - 1; // Last element in nums2
    let k = m + n - 1; // Last position in nums1

    // Merge from the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 still has elements left, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1
};


let nums1 = [1, 3, 5, 0, 0, 0];
let nums2 = [0, 2, 4];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Correct Output: [0, 1, 2, 3, 4, 5]

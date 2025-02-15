// General Rule for Modulus (a % b)
// If a < b, then a % b = a
// ✅ Example: 3 % 7 = 3

// If a > b, it gives the remainder.
// ✅ Example: 10 % 7 = 3 (since 10 ÷ 7 = 1 remainder 3)

// If a is a multiple of b, it returns 0.
// ✅ Example: 14 % 7 = 0

function RotateArray(nums, k) {

  //Helper function to reverse the array 
  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++;
      end--;
    }
  }

  let n = nums.length
  k = k % n

  // step 1. Reverse the entire array.
  reverse(nums, 0, n - 1)

  // Step 2. Reverse the first k element.
  reverse(nums, 0, k - 1)

  // Step 3. Reverse the  remaining part.
  reverse(nums, k, n - 1)

  return nums
}

function RotateArray2(nums, k) {
  k = k % nums.length
  let n = nums.length - k
  let extractedArr = nums.splice(n, nums.length)
  nums.unshift(...extractedArr)
  return nums
}

const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(RotateArray(nums, 3))


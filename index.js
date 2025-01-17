

let nums = [1, 2, 3];
nums.extra = "unexpected"; // Custom property

for (let key in nums) {
    console.log(key); // Outputs: 0, 1, 2, extra
}

for (let val of nums) {
    console.log(val); // Outputs : 0, 1, 2
}



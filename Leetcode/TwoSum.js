var twoSum = function (nums, target) {
  let map = new Map(); //Initialize Empty HashMap

  // iterate over each element of an array
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i]

    if (map.has(compliment)) { // check if map has compliment as key
      // return [value of matched key , current index ]
      return [map.get(compliment), i]
    }

    // else insert into the map current value and index as key-value  
    map.set(nums[i], i)
  }
};


console.log(twoSum([2, 4, 1 , 3 , 10], 5))
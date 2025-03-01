//Q1. Given an array of object each object contains names and age print names of all 
//    objects using map function 

var persons = [{
    name: "amaan",
    age: "21"
},
{
    name: "rushaan",
    age: "18"
},
{
    name: "maaz",
    age: 13
}]

// var name = people.map((pro) => {
//     return pro.name                       //method 1
// })

var name = persons.map(pro => pro.name)       //method 2 chatgpt
// console.log(name)


//Q2. sort the given array and print the result in ascending order  

var nums = [121, 23, 24, 4, 19, 2]

for (var i = 0; i < nums.length; i++) {         //bubble sort algorithm
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] > nums[j + 1]) {               //if previous val is greater than next one?
            nums[j] = nums[j] + nums[j + 1]      //swaping method without using new var
            nums[j + 1] = nums[j] - nums[j + 1]
            nums[j] = nums[j] - nums[j + 1]
        }
    }
}
// console.log(nums)


//Q3. Given an array of numbers, use forEach method to print duplicate numbers 

const numberss = [2, 3, 4, 2, 5, 4, 2, 2]
const duplicate = []

numberss.forEach((item, index, arr) => {
    let target = item
    let i = index + 1
    while (i < arr.length) {                                        //my approach
        if (arr[i] == target && duplicate.indexOf(item) == -1) {
            duplicate.push(arr[i])
        }
        i++
    }

    //index of item always == index if duplicate is found it will show the index of 1st one
    // if (arr.indexOf(item) !== index && duplicate.indexOf(item) === -1) {
    //     duplicate.push(item);            
    // }                                      //chatgpt approach

})

duplicate.forEach((nums) => {
    console.log(nums);
})


//Q4.Do you know about some() method of array
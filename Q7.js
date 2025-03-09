// if array is sorted and want to return result in new array
function removeDuplicates(array) {
    if (array.length == 1) return array
    let result = []
    for (let i = 0; i < array.length; i++) {
        let curr = array[i]
        let next = array[i + 1]
        if (curr == next) {
            continue
        }
        result.push(curr)
    }
    return result
}

// if array is not sorted and want to return result as same array
function removeDuplicates2(array) {
    let k = 1 // pointer t0 track replaced posi starts from 1 because 0th is unique
    let i = 1
    while (i < array.length) {
        if (array[i] !== array[i - 1]) {
            array[k] = array[i]
            k++
        }
        i++
    }
    array.splice(k);
    return array
}

// if array is not sorted use set to return new array modified array
function removeDuplicates3(array) {
   return [...new Set(array)]
}


// if array is not sorted use set to return new array modified array
function removeDuplicates4(array) {
    let unique = new Set();
    let result = []

    for(let val of array){
        if(!unique.has(val)){
            unique.add(val)
            result.push(val)
        }
    }
    return result
 }


const array = [1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 5] //Sorted
const array2 = [1, 11, 22, 2, 1, 4, 4, 14, 4, 5, 5]  //UnSorted

console.log(removeDuplicates4(array2))


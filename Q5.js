function reverseArray(array) {
    let n = array.length
    // The loop iterates only up to the middle to avoid re-swapping.
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        // Array Destructuring
        [array[i], array[n - i - 1]] = [array[n - i - 1], array[i]]
    }
    return array
}


const array = [5, 10, 20, 1]
console.log(reverseArray(array))
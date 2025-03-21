

function findMaxValue(array) {
    let max = array[0]

    for (let val of array) {
        max = val > max ? val : max
    }
    return max
}

const array = [2, 18, 5, 1, 9]
console.log(findMaxValue(array))

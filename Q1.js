function sumPositiveNumbers(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            sum += array[i]
        }
    }
    return sum
}

var array = [1, -2, 3, 4, -5]

console.log(sumPositiveNumbers(array))
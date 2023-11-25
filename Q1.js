function sumPositiveNumbers(array){
    var sum = 0;
    for(var i = 0 ; i < array.length ; i++){
        if(array[i] >= 0){
            sum += array[i]
        }
    }
    return sum
}

var array = [1, -2, 3, 4, -5]

console.log(sumPositiveNumbers(array))
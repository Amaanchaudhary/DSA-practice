function findMaxValue(array){
    var max = array[0]
    for(var i = 1 ; i < array.length ; i++){
        max = array[i] > max? array[i] : max
    }
    return max
}

const array = [2, 8, 5, 1, 9]
console.log(findMaxValue(array))
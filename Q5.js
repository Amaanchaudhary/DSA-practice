function reverseArray(array){
    var array2 = []
    for(var i = array.length-1 ; i >= 0 ; i--){
        array2.push(array[i])
    }
    return array2
}

const array =  [1, 2, 3, 4, 5]

console.log(reverseArray(array))
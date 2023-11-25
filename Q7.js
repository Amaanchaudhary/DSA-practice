function removeDuplicates(array){
    
    for(var i = 0 ; i < array.length ; i++){
        for(var j = 0 ; j < array.length ; j++){
            if(array[i] == array[j]  ){
                array.splice(i , 1)
            }
        }
    }
    return array
}

const array = [1, 2, 2, 3, 4, 4, 5]

console.log(removeDuplicates(array))
function removeDuplicates(array){
    
    for(var i = 0 ; i < array.length ; i++){
        for(var j = i+1 ; j < array.length ; j++){
            if(array[i] == array[j]){
                array.splice(j , 1)
                j--
            }    
        }
    }
    return array
}

const array = [1, 1, 2, 2, 3, 4, 4, 4, 4,5, 5]
console.log(removeDuplicates(array))

// for(var i = 0 ; i < array.length ; i++){
//     for(var j = 0 ; j < array.length ; j++){
//         if(array[i] == array[j]  ){
//             array.splice(i , 1)
//         }
//     }
// }
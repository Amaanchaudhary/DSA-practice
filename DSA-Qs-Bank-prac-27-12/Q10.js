// Int arr[] = {14,0,76,0,45,0,9,4,0,5}
// shift all zeroes at the last 
// Without changing index number of other elements


var arr = [14 , 0 , 76 , 0 , 45 , 0 , 9 , 4 , 0 , 5]

function removeZeros(arr){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] == 0){
            arr.splice(i , 1 , undefined)
            arr.push('zero')   //idk why this program is throwing error if i try to push 0 or '0 
        }
    }
    return arr
}

console.log(removeZeros(arr))

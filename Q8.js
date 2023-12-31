// find the second largest number

// var arr = [24, 3, 45, 67, 9, 13, 34, 12]

function secondLargestNum(arr) {
    arr.sort(compare)
    function compare(a, b) {   //sort method with inbuild sort function
        return a - b
    }
    return arr[arr.length - 2]   //returned the second last index for secondLargestNum
}

//

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1]       //simple swap method without third var
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]
            }
        }
    }
    return arr      //Here i simply returned the whole sorted array
}

// console.log(bubbleSort(arr))

// console.log(secondLargestNum(arr))

var arr = [24, 3, 45, 67, 9, 13, 34, 12]
var num = 16

for(var m = 0 ; m < arr.length ; m++ ){
    for(var n = 0 ; n < arr.length ; n++){
        if(arr[n] > arr[n+1]){
            arr[n] = arr[n] + arr[n+1]
            arr[n+1] = arr[n] - arr[n+1]
            arr[n] = arr[n] - arr[n+1]
        }
    }
}

console.log(arr , 'sorted')

for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] > num ){
        arr.splice(i , 0 , num)
        break
    }
}

console.log(arr)

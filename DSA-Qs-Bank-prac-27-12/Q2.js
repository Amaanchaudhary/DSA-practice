// print * pattern

function incrementStar(){
    var i = 1;
    var str = ''
    while (i <= 4) {    //for row
        var j = 0;
        while (j < i) {      //for * column in a row
            str += '* '
            j++;
        }
        str += '\n'
        i++
    }
    return str
}

function decrementStar(){
    var i = 4;
    var str = ''
    while (i >= 1) {    //for row
        var j = 0;
        while (j < i) {      //for * column in a row
            str += '* '
            j++;
        }
        str += '\n'
        i--
    }
    return str
}

console.log(incrementStar(4))

// console.log(decrementStar())



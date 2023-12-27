// Draw This pattern using while loop 
// **
// *
// **
// *

var str = ''
var i = 1;
var n = 4

while(i <= n){
    var j = 1
    if(i%2 == 0){
        j++
    }
    while(j <= n/2){
        str += '* '
        j++
    }
    str += '\n'
    i++
}

console.log(str)
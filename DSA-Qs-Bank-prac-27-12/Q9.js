// Print 1 to 10 number sequence ly using while loop-
// 1234
// 123
// 12
// 1

var i = 10;
var str = ``

while(i > 0){
    var j = 1
    while(j <= i){
        str += `${j} `
        j++
    }
    str += `\n`
    i--
}

console.log(str)
//Take string as input and return it in a proper camelCaseFormat
//Eg:- 'BOB loves-coding'
//output :- bobLovesCoding

var str = "bob loves code"

//  var str2 = ''

//  str.split(' ').map((v) => {
//     str2 += v[0].toUpperCase() + v.slice(1)
//  })
 

//  console.log(str.split(' '))
// //  console.log(str.split('-'))



function camelCase(str){
    var str2 = str.toLowerCase()
    for(let i in str2){
        if(str2[i] == ' ' || str2[i] == '-'){
            newStr = str2.slice(0 , i)

        }
    }
    return newStr
}

console.log(camelCase(str))
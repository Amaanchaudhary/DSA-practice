//          *********** Number Conversion **************
// let score = "33abc" // if convert this string val into number it will return NaN
let score = null  //if convert this null into number it will return 0
// let score = undefined  //if convert this undefined into number it will return NaN
// let score = true  //if convert this true into number it will return 1 & 0 for false

// console.log(typeof score);

let valueInNumber = Number(score) //still it will get converted

// console.log(typeof valueInNumber); 
// console.log(valueInNumber);   //but when you print it will show NaN not a number

//                 ********boolean conversion***************
let isLoggedIn = true
// let isLoggedIn = ""  //for empty string it will return false
// let isLoggedIn = "Aman"  //for string it will return true

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

//                ******** String conversion ***************
let num = 33
let stringval = String(num)
// console.log(stringval)
// console.log(typeof stringval)

//               ************  Operations ***************
let val = 3
let negVal = -val
// console.log(negVal)

// console.log(2**3) //2 raise to the power 3 - 2*2*2
// console.log(2%3) //modulo optr return remainder
// console.log(6/2) //divide return quotient

// console.log("2" + 1)
// console.log(1 + '2')
// console.log('1' + '2' + 5)   //stirng 125
// console.log(1 + 2 + '5')    //35
// console.log('1' + 7 + '5')    //175    all are strings not number typeOf = string

// console.log(+true)  //it will return 1
// console.log(-true)  //it will return -1
// console.log(false)  //it will return 0
// console.log(-false)  //it will return -0
// console.log(+"");   //it will return 0

let num1 , num2 , num3

num1 , num2 , num3 = 4   //undefined
num1 = num2 = num3 = 2 + 2 //4 is assigned to all variable

// console.log(num1,num2)

// let x = 10 , y = x++

// console.log(y)     //10
// console.log(x + y) //21

let x = 4 , y = 10

// console.log(x++ + ++y) // 4 + 11 = 15
// console.log(x++ + y)   // 5 + 11 = 16

// console.log(x++ + ++x + y++ + ++y)  //4 + 6 + 10 + 12 = 32
            
// console.log(x+y)  // 6 + 12 = 18



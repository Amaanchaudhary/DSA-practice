// const name = "amaan"  //1 way to declare
const name2 = new String("amaan")  // 1 way to declare
// console.log(name2); 

//***********String Methods**********

// console.log(name2.length);
// console.log(name2.toUpperCase());  //it will not modify the og string because of stack mmry
// console.log(name2.charAt(2));     //it will tell you what char is at the 2nd position
// console.log(name2.indexOf('n'));  //it will tell you on what position this char is staying

const newString = name2.substring(0 , 4)  //from 0 to 3rd position , it will ignore -Val 
                                          //(2) if only 1 val mean it'll go 2 to end
// console.log(newString)


// const anotherString = name2.slice(0 , 3)  //slice also take negative val and start from end
// const anotherString = name2.slice(-2)    //only last char
const anotherString = name2.slice(-2)       // last 2 char

// console.log(anotherString)

const strWithSpaces = "   ama ann   "
// console.log(strWithSpaces.trim());   //ama ann

const str = "amaan@gmail.com.com"   //replace only replace the very first match string
// console.log(str.replace(".com" , '0'))   //amaan@gmail0.com

// console.log(str.includes("@gmail"))   //true

const str2 = "amaan-chaudhary-is-great"
// console.log(str2.split("-"));  // [ 'amaan', 'chaudhary', 'is', 'great' ]


// console.log("z".charCodeAt(0))  //UTF-16 code unit
// for(var i = 97 ; i <= 122 ; i++){
//     console.log(String.fromCharCode(i).toUpperCase()) //This code uses the ASCII values for 'A'(65) to 'Z' (90) 
// }








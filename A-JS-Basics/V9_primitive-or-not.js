//     ***************primitive**************
//       which cannot be call by reference

//7 types -> Number , String , Boolean , null , undefined , BigInt , Symbol 

const id = Symbol("123")
const id2 = Symbol("123") //they return the different value

// console.log(id === id2);  //false

const bigNum = 121223232323223323n //put n to the last of the whole number
// console.log(typeof bigNum);  //this will become BigInt
// console.log(typeof amaan);  //amaan is not a variable,then also it will return undefined  


//     **************(Reference) non Primitive **********
//  Array , objects , functions

const arr = ['12', 3, { age: 212 }] // this is array 
// console.log(typeof arr)    //but this type of will return object 

const myObj =
{
    name : "amaan",
    age : 21
}
// console.log(typeof myObj);

const myFunc = function(){
    console.log(typeof myFunc);  //function
}
myFunc();
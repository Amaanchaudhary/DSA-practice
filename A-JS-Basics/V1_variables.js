const AccId = '12345'
var AccEmail = 'abc@'
let AccPass = '123'
AccCity = 'mumbai'   //In js we can assign var without giving datatype but not a good prac
let AccName

// AccId = '12' //Assignment to constant variable.    !Error
var AccEmail = 'bca@'  //var can be re declared
AccEmail = 'bac@'      //var can be re Assigned  and var is global scope variable

// let AccPass = '2334'   // let can't be re Declared  Error
AccPass = '2334'          // let can be re Assinged 

var AccCity = 'pune'   //we can re assign variable without Datatype n declared also work with Var
AccCity = 'rajasthan'   //we can re assign variable without Datatype n declared also work with Var

console.table([AccId , AccEmail , AccPass , AccCity , AccName]);
//******** Stack Memory(Primitive), Heap Memory(Non-Primitive)
//1.  Stack memory use hoti hai to memory ki copy milti hai hume
//2.  Heap memory use hoti hai to memory ka Original reference milta hai hume

//Stack memory example
let myName = "Amaan chaudhary"  //this are primitive datatype so stack memory is used
let myName2 = myName           //now in myName2 the copy of myName is assigned not reference
myName2 = "Maaz chaudhary"   //so when we change myName2 , myName is still same 

// console.log(myName2 , "<- myName");
// console.log(myName , "<- myName2");

//Heap memory example
const userOne = {        //This is object(Non_primitive) so heap memory is used
    name : "amaan",
    age : 21
}

const userTwo = userOne  //Now userTwo is holding userOne original reference of userOne 
// mean both are addressing the same memory location

userTwo.name = "Ammmm"  //here i changed the userTwo name but both are in same memory

// console.log(userOne.name)  //both are get change
// console.log(userTwo.name)  

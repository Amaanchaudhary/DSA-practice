function countProperties(Input){
    var total = Object.keys(Input)
    return total.length 
}

const Input = {a: 1, b: 2, c: 3}

console.log(countProperties(Input))
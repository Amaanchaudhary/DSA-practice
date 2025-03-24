


function countProperties(Input){
    var total = Object.values(Input)
    return total.length
}

const Input = {a: 4, b: 2, c: 3}

console.log(countProperties(Input))
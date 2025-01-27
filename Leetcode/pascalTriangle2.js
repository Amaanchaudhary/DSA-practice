var generate = function(numRows) {
    let row = new Array(numRows + 1).fill(1)

    for(let i = 1 ; i <= numRows ; i++){
        for(let j = i - 1; j > 0 ; j--){
            row[j] += row[j-1]
        }
    }
   
    return row;
};

console.log(generate(4));

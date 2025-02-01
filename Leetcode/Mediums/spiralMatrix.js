/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = []
    let m = matrix.length, n = matrix[0].length
    let srow = 0, erow = m - 1
    let scol = 0, ecol = n - 1
    
    while (scol <= ecol && srow <= erow) { //outer Loop | 2.while condition
        //1. Logic boundries
        //3. corner cases 

        //Top
        for (let j = scol; j <= ecol; j++) {
            result.push(matrix[srow][j])
        }

        //Right
        for (let j = srow + 1 ; j <= erow; j++) {
            result.push(matrix[j][ecol])
        }

        //Bottom
        for (let j = ecol - 1; j >= scol; j--) {
            if (srow === erow) {
                break  //odd row case top and bottom should print only once
            }
            result.push(matrix[erow][j])
        }

        //Left  
        for (let j = erow - 1; j >= srow + 1; j--) {
            if (scol === ecol) {
                break  //odd col case left and right should print only once 
            }
            result.push(matrix[j][scol])
        }
     // Move to the inner sub-matrix
        srow++, scol++, erow--, ecol--
    }
    return result
};

console.log(spiralOrder([[1,2,3],[4,5,6]]));

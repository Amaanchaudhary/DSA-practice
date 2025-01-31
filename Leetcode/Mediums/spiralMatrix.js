var spiralOrder = function(matrix) {
    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Move the top boundary down

        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move the right boundary left

        // Traverse from right to left (if there's still a row)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Move the bottom boundary up
        }

        // Traverse from bottom to top (if there's still a column)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move the left boundary right
        }
    }

    return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6]]));

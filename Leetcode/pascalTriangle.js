var generate = function(numRows) {
    // Handle edge case where no rows are requested
    if (numRows === 0) return [];

    // Initialize the triangle with the first row
    let triangle = [[1]];

    // Build the triangle row by row
    for (let i = 1; i < numRows; i++) {
        // Get the previous row
        let prevRow = triangle[i - 1];
        // Start the new row with a leading 1
        let newRow = [1];

        // Compute the intermediate values of the new row
        for (let j = 1; j < i; j++) {
            // Each new element is the sum of the two elements directly above it
            newRow[j] = prevRow[j - 1] + prevRow[j];
        }

        // End the new row with a trailing 1
        newRow.push(1);

        // Add the new row to the triangle
        triangle.push(newRow);
    }

    return triangle;
};

console.log(generate(5));

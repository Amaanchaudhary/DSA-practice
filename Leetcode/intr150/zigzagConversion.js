function zigzagConversion(s, numRows) {
    // Egde Case
    if (numRows == 1) return s

    //each index represents a row.
    const rows = new Array(Math.min(numRows, s.length)).fill("")
    let goingDown = false;
    let currentRow = 0

    for (let char of s) {
        // Append each character to the respective row.
        rows[currentRow] += char

        // Change direction when reaching the top or bottom row.
        if (currentRow == 0 || currentRow == numRows - 1) {
            goingDown = !goingDown
        }

        // track the row index
        currentRow += goingDown == true ? 1 : -1
    }

    // Join all rows together to form the final output.
    return rows.join("");
}

console.log(zigzagConversion("AMAAN", 3));


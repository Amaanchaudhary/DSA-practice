import readline from "readline"

const rl = readline.createInterface({
    input : process.stdin,// Read input from terminal (user typing)
    output: process.stdout  // Print output to terminal
})

var plusOne = function (digits) {
    let length = digits.length;
    for (let i = length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Increment and return early if no carry is needed
            return digits;
        }
        digits[i] = 0; // If digit is 9, set it to 0 and continue
    }

    // If all digits were 9, we add 1 at the beginning
    digits.unshift(1);
    return digits;
};


rl.question("please enter numbers ", (input) => {
    // Convert input string into an array of numbers
    const digits = input.split("").map(Number);

    // Call the function and print the result
    console.log("Result:", plusOne(digits));

    rl.close()
})




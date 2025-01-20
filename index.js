
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,// Read input from terminal (user typing)
    output: process.stdout  // Print output to terminal
})

rl.question("please enter numbers ", (input) => {
    // Convert input string into an array of numbers
    const digits = input.split("").map(Number);

    // Call the function and print the result
    console.log("Result:", digits);

    rl.close()
})
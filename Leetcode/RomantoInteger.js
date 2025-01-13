// Q1 Roman to Integer
function RomanCheck(s) {
    // Dictionary of Roman numeral values
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let equation = 0
    // Convert the Roman numeral string to an array of values
    const arr = s.split("")
    const numbersArr = arr.map(item => romanValues[item])

    // If the input is a single numeral, return its value
    if (numbersArr.length <= 1) {
        return numbersArr[0]
    }

    // Add a 0 at the start for easier calculation
    numbersArr.unshift(0)

    for (let i = numbersArr.length - 1; i >= 0; i--) {
        //For last Index return equation
        if (numbersArr[i - 1] == undefined) {
            return equation
        }

        // Subtraction rule: if the current value is greater, subtract the previous value
        if (numbersArr[i] > numbersArr[i - 1]) {
            equation = (numbersArr[i] - numbersArr[i - 1]) + equation
            --i // Skip the iteration for substracted value
            continue
        }

        // Addition rule: if values are equal, sum them
        if (numbersArr[i] == numbersArr[i - 1]) {
            equation = (numbersArr[i] + numbersArr[i - 1]) + equation
            --i // Skip the iteration for added value
            continue
        }

        // Regular addition if current value is less than the previous
        if (numbersArr[i] < numbersArr[i - 1]) {
            equation = numbersArr[i] + equation
        }
    }

    // Return the final result
    return equation;
};
console.log(RomanCheck("MMMDCCLXXVII"))


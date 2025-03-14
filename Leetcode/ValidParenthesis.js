
// Q2 Valid parenthesis
var isValid = function (s) {
    // Object to map opening brackets to their corresponding closing brackets
    const obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    // Stack to store opening brackets as we encounter them
    let stack = []

    // Loop through each character in the string
    for (let char of s) {
        if (char in obj) {
            // If character is an opening bracket,
            // push it onto the stack
            stack.push(char)
        } else {
            // If character is a closing bracket, 
            if (obj[stack.pop()] !== char) {
                // If no opening bracket is found or brackets don't match, return false
                return false;
            }
        }
    }

    // Finally, if stack is empty, return true 
    // If stack not empty,return false 
    // {[( for this type of cases 
    return stack.length == 0;
};

console.log(isValid("[])"))





// Q2 Valid parenthesis
var isValid = function (s) {
    const obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let stack = []
    for (let char of s) {
        if (char in obj) {
            stack.push(char)
        } else {
            if (stack.length == 0 || obj[stack.pop()] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid("[{")) 




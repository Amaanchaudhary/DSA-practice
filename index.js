

var plusOne = function (digits) {
    let length = digits.length //1
    let find = 9
    if (digits[length - 1] != 9) {
        digits[length - 1] += 1
        return digits
    } else {
        let i = length - 1 //0
        while (find == 9 && i >= 0) {
            if (digits[i] != 9) {
                find = digits[i]
                digits[i] += 1
                i--
            } else {
                digits[i] = 0
                i--
            }
        }
        if (find != 9) {
            digits.unshift(1)
        }
    }
    return digits
};


console.log(plusOne([9,9,9]));



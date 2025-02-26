var longestCommonPrefix = function (strs) {

    // Edge Case
    if (strs.length == 0) return ""

    // Prefix as 1st element of strs
    let prefix = strs[0]

    // start from 2nd element
    for (let i = 1; i < strs.length; i++) {
        // start reducing prefix from right by 1 
        // until it fall at start of strs[i] or 
        // return if it becomes empty
        while (strs[i].indexOf(prefix) !== 0) {
            // reducing prefix from right by 1
            prefix = prefix.slice(0, prefix.length - 1)

            // check if prefix is empty so return ""
            if (prefix == "") return prefix
        }
        // if prefix match with string at any point,
        // Change to the next string and repeat  
    }

    return prefix
}


const strs = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strs);
console.log(result);
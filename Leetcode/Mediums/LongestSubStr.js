// Longest Substring without duplicate

// my approach
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length

    let maxLength = 1
    let subStr = s[0]
    for (let i = 1; i < s.length; i++) {
        if (subStr.includes(s[i])) {
            let index = subStr.indexOf(s[i]) 
            subStr = subStr.slice(index+1, i).concat(s[i])
            maxLength = maxLength > subStr.length ?
                maxLength : subStr.length
        } else {
            subStr += s[i]
            maxLength = maxLength > subStr.length ?
                maxLength : subStr.length
        }
    }
    return maxLength
};

// 2. optimised approach
var lengthOfLongestSubstring2 = function (s) {
    let left = 0 
    let length = 0
    let set = new Set() 
    for(let right = 0 ; right < s.length ; right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        length = Math.max(length, right - left + 1)
    }
    return length
};

console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring2("dvdf"));


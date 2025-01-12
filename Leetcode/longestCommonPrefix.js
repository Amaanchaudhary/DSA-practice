const strs = ["flower", "flow", "flight"]


var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""; // Edge case: empty array

  let prefix = strs[0]; // Start with the first string as the prefix

  for (let i = 1; i < strs.length; i++) {
    // Compare the current prefix with the next string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1); // Reduce the prefix
      if (prefix === "") return ""; // No common prefix
    }
  }

  return prefix; // Return the longest common prefix
};


const result = longestCommonPrefix(strs)
console.log(result)





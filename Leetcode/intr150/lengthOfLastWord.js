function lengthOfLastWord(s) {
  const result = s.trim().split(" ")
  return result[result.length - 1].length
}

console.log(lengthOfLastWord("Amaan is a Problem solver"))
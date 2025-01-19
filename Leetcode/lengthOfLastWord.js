

function lengthOfLastWord(str) {

  const words = str.trim().split(" ")
  return words[words.length - 1].length

}
console.log(lengthOfLastWord(" hello "))
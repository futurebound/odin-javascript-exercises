// likely suboptimal, but only by a factor of 1/2 * n
//  could also check alphanumeric in the for-loop, and
//  then increment/decrement indices as needed 
// loose definition of palindrome here so not worrying about it

const palindromes = function (str) {
  str = processString(str)

  for (let i = 0; i < str.length / 2; i++) {
    let a = str.charAt(i)
    let b = str.charAt(str.length - (1 + i))
    
    if (a !== b) return false
  }

  return true
};

const processString = function (str) {
  let processed = ""
  const strRegex = new RegExp(/[^a-zA-Z0-9]/)

  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (!strRegex.test(str.charAt(i))) { // false -> no problems
      processed += str.charAt(i)
    }
  }
  return processed
}

// Do not edit below this line
module.exports = palindromes;

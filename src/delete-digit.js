const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfStrings = Array.from(String(n));

  let newArr = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    const minimum = Math.min(...arrayOfStrings);
    if (arrayOfStrings[i] == minimum) {
      delete minimum;
    } else {
      newArr += arrayOfStrings[i];
    }
  }
  console.log(newArr);
  return Number(newArr);
}

module.exports = {
  deleteDigit
};

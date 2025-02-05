const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sumNum = "" + n;
  let sum = 0;
  if (n > 9) {
    for (let i = 0; i < sumNum.length; i++) {
      sum += +sumNum[i];
    }
    if (sum > 9) {
      let sumNum2 = "" + sum;
      let sum2 = 0;
      for (let i = 0; i < sumNum2.length; i++) {
        sum2 += +sumNum2[i];
      }
      console.log(sum2);
      return sum2;
    } else {
      console.log(sum);
      return sum;
    }
  }
}

module.exports = {
  getSumOfDigits
};

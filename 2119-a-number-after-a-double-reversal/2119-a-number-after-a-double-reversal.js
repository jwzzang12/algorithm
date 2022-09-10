/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = function (num) {
  function reverse(num) {
    const arr = num.toString().split("");
    return parseInt(arr.reverse().join(""));
  }
  const reversal = reverse(num);
  return num == reverse(reversal);
};
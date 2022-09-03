/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const newDigits = BigInt(digits.join("")) + 1n;
  result = newDigits.toString().split("");
  return result.map((i) => parseInt(i));
};

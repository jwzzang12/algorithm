/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = n.toString().split("").map(Number);
  const plus = arr.reduce((a, b) => a + b);
  const multiple = arr.reduce((a, b) => a * b);

  return multiple - plus;
};

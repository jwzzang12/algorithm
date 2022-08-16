/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = n.toString().split("").map(Number);
  const plus = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  const multiple = arr.reduce((a, b) => {
    return a * b;
  }, 1);

  return multiple - plus;
};

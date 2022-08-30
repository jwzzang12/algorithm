/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
  const arr = n.toString().split("");
  const newArr = arr.map((e) => parseInt(e));
  const multiple = newArr.reduce((a, b) => a * b);
  const plus = newArr.reduce((a, b) => a + b);
  return multiple - plus;
};

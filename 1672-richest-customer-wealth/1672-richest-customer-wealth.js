/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (acc) {
  let result = [];
  for (let i = 0; i < acc.length; i++) {
    const reducer = (accumulator, curr) => accumulator + curr;
    let sum = acc[i].reduce(reducer);
    result.push(sum);
  }
  return Math.max(...result);
};
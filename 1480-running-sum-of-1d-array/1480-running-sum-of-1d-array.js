/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const result = [];
  let newNum = 0;
  for (let i = 0; i < nums.length; i++) {
    newNum += nums[i];
    result.push(newNum);
  }
  return result;
};

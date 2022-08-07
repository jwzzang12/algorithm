/**
 * @param {number[]} nums
 * @return {number[]}
 */
  let newNums = []

var getConcatenation = function (nums) {
  newNums = nums.concat(nums);
  return newNums;
  //return [...nums, ...nums]
};

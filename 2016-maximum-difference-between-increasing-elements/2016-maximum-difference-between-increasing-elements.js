/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = function (nums) {
  let min = nums[0];
  let difference = 0;
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    difference = Math.max(difference, nums[i] - min);
  }
  if (difference == 0) {
    return -1;
  }
  return difference;
};

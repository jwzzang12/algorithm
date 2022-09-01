/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = function (nums, n) {
  const result = [];
  for (i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};
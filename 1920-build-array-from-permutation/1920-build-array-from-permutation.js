/**
 * @param {number[]} nums
 * @return {number[]}
 */

var buildArray = function (nums) {
  let arr = [];
  nums.forEach(function (num) {
    arr.push(nums[num]);
  });
  return arr;
};

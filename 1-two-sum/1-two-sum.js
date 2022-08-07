/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0;i<nums.length;i++){
        const num01 = nums[i]
      for (let j=0;j<nums.length;j++) {
        const num02 = nums[j]
        if (num01+num02 === target && i!==j) {
          return [i,j]
        }
      }
    }
};
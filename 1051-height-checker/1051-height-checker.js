/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const newHeights = [...heights].sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (newHeights[i] !== heights[i]) {
      result++;
    }
  }
  return result;
};
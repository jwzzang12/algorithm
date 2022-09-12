/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = function (start, goal) {
  return (start ^ goal).toString(2).replaceAll("0", "").length;
};


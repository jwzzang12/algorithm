/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let s = stones.length;
  for (let i = 0; i < s; i++) {
    if (jewels.indexOf(stones[i]) >= 0) {
      count++;
    }
  }
  return count;
};

// var numJewelsInStones = function (jewels, stones) {
//   const jewelsArr = [];
//   const stonesArr = [];

//   jewelsArr.push(jewels.split(""));
//   stonesArr.push(stones.split(""));
//   let count = 0;
//   for (let i = 0; i < jewelsArr.length; i++) {
//     for (let j = 0; j < stonesArr.length; j++) {
//       if (jewels[i] === stones[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

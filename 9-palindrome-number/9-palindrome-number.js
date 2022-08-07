/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    return x === Number(x.toString().split("").reverse().join(""));
};

// var isPalindrome = function (x) {
//   if (x > 0) {
//     const last = x.toString().length - 1;
//     for (let i = 0; i < x.toString().length; i++) {
//       if (x.toString().charAt(i) == x.toString().charAt(last - i)) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else if (x == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };


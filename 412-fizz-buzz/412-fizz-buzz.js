/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      let i = "FizzBuzz";
      arr.push(i);
    } else if (i % 3 == 0) {
      let i = "Fizz";
      arr.push(i);
    } else if (i % 5 == 0) {
      let i = "Buzz";
      arr.push(i);
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
console.log(fizzBuzz(5));

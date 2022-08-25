/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = function (s) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const result = [];
  const first = alphabet.indexOf(s[0]);
  const last = alphabet.indexOf(s[3]);
  for (let i = first; i < last + 1; i++) {
    for (let j = Number(s[1]); j < Number(s[4]) + 1; j++) {
      result.push(`${alphabet[i] + j}`);
    }
  }
  return result;
};

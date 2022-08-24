/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const firstRow = "qwertyuiop".split("");
  const secondRow = "asdfghjkl".split("");
  const thirdRow = "zxcvbnm".split("");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    let wordsArr = words[i].toLowerCase().split("");
    if (wordsArr.every((r) => firstRow.includes(r))) {
      result.push(words[i]);
    } else if (wordsArr.every((r) => secondRow.includes(r))) {
      result.push(words[i]);
    } else if (wordsArr.every((r) => thirdRow.includes(r))) {
      result.push(words[i]);
    }
  }
  return result;
};

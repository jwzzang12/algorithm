/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let result = [];
  for (let i = 0; i < sentences.length; i++) {
    let leng = sentences[i].split(" ").length;
    result.push(leng);
  }
  return Math.max(...result);
};

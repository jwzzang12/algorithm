/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function (title) {
  const wordArr = title.split(" ").map((e) => e.toLowerCase());
  let newArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length > 2) {
      newArr.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1));
    } else {
      newArr.push(wordArr[i]);
    }
  }
  return newArr.join(" ");
};

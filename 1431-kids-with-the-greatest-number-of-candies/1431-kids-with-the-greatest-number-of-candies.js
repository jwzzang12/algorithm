var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = candies.map(x => x + extraCandies >= max);

  return result;
};

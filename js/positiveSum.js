const positiveSum = (numbers) => {
  let result = 0;
  numbers.filter((item) => item > 0).map((item) => (result += item));
  return result;
};

console.dir(positiveSum([1, -4, 7, 12]));

const find_average = (array) =>
  array && array.length != 0
    ? array.reduce((prev, curr) => prev + curr) / array.length
    : 0;
console.dir(find_average([1, 1, 1]));

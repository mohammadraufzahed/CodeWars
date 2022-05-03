const findOdd = (A) => {
  const special = new Set(A);
  const counter = {};
  [...special].map((item, key) => {
    counter[item] = A.filter((odd) => odd == item).length;
  });
  for (const [key, value] of Object.entries(counter)) {
    if (value % 2 !== 0) {
      return parseInt(key);
    }
  }
};
console.dir(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

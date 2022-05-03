const number = (x) => {
  let enter = 0;
  let exit = 0;
  x.map((item) => (enter += item[0]));
  x.map((item) => (exit += item[1]));
  return enter - exit;
};
console.dir(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

const nbYear = (p0, percent, aug, p) => {
  let counter = 0;
  while (p0 < p) {
    console.dir(p0);
    p0 += parseInt(p0 * (percent / 100) + aug);
    counter++;
  }
  return counter;
};

console.dir(nbYear(1500, 5, 100, 5000));

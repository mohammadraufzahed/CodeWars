const printerError = (s) => {
  let counter = 0;
  [...s].map((item) =>
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"].includes(
      item
    )
      ? null
      : counter++
  );
  return `${counter}/${s.length}`;
};

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

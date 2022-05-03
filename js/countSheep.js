const countSheep = (sum) => {
  let sheep = "";
  for (let i = 0; i < sum; i++) {
    sheep += `${i + 1} sheep...`;
  }
  return sheep;
};

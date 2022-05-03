const solution = (str) =>
  (str == ""
    ? ""
    : [...str].map((item) => {
        const regex = /[A-Z]/gm;
        regex.test(item) ? (item = ` ${item}`) : item;
        return item;
      })
  ).join("");
console.dir(solution("camelCasingTest"));

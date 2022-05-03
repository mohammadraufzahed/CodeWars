const accum = (str) =>
  [...str]
    .map((item, index) => {
      let text = "";
      for (let i = 0; i < index + 1; i++) {
        text += i == 0 ? item.toUpperCase() : item.toLowerCase();
      }
      return text;
    })
    .join("-");
console.dir(accum("ZpglnRxqenU"));

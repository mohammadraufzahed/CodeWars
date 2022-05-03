const smash = (words) =>
  words.map((item, key) => (key == 0 ? item : ` ${item}`)).join("");
console.log(smash(["hello", "world", "this", "is", "great"]));

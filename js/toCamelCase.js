/**
 *
 * @param {string} str
 * @returns
 */
const toCamelCase = (str) =>
  str.includes("_")
    ? str
        .split("_")
        .map((item, key) =>
          key == 0
            ? item
            : (item[0] = item.replace(item[0], item[0].toUpperCase()))
        )
        .join("")
    : str.includes("-")
    ? str
        .split("-")
        .map((item, key) =>
          key == 0
            ? item
            : (item[0] = item.replace(item[0], item[0].toUpperCase()))
        )
        .join("")
    : "";

console.dir(toCamelCase("the_stealth_warrior"));

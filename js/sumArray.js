/**
 *
 * @param {Array<Number>} array
 * @returns
 */

function sumArray(array) {
  if (array && array.length > 2) {
    array.sort((a, b) => a - b);
    array[0] = 0;
    array[array.length - 1] = 0;
    return array.reduce((prev, curr) => prev + curr);
  }
  return 0;
}

console.dir(sumArray([-6, -20, -1, -10, -12]));

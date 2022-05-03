// Sum Numbers
function sum(numbers) {
  "use strict";
  return numbers.length == 0 ? 0 : numbers.reduce((curr, prev) => curr + prev);
}

console.dir(sum([1, 2, 20, -10]));

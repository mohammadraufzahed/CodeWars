const removeSmallest = (numbers) => {
  numbers.splice(numbers.indexOf([...numbers].sort((a, b) => a - b)[0]), 1);
  return numbers;
};

console.dir(removeSmallest([5, 3, 2, 1, 4]));

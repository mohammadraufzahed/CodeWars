const feast = (beast, dish) =>
  beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1];
console.dir(feast("great blue heron", "garlic naan"));

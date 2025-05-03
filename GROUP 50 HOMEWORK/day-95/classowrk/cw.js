let names = ["Gio", "daviti", "saba", "Luka", "nika"];

let isCapitalized = element => {
  let firstLetter = element.charAt(0);
  return firstLetter === firstLetter.toUpperCase();
};

let filteredNames = names.filter(isCapitalized);

console.log(filteredNames);
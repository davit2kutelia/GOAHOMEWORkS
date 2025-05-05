// const words = ["apple", "banana", "car", "sun", "television", "moon"];

// const longWords = words.filter(word => word.length > 5);

// console.log(longWords);


let numbers = [1,5,2,6,8,3,6,7]

const evenWithLabel = numbers
  .filter(num => num % 2 === 0)
  .map(num => num + " EVEN");

console.log(evenWithLabel);
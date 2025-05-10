const numbers = [12, 7, 22, 15, 9, 18, 3, 27];

function filterEven(numbers) {
    let evenNumbers = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

function filterOdd(numbers) {
    let oddNumbers = [];
    for (let number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }
    }
    return oddNumbers;
}

console.log("Even Numbers:", filterEven(numbers));
console.log("Odd Numbers:", filterOdd(numbers));
const numbers = [3, 2, 1];
const newFirstNumber = 4;

const complete = [newFirstNumber].concat(numbers); 
console.log(complete); // => [4, 3, 2, 1]

const reverse = numbers.concat(newFirstNumber);
console.log(reverse); // => [3, 2, 1, 4]

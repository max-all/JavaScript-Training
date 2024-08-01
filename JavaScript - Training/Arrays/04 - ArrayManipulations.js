let number = [1, 2, 3, 4, 5];

number.push(6);
console.log(number); // [1, 2, 3, 4, 5, 6]

number.pop();
console.log(number); // [1, 2, 3, 4, 5]

number.unshift(0);
console.log(number); // [0, 1, 2, 3, 4, 5]

number.shift();
console.log(number); // [1, 2, 3, 4, 5]
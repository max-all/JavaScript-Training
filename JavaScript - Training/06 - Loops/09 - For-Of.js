const fruits = ["apple", "orange", "banana"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Print: apple
//        orange
//        banana

/// Iterating over Arrays
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of numbers) {
  sum += number;
}
console.log(`The sum is: ${sum}`); // Prints: The sum is: 15

/// Iterating over Strings
const message = "Hello, How are you?";
let result = "";

for (let char of message) {
  result += `${char}-`;
}
console.log(result); // H-e-l-l-o-,- -H-o-w- -a-r-e- -y-o-u-?-

/// Iteration over Map
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// Prints: name: Alice
//         age: 25

/// Iteration over Set
const set = new Set([1, 2, 3, 4, 5]);

for (let value of set) {
  console.log(value);
  // Prints: 1
  //         2
  //         3
  //         4
  //         5
}

/// Iterating over Objects with Object.keys
const user = {
  name: "Alice",
  age: 25,
  city: "New York"
};

for (let key of Object.keys(user)) {
  console.log(key);
}
// Prints: name
//         age
//         city

for (let value of Object.values(user)) {
  console.log(value);
}
// Prints: Alice
//         25
//         New York

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// Prints: name: Alice
//         age: 25
//         city: New York


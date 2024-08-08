// With two arguments
const sum = (param1, param2) => {
    return param1 + param2;
}
console.log(sum(2, 5)); // => 7

// With no arguments
const printHello = () => {
    console.log("Hello, how are you?");
}
printHello(); // => Hello, how are you?

// With a single argument
const checkWeight = (weight) => {
     console.log(`Weight : ${weight}`);
}
checkWeight(25); // => Weight : 25

//Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 5)); // => 10
let plusFive = (number) => {
    return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;
  
plusFive(3); // 8
// Since f has a function value, it can be invoked.
f(9); // 14
  
let numbers = [1, 2, 3, 4, 5];
let incrementedNumbers = numbers.map(plusFive);
console.log(incrementedNumbers); // [6, 7, 8, 9, 10]
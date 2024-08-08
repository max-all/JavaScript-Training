// with return
function sumOne(num1, num2) {
    return num1 + num2;
}
const ReturnOne = sumOne(2, 2);
console.log(ReturnOne); // => 4

// the function doesn't output the sum
function sumTwo(num1, num2) {
    num1 + num2;
}
const ReturnTwo = sumTwo(2, 2);
console.log(ReturnTwo); // => undefined
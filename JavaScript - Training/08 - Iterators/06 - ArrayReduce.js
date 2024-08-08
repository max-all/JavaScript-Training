const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, curVal) => {
    return accumulator + curVal;
});

console.log(sum); // 10
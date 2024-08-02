const fruits = ["apple", "orange", "banana", "grape"];

for(let i = fruits.length - 1; i >= 0; i--) {
    console.log(`${i}. ${fruits[i]}`); // 3. grape, 2. banana, 1. orange, 0. apple
}
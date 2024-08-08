for (i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`The number is ${i} <br>`); 
    // print: The number is 0 <br>
    //        The number is 1 <br>
    //        The number is 2 <br>
    //        The number is 4 <br>
    //        The number is 5 <br>
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { 
        continue; // If it is odd, skip to the next iteration
    }
    console.log(`Even number: ${numbers[i]}`);
    // print: Even number: 2
    //        Even number: 4
    //        Even number: 6
    //        Even number: 8
    //        Even number: 10
}
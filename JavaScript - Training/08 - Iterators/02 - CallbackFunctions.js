const isEven = (n) => {
    return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`${num} is an even number: ${isNumEven}.`);
};

// Pass in isEven as the callback function
printMsg(isEven, 4);
// => The number 4 is an even number: Thue.


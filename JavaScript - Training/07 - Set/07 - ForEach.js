const setObj = new Set([1, true, "Max"]);

setObj.forEach(function (value) {
    console.log(value); // 1, true, Max
});

const mySet = new Set();

mySet.add(40);
mySet.add(10);
mySet.add(20);
mySet.add(30);

mySet.forEach((value) => {
    console.log(`Value: ${value}`); // 40, 10, 20, 30 
});
const fruits = ["apple", "orange", "banana"];
for (let index in fruits) {
    console.log(index);
    // Print: 0
    //        1
    //        2
};

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key); 
    // Print: name
    //        age
    //        city
    console.log(person[key]); 
    // Print: Alice
    //        30
    //        New York
}

const inventory = {
    apples: 10,
    oranges: 5,
    bananas: 8
};

for (let item in inventory) {
    console.log(`We have ${inventory[item]} ${item}`);
    // Print:  We have 10 apples
    //         We have  5 oranges
    //         We have  8 bananas             
}
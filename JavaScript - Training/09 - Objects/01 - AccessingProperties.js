const apple = {
    color: "Green",
    price: {bulk: "$3/kg", smallQty: "$4/kg"},
    inventory: 4,
};
console.log(apple.color); // => Green
console.log(apple.price.bulk); // => $3/kg
console.log(apple.price.smallQty); // => $4/kg
console.log(`Inventory: ${apple.inventory}`); // 4
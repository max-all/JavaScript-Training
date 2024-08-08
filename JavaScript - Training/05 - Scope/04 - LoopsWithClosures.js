// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
    setTimeout(_ => console.log(i), 10);
}
  
// Prints 0, 1 and 2, as expected.
for (let ii = 0; ii < 3; ii++) {
    setTimeout(_ => console.log(ii), 10);
}
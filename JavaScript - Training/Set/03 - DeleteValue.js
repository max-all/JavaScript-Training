const emptySet = new Set([1, true, "Max"]);

// delete values
emptySet.delete("Max");
emptySet.delete(true);
emptySet.delete(1);

console.log(emptySet); // {}
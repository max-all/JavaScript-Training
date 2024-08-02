const setObj = new Set ([1, true, "Max"]);

// return true or false 
setObj.has("Max"); // True 
setObj.has(1); // True
setObj.has(true); // True

setObj.has("Patricia"); // False
setObj.has(2); // False
setObj.has(false); // False

const setObjTwo = new Set ([5, false, "Patricia"]);

setObjTwo.has(5); // True
setObjTwo.has(false); // True
setObjTwo.has("Patricia") // True
setObjTwo.has("Max") // False
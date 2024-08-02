x = 0;
i = 0;
do {
    x += 1;
    console.log(x);
    i++;
} while (i < 5); 
// Print: 1, 2, 3, 4, 5

let initialConfig = false;
do {
    // Perform some initialization tasks
    console.log("Initializing..."); // Print: Initializing
    initialConfig = true; // Assume initialization is successful
} while (!initialConfig);
console.log("Initialization complete."); 
// Print: Initialization complete.

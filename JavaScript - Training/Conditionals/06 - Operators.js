// Logical Operator Or
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false

// Logical Operator and
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true

// Comparison Operators
1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === "1"; // false

// Logical Operator !
let True = true; 
let False = !True; // => false

// Logical Operator ??
null ?? "I win"; //  'I win'
undefined ?? "Me too"; //  'Me too'
false ?? "I lose"; //  false
0 ?? "I lose again"; //  0
"" ?? "Damn it"; //  ''
1 ?? "I win again"; // 1

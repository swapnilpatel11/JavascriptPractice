console.log("Hello World!");

// let and const are ES6 features

let a = 10;
console.log(a);
console.log(typeof a);

let b = 20;
b = "Swapnil";
console.log(b);

let c = a + b;
console.log(c);

var d = "Swapnil";
// we cannot redeclare let variable but we can redeclare var variable
var d = 20;
console.log(d);

d = 30;
console.log(d);

// boolean
let e = true;
console.log(e);
console.log(typeof e);
console.log(!e);  // not operator on boolean variable

const f = 30;  // const variable cannot be redeclared or reassigned
'use strict';

const fs = require('fs');

console.log("ex1 -----------------------");
let ex1 = JSON.parse(fs.readFileSync('ex1.json'));
console.log(ex1);
// { a: 123 }
console.log(ex1.a);
// 123

console.log("ex2 -----------------------");
let ex2 = JSON.parse(fs.readFileSync('ex2.json'));
console.log(ex2);
// { b: [123, 456] }
console.log(ex2.b);
// [123, 456]
console.log(ex2.b[0]);
// 123
console.log(ex2.b[1]);
// 456

console.log("ex3 -----------------------");
let ex3 = JSON.parse(fs.readFileSync('ex3.json'));

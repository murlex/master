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
console.log(ex3);
// { yana: 5, tema: 6 }
console.log(ex3.yana);
// 5
console.log(ex3.tema);
// 6

console.log ("ex4 ----------------------");
let ex4 = JSON.parse(fs.readFileSync('ex4.json'));
console.log(ex4);
// { aaa: bbb, ccc: true, ddd; 987 }
console.log(ex4.aaa);
// bbb 
console.log(ex4.ccc);
// true
console.log(ex4.ddd);
// 987

console.log ("ex5 ----------------------");
let ex5 = JSON.parse(fs.readFileSync('ex5.json'));
console.log{ex5};
// { a : {b : c} }
console.log(ex5.a);
// { b : c }

console.log ("ex6 ------------------------");
let ex6 = JSON.parse(fs.readFileSync('ex6.json'));
console.log(ex6);
// { a : [ a. b. c ] }
console.log(ex6.a);
// [ a, b, c]
console.log(ex6.a[0]);
// a
consolele.log(ex6.a[1]);
// b
console.log(ex6.a[2]);
// c

console.log ("ex7 ------------------------");
let ex7 = JSON.parse(fs.readFileSync('ex7.json'));
console.log(ex7);
// { a : [ { rrr : 1, zzz : ooo }, { mmm : uuu123, hfhf : true, p1p2p3p4 : 09876 } ],
// b : [ { q1 : queue, count : 1 }, { q1 : shmueue, count : 3 } ] }
console.log(ex7.a);
// [ { rrr : 1, zzz : ooo }, { mmm : uuu123, hfhf : true, p1p2p3p4 : 09876 } ]
console.log(ex7.a[0]);
// { 1, zzz : ooo }
console.log(ex7.a[1]);
// { uuu123, hfhf : true, p1p2p3p4 : 09876 } 
console.log(ex7.b);
// [ { q1 : queue, count : 1 }, { q1 : shmueue, count : 3 } ] }
console.log(ex7.b[0]);
// { q1 : queue, count : 1 }
console.log(ex7.b[1]);
// { q1 : shmueue, count : 3 } ] }


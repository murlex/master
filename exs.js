'use strict';

const fs = require('fs');
const { join } = require('node:path/win32');

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
console.log(ex5);
// { a : {b : c} }
console.log(ex5.a);
// { b : c }
console.log(ex5.b);
// c

console.log ("ex6 ------------------------");
let ex6 = JSON.parse(fs.readFileSync('ex6.json'));
console.log(ex6);
// { a : [ a. b. c ] }
console.log(ex6.a);
// [ a, b, c]
console.log(ex6.a[0]);
// a
console.log(ex6.a[1]);
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
// { rrr : 1, zzz : ooo }
console.log(ex7.a[1]);
// {mmm: uuu123, hfhf : true, p1p2p3p4 : 09876 } 
console.log(ex7.b);
// [ { q1 : queue, count : 1 }, { q1 : shmueue, count : 3 } ] }
console.log(ex7.b[0]);
// { q1 : queue, count : 1 }
console.log(ex7.b[1]);
// { q1 : shmueue, count : 3 } 
console.log(ex7.a[0].rrr);
// 1
console.log(ex7.a[0].zzz);
// ooo
console.log(ex7.a[1].mmm);
// uuu123
console.log(ex7.a[1].hfhf);
// true
console.log(ex7.a[1].p1p2p3p4)
// 09876
console.log(ex7.b[0].q1)
// queue
console.log(ex7.b[0].count)
// 1
console.log(ex7.b[1].q1)
// shmueue
console.log(ex7.b[1].count)
// 3

console.log("ex8 - 1-----------------------------");
let ex8 = JSON.parse(fs.readFileSync('ex8.json'));
console.log(ex8.data[3].event);
// YELLOW_CARD
console.log(ex8.data[3].player_name);
// Rafael Toloi
console.log(ex8.data[3].minute);
// 38

//console.log("ex8 - 2 ----------------------------");
//console.log(ex8.data[7].team);
// 1
//console.log("ex9 -----------------------------");
let ex9 = JSON.parse(fs.readFileSync('ex9.json'));
//console.log("ex9-b -----------------------------");
//console.log(ex9[1]);
//console.log("ex9-c -----------------------------");
//console.log(ex9[2].patientGospitalization.length);
///console.log("ex9-d -----------------------------");
//console.log(ex9[2].patientGospitalization[0].nameDrug);
//console.log(ex9[2].patientGospitalization[1].nameDrug);
//console.log(ex9[2].patientGospitalization[2].nameDrug);
//console.log("ex9-i -----------------------------");
//for (let i = 0; i < ex9[2].patientGospitalization.length; i ++)
//{console.log(ex9[2].patientGospitalization[i].nameDrug)};
console.log("ex9-i-1 -----------------------------");
console.log(ex9[2].patientGospitalization[1].nameDrug);
console.log("ex9-i-2 -----------------------------");
for (let i = 0; i < ex9[2].patientGospitalization.length; i ++); {
    for (let j = 0; j < ex9[2].patientGospitalization[i].nameDrug.length; j ++); {
    {console.log(ex9[2].patientGospitalization[i].nameDrug[j])};
    }
}
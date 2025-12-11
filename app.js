var a; // initilize
a = 55; //declare

a = 22; // redeclare

console.log(a);

const b = 44; // initlize + declare
//b = 55; // redlacre * error
// a = 10 + a;

var a = 55;

console.log(a + 10);

// ----------------------------------------------------
//Data types -> primitive ->imutable -> non primitive -> mutible

// Primitive Data types
// string => "---"
// boolean => true / false
// number => 3.5555, 7, -96
// null
// undefined

// non primitive---------------
// Array
// Object
// function

// Prompt

// let content = prompt("enter your name");
// const remaining = content.slice(1);
// const firstLetter = "S";

// console.log(firstLetter + remaining, content);

// Numbers

const d = NaN;
const c = "10";

console.log(Math.random());

// opertors

console.log(console, "p");

//truthy and falsy
// 0 NaN undefined null "empty string" false

if (10 === 10 || (5 < 4 && 10 === 5)) {
  console.log(true);
} else {
  console.log(false);
}

// const onlyNumber = parseInt(prompt("Enter only a number"));
// console.log(onlyNumber);

// //

// if (onlyNumber + 1) {

// } else {

// }

const p = prompt("enter something");

// const ckeck = typeof p;

if (p - 10) {
  console.log(p - 10);
} else {
  console.log("super");
}

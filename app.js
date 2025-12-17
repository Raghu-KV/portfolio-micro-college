// var a; // initilize
// a = 55; //declare

// a = 22; // redeclare

// console.log(a);

// const b = 44; // initlize + declare
// //b = 55; // redlacre * error
// // a = 10 + a;

// var a = 55;

// console.log(a + 10);

// // ----------------------------------------------------
// //Data types -> primitive ->imutable -> non primitive -> mutible

// // Primitive Data types
// // string => "---"
// // boolean => true / false
// // number => 3.5555, 7, -96
// // null
// // undefined

// // non primitive---------------
// // Array
// // Object
// // function

// // Prompt

// // let content = prompt("enter your name");
// // const remaining = content.slice(1);
// // const firstLetter = "S";

// // console.log(firstLetter + remaining, content);

// // Numbers

// const d = NaN;
// const c = "10";

// console.log(Math.random());

// // opertors

// console.log(console, "p");

// //truthy and falsy
// // 0 NaN undefined null "empty string" false

// if (10 === 10 || (5 < 4 && 10 === 5)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // const onlyNumber = parseInt(prompt("Enter only a number"));
// // console.log(onlyNumber);

// // //

// // if (onlyNumber + 1) {

// // } else {

// // }

// // const p = prompt("enter something");

// // const ckeck = typeof p;

// // if (p - 10) {
// //   console.log(p - 10);
// // } else {
// //   console.log("super");
// // }

// // 12-12
// // let fruts = 10;

// // console.log(fruts, fruts);

// // ARRAY
// // const arr = [10, 20];

// // const another = arr;

// // // .slice .splice .pop .push shift unshift sort
// // arr[0] = 50;
// // another[1] = 0;

// // console.log(arr);

// // LOOPS

// // aray -> [odd , even],[1,2,3] -> ["odd", even]
// // let fruit;

// // for (let i = 8; i < 10; i++) {
// //   console.log("inside loop" + i);
// // }

// // for (let i = 0; i < 10; i++) {
// //   console.log("inside loop" + i);
// // }

// // let i = 0;

// // while (i < 10) {
// //   console.log(i, "11");
// //   i++;
// // }

// // let pass = prompt("enter pass");

// // while (pass !== "qwerty") {
// //   pass = prompt("enter pass");
// // }

// // for (let i = 0; i < 2; i++) {
// //   if (pass === "qwerty") {
// //     console.log("correct");
// //   }
// //   pass = prompt("enter pass");
// // }

// // large number

// // const arrv2 = [20, 24, 781, 56];

// // let largest = arrv2[0]; //781

// // for (let i = 1; i < arrv2.length; i++) {
// //   if (arrv2[i] > largest) {
// //     largest = arrv2[i];
// //   }
// // }

// // console.log(largest);

// // // objects
// // const obj = { fruit: "apple", isHealthy: true, quty: "10kg" };

// // for (let i in obj) {
// //   console.log(i);
// // }

// // const practice = [];
// // console.log(obj);

// const cars = [
//   { fruit: "apple", isHealthy: true, quty: "20kg" },
//   { fruit: "grape", isHealthy: true, quty: "10kg" },
//   { fruit: "orange", isHealthy: true, quty: "80kg" },
// ];

// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i].quty);
// // }

// //object-->
// const obj = { name: "raghu", isGood: true, name: "yyyyy" }; //
// // obj.test = 100;
// // obj.name = 100;

// // console.log(obj);
// //acccess
// // // 100 "raghu" , Error ,true ,false ,null

// //

// // [10,10,2,1,3]

// //function
// const practice = add(10, 10);
// //defineing the function

// // calling the function

// console.log(practice);

// // arrow function

// // const addv2 = (a, b, c) => a + b + c;
// // const newVar = addv2(1, 1, 1);

// function add(a, b) {
//   return a + b;
// }

// //----------------------------------------

// const sqroot = (one, w, e) => {
//   const t = one(w, e);
//   return t ** 2;
// };

// console.log(sqroot(add, 1, 1));
// //-----------------------------------------

// // const free = () => console.log("fine");

// // higher order methods

// const arr = [10, 20, 30, 40];
// const arr1 = arr;

// const newArr = arr.map((item) => item);

// const filter = arr.filter((i) => i < 20);

// console.log(arr, newArr, filter);

//filter,reduce,shallowcopy deepcopy,  call back hell -> promise

// ASYNC-----------------

// function task1(func) {
//   setTimeout(() => {
//     console.log("get product");
//     func();
//   }, 1000);
// }

// function task2(func) {
//   setTimeout(() => {
//     console.log("Task Two completed");
//     func();
//   });
// }

// function task3(func) {
//   setTimeout(() => {
//     console.log("Task three completed");
//     func();
//   });
// }

// // task1(function () {
// //   task2(function () {
// //     console.log("Both tasks completed");
// //   });
// // });

// task1(() => task2(() => task3(() => console.log("done"))));

// promise

// const backendCall = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const status = false;
//     if (status) {
//       resolve("data recived");
//     } else {
//       reject("data error");
//     }
//   }, 1000);
// });

// backendCall
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// fetch("https://dummyjson.com/productsff")
//   .then((t) => t.json())
//   .then((rr) => console.log(rr))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("ok!"));

// const APICall = async () => {

// };

// async function APICall() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     console.log(response);
//     // const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("lll");
//   }
// }

// APICall();

// dom manuplation

const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", () => {
  const nameTitle = document.querySelector("#name");

  console.log(nameTitle.innerText, "pp");

  if (nameTitle.innerText === "Raghu Nandan") {
    nameTitle.innerText = "60900";
  } else {
    nameTitle.innerText = "Raghu Nandan";
  }

  nameTitle.classList.toggle("red");
});

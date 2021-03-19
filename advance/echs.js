// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = "Hafid";

// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// disebut dengan hoisting

// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = "Hafid";

// function sayHello() {
//   return `Halo, nama saya ${nama}`;
// }

// function membuat Local Execution Context
// yang di dilamnya terdapat creation dan execution
// window
// arguments
// hoisting

function satu() {
  var nama = "hafid";
  console.log(nama);
}

function dua() {
  console.log(arguments[0]);
  console.log(nama);
}

console.log(nama);
var nama = "Ardi";
satu();
dua("Ardi");
console.log(nama);

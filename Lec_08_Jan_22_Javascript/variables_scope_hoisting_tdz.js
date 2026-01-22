//VARIABLES NAMING NOT ALLOWED
let asdf-sdf 
let 9asfd // cant start with digit
let return  // cant use reserved keywords

// VAR, LET & CONST
var x = 10;
var x = 20; // allowed
x = 30;     // allowed

let y = 10;
// let y = 20; Error
y = 20;     // allowed

const z = 10;
// z = 20; Error

const obj = { name: "Ali" };
obj.name = "Ahmed"; // allowed: Objects declared with const can be modified

//SCOPE
// var: functional scope
// let, const: block scope
function fn(){
  if(true){
    var a=5 
    let b=5
  }
  // console.log(a)
  console.log(b)
}
fn()

// HOISTING
// VAR HOSTED
console.log(a); // undefined
var a = 10;
// JS internally does:
var a;
console.log(a);
a = 10;

//LET & CONST HOSTING
// They are hoisted but not initialized.
console.log(b); // ReferenceError
let b = 20;

// Temporal Dead Zone (TDZ)
// time between hoisting and initialization where let and const cannot be accessed.

// INTERVIEW 
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);  //  444 , if let => 123
  }, 1000);
}
// without using LET 
// IIFE creates a new scope
// Each timeout gets its own copy of i
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  })(i);
}

// What will be the output?
var a = 10;
function test() {
  var a = 20;
  console.log(a);
}
test();
console.log(a);

// What will be the output?
const x = 100;
function outer() {
  const x = 200;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();

// What will be the output?
let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);

// == VS ===



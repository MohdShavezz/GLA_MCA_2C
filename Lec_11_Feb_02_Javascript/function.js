// function function_name() { // fn define 
//   console.log('hello world')
//   return 10
// }
// let a=function_name()
// console.log(a) //fn calling

// // function declaration vs function expression 

// let a=function(){ // fn declaration, expression
// }

// function sum(a,b){ // params
//   return a+b
// }
// console.log(sum(1,2)) //arguments

// anonyms fn
// let a=function(){ 
//   console.log('this is anonyms fn')
// }
// a()

// arrow fn
// let a=()=>{ 
//   console.log('this is anonyms fn')
// }
// a()

//callback
// function fn1(cb){
// console.log('this is fn1') 
// cb()
// }
// function fn2(){
// console.log('this is fn2') 
// }
// // fn1(fn2)
// fn1(()=>{
//   console.log('this is arrow fn')
// })

//higer order function
// function fn1(){
//   return function(){}
// }
// fn1(fn2)


//closure
// function fn1(){
//   let a=5 //lexical scope
//   return function(){
//     console.log(a)
//     a++
//   }
// }
// let a=fn1()
// a()
// a()
// a()

//IIFE 
// (
//   function(){
//     console.log('hi')
//   }
// )()

//currying
// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// console.log(sum(1)(2)(3))


//execution of js debugging
let r=10
function fn1(){
  let a=1
  console.log('this is fn',a)
  fn2()
}
function fn2(){
  let a=2
  console.log('this is fn',a)
  fn3()
}
function fn3(){
  let a=3
  console.log('this is fn',a)
}

fn1()
console.log(r)

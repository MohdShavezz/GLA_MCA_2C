// conditional

// for (let i = 0; i < 10; i++) {
//   // if(i%2==0){
//   //   console.log(i,'even')
//   // }else{
//   //   console.log(i,'odd')
//   // }
//   if(i==5) break //continue
//   console.log(i)
  
// }

// calculator

// let ope="-"
// let a=5,b=10
// if(ope=='+'){
//   console.log(a+b)
// }else if(ope=='-'){
//   console.log(b-a)
// }else if(ope=="*"){
//   console.log(a*b)
// }

//using switch

// let ope="/"
// let a=5,b=10
// switch (ope) {
//   case '+':
//     // code
//     console.log(a+b)
//     break;
//   case '-':
//     console.log(b-a)
//     break;
//   case '*':
//     console.log(a*b)
//     break;
  
//   default:
//     console.log('invalid operation')
// }


//truthy : true, 'string',[],'0'
//falsy :false, 0, -0, "",null,'undefined'

// if('true'){
//   console.log('truthy value')
// }else{
//   console.log('falsy value')
// }

//ternary operator

// condition?true_exec:false_exec
// let cond=true
// cond?console.log('this gets true'):console.log('this gets false')


let arr=[undefined,null] 
//if null or undefined then Empty_Value
// for (i of arr) {
//   // if(i==null||i==undefined){ //nullish operator
//   // console.log('Empty_Value')
//   // }else{
//   //   console.log(i)
//   // }
//   i??console.log('Empty_Value')
// }

// if(true){
//   // execute
// }
// true&&execute

// a=1 b=0 

let a=1 
let b=1
let c=1
let d=0
console.log( (a||b) || (c||d) )
console.log( (a||b) && (c||d) )
console.log( (a&&b) || (c&&d) )
console.log( (a&&b) && (c&&d) )

// a&&b&&c&&console.log('all true')
// false&&console.log


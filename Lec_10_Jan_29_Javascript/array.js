// Stores multiple data in single variable
// in contiguous memory location
// eg: let arr = ["apple",123,true]
// Array has  indexing [ 0,1,2,3.....  ] to get the data
// eg: [ "apple",123, true, 1.2, 'banana']  // loosely type lang ( store mutiple data types values)
// let arr = [ 1, "john", true] // looselytype
console.log(arr[0]) // first element
console.log(arr[arr.length-1]) // first element
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
arr.push('newEle') // insert at last
arr.unshift('startEle')  // inset at beginnning
arr.pop() // remove last ele
arr.shift() // remove first aray ele


// let arr=[1,2,3,4]
// // let arr2=arr //copy ref 
// let arr2=[...arr] //let arr2= 1,2,3
// arr2[0]=8
// console.log(arr,arr2)


// let arr=[1,2,3,3,4,4] //[1,2,3,4]
// dummy= 1,2,3,4
// return dummy
// let dummy=[]
// for (let ele of arr) {
//   if(!dummy.includes(ele)){
//     dummy.push(ele)
//   }
// }
// console.log(dummy)

// let s=new Set(arr)
// let newArr=Array.from(s)
// console.log(newArr)
// console.log([...newArr])

// FIND, EVERY VS SOME

// arr=[1,2,3,4]
// let r=arr.find((ele)=>{
//   return ele>1
// })
// r=arr.find(ele=> ele>1)

//EVERY ele greater that 0
// console.log(arr.every((ele)=>ele>0))
// //EVERY ele greater that 1
// console.log(arr.every((ele)=>ele>1))
// //SOME ele greater that 3
// console.log(arr.some(ele=>ele>3))
// console.log(arr.some(ele=>ele<1))


let numArr=[1,2,3,4]
// console.log(Math.max(...numArr))
// console.log(Math.min(...numArr))

// console.log(Math.ceil(3.6))
// console.log(Math.floor(3.6))
// console.log(Math.round(3.7))
// console.log(Math.round(3.3))
// console.log(Math.pow(2,3))
// let r = Math.random()*10
// console.log(r.toFixed(2))

// let str = '4321s43fJ' 
// console.log(parseInt(str))
// console.log(isNaN(11))

//HOMEWORK
let str = '4321s43fJ' //1+2+3+4=10 


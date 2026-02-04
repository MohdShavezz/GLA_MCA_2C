// es6 

// let , const 
// arrow function 
// template literals 
// paramaterised function

function sum(a,b,c=3) { // default params
  console.log(a+b+c)
}

sum(1,2,3)

// spread operator vs rest parameter
function sum(...r) { // default params
  console.log(r)
  console.log(arguments)
  console.log(Array.from(arguments))
}
sum(1,2,3)

// class 
class Person{
  name
  constructor(name){
    this.name=name
  }
  greet(){
    console.log(`Hello ${this.name}`)
  }
}
let obj=new Person('Tom')
obj.greet()

//for of , for in 
// Set vs Map 
// new Set([1,2,2,3])

let mp=new Map()
mp.set(1,'one')
mp.set('two',2)
console.log(mp.get(1))
mp.clear()
console.log(mp.size)

//map filter reduce 
let arr=[1,2,3,4,5]  // 20
//sum of squared of evens 
// let sum=0
// for (let i = 1; i < arr.length; i+=2) {
//   sum+=arr[i]*arr[i]
// }
// console.log(sum)

// map, filter ,reduce
// let even=arr.filter(val=>val%2==0)
// console.log(even)
// let sqrs=even.map(val=>val*val)
// console.log(sqrs)
// let ans=sqrs.reduce((acc,val)=>{
//   return acc+val
// },0)
// console.log(ans)

let ans=arr.filter(val=>val%2==0).map(val=>val*val)
.reduce((acc,val)=> acc+val,0)
console.log(ans)


// let arr=[1,2,2,3,3,4]
//output
// {
//   1:1,
//   2:2,
//   3:2,
//   4:1
// }
let a=arr.reduce((acc,val)=>{
  acc[val]=(acc[val]||0) + 1
  return acc
},{})
console.log(a)









// setTimeout(function() {
//   console.log('order')
//   setTimeout(function() {
//   console.log('deliver')
//   setTimeout(function() {
//   console.log('process')
// }, 2000);
// }, 1000);
// }, 3000);

//callback back hell, pyramid or doom
// function order(deliverCB){
//   console.log('order')
//   deliverCB(process)
// }
// function deliver(processCB){
//   console.log('deliver')
//   processCB()
// }
// function process(){
//   console.log('process')
// }
// order(deliver)

//promise
// promise:object , state: pending, resolve, reject

let order=new Promise((res,rej)=>setTimeout(()=>res('order resolve.'), 1000))
let process=new Promise((res,rej)=>setTimeout(()=>res('process resolve.'), 2000))
let deliver=new Promise((res,rej)=>setTimeout(()=>res('deliver resolve.'), 3000))

// then.catch
// order
// .then((data)=>console.log('then:',data)) //res
// .catch((error)=>console.log('catch',error)) //rej

// order.then(data=>{
//   console.log('order',data)
//   return process
// }).then(data=>{
//   console.log('process',data)
//   return deliver
// }).then(data=>{
//   console.log('deliver',data)
// }).catch(err=>console.log(err))
// .finally(()=>console.log('finally'))

// async await

async function fn(){
try {
   let resOrder=await order
console.log(resOrder)
let resProcess=await process
console.log(resProcess)
let resDeliver=await deliver
console.log(resDeliver)
} catch (e) {
  console.log('error:',e)
}finally{
  console.log('finally')
}
}
fn()
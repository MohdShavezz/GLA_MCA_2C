let userDetails={
  // isActive:true,
  firstname:"John",
  lastname:"doe",
  hobbies:["cricket","football","hockey"],
  contact:{
    phone:{
      phoneNumber:"998989898",
      countryCode:"+91"
    }
  },
  // greet(){
  //   console.log(`hello ${this.firstname} ${this.lastname}`)
  // }
}

//freeze vs seal 
let frzObj=Object.freeze(userDetails)
frzObj.firstname='newname'
// frzObj.isActive=true
console.log(frzObj)
// console.log(Object.isFrozen(userDetails))

// function greet(grt){
//     console.log(`${grt} ${this.firstname} ${this.lastname}`)
// }
// //call , apply , bind
// greet.call(userDetails,'hello')
// greet.apply(userDetails,['hello'])
// let a=greet.bind(userDetails,['hello']) //return function
// a()

// this keyword
// userDetails.greet()

// Modify object
// let user2= {...userDetails,isActive:true}
// let u=Object.assign(userDetails,{newProp:'ye'})
// console.log(u)
// delete userDetails.firstname

// let userDetails2={...userDetails}

// let userDetails2=JSON.parse(JSON.stringify(userDetails))
// userDetails2.firstname='change'
// userDetails2.contact.phone.phoneNumber='phoneChage'
// console.log(userDetails,userDetails2)

let arr=[1,2,2,3,4,4,5] //accurance of elements
// {
// 1:1 
// 2:2
// 3:1
// 4:2
// 5:1
// }
let obj={}
for(let i of arr){
  if(!obj.hasOwnProperty(i)){
    obj[i]=1
  }else{
    obj[i]+=1
  }
}
console.log(obj)
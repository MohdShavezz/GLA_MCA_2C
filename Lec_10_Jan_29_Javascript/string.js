// strings
// let str='hello words' //immutable
// str[0]='m'
// console.log(str)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.includes("hee"))
// console.log(str.indexOf("l"))
// console.log(str.lastIndexOf("l"))
// console.log(str.slice(1,))
// console.log(str.slice(6,11))
// console.log(str.slice(-5,))

// slice (str) vs splice (arr)

// let arr=[1,2,3,4,5] // replace 2 with 9
// // splice(ind ,num of ele to delete, ele to insert)
// // arr.splice(1,1,9)
// arr.splice(2,0,[10,10])
// console.log(arr)

// let str='hello words'
// console.log(str.replace('l','m'))
// console.log(str.replaceAll('l','m'))
// console.log(str.match(/[aeiou]/gi)) // extract vowels from str
// let s=str.split(' ')
// console.log(s)
// s=s.reverse()
// console.log('rev:',s)
// console.log(s.join(' '))

// str='i am tom'
// str.split('').reverse().join('')


// let fname='john'
// let lname='doe' 
//john doe
// console.log(fname+ " " +lname)
// console.log(`${fname} ${lname} alksdjf ${2+5}`)
// console.log(fname.concat(' ','sadfds ',lname))

// str="hello" // Hello
// console.log(str[0].toUpperCase().concat(str.slice(1,)))

str ='maham'
str.split('').reverse().join('')===str?console.log('yes'):console.log('no')

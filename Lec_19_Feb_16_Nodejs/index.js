// import fs from 'fs'

// fs.readFile('file.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data); //<Buffer 74 68 69 73 20 69 73 20 74 65 78 74 20 66 69 6c 65>
//   console.log(data.toString())
// })

// fs.writeFile('file2.txt','my file2',(err)=>{
//     if (err) throw err;
//     console.log('written success!!')
// })
// fs.appendFile('file2.txt','append data',(err)=>{
//     if (err) throw err;
//     console.log('written success!!')
// })

import {EventEmitter} from 'events'
const myEvent=new EventEmitter()


// myEvent.on('greet',(data)=>{
//     console.log(data)
// })
// myEvent.emit('greet','hi there')

myEvent.on('Event3',(data)=>{
    console.log(data)
})

myEvent.on('Event2',(data)=>{
    console.log(data)
    //logic broadcast
    myEvent.emit('Event3','this is Event3 ')
})

myEvent.on('Event1',()=>{
    myEvent.emit('Event2',"This is event two")
})

myEvent.emit('Event1')


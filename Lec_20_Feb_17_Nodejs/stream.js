const fs = require('fs')

const readStream=fs.createReadStream('file.txt')
// const writeStream=fs.createWriteStream('file2.txt')
const writeStream=fs.createWriteStream('file2.txt',{
    flags:'a'
})

// readStream.on('data',(chunk)=>{
//     console.log(chunk)
//     console.log(chunk.toString())
// })
// readStream.on('error',(err)=>{
//     console.log('Error:',err)
// })
// readStream.on('end',()=>{
//     console.log('end run...')
// })

// writeStream.write('this is file2')

// writeStream.write('this is new data',()=>{
//     console.log('write success..')
// })

writeStream.write('append data',()=>{
    console.log('append success..')
})


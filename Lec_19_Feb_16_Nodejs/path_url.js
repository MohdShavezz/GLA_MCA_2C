import path from 'path'
import url from 'url'

let p='.dir/dir1/dir2/file.txt'
// console.log(path.basename(p))
// console.log(path.dirname(p))
// console.log(path.extname(p))


let __filename=url.fileURLToPath(import.meta.url)
console.log(__filename)
let __dirname=path.dirname(__filename)

console.log(__dirname)

console.log(path.join('path1','path2','file.txt'))
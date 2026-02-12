const fs=require('fs')
// Blocking

// const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
// console.log(data)
// console.log('Start');
// console.log('End');

// Non-blocking
// console.log('Start');
// fs.readFile('myfile.txt', 'utf8', (err, data) => {
// console.log(data)
//   if (err) throw err;
//   console.log('Non-blocking operation completed');
// });
// console.log('End');

console.log('1. Start');
process.nextTick(() => console.log('2. Next tick'));
Promise.resolve().then(() => console.log('3. Promise'));
setTimeout(() => console.log('4. Timeout'), 00);
setImmediate(() => console.log('5. Immediate'));
console.log('6. End');

// 1 6 2 3 4 5 
// for
for (let i = 1; i <= 5; i++) {
  console.log(i); // break, continue
}
// 1 2 3 4 5

// while 
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do-while 
let i = 6;
do {
  console.log(i);
} while (i <= 5);
// Output: 6

// for of 
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

// for in 
let user = { name: "Ali", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}

// forEach 
[1, 2, 3].forEach((item, index) => {
  console.log(index, item);
});

// map vs forEach HOMEWORK
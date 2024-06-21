// Massiv va obyektlarga oid masalalar.
// 1-masala

// function test(arg) {

//    for(let i = 0; i < arg.length; i++) {
//      console.log(arg[i].name, arg[i].age);
//    }

//     return ;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ]
// ));

// 2-masala
// function test(arg) {
//   let res;
//     res = arg[0].ball
//     arg.forEach(function(value) {
//         if(value.ball > res) {
//             res = value.ball
//         }
//     })

//   return res;
// }
// console.log(test([
//     { name: "alex",ball:80},
//     { name: "olga",ball:85},
//     { name: "stiwn",ball:88},
//     { name: "bob",ball:90},
//     { name: "mark",ball:76},
// ]));

// 3-masala
// function test(arg) {
//   let res;

//   res = arg.filter((value) => {
//     if (value.name[0] == "A") {
//       return value;
//     }
//   });

//   return res;
// }
// console.log(
//   test([
//     { name: "Alice", age: 20, score: 85, status: "active" },
//     { name: "Bob", age: 22, score: 92, status: "inactive" },
//     { name: "Andrew", age: 23, score: 88, status: "active" },
//   ])
// );

// 4-masala
// function test(arg) {
//   let summ = 0;
//   let count = 0;
//   let res;

//     for (const i of arg) {
//         summ = summ + i.score;
//         count++;
//     }

//     res = summ / count

//   return res;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ]
// ));

// 5-masala
// function test(arg) {
//   let res;
//     res = arg.find(value => {
//         return value.name == "John"
//     })

//   return res;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ]
// ));

// 6-masala
// function test(arg) {
//   let res;
//     res = arg.findIndex(value => {
//         return value.score > 85
//     })

//     return res;
//   }
// console.log(
//   test([
//     { name: "Alice", age: 20, score: 80, status: "active" },
//     { name: "Bob", age: 22, score: 92, status: "inactive" },
//     { name: "Charlie", age: 23, score: 85, status: "active" },
//   ])
// );

// 7-masala
// function test(arg) {
//   let res;

//   res = arg.filter(value => {
//     return value.status == "active"
//   });

//   return res;
// }
// console.log(
//   test([
//     { name: "Alice", age: 20, score: 85, status: "active" },
//     { name: "Bob", age: 22, score: 92, status: "inactive" },
//     { name: "Charlie", age: 23, score: 88, status: "active" },
//   ])
// );

// 8-masala
// function test(arg) {
//     let res;
//     res = arg.map(value => {
//         if(value.age > 18) {
//            return value.yosh = "18 yoshdan katta"
//         } else {
//            return value.yosh = "18 yoshdan katta emas"
//         }
//     })

//     return res;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' },
//     { name: 'Alex', age: 19, score: 90, status: 'inactive' }
//   ]
// ));

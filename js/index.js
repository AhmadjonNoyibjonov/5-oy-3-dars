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

// 9-masala
// function test(arg) {
//     let res;
//     res = arg.some(value => {
//         return value.score > 90
//     })

//     return res;
// }
// console.log(test([
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ]));

// 10-masala
// function test(arg1,arg2) {
//     let res;

//     res = arg1.concat(arg2)

//     return res;
// }
// console.log(test([
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ], [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ]
// ));

// 11-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Alice", age: 23, score: 88, status: "active" },
// ];

// let result = [];
// students.forEach(function (value, indexfor) {
//   let tekshir = students.find((el, indexfind) => {
//     return el.name == value.name && indexfind != indexfor;
//   });

//   if (!result) {
//     result.push(value);
//   }

//   console.log(tekshir);
// });
// console.log(result);

// 12-masala
// function test(arg) {
//   let res;

//   res = arg.map((value) => {
//     value.name = value.name.toUpperCase();
//     return value;
//   });

//   return res;
// }
// console.log(
//   test([
//     { name: "Alice", age: 20, score: 85, status: "active" },
//     { name: "Bob", age: 22, score: 92, status: "inactive" },
//   ])
// );

// 13-masala
// function test(arg) {
//   let res;

//   res = arg.map((value) => {
//     return value.score;
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

// 14-masala
// function test(arg) {
//     let res;

//     res = Object.keys(arg[0])

//     return res;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ]
// ));

// 15-masala
// let students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];
// let student = [{ name: "Charlie", age: 23, score: 88, status: "active" }];
// function test(arg1, arg2) {
//   let result = arg1.concat(arg2);

//   return result;
// }
// console.log(test(students, student));

// 16-masala
// function test(arg) {
//   let res;

//   res = arg.map(value => {
//     if(value.score > 90) {
//         delete value.name
//     }

//     return value
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

// 17-masala
// function test(arg) {
//   let res;

//     res = arg.map(value => {
//         if(value.age > 20) {
//             value.tekshir = "20 yoshdan katt"
//         } else {
//             value.tekshir = "20 yoshdan katta emas"
//         }

//         return value
//     })

//   return res;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ]
// ));

// 18-masala
// function test(arg) {
//   let res;
//   res = arg.map((value) => {
//     return value.status;
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

// 19-masala
// function test(arg1, arg2) {
//   let res;

//   res = arg1.map((value) => {
//     if (value.name == arg2.name) {
//       value = arg2;
//     }
//     return value;
//   });

//   return res;
// }
// console.log(
//   test(
//     [
//       { name: "Alice", age: 20, score: 85, status: "active" },
//       { name: "Bob", age: 22, score: 92, status: "inactive" },
//     ],
//     { name: "Alice", age: 21, score: 90, status: "active" }
//   )
// );

// 20-masala

// function test(arg) {
//   let res = arg[0];

//  arg.forEach(function(value) {
//     if(value.age < res.age) {
//         res = value
//     }
//  })

//   return res;
// }
// console.log(test( [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }

// ]));

// String metodlariga oid masalalar.
// 1-masala
// function substringStr(str) {
//     let res;
//     res = str.substring(0,5)

//     return res;
// }
// console.log(substringStr("Hello, world!"));

// 3-masala
// function test(str) {
//     let res;
//     res = str.split(" ")

//     for(let i = 0; i < res.length; i++) {
//        console.log(res[i]);
//     }

//     return ;
// }
// console.log(test("Hello world from JavaScript"));

// 4-masala
// function test(arg) {
//     let res;
//     res = arg.join(",")
//     return res;
// }
// console.log(test(["Hello", "world", "from", "JavaScript"]));

// 5-masala
// function test(str) {
//     let res;
//     res = str.replaceAll("a","@")

//     return res;
// }
// console.log(test("JavaScript"));

// 6-masala
// const test = (str) => {
//     let res;
//     res = str.trim()

//     return res;
// }
// console.log(test("   Hello, world!   "));

// 7-masala
// const test = function (str) {
//   let res;
//   res = str.charAt(7);

//   return res;
// };
// console.log(test("Hello, world!"));

// 8-masala
// function test(str) {
//     let res;
//     if(str.includes("salom")) {
//         res = "salom kichik so'zi bor"
//     } else {
//         res = "unday so'z yo'q"
//     }

//     return res;
// }
// console.log(test("salom bolalar"));

// 9-masala
// function test(str) {
//   let res;
//   if(str.startsWith("how")) {
//     res = "how kichik so'zi bilan boshlanadi"
//   } else {
//     res = "undan so'z bilan boshlanmaydi"
//   }

//   return res;
// }
// console.log(test("how old are you"));

// 10-masala
// function test(str) {
//   let res;
//   if (str.endsWith("you")) {
//     res = "you kichik so'zi bilan tugandi";
//   } else {
//     res = "undan so'z bilan tugamanydi";
//   }

//   return res;
// }
// console.log(test("how old are you"));

//Qo'shimcha masala
// 1-masala
// function summ(n) {
//     if(n == 0) {
//         return 0
//     }

//     return n + summ(n-1)
// }
// console.log(summ(9));

// 2-masala
// const factarial = (n) => {
//     if(n == 0){
//         return 1
//     }

//     return n * factarial(n-1)
// }
// console.log(factarial(10));

// 3-masala
// let car = {
//     name:"Spark",
//     year:"2017",
//     weight:"1500",
//     color:"white",
// }

// let test = Object.entries(car).flat()

// console.log(test);


// 4-masala
// let number = [2,4,6,7,9,12]

// let result = JSON.stringify(number)
// console.log(result);






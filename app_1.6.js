// LJ part 1 section 6

// const lessonSum = 91;
// let progressSum;
// let progressNow;

// progressNow = 18+6+8+12+1;
// progressSum = ((progressNow/lessonSum)*100).toFixed(2);
// alert(`Поздравляю, ты прошла ${progressSum}% первой части курса!`);


// lesson1 - recursion

// task1 


// variant1 - for

// function sumTo(n) {
//   let sum = n;
//   for (let i = n - 1; i > 0; i--) {
//     sum = sum + i;
//   }
//   return sum;
// }

// alert (sumTo(100));


// variant2 - recursion

// function sumTo(n) {
//    if (n === 1) {
//     return n;
//    } else {
//     return n + sumTo(n - 1);
//    }

//   }


// function sumTo(n) {
//    return (n === 1) ? n : n + sumTo(n - 1);
// }
  
// alert (sumTo(100));


// variant3 - arifmeticks

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

// alert( sumTo(100) );


// task2

// function factorial(n) {
//   return (n === 1) ? n : n * factorial (n - 1);
// }

// alert( factorial(5) ); // 120


// task3


// function fib(n) {
//   if (n <= 1) {
//     return n
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }


// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }


// alert(fib(3)); // 2
// // alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757


// task4


// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };


// // function printList(list) {
// //   let tmp = list;
  
// //   while (tmp) {
// //     alert(tmp.value);
// //     tmp = tmp.next;
// //   }
// // }

// function printList(list) {
//   alert (list.value);

//   if (list.next) {
//     printList(list.next);
//   }
// }



// printList(list);


// task5

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printReverseList(list) {

//   if (list.next) {
//     printReverseList(list.next);
//   }

//   alert(list.value);
// }

// printReverseList(list);


// lesson2 - Residual parameters


// lesson3 - closure

// ex1
// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?


// ex2

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // в консоли: напишите alert(value); Такой переменной нет!
//   }

//   return g;
// }

// let g = f();
// g();


// let value = "Сюрприз!";

// function f() {
//   let value = "ближайшее значение";

//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!
//   }

//   return g;
// }

// let g = f();
// g();



// task4


// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// alert(sum(1)(2));
// alert(sum(5)(-1));


// task5


// function inBetween(a, b) {
//     return function(x) {
//       return x >= a && x <= b;
//     }
// }

// function inArray(arr2) {
//   return function(x) {
//       return arr2.includes(x);
    
//   }
// }



// let arr = [1, 2, 3, 4, 5, 6, 7];


// // let r = arr.filter(function(item) {
// //   let arr2 = [1, 2, 10];
// //   for (let i = 0; i < arr2.length; i++) {
// //     return item = arr2[i]; 
// //   }
// // });

// // alert (r);

// // alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


// task6 - спросить у Миши

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ]; 

// function byField(field) {
//  return (a, b) => a[field] > b[field] ? 1 : -1
// }

// // users.sort(byField('name'));
// users.sort(byField('age'));

// console.log(users);


// task7

// function makeArmy() {
//   let shooters = [];

//   // let i = 0;
//   for (let i = 0; i < 10; i++) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     console.log(shooters, ' ', i);
//     shooters.push(shooter);
//     // i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10


// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function() { // функция shooter
//       alert( j ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5



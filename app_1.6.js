// LJ part 1 section 6

// const { task } = require("gulp");

// const lessonSum = 91 - 2 - 3 - 8;
// let progressSum;
// let progressNow;
// let lessonCount;

// progressNow = 18+6+8+12+8;
// progressSum = ((progressNow/lessonSum)*100).toFixed(2);
// lessonCount = lessonSum - progressNow;
// alert(`Поздравляю, ты прошла ${progressSum}% первой части курса! Осталось всего ${lessonCount} из ${lessonSum} уроков!`);


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


// lesson6 - Object functions, NFE

// task1 - спросить у Миши про decrease

// function makeCounter() {

//   let count = 0;
//   function counter() {
//     return count++;
//   };
  
//   counter.set = function(value) {
//     count = value;
//     return count;
//   }

//   counter.decrease = function() {
//     // count = count - 1;
//     return --count;
//   }


//   return counter;
// }

// let counter = makeCounter();

// console.log(counter);

// // counter.count = 10;

// alert( counter() ); // 10
// alert( counter() ); // 10

// alert( counter.set(25) );

// alert( counter.decrease() );

// // alert( counter() ); // 10


// task2

// sum(1)(2);
// sum(1)(2)(3);
// sum(5)(-1)(2);
// sum(6)(-1)(-2)(-3);
// sum(0)(1)(2)(3)(4)(5);


// lesson8 - setTimeout and setInterval

// task1

// variant1 - setInterval
// function printNumbers(from, to) {
//   let count = from;
//   let timerId = setInterval(function(){
//   if (count < to) {
//     alert(count);
//     count++;
//     }
//   }, 2000
//   )};



  // variant2 - setTimeout
//   function printNumbers(from, to) {
//   let count = from;
//   let timerId = setTimeout(function tuck() {
//     alert(count);
//     count++;
//     if (count <= to ) {
//       timerId = setTimeout(tuck, 2000);
//     }
//   }, 2000)
// }
  
  
  // setInterval(function(){
  // if (count < to) {
  //   alert(count);
  //   count++;
  //   }
  // }, 2000
  // )};

// printNumbers(2, 5);


// lesson9 - decorator


// ex1 - base cache - спросить у Миши
// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   alert(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // если кеш содержит такой x,
//       // console.log('has', x);
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию
//     // console.log('result',result);
//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// slow  = cachingDecorator(slow); ?????

// alert( slow(1) ); // slow(1) кешируем
// alert( "Again: " + slow(1) ); // возвращаем из кеша

// alert( slow(2) ); // slow(2) кешируем
// alert( "Again: " + slow(2) ); // возвращаем из кеша


// ex2

// сделаем worker.slow кеширующим
// let worker = {
//   someMethod() {
//     return 2;
//   },

//   slow(x) {
//     // здесь может быть страшно тяжёлая задача для процессора
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };
// // console.log(worker);

// // тот же код, что и выше
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x);
//     cache.set(x, result);
//     return result;
//   };
// }

// alert( worker.slow(1) ); // оригинальный метод работает

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем его кеширующим

// alert( worker.slow(2) ); // Ой! Ошибка: не удаётся прочитать свойст


// ex3

// let worker = {
//   slow(min, max) {
//     alert(`Called with ${min},${max}`);
//     return min + max;
//   }
// };

// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function() {
//     let key = hash(arguments); // (*)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments); // (**)

//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// alert( worker.slow(3, 5) ); // работает
// alert( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)


// task1

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// function spy(func) {

// };

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


// task2 - спросить у Миши про их решение

// function f(x) {
//   alert(x);
//   // return x;
// }

// // function delay(func, delay) {
// //   console.log(typeof(delay), delay);
// //   return function (x) {
// //     let z = 0;
// //     z = func(x) * Number(delay);
// //     return z;
// //   }
// // }

// function delay(func, ms) { 
  
//   return function(...arg) {
//     setTimeout(f, 1000, ...arg);
//   }
   
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// // let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// // f1500("test"); // показывает "test" после 1500 мс


// taskMy

// function f(x) {
//   alert('vyzov' + x);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     else {
//       let result = func(x);
//       cache.set(x, result);
//       return result;
//     }
//   }
// }

// f = cachingDecorator(f);

// alert(f(22));



// lesson10 - this

// task1

// function f() {
//   alert( this ); // null
// }

// f();

// let user = {
//   g: f.bind(null)
// };

// user.g();


// task2

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();


// task3

// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// // sayHi();
// // console.log(sayHi);
// // console.log(sayHi.test);

// let bound = sayHi.bind({
//   name: "Вася"
// });
// console.log(bound);

// alert( bound.test ); // что выведет? почему?
// alert( bound.name ); // что выведет? почему?
// alert( sayHi.name ); // что выведет? почему?


// task4

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));







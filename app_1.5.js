// LJ part 1 section 5

// const lessonSum = 91;
// let progressSum;
// let progressNow;

// progressNow = 18+6+8+12;
// progressSum = ((progressNow/lessonSum)*100).toFixed(2);
// alert(`Поздравляю, ты прошла ${progressSum}% первой части курса!`);


// lesson2

// task1

// let a = Number (prompt ('a?'));
// let b = Number (prompt ('b?'));

// alert (a+b);


// task2 - Спросить у Миши

// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3


// task3

// function readNumber (num) {
//   do {
//     num = prompt ('Vvedite chislo');
//   }
//     while (isFinite(num)==false);
//   if (num === null || num === '') return null;
//   return num;
// }

// // readNumber();
// alert ( readNumber() );


// task4

// function random (min, max) {
//   return (Math.random()) * (max-min) + min;
// }

// alert( random(-3, 5) ); // 1.2345623452
// alert( random(-3, 5) ); // 3.7894332423
// alert( random(-3, 5) ); // 4.3435234525


// task5

// function randomInteger (min, max) {
//   return ((Math.random()) * (max-min + 1) + min - 0.5).toFixed(0);
// } 

// alert( randomInteger(1, 5) ); // 1.2345623452
// alert( randomInteger(1, 5) ); // 3.7894332423
// alert( randomInteger(1, 5) ); // 4.3435234525


// lesson3 - string

// task1

// function ucFirst(str) {
//   if (!str) return str;
//   str = str[0].toUpperCase() + str.slice(1);
//   return (str);
// }
// // ucFirst("вася");

// alert( ucFirst("вася") );


// task2

// function checkSpam(str) {
//   str = str.toLowerCase();
//   return str.includes("viagra") || str.includes("xxx");
// };


// alert ( checkSpam("buy ViAgRA now") );
// alert ( checkSpam('free xxxxx') ); 
// alert ( checkSpam("innocent rabbit" ));


// task3

// function truncate(str, maxlength) {
//   if (str.length <= maxlength) {
//     return str;
//   }
//   return str.slice(0, maxlength - 1) + '…';
// };

// alert ( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// alert ( truncate("Всем привет!", 20) );


// task4

// function extractCurrencyValue(str) {
//  return Number(str.slice(1));
// };

// alert( extractCurrencyValue('$120') );


// lesson4 - Array

// task2

// let styles = ["Джаз", "Блюз", "Eng"];
// alert(styles);

// styles.push("Рок-н-ролл");
// alert(styles);

// function lengthMid(arrLength) {
//   return Math.floor(((arrLength - 1) / 2));
// }

// function changeMid(arrLength) {
//   styles[lengthMid(styles.length)] = "Классика";

//   if (Number(arrLength) % 2 === 0) {
//     styles[lengthMid(styles.length) + 1] = "Классика" ;
//   }
// }

// lengthMid(styles.length);
// changeMid(styles.length);

// alert(styles);


// alert(styles.shift());
// alert(styles);


// styles.unshift("Rep", "Reggy");
// alert(styles);


// task3

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2]();


// task4


// let arr = [];

// function SumImput() {

//   while (true) {
//     let numUser = prompt('a');
//     console.log(typeof numUser);
//     if (numUser === null || numUser === '' || isFinite(numUser) === false) {
//       break;
//     }
//     else {
//       arr.push(Number(numUser));
//     }
//   }

//   let sum = 0;
//   for (let num of arr) {
//     sum = sum + num;
//   }
//   alert (sum);
// };

// SumImput();
// console.log(arr);
// alert(sum);


// lesson5 - method Array

// ex1

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2
// alert(someUsers[0].name); 
// console.log(someUsers); 


// task1 - спросить у Миши

// function camelize1(str) {
//   let arr = str.split('-');
//   let arrUper = arr.map(function(item, index) {
//     return index == 0 ? item : item = item[0].toUpperCase() + item.slice(1);
//   });
//   let arrResult = arrUper.join('');
//   alert(arrResult);
// };


// function camelize(str) {
//   return str
//     .split('-')
//     .map(
//     (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// };

// // camelize1('background-color');

// // alert(camelize("background-color"));

// function camelize2(str) {
//   let arr = str.split('-');
//   arr = arr.map(function(item, index) {
//     return index == 0 ? item : item = item[0].toUpperCase() + item.slice(1);
//   });
//   arr = arr.join('');
//   alert(arr);
// };

// camelize2('background-color');


// task2

// function filterRange1(arr, a, b) {
//   let arrResult = [];
//   arr.forEach(function(item) {
//     if (item >= a && item <= b) {
//       arrResult.push(item);
//     }
//   });
//   return arrResult;
// } 


// function filterRange(arr, a, b) {
//   let arrResult = arr.filter(item => (a <= item && item <= b))
//   return arrResult;
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// task3


// task3

// function filterRangeInPlace(arr, a, b) {
//   arr.forEach(function(item, index, arr) {
//     console.log(item, index, arr);
//     console.log(item < a, item > b);
//    if (item < a || item > b) {
//           arr.splice(index, 1);
//           // console.log(arr);
//         }
//    });
// };

// let arr = [5, 3, 3, 3, 6, 6, 15, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (item < a || item > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 3, 3, 6, -7, 0, 6, 15, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]


// task4


// let arr = [5, 2, 1, -10, 0, 8];

// function compareNumeric(a, b) {
//   if (a < b) return 1;
//   if (a == b) return 0;
//   if (a > b) return -1;
// }

// arr.sort(compareNumeric);

// alert(arr);



// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => a - b);
// alert(arr);


// task5

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// my variant
// function copySorted(arr) {
//   let sort = arr.slice();
//   sort.sort(( (a, b) => a.localeCompare(b) ) );
//   return sort;
// };

// true variant
// function copySorted(arr) {
//   return arr.slice().sort();
// }

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


// task6

// function Calculator(str) {

// }

// // let result = function calculate(str) {

// //   let arr = (str.split(' ')),
// //   a = Number(arr[0]),
// //   op = Number(arr[1]),
// //   b = Number(arr[2])


// // }
  
// //   console.log(arr);

// //   // let result = (op === '+') ? a + b : 1 ;
// //   console.log(result);
// //   console.log(op);


// calculate("3 + 7");


// task7

// let vasya = { 
//   name: "Вася", 
//   age: 25 
// };

// let petya = { 
//   name: "Петя", 
//   age: 30 
// };

// let masha = { 
//   name: "Маша", 
//   age: 28 
// };

// let users = [vasya, petya, masha];

// // alert (users[1].name);

// // let names = [
// //   users[0].name,
// //   users[1].name,
// //   users[2].name
// // ]

// // let names = users.map(item => item.name);

// let names = users.map(function(item) {
//  return item.name;
// });

// console.log(names);
// alert( names ); // Вася, Петя, Маша


// task8

// let petya = { 
//   name: "Петя", 
//   surname: "Иванов", 
//   id: 2 
// };

// let vasya = { 
//   name: "Вася", 
//   surname: "Пупкин", 
//   id: 1 
// };

// let masha = { 
//   name: "Маша", 
//   surname: "Петрова",
//   id: 3 
// };

// let users = [ vasya, petya, masha ];


// // let usersMapped = users.map(({ name, surname, id }) => ({ fullName: `${name} ${surname}`, id }));
// let usersMapped = users.map(( item ) => ({ fullName: item.name + " " + item.surname, id: item.id }));

// console.log(typeof usersMapped);
// console.log(usersMapped);


// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин



// task9

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let vanya = { name: "Ваня", age: 25 };


// let arr = [ vasya, petya, masha, vanya ];

// function sortByAge(arr) {
//   arr.sort(( (a, b) => a.age > b.age ? 1 : -1));
// }

// sortByAge(arr);
// console.log(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// task10

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];


// function getAverageAge(users) {
//   let averageAge = users.reduce((sum, item) => sum + item.age, 0) / users.length;
//   return averageAge;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// task11

// function unique(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length;) {
//       if (arr[i] === arr[j]) {
//         console.log(arr[i], i, j);
//         console.log(arr);
//         arr.splice(j,1);
//       }
//   }
// }
// return arr;
// }


// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (result.includes(str) == false) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];


// alert( unique(strings) ); // кришна, харе, :-O


// task12

// let users = [
//   {
//     id: 'john', 
//     name: "John Smith", 
//     age: 20
//   },
//   {
//     id: 'ann', 
//     name: "Ann Smith", 
//     age: 24
//   },
//   {
//     id: 'pete', 
//     name: "Pete Peterson", 
//     age: 31
//   },
// ];

// // // function groupById(arr) {
// // //   let result = {};
// // //   for (let i = 0; i < arr.length; i++) {
// // //      result[arr[i].id] = [arr[i].name, arr[i].age];
// // //     console.log(arr[i].id);
// // //     // console.log(i);
// // //   }
// // //   return result;
// // // }


// function groupById(arr) {
//   let result = arr.reduce((obj, item) => {
//     obj[item.id] = item;
//     return obj;
//     }, {})
//   return result;
// }


// let usersById = groupById(users);
// console.log(usersById);
// alert(usersById);


// task13

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);

// task14

// > 4 *3  


// let arr = [1, 2, 3, 4, 5];

// function sortArr(arr) {
//   return arr.filter((item) => item > 4).map((item) => item * 3);
// }

// // среднее значение
// const sum = arr.reduce((acc, currentValue) => {
//   return acc + currentValue
// }, 0);
// sum / arr.length

// // проверить все элементы меньше 5
// const arr3 = [1, 4, 6, 2, 7, 8, 3, 8, 456, 9];
// const result = arr3.every((item) => item < 5);

// //

// const users = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 },
//   { name: "Ваня", age: 25 }
// ];

// // users.sort((a, b) => a.age < b.age);

// const res = users.map((user) => {
//   return { ...user, test: `${user.name}-${user.age}` }
// });



// lesson7 - Map and set


// ex1 - new Map

// let map = new Map();

// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ

// console.log(map);

// alert(map.get(1)); // "num1"
// alert(map.get("1")); // "str1"
// alert(map.get(true));

// alert(map.size); // 3


// ex2 - object = key

// let john = { 
//   name: "John",
//   age: 25,
//   street: "Park Avenu"
// };

// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();

// // объект john - это ключ для значения в объекте Map
// visitsCountMap.set(john, 123);

// alert(visitsCountMap.get(john)); // 123
// console.log(visitsCountMap);


// ex3 - map and for..of

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);

// console.log(recipeMap);

// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable);
//   alert(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   alert(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//   alert(entry); // огурец,500 (и так далее)
// }


// task1

// function unique(arr) {
//   let set = new Set(); 
//   arr.forEach(item => {
//     set.add(item);
//   });
//   console.log(set);
//   return set;
// }

// // function unique(arr) {
// //   return Array.from(new Set(arr));
// // }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O


// task2


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let map = new Map();

//   arr.forEach(word => {
//    let wordSorted = word.toLowerCase().split("").sort().join("");
//    map.set(wordSorted, word);
//   });
//   // console.log(map);
//   return Array.from(map.values());
// }


// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


// task3

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// console.log(keys);


// lesson8 - WeakMap and WeakSet - спросить у Миши, почему я не вижу удаление из WeakMap и WeakSet


// task1

// let messages = [
//   {
//     text: "Hello", 
//     from: "John"
//   },
//   {
//     text: "How goes?", 
//     from: "John"
//   },
//   {
//     text: "See you soon", 
//   from: "Alice"
//   }
// ];
// console.log(messages);

// let messagesReadSet = new WeakSet();
// // console.log(messagesReadSet);


// messagesReadSet.add(messages[0]);
// messagesReadSet.add(messages[1]);

// // console.log(messagesReadSet);

// messages.shift();
// console.log(messages);
// console.log(messagesReadSet);


// task2


// let messages = [
//   {
//     text: "Hello", 
//     from: "John"
//   },
//   {
//     text: "How goes?", 
//     from: "John"
//   },
//   {
//     text: "See you soon", 
//   from: "Alice"
//   }
// ];

// let messagesReadMap = new WeakMap();

// messagesReadMap.set(messages[0], new Date(2017, 1, 1));
// messagesReadMap.set(messages[1], new Date(2017, 2, 1));
// alert(messagesReadMap.size);

// console.log(messages);
// console.log(messagesReadMap);

// messages.shift();
// console.log(messages);
// console.log(messagesReadMap);

// alert(messagesReadMap.size);


// lesson9 - Object.keys, values, entries


// ex1 - fromEntries

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно объект
//   // console.log(Object.entries(prices))
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// alert(doublePrices.meat); // 8


// task1


// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries(obj) {
//   let sum = 0;
//   for (let value of Object.values(obj)) {
//     sum = sum + value;
//   }
//   return sum;
// }

// alert( sumSalaries(salaries) ); // 650


// task2


// let user = {
//   name: 'John',
//   age: 30
// };

// function count(obj) {
//   return Object.keys(obj).length;
// }

// alert( count(user) ); // 2



// lesson10 - destructuring

// task1


// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years : age, isAdmin = false, ...rest} = user;


// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false


// task2


// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 300
// };

// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;
//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     } 
//   }
//   alert (maxName);
// }

// topSalary(salaries);


// lesson11 - Object Data

//  ex1

// let now = new Date();
// alert( now ); // показывает текущие дату и время


// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );

// ex2

// let date = new Date("2017-01-26");
// alert(date);


// task1

// let date = new Date( Date.parse('2012-01-20T03:12:00') );
// let date2 = new Date(2012, 0, 20, 3, 12);

// console.log(date);
// console.log(date2);


// alert(date);
// alert(date2);


// task2

// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay(date) {
//   let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
//   dayW = days[date.getDay()];
//   console.log(dayW);
//   return dayW;
// }


// alert( getWeekDay(date) );        // нужно вывести "ВТ"


// task3


// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay(date) {
//   // let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
//   dayW = date.getDay() + 5;
//   dayW === 0 ? dayW = 7 : dayW; 
//   console.log(dayW);
//   return dayW;
// }


// alert( getWeekDay(date) );        // нужно вывести "ВТ"


// task4


// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//   let newDate = new Date (date);
//   // console.log(date.getDate());
//   console.log(date);
//   console.log(newDate);

//   return new Date (newDate.setDate(newDate.getDate() - days));
//   // return newDate = new Date (newDate.getDate() + days);
// }

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// task5


// function getLastDayOfMonth(year, month) {
//  let myDate = new Date (year, month + 1, 0);
// //  let lastDay = myDate.getDate(myDate.setDate(myDate.getDate() - 1));
//  return myDate.getDate();
// }

// alert (getLastDayOfMonth(2012, 1));


// task6


// function getSecondsToday() {
//   let dateToday = new Date();
//   return dateToday.getHours() * 3600 + dateToday.getMinutes() * 60 + dateToday.getSeconds();
//   let secondsToday2 = dateToday.getTime() / 1000;
//   console.log(dateToday);
// }

// alert (getSecondsToday());


// task7


// function getSecondsToTomorrow() {
//   let dateToday = new Date();
//   let dateTomottow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1, 0, 0, 0);
//   return diff = Math.round((dateTomottow - dateToday) / 1000);
//   console.log(dateToday);
//   console.log(dateTomottow);

// }

// alert(getSecondsToTomorrow());


// lesson12 - JSON, toJSON

// task1

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };


// let json = JSON.stringify(user);

// console.log(json);

// let obj = JSON.parse(json);

// alert (obj.name);
// console.log(obj);


// task2


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   // alert(`${key}: ${value}`);
//   return (key != "" && value == meetup) ? undefined : value;
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/


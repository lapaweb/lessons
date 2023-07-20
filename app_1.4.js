// LJ part 1 section 4

// const lessonSum = 91;
// let progressSum;
// let progressNow;

// progressNow = 18+6+5;
// progressSum = (progressNow/lessonSum)*100;
// alert(`Поздравляю, ты прошла ${progressSum}% первой части курса!`);


// lesson1


// task1

// let user = {
//   name: 'John',
//   surname: 'Smith',
// };

// alert ( user.name );

// user.name = 'Pepe';
// alert ( user.name );

// delete user.name;
// alert ( user.name );


// task2

// let schedule = {};
// alert (schedule);
// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";
// alert (schedule["8:30"]);
// alert( isEmpty(schedule) );

// function isEmpty (object) {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }


// task3

// const user = {
//   name: "John"
// };
// alert ( user.name );


// // это будет работать? -  да 
// user.name = "Pete";
// alert ( user.name );


// task4

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//     // alert ( salaries[key] );
//     // alert ( `sum = ${sum} ` );
//   sum = sum + salaries[key];
// };

// alert ( sum );


// task5

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric (Object) {
//   for (let key in Object) {
//     if (typeof Object[key] == 'number') {
//       Object[key] = Object[key] * 2;
//     }
//   }
// }

// for (let key in menu) {
//   alert ( menu[key] );
// }


// lesson4 - this


// ex1

// user = {
//   sayHi() { // то же самое, что и "sayHi: function(){...}"
//     alert("Привет");
//   }
// };

// user.sayHi(); // Привет!


// ex2

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     alert(this.name);
//   }

// };

// user.sayHi(); 


// task1

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name );
// alert( user.name );
// alert( user.ref );


// task2

// let calculator = {
//   a: undefined,
//   b: undefined,
//   read () {
//     this.a = Number(prompt ('Введите первое число'));
//     this.b = Number(prompt ('Введите второе число'));
//   },
//   sum () {
//     return this.a + this.b;
//   },
//   mul () {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// alert ( calculator.a);
// alert ( calculator.b);


// task3

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // ladder.down();
// // ladder.showStep(); // 0

// ladder.up().up();

// ladder.showStep();


// lesson5

// task1

// let asc = {
//   name: 'greg',
// };

// function A () {
//   return asc;
//  }

// function B () {
//    return asc;
//  }

// let a = new A();
// let b = new B();


// alert (a);
// alert (b);

// alert( a == b ); // true


// task2

// function Calculator(a,b) {
//   this.read = function() {
//     this.a = Number(prompt('a?'));
//     this.b = Number(prompt('b?'));
//   }
//   this.sum = function() {
//         return this.a + this.b;
//       },
//   this.mul = function() {
//         return this.a * this.b;
//       }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// task3

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value = this.value + Number(prompt ('Vvedite chislo'));
//   }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений


// lesson7


// ex1

// let id = Symbol("id123");
// alert(id); // TypeError: Cannot convert a Symbol value to a string


// alert(id.toString()); // Symbol(id), теперь работает
// alert(id.description); // id


// ex2

// let user = {
//   name: "Вася"
// };

// let id = Symbol("id123");
// let id = Symbol("id1235");

// user[id] = 1;

// alert( user[id] ); 


// lesson8

// ex1

// вывод
// let obj = {
//   name: 777,
// }

// alert(obj);
// alert(typeof obj);

// alert(obj.name);
// alert(typeof obj.name);


// // используем объект в качестве ключа
// anotherObj[obj] = 123;


// ex2














  
  







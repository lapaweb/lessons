// LJ

const lessonSum = 91;
let progressSum;
let progressNow;


// lesson1
  // ex2

    // alert( 'Я Прекрасный JavaScript!' );

// lesson2
  // ex1

    // let names="Джон";
    // let admin=names

    // alert(admin);

  // ex2

    // let OurPlanet;
    // let currentUserName;

//lesson4
  // let name = "Ilya";

  // alert( `hello ${1}` );
  // alert( `hello ${"name"}` );
  // alert( `hello ${name}` );

// lesson6

  // ex1
  // result = prompt(title, [default]); 

  // ex2
  // let age = prompt('Сколько тебе лет?', 100);
  // alert(`Тебе ${age} лет!`);

  // ex3
  // let isBoss = confirm("Ты здесь главный?");
  // alert(isBoss); // true, если нажата OK

  // ex4
  // let names = prompt("Как тебя зовут?", "Маша");
  // alert(`Привет, ${names}!`)

  // ex4
  // let UserName = prompt('Как тебя зовут?', "Ваня");
  // alert(`Меня зовут ${UserName} !`)

  // ex5
  // let test = prompt("Test");

// lesson7

  // ex1
  // let value = true;
  // alert(value);
  // alert(typeof(value));

  // value = String(value);
  // alert(value);
  // alert(typeof(value));

  // ex2
  // let num = "123";
  // alert(num + typeof(num));

  // num = num-100;
  // alert(num + typeof(num));

  // num = num+"z";
  // alert(num + typeof(num));

  // num = num*32;
  // alert(num + typeof(num));

  // ex3

  // let one = 1;
  // one = Boolean(one);
  // alert (one+typeof(one));
  
  // let k = "";
  // k = Boolean(k);
  // alert (k+typeof(k));

  // let q;
  // alert (q+typeof(q));
  // q = Boolean(q);
  // alert (q+typeof(q));

// lesson8

  // ex1 
  // alert (12%4);
  // alert (12%5);
  // alert (12%13);

  // ex2
  // alert( 2 ** 2 ); // 2² = 4
  // alert( 2 ** 3 ); // 2³ = 8
  // alert( 2 ** 4 ); // 2⁴ = 16

  // ex3
  // let yString = "stroka";
  // let yNull = "";
  // let yNumber = "456";
  // let yBooleanTrue = true;


  // yString = +yString;
  // yNull = +yNull;
  // yNumber = +yNumber;
  // yBooleanTrue = +yBooleanTrue;

  // alert (yString + " " + typeof(yString));
  // alert (yNull + " " + typeof(yNull));
  // alert (yNumber + " " + typeof(yNumber));
  // alert (yBooleanTrue + " " + typeof(yBooleanTrue));

  // task1
  // let a = 1, b = 4;

  // let c = ++a; // a=2, c=2
  // let d = b++; // b=5, d=4
  // alert (a+" "+b+" "+c+" "+d);

  // task2
  // let a = 2;
  // let x = 1 + (a *= 2);
  // alert(a); //4
  // alert(x); //5

  // task3

    let af="" + 1 + 0 //1 
    //  let b="" - 1 + 0 // -1
    //  let c=true + false //1
    //  let d=6 / "3" //2
    //  let aa="2" * "3" //6
    let bb=4 + 5 + "px" //NaN
    let cc="$" + 4 + 5 //NaN
    //  let dd="4" - 2 //2
    let aaa="4px" - 2 //NaN
    let bbb= "  -9  " + 5 //-4
    //  let ccc= "  -9  " - 5 // -14
    //  let ddd= null + 1 //1
    let ab= undefined + 1 //1
    let ac = " \t \n" - 2 //Nan

    //  alert(af);

  // task4
    // let a = prompt("Первое число?", 1);
    // let b = prompt("Второе число?", 2);

    // alert(+a + +b); // 12

// lesson9

// task1
// let y91 = 5 > 4 //true
// let y92 = "ананас" > "яблоко" //false
// let y93 = "2" > "12" //true
// let y94 = undefined == null //true
// let y95 = undefined === null //false
// let y96 = null == "\n0\n" //false
// let y97 = null === +"\n0\n" //false


// lesson10

// task2

// let answerUser = prompt ("Какое «официальное» название JavaScript?",  "Название JavaScript");
// if (answerUser == 'ECMAScript') {
//   alert ("Верно!")
// }
// else {
//   alert ("Не знаете? ECMAScript!")
// }

// task3

// let numberUser = prompt ("Введите любое число", "0");
// if (numberUser > 0) {
//   alert ("1")
// }
// if (numberUser<0) {
//   alert ("-1")
// } else {
//   alert ("0")
// }


// task4

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// let a = 1;
// let b = 6;
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert (result);


// task5

// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = "j";
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' : '';
//   alert (message);

// lesson11
// task3
// alert( alert(1) || 2 || alert(3) );
// alert(1);


// task6

// let ageUser = prompt ("Сколько Вам лет?", "100");

// if (ageUser >= 14 && ageUser <= 90) {
//   alert ("Молодец!"); }
//   else {
//     alert ("Не молодец!");
// }


// task7
// v1

// let ageUser = prompt ("Сколько Вам лет?", "100");

// if (ageUser < 14 || ageUser > 90) {
//   alert ("Молодец!"); }
//   else {
//     alert ("Не молодец!");
// }

// v2

// if (!(ageUser >= 14) || !(ageUser <= 90)) {
//   alert ("Молодец!"); }
//   else {
//     alert ("Не молодец!");
// }

// v3
// if (!(ageUser >= 14 && ageUser <= 90)) {
//   alert ("Молодец!"); }
//   else {
//     alert ("Не молодец!");
// }


// task9

// let nameUser = prompt ('Введите логин');
// if (nameUser == 'Админ') {
//   let passwordUser = prompt ('Введите пароль')
//   if (passwordUser = 'Я Главный') {
//   alert ('Здравствуйте!') }
//   else if (passwordUser == null || passwordUser == '') {
//   alert ('Отменено')
//   }
//   else { 
//   alert ('Неверный пароль')
//   }
// }
// else if (nameUser == null || nameUser == '') {
// alert ('Отменено');
// }
// else {
// alert ('Я вас не знаю');
// }


// lesson13

// task1

// let i = 3;
// alert( i-- );
// alert (i);


// task2

// let i = 0;
// while (++i < 5) alert( i );

// 0
// 1<5 - выводим 1
// 2<5 - выводим 2
// 3<5 - выводим 3
// 4<5 - выводим 4
// 5<5 - неверно, остановка цикла
// выводим от 1 до 4

// let i = 0;
// while (i++ < 5) alert( i );

// 0
// выводим от 1 до 5

// последнее значение для вывода = 5


// task3

// for (let i = 0; i < 5; i++) alert( i );
// 0
// 1
// 2
// 3
// 4
// for (let i = 0; i < 5; ++i) alert( i );
// 0
// 1
// 2
// 3
// 4


// task4

// for (let i = 2; i <= 10; i=i+2) alert( i );
// for (let i = 2; i <= 10; ++i) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }


// task5

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i=0;
// while (i <3 ) {
//   alert( `number ${i}!` );
//   i++;
// }


// task6

// for (let numberUser = 0; (numberUser <= 100 || numberUser == null);) {
//   numberUser = prompt ('Введите число более 100');
//   alert (numberUser);
// }


// task7

// let n = 10;
// nextNumber:
// for (let i = 1; i <= n; ++i) {
//   for (let k = 2; k < i; ++k) {
//     if (i % k == 0) continue nextNumber;
//   }
//   alert (i);
// }

// alert( i + " " + k);









// progressNow = 11;
// progressSum = (progressNow/lessonSum)*100;
// alert(`Поздравляю, ты прошла ${progressSum}% курса!`);

  
  







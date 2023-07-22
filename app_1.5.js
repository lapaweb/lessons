// LJ part 1 section 5

// const lessonSum = 91;
// let progressSum;
// let progressNow;

// progressNow = 18+6+8+2;
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


// lesson3

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

function extractCurrencyValue(str) {
 return Number(str.slice(1));
};

alert( extractCurrencyValue('$120') );
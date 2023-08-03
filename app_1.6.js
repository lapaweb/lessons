// LJ part 1 section 6

// const lessonSum = 91;
// let progressSum;
// let progressNow;

// progressNow = 18+6+8+12;
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



/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

//*  Мешочек с монетами  :))) 

// Самое маленькое число

const numbers = [51, 18, 13, -24, 7, 85, 19, 0, -10];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber: ', smallestNumber);

//* Самое большое число

let biggestNumber = numbers[0];

for (const number of numbers) {
if(number > biggestNumber ) {
  biggestNumber = number;
}
}
console.log(biggestNumber);


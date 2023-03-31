/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const array12 = array1.concat(array2);
console.log(array12);
for (const number of array12) {
total += number ;
}


// =================== Htgtnf ====================

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

console.log(total);
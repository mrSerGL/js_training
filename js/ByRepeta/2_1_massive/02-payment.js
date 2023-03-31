/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 1 сделать переменную total до цикла
let total = 0;
//!  если не объявить (=0, =Х) ==> undefind + X = NuN

//? Вариант решения №1 ======= for ================

// // 2 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

// // 3 каждый элемент приплюслвать к total
//   total += cart[i];
//   // total = total + cart[i];
// }

//? Вариант решения №2 ========== for of ==============

for (const value of cart) {
  total += value;
}
console.log('Total: ', total);


// * Добавить такс =============================

//? Вариант  №1

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

//? Вариант  №2

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);
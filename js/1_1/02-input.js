/* 
* - ввод пользователя 
* - методы window.confirm() и  window.prompt()
*/
console.log("===== метод window.confirm() =====");

const shouldRenew = confirm("Вчимось далі?");
console.log("Вчимось далі?", shouldRenew);

console.log("===== метод window.prompt() =====");

// const quantity = prompt("Скільки тобі треба?");
let quantity = prompt("Скільки тобі треба?");
quantity = Number(quantity);

console.log(quantity);
console.log(typeof quantity);
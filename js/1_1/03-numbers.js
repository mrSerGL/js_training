/* 
* Парс числа с Number.parseInt() и Number.parseFloat()
*/

let elementWidth = "50.25px";
elementWidth = Number.parseInt(elementWidth);
console.log("возвращаем числовую составляющую в elementWidth:", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("возвращаем числовую составляющую в elementHeight:", elementHeight);
console.log("elementHeight type:", typeof elementHeight);

/* 
* Метод число.toFixed(digits)
*/

let salary = (1300.683983);
salary = salary.toFixed(2);
salary = Number(salary);

console.log("округляем salary", salary);
console.log("salary type:", typeof salary);

// сокращенная запись
salary = Number(salary.toFixed(2));
console.log(Number(salary.toFixed(2)));

/* 
* - Приведение (преобразование) к числу с Number(value)
* - Значение NaN (Not a Number) и метод Number.isNaN(value)
*/

let quantity = "30";
let value = "Эту строку невозможно привести к числу ";

console.log(Number("5"));
console.log(Number("849854739035"));
console.log("true:", Number(true));
console.log("false:", Number(false));
console.log("Number bla-bla-bla is:", Number("bla-bla-bla"));

console.log("quantity:", Number(quantity));
console.log("value:", Number(value));

/* 
*   Объект Math
* - Возведение в степень
* - Exponent operator
*/

const base = 2;
const power = 5;

const result = Math.pow(base, power)
console.log("result Math.pow():", result);

// современная запись
console.log("base ** power:",base ** power);

/* 
*   Скрипт возведения числа в стиеперь по запросу
*/

// 1. запросить число, сохранить в переменную:
// 2. запросить значение 7степени, сохранить в переменную
// 3. выполнить операцию
// 4. вывести результат в консоль

// let digit1 = prompt("введите число");
// digit1 = Number(digit1);
// console.log("число:", digit1);

// let digit2 = prompt("введите степень");
// digit2 = Number(digit2);
// console.log("в степени:", digit2);

// const answer = (digit1 ** digit2);

// console.log("результат:", answer);


/* 
*   Генерим псевдо-случайные числа
*   - Math.random()
*   - Math.round()
*/

// Math.random() * (max - min) + min

const min = 1;
const max = 100;
const out = Math.round(Math.random() * (max - min) + min);
console.log("random:", out);


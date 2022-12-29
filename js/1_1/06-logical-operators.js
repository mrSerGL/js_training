/*
*  Приведение к булю на примере Boolean(value)
*/

console.log(Number(null));
console.log(Number("0"));
console.log(Number(false));

console.log(Boolean(5));
console.log(Boolean("dvdv"));
console.log(Boolean(""));
console.log(Boolean(0));

// ложные: 0, null, Nan, "", '', undefined, false - приводятся к false.
// все остальные - приводятся к true.

/*
*  Лоuическое И (оператор &&)
*  - Запинается на лжи 
*  - Возвращяет то, на чем запнулся или последний операнд
*/

console.log(5 && 6 && "hello!");
console.log(5 && false && "hello!");
console.log(5 && 0 && "hello!");

/*
*  Лоuическое ИЛИ (оператор ||)
*  - Запинается на правде 
*  - Возвращяет то, на чем запнулся или последний операнд
*/

console.log(false || "" || "hello!" || 0 );

/*
*  Лоuическое НЕ (оператор !)
*  - Делает инверсию: правда в ложь, ложь в правда
*/

console.log(!false);
console.log(!true);
console.log(!0);
console.log(!5);
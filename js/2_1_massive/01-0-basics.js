// "Mango", 'Kiwi', 'Banana', 'Apple'

// ===== Объявление массива
// const friends = ["Mango", 'Kiwi', 'Banana', 'Apple', '1'];

// console.log(friends.length);
// console.table(friends);


//===== Индекс последнего элемента

// const lastIndex = friends.length - 1;
// console.log('индекс последнего элемента:', lastIndex);


//===== Переопределение

//* доступ к записи

// console.log(friends[2]);
// console.log(["Mango", 'Kiwi', 'Banana', 'Apple', '1'][2]);

//* записать в массив

// friends[2] = 'Potato';      
// console.log(friends[2]);    
// console.table(friends);     


//===== Передача по ссылке и по назначению

//* передача по значению (примитивы)

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);       //? значение b не изменилось


//* передача по ссылке (сложные типы)

// const a = [1, 2, 3];     //?  a и b - ссылки на массив
// const b = a;  

// console.log(a);
// console.log(b);

// a[0] = 500;              

// console.log(a);
// console.log(b);          //? значение в массиве изменилось на 500

//* ссылочное равенство ( referential equality )

// console.log(a === b);                  //!  true  (т.к. сравнение ссылок)
// console.log([1, 2, 3] === [1, 2, 3]);  //!  false (т.к. сравнение адресов памяти)


//* Сложные типы - объекты, массивы, функции присваиваются по ссылке, то есть переменная просто получает ссылку на уже существующий объект.


const a = ["Mango"];
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b также изменилось, потому что b, как и a,
// просто содержит ссылку на одно и то же место в памяти
console.log(b); // ["Mango", "Poly"]

// Результат повторяется
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]




















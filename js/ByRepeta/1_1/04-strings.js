const message = "В этой строке 26 символов.";

// обращение к свойству length- пишется без скобочек message.length
console.log(message.length);

/*
* Конкатенация строк
*/

const firstName = "John";
const lastName = "Doe";

console.log(firstName + " " + lastName);

/*
* Скрипт Гость John Doe поселился в  VIP N 716
*/

const room = 716;
const type = "VIP";

console.log("Гость", (firstName + " " + lastName), "поселился в", type, "номере N", room)

/*
* Шаблонные строки  (Template strings) - в `` !!!
*/

console.log(`Гость ${(firstName + " " + lastName)} поселился в ${type} номере N ${room}`)

/*
* Нормализыция с методом toLowerCase()
*/

const brand = "SaMsUng";
const normalizedBrand =  brand.toLowerCase();
// const inDb = "samsung";
console.log(normalizedBrand);

let brand1 = "GnusMAs";
brand1 = brand1[0] + brand1.slice(1).toLowerCase();
console.log(brand1);


/*
* Поиск в строке с методом  includes()
*/

const blacklistword1 = "dolor";
const blacklistword2 = "elit";

const string1 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, neque!";
const string2 ="Lorem ipsum DOLOR sit amet consectetur adipisicing ELIT. Adipisci, neque!";

// не находит из-за верхнего регистра

console.log(string1.includes(blacklistword1, blacklistword2));
console.log(string2.includes(blacklistword1, blacklistword2));

// после нормализации все находит

const normalizedstring1 =  string1.toLowerCase();
const normalizedstring2 =  string2.toLowerCase();

console.log(normalizedstring1.includes(blacklistword1, blacklistword2));
console.log(normalizedstring2.includes(blacklistword1, blacklistword2));





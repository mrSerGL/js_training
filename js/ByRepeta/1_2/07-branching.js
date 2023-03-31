/*
* Оператор ветвления if
*/

// если возвращает false, то код в теле не выполняется

if (12 > 10) {
    console.log("Верно!")
} 


/*
* Оператор ветвления if...else
*/

if(5 > 8) {
    console.log("Это правда!")
} else {
    console.log("Это не правда!")
}

/*
* Оператор ветвления else...if
*/

const salary = 800;

if (salary < 500){
    console.log("small salary");
} else if (salary >500 && salary <1000) {
    console.log("midle salary");
} else {
    console.log("god salary"); 
}


/*
* Тернарный оператор
*/

const balance = 1000;
let message;

if (balance  > 0) {
    message = "balance is positive"
} else  {
    message = "balance is negative"}

console.log(message);  


const message1 = balance  >= 0 ? "balance is positive" : "balance is negative";
console.log(message1);

/*
* Блочная область видимости переменных
*/

const b = 10;

if (true){
    console.log(b);
    const a =5;
    console.log(a);
}
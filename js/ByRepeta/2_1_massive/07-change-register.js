/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'qWeRTzxCv';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    //? решение через цикл
    // if (letter === letter.toLowerCase()) {
    //   console.log('Эта буква в нижнем регистре!!! - ', letter);

    //   invertedString += letter.toUpperCase();
    // } else {
    //   console.log('Эта буква в верхнет регистре!!! - ', letter);
    //   invertedString += letter.toLowerCase();
    // }

    //? решение через тернарній оператор
    invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();

    //? решение через хз (условие - новая переменная)
    // const isEqual = (letter === letter.toLowerCase());
    // invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);

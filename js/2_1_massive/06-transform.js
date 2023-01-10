/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

//* Должно получиться 'Mango,Poly,Kiwi,Ajax'

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }  
// console.log(friends);    
// Mango,Poly,Kiwi,Ajax, //?(посл.запятая - как убрать?)             



// //? var 1
// string = string.slice(0, string.length - 1);
// console.log(string);



// //? var 2 !!!!
const string = friends.join(', ');
console.log(string); 


//|     
//|     const a = ["Wind", "Water", "Fire"];
//|     a.join(); // 'Wind,Water,Fire'
//|     a.join(", "); // 'Wind, Water, Fire'
//|     a.join(" + "); // 'Wind + Water + Fire'
//|     a.join(""); // 'WindWaterFire'








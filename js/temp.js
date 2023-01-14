// ===== for 

// function calculateTotal(number) {

// let total = 0;

// for (let i = 1; i <= number; i += 1) {
//   console.log(i);
  

// total += i;


// }
// console.log("==============");
// console.log("summ:",total);

// return total;
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);

// ==========================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits.length);

// for (let i = 0; i <= fruits.length-1; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ==========================

// function calculateTotalPrice(order){

//   let total = 0;

//   for (let i = 0; i <= order.length-1; i += 1 ){
//   console.log(order[i]);
//   total += order[i];  
//   }

//   console.log("summ:", total);
// }

// calculateTotalPrice([12, 85, 37, 4]) // возвращает 138
// calculateTotalPrice([164, 48, 291]) // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // возвращает 1116

//================= непонятный результьат сравнения слов =========

// function findLongestWord(string) {
//   let LongestWord = " ";

//   const wordArray = string.split(" ");
//   console.log(wordArray);

// for (let i=0; i <= wordArray.length-1; i +=1){
//    if (LongestWord < wordArray[i]){
//     LongestWord = wordArray[i];
//    }
// }
// console.log(LongestWord);

// }
// findLongestWord("Google do a roll") 
// findLongestWord("May the force be with you")

// ====== работает!!! ====
// let longestWord;

// function findLongestWord(string) {

//   let maxNumberOfLetters = 0;

//   const words = string.split(" ");


//   for (const word of words) {

//     const letters = word.split("");

//     const numberOfLetters = word.length;
    
//     if (numberOfLetters > maxNumberOfLetters){
//       maxNumberOfLetters = numberOfLetters;
//       longestWord = word;
      
//     }
    
//     }

// console.log(longestWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog") //возвращает jumped
// findLongestWord("Google do") //возвращает Google
// findLongestWord("May the force be with you") //возвращает force

// ============= Ok ==========

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

// // получить массив numbers значений от min до max
// // - начиная  мин добавлять массив значение до макс

//   for (let i = min; i <= max; i += 1) (
//     numbers.push(i)
//   )
//   console.log(numbers);
   
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(1, 3) // возвращает [1, 2, 3]
// createArrayOfNumbers(14, 17) // возвращает [14, 15, 16, 17]
// createArrayOfNumbers(29, 34) // возвращает [29, 30, 31, 32, 33, 34]

// ============= OK ==========

// function filterArray(numbers, value) {

// let fiteredNumbers = [];

// for (let i = 0; i <= numbers.length -1; i +=1){
//   if (numbers[i] > value) {
//     fiteredNumbers.push(numbers[i]);
//   }
// }

// console.log(fiteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3) //возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) //возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5) //возвращает []
// filterArray([12, 24, 8, 41, 76], 38) //возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) //возвращает [24, 41, 76]

// ===========  ok ====================

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log( fruits.includes(fruit));
//  // return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum") //возвращает true
// checkFruit("mandarin") //возвращает false
// checkFruit("pear") //возвращает true
// checkFruit("Pear") //возвращает false
// checkFruit("apple") //возвращает true

// ========================================

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];
//   for (const itemOfarray1 of array1) {
  
//       if (array2.includes(itemOfarray1)) {
//          array3.push(itemOfarray1)
//       }

//   }

//   console.log(array3); 
//   return array3; 

//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]) // возвращает [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // возвращает [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // возвращает [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // возвращает []

// =============  Ok ===========================

// function includes(array, value) {
//   // Change code below this line
//   let isIncludes;
  
//   for (let i = 0; i <= array.length - 1; i += 1){
//     // console.log("что ищем?",array[i], `в ${value}`);
    
//     if (array[i] === value){
//      isIncludes = true;
//       break;
//     }
//    isIncludes = false;
//   // Change code above this line
// }
//  console.log(isIncludes);
 
// }

// includes([1, 2, 3, 4, 5], 3) //возвращает true
// includes([1, 2, 3, 4, 5], 17) //возвращает false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")   //возвращает true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")   //возвращает false
// includes(["apple", "plum", "pear", "orange"], "plum")   //возвращает true
// includes(["apple", "plum", "pear", "orange"], "kiwi")   //возвращает false

// ===================









  




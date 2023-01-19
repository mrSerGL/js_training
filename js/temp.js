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

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   // Change code below this line
//   const ownerName = apartment.owner;
//   const ownerPhone = apartment.phone;
//   const ownerEmail = apartment.email;
//   const numberOfTags = apartment.tags;
//   const firstTag = apartment.tags[1];
//   const lastTag = apartment.tags[apartment.tags.length - 1];
//   // Change code above this line
// }
//======================

//   function countProps(object) {
//     let propCount = 0;
//     // Change code below this line

//     for (const key in object) {
//     // Если это собственное свойство - выполняем тело if
//     if (object.hasOwnProperty(key)) {
//      propCount += 1;
//      }
//     }
//     console.log(propCount);
//     // Change code above this line
//     return propCount;

//   }

// countProps({}) //возвращает 0
// countProps({ name: "Mango", age: 2 }) //возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })//возвращает 3

// ============================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];

// // Change code below this line
// const keys =  Object.keys(apartment);

// for (const key of keys){
//   values.push(apartment[key]);
// }

// console.log(values);
//=========================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//=====================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   let productPrice = null;

//   for( const product of products){

//     if (productName === product.name) {
//       // console.log(productName, product.price );
//       productPrice = product.price;

//     }
//     }

//     return productPrice;
//     console.log(productPrice);
//  // Change code above this line
// }

// getProductPrice("Radar") //возвращает 1300.
// getProductPrice("Grip") //возвращает 1200.
// getProductPrice("Scanner") //возвращает 2700.
// getProductPrice("Droid") //возвращает 400.
// getProductPrice("Engine") //возвращает null.

// ==============================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

// let keyValues = [];

// for (const product of products){
//   for (const key in product){
//     // console.log(key);
//     if (key === propName){
//       keyValues.push(product[key])
//     }

//   }
// }
// // console.log(keyValues);

// return keyValues;
//   // Change code above this line
// }

// getAllPropValues("name") //возвращает ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") //vозвращает [4, 3, 7, 9]
// getAllPropValues("price") //возвращает [1300, 2700, 400, 1200]
// getAllPropValues("category") //возвращает []

// ==========================

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки

  
//     let summ = 0;
//     for (const product of products) {
//         if (productName === product.name) {
//             let price = product.price;
//             let quantity = product.quantity;
//             summ = price * quantity;
//             // totalSumm += summ;
          
//         }
//     }
//     console.log(summ);


//     // Пиши код выше этой строки
// }

// calculateTotalPrice('Radar'); // возвращает 5200
// calculateTotalPrice('Droid') // возвращает 2800
// calculateTotalPrice('Grip') // возвращает 10800
// calculateTotalPrice('Scanner') // возвращает 8100
// calculateTotalPrice('Blaster') // возвращает 0

// ======================

// const firstBook = {
//   title: "Последнее королевство",
//   coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {title: firstTitle, coverImage: firstCoverImage = "https://via.placeholder.com/640/480", } = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {title: "Сон смешного человека",};

// const {title: secondTitle, coverImage: secondCoverImage = "https://via.placeholder.com/640/480",} = secondBook;  //! 

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// ================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// ================================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {low:lowToday, high:highToday, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow: {low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//   } = forecast 

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

//==============================



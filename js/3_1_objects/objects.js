// Не зрозуміло який сенс об'єкта - це не база бо таких ще їснує багато, це не запрос бо він не має зв'язків, не справочник бо у ньому немає унікальних значень. Він схожий на валізу яка займає багато місця і зберігає те що в неї поклали. Та ще й забули що там лежить. По друге - наприклад, може бути скільки завгодно людей с одинаковим им'ям та одного віку! То як відрізняти ти об'екти?

len

//*  Створення об'єкта
//? Для оголошення використовуються фігурні дужки {} - літерал об'єкта.

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   "is for adults": false,
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);
// console.log(book.author);

// console.log(book["author"]);  // !!!
// console.log(book['is for adults']);

//* вкладені об'єкти

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   console.log(user);
  

//* Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ім'я_властивості. Синтаксис «через крапку» використовується у більшості випадків і доречний тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

//?На місці звернення буде повернуто значення властивості з таким ім'ям. Якщо об'єкт не містить властивості з таким ім'ям, на місці звернення повернеться undefined.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   stats: {
//           followers: 5603,
//           views: 4827,
//           likes: 1308,
//   },
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.stats.followers);

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined


//*  функция возвращает в виде обїекта

// function makeAuthorInfo(author, title){
// return {
//         author,  // то же самое что и author: author,
//         title,    // то же самое что и title: title,
//         };
// }

// let authoriBook = makeAuthorInfo("Bernard Cornwell","The Last Kingdom");
// console.log(authoriBook);

//* изменения обїектов

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
// };

//- добавление свойств

// book.rating = 8.38;
// book["is for adults"] = false;
// book.stats = {
//           followers: 5603,
//           views: 4827,
//           likes: 1308,
// };

// console.log(book);

//- удаление из обїекта

// delete book.stats;
// delete book.rating;

// console.log(book);

//- изменение зхначения свойства

// book["is for adults"] = true;
// book.rating = 9.5;   

// console.log(book);

//* копировпание объектов

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   "is for adults": false,
// };

// console.log(book);

// let bookInfo = book;

// console.log(bookInfo);

// bookInfo["is for adults"] = true;

// console.log(bookInfo);

//* дублирование объектов

// //?   const returnedTarget = Object.assign((куда)обїект, ...(что)свойство 1),(что)свойство 2),...;

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   "is for adults": false,
// };

// let bookInfo = Object.assign({}, book);   // {} - это новый, пустой объект

// bookInfo["is for adults"] = true;

// console.log(book);
// console.log(bookInfo);

//* проверка существования свойства

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   // stats: {
//   //         followers: 5603,
//   //         views: 4827,
//   //         likes: 1308,
//   // },
// };

//  способ 1

// if (book.title) {
//   console.log(book.title);
// }

// способ 2 опиональная цепочка

// console.log(book.stats.likes);
// console.log(book?.stats?.likes);  // опиональная цепочка

//  способ 3  in 

// if ("author" in book){
//   console.log(book.author);
  
// }

//* проверка существования свойства / оператор in использование

//?  В большинстве случаенв сработает сравние с undefined. Либо опциональтная цепочка ?. Есть особый случай, когда свойство существует, но содеожит значение undefined. В этом случае6 необходимо испрльзовать IN.

// let bookInfo = {
//   author: undefined,
// }

// if (bookInfo.author){            //false   
//   console.log(bookInfo.author);  // не выполнится, хотя значение свойства есть
// }

// if ("author" in bookInfo){       // true
//   console.log(bookInfo.author);  // выполшнится и вернет значение  undefined
// }

// =======  цикл for in  перебирает свойства в объекте

//|     for (let key in object) {
//|     }

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   "is for adults": false,
//   stats:  {
//               followers: 5603,
//               views: 4827,
//               likes: 1308,
//     },
// };

// for (let key in book){

//   // console.log(key);           // возващает свойста
//   // console.log(book[key]);     // возвращает значения свойств
//   // console.log((key), ":", (book[key]));  
  
// } 

// for (let key in book.stats){
//   // console.log(key);
//   // console.log(book.stats[key]);
//   console.log((key), ":", (book.stats[key])); 
  
// }

// ======== методы объекта

// let book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   "is for adults": false,
//   stats:  {
//               followers: 5603,
//               views: 4827,
//               likes: 1308,
//     },
//   bookInfo: function()  {  // функция как свойство объекта
//     // console.log(`${book.title}, ${book.author}, ${book.genres}`);
//     console.log(`${this.title}, ${this.author}, ${this.genres}`);  // исп-е this
    
//   },
// };

// book.bookInfo(); // The Last Kingdom, Bernard Cornwell, historical prose,adventure

// ======= конструкторы объекта

// function BookInfo(author){
//   this.author = author;
//   this.title = "The Last Kingdom";
// }

// console.log(new BookInfo("Bernard Cornwell"));



























/* loading="lazy"
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n', 'whoisit'];
const loginToFind = 'aj4xth3m4n';

// ====== for

let message = `Не найден ${loginToFind}`; //! по умолчанию

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];
    console.log( `${login} === ${loginToFind}:`, login === loginToFind);
    

    //? if var 1 ======

    // if (login !== loginToFind) {
    //   // message = `Не найден ${loginToFind}`; //! лишнее, тк. изначально НЕ НАЙДЕН
    //   continue
    // } 
    //   message = `Найден ${loginToFind}`;
    //   break;
    

    //? if var 2 ====== от обратного

    // if (login === loginToFind) {
    //     message = `Найден ${loginToFind}`;
    //     break;
    // }
   // message = `Не найден ${loginToFind}`; //! лишнее, тк. изначально НЕ НАЙДЕН
}
// console.log(message);

// ====== for of
// console.log("====== for of ======");


// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Найден ${loginToFind}`;
//         break;
//     }
//   }
// console.log(message);

// ====== include
console.log("====== includes ======");

//* решение с if

const hasLogin = logins.includes(loginToFind); 
   if (hasLogin) {  // if (true or false)
   message = `Найден ${loginToFind}`;
}
console.log(message);

//* решение с (true or false)

console.log(logins.includes(loginToFind));  // if (true or false)

//* решение с тернарный

message = logins.includes(loginToFind) ? `Найден ${loginToFind}` : `Не найден ${loginToFind}`;
console.log(message);

message = logins.includes(loginToFind) 
? `Найден ${loginToFind}` 
: `Не найден ${loginToFind}`;
console.log("Лучшее решение!", message);


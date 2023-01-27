//* Задача 1/48
//- Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию.

/* function greet(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet
// и выводим результат в консоль
console.log(greet("Mango"));
// Добро пожаловать Mango.

// Выводим функцию greet
// в консоль не вызывая её
console.log(greet); */
/*
ƒ greet() {
     return `Добро пожаловать ${name}.`;
}
*/

//- В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения. Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать, как аругмент, другой функции.

//? Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

/* function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = makePizza; */

// Объявлена функция makePizza
// Объявлена переменная result
// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza

//* Задача 2/48
//- Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

//- Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.

/* // Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Mango", greet); */

//- Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

//? Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

/* function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  // Chande code below this line
function makeMessage(pizzaName, callback) {

    console.log(callback(pizzaName));
    return callback(pizzaName);
  } */

// Объявлена функция deliverPizza
// Объявлена функция makePizza
// Объявлена функция makeMessage
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
//| makeMessage("Royal Grand", makePizza) //возвращает строку "Pizza Royal Grand is being prepared, please wait..."
//| makeMessage("Ultracheese", deliverPizza) //возвращает строку "Delivering Ultracheese pizza."

//* Задача 3/48
//- Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.

/* function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Mango", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Poly", function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
}); */

//? Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

/* function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line
  
  makePizza("Ultracheese", function eatPizza(pizzaName){console.log(`Eating pizza ${pizzaName}.`);
}); */

// Объявлена функция makePizza
// Функция makePizza принимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName

//* Задача 4/48
//- Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

/* function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}

processCall("Mango"); */

//- Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

//- Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

//- Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

/* function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

        function takeCall(name) {
        console.log(`Соединяем с ${name}, ожидайте...`);
        // Логика принятия звонка
        }

        function activateAnsweringMachine(name) {
        console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
        // Логика активации автоответчика
        }

        function leaveHoloMessage(name) {
        console.log(`Абонент ${name} недоступен, записываем голограмму.`);
        // Логика записи голограммы
        }

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage); */

//- Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.

//? Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

/* const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            return onSuccess(pizzaName);
        }
        return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
    return `Error! ${error}`;
}

// Method calls with callbacks

console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError)); */

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."

// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."




//* Задача 5/48
//- Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

/* массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
}); */

//| Поэлементно перебирает массив.
//| Вызывает коллбек-функцию для каждого элемента массива.
//| Ничего не возвращает.

//- Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

//? Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     for (let i = 0; i < orderedItems.length; i += 1) {
//       totalPrice += orderedItems[i];
//   }

/*     function calculateTotalPrice(orderedItems){
    let totalPrice = 0; 
    orderedItems.forEach(element => {
    totalPrice += element;   
    });   
    


    console.log(totalPrice);
    // Change code above this line
    return totalPrice;
} */
  

// Объявлена функция calculateTotalPrice(orderedItems)
// Для перебора массива orderedItems использован метод forEach
// calculateTotalPrice([12, 85, 37, 4]) // возвращает 138
// calculateTotalPrice([164, 48, 291]) // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]) // возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение



//* Задача 6/48

//- ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

//- Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

//? Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
/* 
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
  
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }

    numbers.forEach(function (element, index) {
        if (element > value){
            filteredNumbers.push(element);
        }
      });
  
    // Change code above this line
    console.log(filteredNumbers);
    
    return filteredNumbers;
  } */

//   Объявлена функция filterArray(numbers, value)
//   Для перебора массива numbers использован метод forEach
// filterArray([1, 2, 3, 4, 5], 3) // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5) // возвращает []
// filterArray([12, 24, 8, 41, 76], 38) // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // возвращает [24, 41, 76]
//   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение



//* Задача 7/48
//* ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ

//- Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

//? Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

/* function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
  
    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }

    firstArray.forEach(function callback(element, index, array) {
      if (secondArray.includes(element)){
        commonElements.push(element);
      }
    });
    // console.log(commonElements);
  
    return commonElements;
    // Change code above this line
  } */


// Объявлена функция getCommonElements(firstArray, secondArray)
// Для перебора параметра (массива) использован метод forEach
// getCommonElements([1, 2, 3], [2, 4]) //  возвращает [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) //  возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) //  возвращает [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) //  возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение




//* Задача 8/48
//- Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.

//- Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

//- Обычное объявление функции
//|          function classicAdd(a, b, c) {
//|            return a + b + c;
//|          }

//- Тоже самое как стрелочная функция
//|          const arrowAdd = (a, b, c) => {
//|            return a + b + c;
//|          };

//- Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

//- Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

//|        const add = (a, b, c) => {
//|          return a + b + c;
//|        };

//- Если параметр один, его объявление может быть без круглых скобок.

//|        const add = a => {
//|          return a + 5;
//|        };

//- Если параметров нет, то обязательно должны быть пустые круглые скобки.

//|        const greet = () => {
//|          console.log("Привет!");
//|        };

//? Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

/* // Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
   const calculateTotalPrice = (quantity, pricePerItem) => {
    // Change code above this line
    return quantity * pricePerItem;
  }
//   Объявлена переменная calculateTotalPrice
//   Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)


console.log(calculateTotalPrice(5, 100));  // возвращает 500
console.log(calculateTotalPrice(8, 60));  // возвращает 480
console.log(calculateTotalPrice(3, 400));  // возвращает 1200
//   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение */




//* Задача 9/48
//- В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

//|       const add = (a, b, c) => {
//|         console.log(a, b, c);
//|         return a + b + c;
//|       };

//- Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

//|        const add = (a, b, c) => a + b + c;

//- Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.

//- Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

//- До
//|           function classicAdd(a, b, c) {
//|             return a + b + c;
//|           }

//- После
//|           const arrowAdd = (a, b, c) => a + b + c;

//? Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

/* // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   };

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Change code above this line
  


// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
// В функции использован неявный возврат
console.log(calculateTotalPrice(5, 100)); // возвращает 500
console.log(calculateTotalPrice(8, 60)); // возвращает 480
console.log(calculateTotalPrice(3, 400)); // возвращает 1200
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение */




//* Задача 10/48
//- Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.

//|       const numbers = [5, 10, 15, 20, 25];

//-  Объявление функции
//|       numbers.forEach(function (number, index) {
//|         console.log(`Индекс ${index}, значение ${number}`);
//|       });

//-  Анонимная стрелочная функция
//|        numbers.forEach((number, index) => {
//|          console.log(`Индекс ${index}, значение ${number}`);
//|        });

//- Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.

//|        const numbers = [5, 10, 15, 20, 25];

//|        const logMessage = (number, index) => {
//|          console.log(`Индекс ${index}, значение ${number}`);
//|        };

//|        numbers.forEach(logMessage);

//? Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.


/* // Change code below this line
const calculateTotalPrice = (orderedItems) => {
let totalPrice = 0;
  
    // orderedItems.forEach(function (item) {
    //   totalPrice += item;
    // });

orderedItems.forEach((item) => {totalPrice += item;});
   
    return totalPrice;
  }
  // Change code above this line

// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
// Для перебора массива orderedItems использован метод forEach
// Коллбек для метода forEach это стрелочная функция
console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  // возвращает 1116
//со случайными, но валидными аргументами, возвращает правильное значение */




//* Задача 11/48
//* ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0


//? Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
/* function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(function (number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Change code above this line
    return filteredNumbers;
  } */

/* const filterArray = (numbers, value) =>{
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Change code above this line
    return filteredNumbers;
  }


// Объявлена переменная filterArray
// Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
// Для перебора массива numbers использован метод forEach
// Коллбек для метода forEach это стрелочная функция
console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение */



//* Задача 12/48
//* ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ 2.0

//? Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

/*  const getCommonElements= (firstArray, secondArray)=> {
    const commonElements = [];
    
    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
        commonElements.push(element);
        }
    });
  
    // Change code above this line
    return commonElements;
  } */

// Объявлена переменная getCommonElements.
// Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray)
// Для перебора массива firstArray использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// console.log(getCommonElements([1, 2, 3], [2, 4]))  // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))  // возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))  // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))  // возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []




//* Задача 13/48
//- Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

//|        const dirtyMultiply = (array, value) => {
//|          for (let i = 0; i < array.length; i += 1) {
//|            array[i] = array[i] * value;
//|          }
//|        };

//|        const numbers = [1, 2, 3, 4, 5];
//|        dirtyMultiply(numbers, 2);
//|        // Произошла мутация исходных данных - массива numbers
//|        console.log(numbers); // [2, 4, 6, 8, 10]

//- Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.

//- Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

//- Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

//|         const pureMultiply = (array, value) => {
//|           const newArray = [];

//|           array.forEach(element => {
//|             newArray.push(element * value);
//|           });

//|           return newArray;
//|         };

//|         const numbers = [1, 2, 3, 4, 5];
//|         const doubledNumbers = pureMultiply(numbers, 2);

//|         // Не произошло мутации исходных данных
//|         console.log(numbers); // [1, 2, 3, 4, 5]
//|         // Функция вернула новый массив с изменёнными данными
//|         console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//? Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

//? Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

/* function changeEven(numbers, value) {
    // Change code below this line
    const newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
      // numbers[i] = numbers[i] + value;
      newArray.push(numbers[i] + value);
      } else {newArray.push(numbers[i])};
    }
    return newArray;
    // Change code above this line
  } */


// Объявлена функция changeEven(numbers, value)
// Функция changeEven не изменяет значение параметра numbers
//console.log(changeEven([1, 2, 3, 4, 5], 10)) // возвращает новый массив [1, 12, 3, 14, 5]
//console.log(changeEven([2, 8, 3, 7, 4, 6], 10)) // возвращает новый массив [12, 18, 3, 7, 14, 16]
//console.log(changeEven([17, 24, 68, 31, 42], 100)) // возвращает новый массив [17, 124, 168, 31, 142]
//console.log(changeEven([44, 13, 81, 92, 36, 54], 100)) // возвращает новый массив [144, 13, 81, 192, 136, 154]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение



//* Задача 14/48
//- Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

//- Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

//|       массив.map((element, index, array) => {
//|         // Тело коллбек-функции
//|       });

//- Поэлементно перебирает оригинальный массив.
//- Не изменяет оригинальный массив.
//- Результат работа коллбек-функции записывается в новый массив.
//- Возвращает новый массив такой же длины.
//- Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

//|       const planets = ["Earth", "Mars", "Venus", "Jupiter"];

//|       const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
//|       console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

//|       const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
//|       console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

//|       // Оригинальный массив не изменился
//|       console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

//- Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, делая код чище и проще для восприятия.

//? Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().


/*         const planets = ["Earth", "Mars", "Venus", "Jupiter"];
//        Change code below this line
        // const planetsLengths = [];

        // planets.map(planet => {
        // planetsLengths.push(planet.length);
        // });

        const planetsLengths = planets.map(planet => planet.length);
        console.log(planetsLengths); */


// Объявлена переменная planets
// Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
// Объявлена переменная planetsLengths
// Значение переменной planetsLengths это массив [5, 4, 5, 7]
// Для перебора массива планет использован метод map()




//* Задача 15/48
//- Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.

//|        const students = [
//|          { name: "Mango", score: 83 },
//|          { name: "Poly", score: 59 },
//|          { name: "Ajax", score: 37 },
//|          { name: "Kiwi", score: 94 },
//|          { name: "Houston", score: 64 },
//|        ];

//| const names = students.map(student => student.name);
//| console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

//- Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

//? Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line
// const names = students.map(student => student.name);  // синтаксис

const titles = books.map(book => book.title);
console.log(titles); */



// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная titles
// Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебора массива books используется метод map() как чистая функция

//==================================

//* Задача 16/48
//- Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».

//|      массив.flatMap((element, index, array) => {
//|        // Тело коллбек-функции
//|      });

//- В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.

//|      const students = [
//|        { name: "Mango", courses: ["mathematics", "physics"] },
//|        { name: "Poly", courses: ["science", "mathematics"] },
//|        { name: "Kiwi", courses: ["physics", "biology"] },
//|      ];

//|     students.map(student => student.courses);
//|     //["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//|     students.flatMap(student => student.courses);
//|     //["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//- Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().

//? Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books;



// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная genres
// Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебора массива books используется метод flatMap()









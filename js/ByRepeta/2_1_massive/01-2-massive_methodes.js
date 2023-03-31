// ===== Методы split() и join() ======

//* Метод split(delimiter) 

//? превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]



//*Метод массивов join(delimiter) 

//?соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"


// ===== Метод indexOf() ======

//* indexOf(value) 

//?  возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


// ===== Метод includes() =====

//*includes(value) 

//?  проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false


// ===== Проверка множественных условий с includes()

//?  На первый взгляд код следующего примера выглядит хорошо.

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

//?  Однако, что если у нас будет больше красных фруктов, к примеру ещё вишня (cherry) или клюква (cranberries)? Будем ли мы расширять условие с помощью дополнительных ||?

//const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

//? Можем переписать условие используя метод includes(), это очень просто и масштабируемо.

// Выносим варианты в массив

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry"; 
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {  // if (true or false)
//   console.log(`${fruit} is a red fruit!`);
// }



// ====== Методы push() и pop()

//?Добавляют или удаляют крайние элементы массива. Работают только с крайним левым и крайним правым элементом и не могут поставить или удалить элемент с произвольной позиции.


//* Метод push() 

//? добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]


//* Метод pop() 

//?удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []



// ===== Метод slice()

//* slice(begin, end) 

//? возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

//* Если begin и end не указаны, будет создана полная копия исходного массива.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

//* Если не указан end, копирование будет от start и до конца исходного массива.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

//* Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]



// ===== Метод splice() =====

//? Швейцарский нож для работы с массивами, если исходный массив нужно изменить. Удаляет, добавляет и заменяет элементы в произвольном месте массива.

//* Удаление

//| Чтобы удалить элементы в массиве, передаются два аргумента.
//| splice(position, num)

//| - position - указывает позицию (индекс) первого элемента для удаления
//| - num - определяет количество удаляемых элементов

//?  Метод splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы. Например, у нас есть массив оценок, который содержит пять чисел от 1 до 5.


// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]


//? На практике возращаемое значение (массив удалённых элементов) используется редко. В основном просто необходимо удалить элементы из массива.


//* Добавление

//| Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

//|  splice(position, 0, new_element_1, new_element_2, ...)

//| - Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
//| - Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
//| - Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

// Например, у нас есть массив с названиями цветов в виде строк. Добавим новый цвет перед элементом с индексом 2.

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

//Можно добавить произвольное количество элементов, передав четвертый, пятый аргумент и т. д.

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]



//* Замена

//?Замена это операция добавления в которой удаляются элементы в месте добавления новых. Для этого необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не совпадать.

//|  splice(position, num, new_element_1, new_element_2, ...)

//|  - position - указывает позицию (индекс) первого элемента для удаления
//|  - num - определяет количество удаляемых элементов
//|  - Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив

// например, у нас есть массив языков программирования из четырех элементов.

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]



//* Метод concat()

//? Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]


// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]






//* Задача 1/41
//-  Объекты позволяют описать и сгруппировать характеристики объектов реального мира - пользователя, книги, продукта магазина, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
}; */

//- Для объявления используются фигурные скобки {} - литерал объекта. При создании объекту можно добавить свойства, каждое из которых описывается парами ключ:значение. Ключ ещё называют именем свойства и это всегда строка. Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции и т. п. Свойства разделяются запятой.

/* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  }; */

//?   Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

// Тесты:
// Объявлена переменная apartment
// Значение переменной apartment это объект
// В объекте есть свойство imgUrl
// Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
// В объекте есть свойство descr
// Значение свойства descr это строка "Spacious apartment in the city center"
// В объекте есть свойство rating
// Значение свойства rating это число 4
// В объекте есть свойство price
// Значение свойства price это число 2153
// В объекте есть свойство tags
// Значение свойства tags это массив ["premium", "promoted", "top"]

//* Задача 2/41
//-  Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

//- Например, статистика пользователя социальной сети состоит из количества последователей, просмотров и лайков, и хранить эти данные удобнее всего в виде объекта. Тоже самое с местоположением, отдельно страна и город.

//- В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или максимальному количеству последователей и т. д.

/* const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
}; */

//? Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

/* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email:"henry.carter@aptmail.com",
    }
  }; */

//* Задача 3/41
//- Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.

//- На место обращения будет возвращено значение свойства с таким именем.
//- Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined */

//? Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

/* const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment. price;
  const aptTags = apartment.tags;
  // Change code above this line
   */



  //* Задача 4/41
/*       const user = {
        name: "Jacques Gluke",
        tag: "jgluke",
        location: {
          country: "Jamaica",
          city: "Ocho Rios",
        },
        hobbies: ["swiming", "music", "sci-fi"],
      }; */
  //- Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, если необходимо получить значение страны пользователя, записываем user.location.country, где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.
  
/*       const location = user.location;
      console.log(location); // Объект location
      
      const country = user.location.country;
      console.log(country); // "Jamaica" */

  //- Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.
  
/*       const hobbies = user.hobbies;
      console.log(hobbies); // ["swiming", "music", "sci-fi"]
      
      const firstHobby = user.hobbies[0];
      console.log(firstHobby); // "swiming"
      
      const numberOfHobbies = user.hobbies.length;
      console.log(numberOfHobbies); // 3 */
  
      //? Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

      //| ownerName - имя владельца;
      //| ownerPhone - телефон владельца;
      //| ownerEmail - почта владельца;
      //| numberOfTags - количество элементов массива в свойстве tags;
      //| firstTag - первый элемент массива в свойстве tags;
      //| lastTag - последний элемент массива в свойстве tags.

/*           const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line */




// *Задача 5/41

//- Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя свойства как строка.

//- Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя свойства заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).

//- На место обращения будет возвращено значение свойства с таким именем.
//- Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.

/*               const book = {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["historical prose", "adventure"],
      public: true,
      rating: 8.38,
    };
    
    const bookTitle = book["title"];
    console.log(bookTitle); // "The Last Kingdom"
    
    const bookGenres = book["genres"];
    console.log(bookGenres); // ["historical prose", "adventure"]
    
    const propKey = "author";
    const bookAuthor = book[propKey];
    console.log(bookAuthor); // "Bernard Cornwell" */

    //?Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

    //| aptRating - рейтинг;
    //| aptDescr - описание;
    //| aptPrice - цена;
    //| aptTags - теги.

/*                   const apartment = {
          imgUrl: "https://via.placeholder.com/640x480",
          descr: "Spacious apartment in the city center",
          rating: 4,
          price: 2153,
          tags: ["premium", "promoted", "top"],
        };
        
        // Change code below this line
        const aptRating = apartment["rating"];
        const aptDescr = apartment["descr"];
        const aptPrice = apartment["price"];
        const aptTags = apartment["tags"];
        // Change code above this line */

            

  //* Задача 6/41
  //- После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.
  
/*                       const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        public: true,
        rating: 8.38,
      };
      
      book.rating = 9;
      book.public = false;
      book.genres.push("drama");
      
      console.log(book.rating); // 9
      console.log(book.public); // false
      console.log(book.genres); // ["historical prose", "adventure", "drama"]   */  


  //? Дополни код обновив значения свойств объекта apartment:

  //| цену в свойстве price на 5000;
  //| рейтинг квартиры в свойстве rating на 4.7;
  //| имя владельца во вложенном свойстве name на "Henry Sibola";
  //| массив тегов в свойстве tags добавив в конец строку "tr}usted".


/*   const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted"); */
                    


  //* Задача 7/41
  //- Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства. Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.
  
/*   const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    public: true,
    rating: 8.38,
  };
  
  book.pageCount = 836;
  book.originalLanguage = "en";
  book.translations = ["ua", "ru"];
  
  console.log(book.pageCount); // 836
  console.log(book.originalLanguage); // "en"
  console.log(book.translations); // ["ua", "ru"] */

  //?   Добавь объекту apartment несколько новых свойств:

  //| area - площадь в квадратных метрах, число 60;
  //| rooms - количество комнат, число 3;
  //| location - местоположение квартиры, обьект со следующими вложенными свойствами;
  //| country - страна, строка "Jamaica";
  //| city - город, строка "Kingston".

  /*   const apartment = {
      imgUrl: "https://via.placeholder.com/640x480",
      descr: "Spacious apartment in the city center",
      rating: 4.7,
      price: 5000,
      tags: ["premium", "promoted", "top", "trusted"],
      owner: {
        name: "Henry Sibola",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
      },
    };
    
    // Change code below this line
    apartment.area = 60;
    apartment.rooms = 3;
    apartment.location = {
      country: "Jamaica",
      city: "Kingston",
    }; */
  
  
          
      





//=========================================

//* Задача 25/41
//- Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.

/* const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  const {
    name,
    tag,
    stats: { followers, views: userViews, likes: userLikes = 0 },
  } = user;
  
  console.log(name); // Jacques Gluke
  console.log(tag); // jgluke
  console.log(followers); // 5603
  console.log(userViews); // 4827
  console.log(userLikes); // 1308 */

//?   Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

/* const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  const {
  today: {low:lowToday, high:highToday, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},

  tomorrow: {low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
  } = forecast 
         
  
  // const highToday = forecast.today.high;
  // const lowToday = forecast.today.low;
  // const todayIcon = forecast.today.icon;
  
  // const highTomorrow = forecast.tomorrow.high;
  // const lowTomorrow = forecast.tomorrow.low;
  // const tomorrowIcon = forecast.tomorrow.icon;
   */

//* Задача 26/41
//- Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.

/* function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook("Последнее королевство", 736, 10283, 8.38, true); */

//? Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

/* 
{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
} 
*/

//? Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Change code below this line
/* function calculateMeanTemperature(forecast) {

    const {
        today: {low:todayLow, high:todayHigh},
        tomorrow: {low:tomorrowLow, high:tomorrowHigh},
    } =forecast;

    // const todayLow = forecast.today.low;
    // const todayHigh = forecast.today.high;
    // const tomorrowLow = forecast.tomorrow.low;
    // const tomorrowHigh = forecast.tomorrow.high;
  
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  } */

//* Задача 27/41
//- Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

//- Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

//- Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

/*     const temps = [14, -4, 25, 8, 11];

    // В консоли будет массив
    console.log(temps);

    // ❌ Так не сработает, потому что передаём целый массив
    console.log(Math.max(temps)); // NaN

    // В консоли будет набор отдельных чисел
    console.log(...temps);

    // ✅ Распылим коллекцию элементов как отдельные аргументы
    console.log(Math.max(...temps)); // 25 */

//- То есть запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в     Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.

//? В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

/*     const scores = [89, 64, 42, 17, 93, 51, 26];
    // Change code below this line
    const bestScore = Math.max(...scores);
    const worstScore = Math.min(...scores);

    console.log(bestScore);
    console.log(worstScore); */

//* Задача 28/41
//- Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];

// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

//- В примере выше у нас есть ящик яблок temps и мы хотим сделать его точную копию. Берём пустой ящик и пересыпаем в него яблоки из исходного ящика temps - распыляем его в другую коллекцию. При этом ящик temps не изменится, в нём все ещё будут яблоки, а в новом ящике - их точные копии.

//- В следующем примере мы ссыпаем яблоки из двух ящиков в один новый. Оригинальные ящики (массивы) не изменятся, а в новом будут копии всех их яблок (элементов). Порядок распыления важен - он влияет на порядок элементов в новой коллекции.

/*     const lastWeekTemps = [14, 25, 11];
    const currentWeekTemps = [23, 17, 18];

    const allTemps = [...lastWeekTemps, ...currentWeekTemps];
    console.log(allTemps); // [14, 25, 11, 23, 17, 18] */

//?     В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

//? В переменной allScores хранился массив всех результатов от первой до третьей группы.
//? В переменной bestScore был самый высокий общий балл.
//? В переменной worstScore был самый низкий общий балл.

/*     const firstGroupScores = [64, 42, 93];
    const secondGroupScores = [89, 14, 51, 26];
    const thirdGroupScores = [29, 47, 18, 97, 81];
    // Change code below this line
    const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
    const bestScore = Math.max(...allScores);
    const worstScore = Math.min(...allScores);

    console.log(allScores);
    console.log(bestScore);
    console.log(worstScore); */


//* Задача 29/41   spread 

//- Операция spread позволяет распылить свойства произвольного количества объектов в один новый.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };

// console.log(third); // { propA: 5, propB: 10, propC: 15 }

//- Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

/* const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 } */

//? В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

//? Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

/* const defaultSettings = {
    theme: "light",
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  // Change code below this line
  const finalSettings = {...defaultSettings, ...overrideSettings};   */

//* Задача 30/41
//- ЗАДАЧА. КАРТОЧКИ ЗАДАЧ

//? Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.

//? Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.

//? В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

//? В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.

//? Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

/* function makeTask(data) {
    const completed = false;
    const category = 'General';
    const priority = 'Normal';

    // Change code below this line
    const output = {category, priority, ...data, completed, };
    // Change code above this line
    
    console.log(output);
    return output;
} */

// Тесты:

// makeTask({}); // возвращает { category: "General", priority: "Normal", completed: false }

// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }); // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// makeTask({ category: 'Finance', text: 'Take interest' }); // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// makeTask({ priority: 'Low', text: 'Choose shampoo' }); // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// makeTask({ text: 'Buy bread' }); // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }



// *Задача 31/41   ... (rest)

//- Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.

//- Вернёмся к аналогии с яблоками. Если на полу лежат яблоки и у нас есть пустой ящик, то операция rest позволит «собрать» яблоки в ящик. При этом оригинальные яблоки останутся на полу, а в ящике будет копия каждого яблока.

//- Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.

// Как объявить параметры функции так,
// чтобы можно было передать любое кол-во аргументов?

/* function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); */

//- Если убрать весь «синтаксический шум» и посмотреть на аргументы и параметры функции, то аргументы находятся в правой части операции присваивания, а параметры в левой, потому что значения аргументов присваиваются объявленным параметрам. Значит можно «собрать» все аргументы функции в один параметр используя операцию rest.

/* function multiply(...args) {
  console.log(args); // массив всех аргументов
  console.log(args.length);
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); */

//- Имя параметра может быть произвольным. Чаще всего его называют args, restArgs или otherArgs, сокращённое от arguments.

//? Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// Change code below this line

/* function add(...args) {
    let summ = 0;   

      for (const arg of args)  {
      summ += arg;
      }

console.log(summ);
return summ;     
          
    // Change code above this line
 }

add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4); */




//* Задача 32/41

//- Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».

/* function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); */

//- Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

//? Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// Change code below this line
/* function addOverNum(firstNumber, ...args) {
    let total = 0;
  
    for (const arg of args) {
      if (firstNumber < arg ){
      total += arg;
      }
    }
   
    console.log(total);
    return total;
    // Change code above this line
}


// Тести
addOverNum(50, 15, 27) //возвращает 0
addOverNum(10, 12, 4, 11, 48, 10, 8) //возвращает 71
addOverNum(15, 32, 6, 13, 19, 8) //возвращает 51
addOverNum(20, 74, 11, 62, 46, 12, 36) //возвращает 218 */




//* Задача 33/41
//* ЗАДАЧА. МАССИВ СОВПАДЕНИЙ     findMatches()

//- Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

//? Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

//? Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Change code below this line
/* function findMatches(firstNumber, ...args) {
    const matches = []; // Don't change this line

    for (const arg of args) {
        if (firstNumber.includes(arg)){
            matches.push(arg)
        }
    }
 
  
    // Change code above this line
    console.log(matches);
    return matches;
}

// Тести
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) //возвращает [1, 2]
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) //возвращает [17, 89, 2]
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) //возвращает [24, 9, 41]
findMatches([63, 11, 8, 29], 4, 7, 16) //возвращает [] */
 



//* Задача 34/41
//- До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.

//- Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.

// ✅ Логиески и синтаксически сгруппированные сущности

/* const bookShelf = {
  books: ["Последнее королевство", "Страж снов"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks(); */


//? Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

//? Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

//? Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

/* const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
       console.log(`Updating book ${oldName} to ${newName}`);
        
       return `Updating book ${oldName} to ${newName}`;
    },  
    // Change code above this line
  };

// Tests

bookShelf.getBooks() //возвращает строку "Returning all books"

// ЗначеbookShelf.addBook это метод объекта

bookShelf.addBook("Haze") //возвращает строку "Adding book Haze"

// ЗначеbookShelf.removeBook это метод объекта

bookShelf.removeBook("Red sunset") //возвращает строку "Deleting book Red sunset"

// Значение свойства bookShelf.updateBook это метод объекта

bookShelf.updateBook("Sands of dune", "Dune") //возвращает строку "Updating book Sands of dune to Dune" */




//* Задача 35/41
//- Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this - контекст. Значением this будет объект перед «точкой», то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.

/*         const bookShelf = {
        books: ["Последнее королевство"],
        getBooks() {
            console.log(this);
        },
        };

        // Перед точкой стоит объект bookShelf,
        // поэтому при вызове метода, this будет хранить ссылку на него.

        bookShelf.getBooks(); // {books: ["Последнее королевство"], getBooks: f} */

//- Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

/*         const bookShelf = {
        books: ["Последнее королевство"],
        getBooks() {
            return this.books;
        },
        addBook(bookName) {
            this.books.push(bookName);
        },
        removeBook(bookName) {
            const bookIndex = this.books.indexOf(bookName);
            this.books.splice(bookIndex, 1);
        },
        };

        console.log(bookShelf.getBooks()); // ["Последнее королевство"]
        bookShelf.addBook("Мгла");
        bookShelf.addBook("Страж снов");
        console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
        bookShelf.removeBook("Мгла");
        console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"] */

//- Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта, ведь мы явно не собираемся его менять. Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени. Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.

//? Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

/* const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      // Change code below this line
    
      const bookIndex = this.books.indexOf(oldName);
      console.log(bookIndex);
      this.books.splice(bookIndex, 1, newName);
      console.log(this.books);
      
  
//* splice(position, num, new_element_1, new_element_2, ...)  ЗАМЕНА
//- position - вказує на позицію (індекс) першого елемента для видалення
//- num - визначає кількість елементів, що видаляються
//- Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
  
      // Change code above this line
    },
  }; */

// Tests

// Значение переменной bookShelf это объект

// Значение свойства bookShelf.updateBook это метод объекта

/* bookShelf.updateBook("Haze", "Dungeon chronicles") // массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

bookShelf.updateBook("The last kingdom", "Dune") // массив ["Dune", "Haze", "The guardian of dreams"] */




//* Задача 36/41
//* ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»

//? К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

/* const atTheOldToad = {
  // Change code below this line
  potions: [],


  // Change code above this line
}; */

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив []



//* Задача 37/41
//* ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ

//? Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions(){
    console.log(this.potions);
    return this.potions;
  }
  // Change code above this line
}; */

// Tests
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.getPotions это метод объекта
//atTheOldToad.getPotions() // возвращает ["Speed potion", "Dragon breath", "Stone skin"]




//* Задача 38/41
//* ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ

//? Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],

  addPotion(potionName) {
    // Change code below this line

  this.potions.push(potionName);

    // Change code above this line
  },
}; */

//Tests:
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.addPotion это метод объекта
// После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]



//* Задача 39/41
//* ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ

//? Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
  const indexPotion = this.potions.indexOf(potionName);
  this.potions.splice(indexPotion, 1); 

    // Change code above this line
  },
}; */

// Tests:
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.removePotion это метод объекта
// После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
// После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]



//* Задача 40/41
//* ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ

//? Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line

    const indexPotion = this.potions.indexOf(oldName);
    this.potions.splice(indexPotion, 1, newName); 

    // Change code above this line
  },
}; */

//Tests:
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]



//* Задача 41/41
//* ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ

//? Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

/* 
{
  name: "Dragon breath",
  price: 700
}
*/

//? Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

  //|  getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
  //| addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
  //| removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
  //| updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

/*   const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },

    ],

    // Change code below this line
    getPotions() {
      console.log(this.potions);
      return this.potions;
    },
// ========================= addPotion ===================================
    addPotion(newPotion) {  

    const potionNames = [];

    for (const potion of this.potions) {
    potionNames.push(potion.name);
    }

    if (potionNames.includes(newPotion.name)) {
    return `Error! Potion ${newPotion.name} is already in your inventory!`;
    } this.potions.push(newPotion);

    // ====================== removePotion ================================
    },

    removePotion(potionName) {
      const potionNames = [];

      for (const potion of this.potions) {
      potionNames.push(potion.name);
      }
            
      const potionIndex = potionNames.indexOf(potionName);
  
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
      
      // ================== updatePotionName ========================
    },
    updatePotionName(oldName, newName) {

      const potionNames = [];

      for (const potion of this.potions) {
      potionNames.push(potion.name);
      }

      const potionIndex = potionNames.indexOf(oldName);

      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }

      this.potions[potionIndex].name = newName;
      
    },

  }; */
  


//Tests:
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта

//atTheOldToad.getPotions() // возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

//- Значение свойства atTheOldToad.addPotion это метод объекта.

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }) //, в массиве potions последним элементом будет этот объект
// atTheOldToad.addPotion({ name: "Speed potion", price: 460 }) //, в массиве potions последним элементом будет этот объект

// atTheOldToad.addPotion({ name: "Power potion", price: 270 }) //, в массиве potions последним элементом будет этот объект

// Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода

// Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект

//atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }) //, массив potions не изменяется
// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку "Error! Potion Stone skin is already in your inventory!"

//- Значение свойства atTheOldToad.removePotion это метод объекта
// atTheOldToad.removePotion("Dragon breath") //, в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

//- Значение свойства atTheOldToad.updatePotionName это метод объекта
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth") //, в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion") //, в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]


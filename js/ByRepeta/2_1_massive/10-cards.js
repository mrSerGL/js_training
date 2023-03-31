/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);
  
  /*
   * Удаление (по индексу), метод indexOf()
   */
  
  // const cardToRemove = 'Карточка-3';          // карта к удалению
  // const index = cards.indexOf(cardToRemove);  // получаем индекс карты к удалению
  // console.log(index);
  
  // cards.splice(index, 1);   // удаляем карту начиная с индекс = index, к-во = 1
  // console.table(cards);
  
  /*
   * Добавление (по индексу)
   */
  // const cardToInsert = 'Карточка-6';  // карта к добавлению Карточка-6'
  // const index = 3;                    // добавить на место с index = 3
  
  // cards.splice(index, 0, cardToInsert);  // вставояем на позицию, ничего не удаляем, добавляемая карта
  // console.table(cards);
  
  /*
   * Обновление (по индексу) Замена
   */
  const cardToUpdate = 'Карточка-4';           // заменяемая карта
  const index = cards.indexOf(cardToUpdate);   // индекс заменяемой карты
  
  console.log(index);
  
  cards.splice(index, 1, 'Обновленная карточка-4');  
  // индекс заменяемой карты , количество удаляемых элементов, заменяемая карта
  console.table(cards);
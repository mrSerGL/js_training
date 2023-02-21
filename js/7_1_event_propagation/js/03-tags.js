/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

/* const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);
} */

//!  http://127.0.0.1:5500/js/7_1_event_propagation/03-tags.html

//*  ===== функция вибора одной кнопки, возвращает ее значение =====

/* const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click', OnTagsContainerClick);

function OnTagsContainerClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.tags__btn--active');

  // if (currentActiveBtn) {
  //   currentActiveBtn.classList.remove('tags__btn--active');
  // }

  currentActiveBtn?.classList.remove('tags__btn--active'); //!!!   заменяет If при доступе к свойству

  const nextActiveButton = event.target;
  nextActiveButton.classList.add('tags__btn--active');

  selectedTag = nextActiveButton.dataset.value;

  console.log(selectedTag);
} */

//* ===== функция вибора нескольких кнопок =====

const tagsContainer = document.querySelector('.js-tags');

// const selectedTags = [];       //! недостаток метод добавляет в массив при снятии метки ==> используем new Set() (набор уникальных элементов)

const selectedTags = new Set();

tagsContainer.addEventListener('click', OnTagsContainerClick);

function OnTagsContainerClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  // удаляем из результ. сета при снятии вібора
  const btn = event.target;
  const isActive = btn.classList.contains('tags__btn--active');
  const delTag = btn.dataset.value;

  if (isActive) {
    selectedTags.delete(delTag);
  } else {
    selectedTags.add(delTag);
  }

  event.target.classList.toggle('tags__btn--active');

  // selectedTags.push(event.target.dataset.value)

  console.log(selectedTags);
}

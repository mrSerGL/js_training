const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

/* const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
  console.log('INPUT');
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
 */

// const inputFilterRef = document.querySelector('#filter');
// const listTechRef = document.querySelector(".js-list");

const ref = {
  inputFilterRef: document.querySelector('#filter'),
  listTechRef: document.querySelector('.js-list'),
};

function createListMarkup(data) {
  return data.map(item => `<li>${item.label}</li>`).join('');
}

const listMarkup = createListMarkup(tech);

ref.listTechRef.innerHTML = listMarkup;

// ref.inputFilterRef.addEventListener('input', onChangeFilter);
ref.inputFilterRef.addEventListener('input', _.debounce(onChangeFilter, 1000));

function onChangeFilter(event) {
  const filterValue = event.target.value.toLowerCase();
  const filteredItems = [...tech].filter(item =>
    item.label.toLowerCase().includes(filterValue),
  );
  const filteredItemsListMarkup = createListMarkup(filteredItems);

  ref.listTechRef.innerHTML = filteredItemsListMarkup;
}

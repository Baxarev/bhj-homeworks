const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');
const responseCache = JSON.parse(localStorage.getItem('data'));

function addLoaderInfo(obj) {
  loader.classList.remove('loader_active')
  for (valute in obj) {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = obj[valute].CharCode;
    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = obj[valute].Value;
    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.'
    items.append(item);
    item.append(itemCode, itemValue, itemCurrency);
    localStorage.setItem('data', JSON.stringify(obj));
}}

window.addEventListener('load', () => {
  if (!responseCache) return
  else addLoaderInfo(responseCache);
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  items.innerHTML = '';
  addLoaderInfo(xhr.response.response.Valute)
});
xhr.send();
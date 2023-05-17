const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const linkArr = document.querySelectorAll('.dropdown__link');

function openCloseMenu() {
  dropdownList.classList.toggle('dropdown__list_active')
}

dropdownValue.addEventListener('click', () => {
  openCloseMenu();
})

dropdownList.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownValue.textContent = e.target.textContent.trim();
  openCloseMenu();
})
const tabNavigation = document.querySelector('.tab__navigation');
const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');

tab.forEach((item) => {
  item.addEventListener('click', (e) => {
    let index = null;
    tab.forEach((i) => i.classList.remove('tab_active'));
    e.target.classList.add('tab_active')
    index = tab.indexOf(e.target);
    tabContent.forEach(i => i.classList.remove('tab__content_active'));
    tabContent[index].classList.add('tab__content_active');
  })
})

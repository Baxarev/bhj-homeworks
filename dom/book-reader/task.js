const bookControls = Array.from(document.querySelectorAll('.book__control'));
const bookContent = document.querySelector('.book__content');
const textElements = document.querySelectorAll('.font-size');
const colorElements = document.querySelectorAll('.book__control_color .color');
const bgColorElements = document.querySelectorAll('.book__control_background .color');

function clickColor(elements) {
  const dateList = {};
  if (elements === textElements) {
    dateList.classActive = 'font-size_active';
    dateList.attribute = 'data-size';
    dateList.style = ['font-size_small', 'font-size_big']
  }
  if (elements === colorElements) {
    dateList.classActive = 'color_active';
    dateList.attribute = 'data-text-color';
    dateList.style = ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'];
  }
  if (elements === bgColorElements) {
    dateList.classActive = 'color_active';
    dateList.attribute = 'data-bg-color';
    dateList.style = ['bg_color_black', 'bg_color_gray', 'bg_color_white'];
  }
  const wrapper = function(e) {
    e.preventDefault();
    elements.forEach(i => i.classList.remove(dateList.classActive));
    this.classList.add(dateList.classActive);

    let attributeValue = dateList.style.filter(i => i.includes(this.getAttribute(dateList.attribute)))[0];

    bookContent.classList.remove(...dateList.style.filter(i => i !== attributeValue));
    bookContent.classList.add(attributeValue);
  }
  return wrapper
}

textElements.forEach(item => item.addEventListener('click', clickColor(textElements)));
colorElements.forEach(item => item.addEventListener('click', clickColor(colorElements)));
bgColorElements.forEach(item => item.addEventListener('click', clickColor(bgColorElements)));












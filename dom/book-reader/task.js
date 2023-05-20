const bookControls = Array.from(document.querySelectorAll('.book__control'));
const bookContent = document.querySelector('.book__content');
const textElements = document.querySelectorAll('.font-size');
const colorElements = document.querySelectorAll('.book__control_color .color');
const bgColorElements = document.querySelectorAll('.book__control_background .color');

function clickColor(elements) {
  const dataList = {};
  if (elements === textElements) {
    dataList.classActive = 'font-size_active';
    dataList.attribute = 'data-size';
    dataList.style = ['font-size_small', 'font-size_big']
  }
  if (elements === colorElements) {
    dataList.classActive = 'color_active';
    dataList.attribute = 'data-text-color';
    dataList.style = ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'];
  }
  if (elements === bgColorElements) {
    dataList.classActive = 'color_active';
    dataList.attribute = 'data-bg-color';
    dataList.style = ['bg_color_black', 'bg_color_gray', 'bg_color_white'];
  }
  const wrapper = function(e) {
    e.preventDefault();
    elements.forEach(i => i.classList.remove(dataList.classActive));
    this.classList.add(dataList.classActive);

    let attributeValue = dataList.style.filter(i => i.includes(this.getAttribute(dataList.attribute)))[0];

    bookContent.classList.remove(...dataList.style.filter(i => i !== attributeValue));
    bookContent.classList.add(attributeValue);
  }
  return wrapper
}

textElements.forEach(item => item.addEventListener('click', clickColor(textElements)));
colorElements.forEach(item => item.addEventListener('click', clickColor(colorElements)));
bgColorElements.forEach(item => item.addEventListener('click', clickColor(bgColorElements)));








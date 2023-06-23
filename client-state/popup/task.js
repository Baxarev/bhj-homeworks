const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
}

if (getCookie('checkVisit') !== 'true') modal.classList.add('modal_active');

modalClose.addEventListener('click', () => {
  setCookie('checkVisit', 'true');
  modal.classList.remove('modal_active');
})



const reveals = document.querySelectorAll('.reveal');

function getRevalsActive() {
  reveals.forEach((item, index) => {
    if (item.getBoundingClientRect().top < window.innerHeight && item.getBoundingClientRect().bottom > 0) {
      reveals[index].classList.add('reveal_active')
    } else {
      reveals[index].classList.remove('reveal_active')
    }
  })
}

window.addEventListener('scroll', getRevalsActive)
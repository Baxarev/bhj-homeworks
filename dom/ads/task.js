const rotators = document.querySelectorAll('.rotator__case');
let count = 0;

function clearClass() {
  rotators.forEach(item => item.classList.remove('rotator__case_active'))
}

function addClass(index) {
  rotators[index].classList.add('rotator__case_active')
}

function start() {
  if (count > rotators.length-1) count = 0;
  let time = +rotators[count].getAttribute('data-speed');
  clearClass();
  rotators[count].style.color = rotators[count].getAttribute('data-color');
  addClass(count++);
  setTimeout(start, time);
}

start();




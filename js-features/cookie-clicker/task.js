const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed')

let a = 0;
let b = 0;

function resizeCookie () {
  if (cookie.width === 200) {
    cookie.width = 250
  } else {
    cookie.width = 200
  }

  clickerCounter.textContent++;

  if (clickerCounter.textContent % 2 === 0) {
    a = Date.now();
    clickerSpeed.textContent = (1 / ((a - b)/1000)).toFixed(2);
  } 
  if (clickerCounter.textContent % 2 !== 0)
  {
    b = Date.now();
    clickerSpeed.textContent = (1 / ((b - a)/1000)).toFixed(2);
  }
}

cookie.onclick = resizeCookie;
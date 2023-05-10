const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed')

let timer = [];

function resizeCookie () {
  if (cookie.width === 200) {
    cookie.width = 250
  } else {
    cookie.width = 200
  }
  
  timer.push(Date.now());

  let formula = (clickerCounter.textContent / (timer.at(-1) - timer[0]) * 1000).toFixed(2);

  clickerSpeed.textContent = isFinite(formula) ? formula : '0.00';

  clickerCounter.textContent++;
}

cookie.onclick = resizeCookie;
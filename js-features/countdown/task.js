const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function decrementTimer(time) {
    time.textContent--;
    if (time.textContent < 10) {
      time.textContent = "0" + time.textContent;
    }
}

function start() {
  decrementTimer(sec);

  if (sec.textContent === "00" && min.textContent === "00" && hour.textContent > 0) {
    min.textContent = '59';
    sec.textContent = "59";
    decrementTimer(hour);
    decrementTimer(min);
  }

  if (sec.textContent === "00" && min.textContent > 0) {
    sec.textContent = "59";
    decrementTimer(min);
  }
}

const timer = setInterval(() => {
  if (sec.textContent === "00" && min.textContent === "00") {
    clearInterval(timer)
    alert('Вы победили в конкурсе!');
    window.location.assign('https://download.mozilla.org/?product=firefox-stub&os=win&lang=ru&attribution_code=c291cmNlPXd3dy5nb29nbGUuY29tJm1lZGl1bT1yZWZlcnJhbCZjYW1wYWlnbj0obm90IHNldCkmY29udGVudD0obm90IHNldCkmZXhwZXJpbWVudD0obm90IHNldCkmdmFyaWF0aW9uPShub3Qgc2V0KSZ1YT1jaHJvbWUmY2xpZW50X2lkPTU0MDM3OTg4Ny4xNjU3NTA3NTQ1JnNlc3Npb25faWQ9MzgyNDE1MzA0OCZkbHNvdXJjZT1tb3pvcmc.&attribution_sig=f9a31675663a9bb49a0095293b98592991038eed3d11d235e848a1d86933b898&_gl=1*1d0ikzb*_ga*NTQwMzc5ODg3LjE2NTc1MDc1NDU.*_ga_MQ7767QQQW*MTY4MzYxMjA4Ny4zLjEuMTY4MzYxMjEzNC4wLjAuMA..')
    return;
  }
  start();
}, 1000)